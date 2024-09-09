import styled from "styled-components"
import Input from "../../Components/Input/Input"
import ImageUploader from "../../Components/ImageUploader"
import MarkdownEditor from "../../Components/MarkdownEditor/MarkdownEditor"
import TagInput from "../../Components/TagInput"
import { useEffect, useState } from "react"
import { Tag } from "react-tag-input"
import WordPriceCounter from "../../Components/WordPriceCounter/WordPriceCounter"
import Button from "../../Components/Button/Button"
import countWordsInMarkdown from "../../Core/Utils/CountWordsInMarkDown"
import info from "../../Core/Utils/info"
import Loading from "../../Components/Loading"
import { useNavigate } from "react-router-dom"
import { PostService } from "danielbonifacio-sdk"

interface PostFormProps {
    postId?: number
}

export default function PostForm(props: PostFormProps) {

    const navigate = useNavigate();

    const [tags, setTags] = useState<Tag[]>([])

    const [body, setBody] = useState('')

    const [title, setTitle] = useState('')

    const [imageUrl, setImageUrl] = useState('')


    const [publishing, setPublishing] = useState(false)

    async function insertNewPost() {
        const newPost = {
            body, title, tags: tags.map(tag => tag.text), imageUrl,
        }

        const insertedPost = await PostService.insertNewPost(newPost)

        info({
            title: 'Post salvo com sucesso',
            description: 'Você  acabou de criar o post com o id ' + insertedPost.id
        })
    }

    async function updateExistingPost(postId: number) {
        const newPost = {
            body, title, tags: tags.map(tag => tag.text), imageUrl,
        }

        await PostService.updateExistingPost(postId, newPost);

        info({
            title: 'Post atualizado',
            description: 'Você atualizou o post com sucesso.'
        })
    }

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        try {

            e.preventDefault()
            setPublishing(true)

            props.postId ? await updateExistingPost(props.postId) : await insertNewPost();
            navigate('/');

        } catch {
            info({
                title: 'Erro',
                description: 'Deu erro'
            })
        }
        finally {
            setPublishing(false)
        }


    }

    function fetchPost(postId: number){
        PostService.getExistingPost(postId)
        .then(post => {
            setTitle(post.title)
            setImageUrl(post.imageUrls.default)
            setBody(post.body)
            setTags(post.tags.map(tag => ({id: tag, text: tag})))
        })
    }

    useEffect(() => {
        if(props.postId){
            fetchPost(props.postId)
        }
    }, [props.postId])

    return <PostFormWrapper onSubmit={handleFormSubmit}>
        <Loading show={publishing} />
        <Input
            label="título"
            placeholder="e.g: como fiquei rico aprendendo react"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
        />
        <ImageUploader 
        onImageUpload={setImageUrl} 
        label="Thumbnail do post"
        preview={imageUrl}
        />
        <MarkdownEditor 
        onChange={setBody} 
        value={body}
        />
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
            <Button
                label='Salvar post'
                variant="primary"
                type="submit"
                disabled={!title || !imageUrl || !body}
            />
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