import styled from "styled-components";
import Profile from "../../Components/Profile/Profile";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getEditorDescription, } from "danielbonifacio-sdk";
import useEditors from "../../Core/Hooks/useEditors";


export default function EditorsList() {
    const { editorsList, loading, fetchAllEditors } = useEditors();


    useEffect(() => {
        fetchAllEditors()
    }, [fetchAllEditors])

    if (!editorsList.length) {
        return <EditorsListWrapper>
            <Skeleton height={81} />
            <Skeleton height={81} />
            <Skeleton height={81} />
            <Skeleton height={81} />
            <Skeleton height={81} />
            <Skeleton height={81} />
        </EditorsListWrapper>
    }

    return <EditorsListWrapper>
        {
            editorsList.map(editor => {
                return <Profile
                    editorId={editor.id}
                    name={editor.name}
                    description={getEditorDescription(new Date(editor.createdAt))}
                    avatarUrl={editor.avatarUrls.small}
                    key={editor.id}
                />
            })
        }
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`