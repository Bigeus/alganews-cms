import styled from "styled-components"
import Input from "../../Components/Input/Input"
import ImageUploader from "../../Components/ImageUploader"
import MarkdownEditor from "../../Components/MarkdownEditor/MarkdownEditor"
import TagInput from "../../Components/TagInput"
import { useState } from "react"
import { Tag } from "react-tag-input"
import WordPriceCounter from "../../Components/WordPriceCounter/WordPriceCounter"
import Button from "../../Components/Button/Button"
import countWordsInMarkdown from "../../Core/Utils/CountWordsInMarkDown"
import info from "../../Core/Utils/info"
import PostService from "../../sdk/Services/Post.service"
import Loading from "../../Components/Loading"

export default function PostForm() {

    const [tags, setTags] = useState<Tag[]>([])

    const [body, setBody] = useState('')

    const [title, setTitle] = useState('')

    const [imageUrl, setImageUrl] = useState('')


    const [publishing, setPublishing] = useState(false)

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            setPublishing(true)

            const newPost = {
                body,
                title,
                tags: tags.map(tag => tag.text),
                imageUrl,
            }

            const insertedPost = await PostService.insertNewPost(newPost)

            info({
                title: 'Post salvo com sucesso',
                description: 'Você  acabou de criar o post com o id ' + insertedPost.id
            })
        }catch{
            info({
                title: 'Erro',
                description: 'Deu erro'
            })
        } 
        finally {
            setPublishing(false)
        }


    }

    return <PostFormWrapper onSubmit={handleFormSubmit}>
        <Loading show={publishing} />
        <Input
            label="título"
            placeholder="e.g: como fiquei rico aprendendo react"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
        />
        <ImageUploader onImageUpload={setImageUrl} label="Thumbnail do post" />
        <MarkdownEditor onChange={setBody} />
        <TagInput
            tags={tags}
            onAdd={tag => setTags([...tags, tag])}
            onDelete={index => setTags(tags.filter((_, i) => i !== index))}
            placeholder="Insira as tags deste post"
        />
        <PostFormSubmitWrapper >
            <WordPriceCounter
                pricePerWord={0.25}
                wordCount={countWordsInMarkdown(body)}
            />
            <Button label='Salvar post' variant="primary" type="submit" />
        </PostFormSubmitWrapper>
    </PostFormWrapper>
}

const PostFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const PostFormSubmitWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`