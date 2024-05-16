import styled from "styled-components"
import MarkdownEditor from "../../Components/MarkdownEditor/MarkdownEditor"
import Button from "../../Components/Button/Button"
import { useEffect, useState } from "react";
import { Post } from "../../sdk/@types";
import PostService from "../../sdk/Services/Post.service";
import Loading from "../../Components/Loading";

export interface PostPreviewProps {
    postId: number;
    postTitle: string;
    postImageSrc: string;
}

export default function PostPreview(props: PostPreviewProps) {
    const [post, setPost] = useState<Post.Detailed>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        PostService.getExistingPost(props.postId)
            .then(setPost)
            .finally(() => setLoading(false))
    }, [props.postId])

    if (loading) {
        return <Loading show={true} />
    }

    if (!post) {
        return null
    }

    return <PostPreviewWrapper>
        <div className="topElements">
            <TitleContainer >
                {props.postTitle}
            </TitleContainer>
            <div style={{ display: 'flex', flexDirection: "row", gap: '8px' }}>
                <Button
                    label={'Publicar'}
                    variant={'danger'}
                    disabled={post.published}
                    />
                <Button
                    label={'Editar'}
                    variant={'primary'}
                    disabled={post.published}
                />
            </div>
        </div>
        <ImageWrapper src={props.postImageSrc} />
        <MarkdownEditor
            readOnly={true}
            value={post.body}
        />
    </PostPreviewWrapper>
}

const TitleContainer = styled.h2`
    font-size: 18px;
    color: #274060;
    font-weight: bold;
`

const PostPreviewWrapper = styled.div`
    display: flex;
    width: 655px;
    background-color: #f3f8fa;
    border: 1px solid #ccc;
    padding: 24px;
    flex-direction: column;
    gap: 24px;
    overflow-y: scroll;
    height: 70vh;

    .topElements {
        display: flex;
        justify-content: space-between;
    }
`

const ImageWrapper = styled.img`
    transform: translateY(-1);
    height: 240px;
    object-fit: cover;
`