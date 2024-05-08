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

export default function PostForm() {

    const [tags, setTags] = useState<Tag[]>([])

    const [body, setBody] = useState('')

    const [title, setTitle] = useState('')

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newPost = {
            body,
            title,
            tags: tags.map(tag => tag.text),
            imageUrl: ''
        }

      const insertedPost = await PostService.insertNewPost(newPost)

        info({
            title: 'Post salvo com sucesso',
            description: 'Você  acabou de criar o post com o id ' + insertedPost.id
        })
    }

    return <PostFormWrapper onSubmit={handleFormSubmit}>
        <Input
            label="título"
            placeholder="e.g: como fiquei rico aprendendo react"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
        />
        <ImageUploader label="Thumbnail do post" />
        <MarkdownEditor onChange={setBody} />
        {/* todo: tagInput */}
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