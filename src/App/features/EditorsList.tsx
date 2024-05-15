import styled from "styled-components";
import Profile from "../../Components/Profile/Profile";
import { User } from "../../sdk/@types/User";
import { useEffect, useState } from "react";
import UserService from "../../sdk/Services/User.service";
import getEditorDescription from "../../sdk/Utils/getEditorDescription";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export default function EditorsList() {

    const [editors, setEditors] = useState<User.EditorSummary[]>([])

    useEffect(() => {
        UserService
            .getAllEditors()
            .then(setEditors)
    }, [])

    if (!editors.length) {
        return <EditorsListWrapper>
            <Skeleton height={81}/>
            <Skeleton height={81}/>
            <Skeleton height={81}/>
            <Skeleton height={81}/>
            <Skeleton height={81}/>
            <Skeleton height={81}/>
        </EditorsListWrapper>
    }

    return <EditorsListWrapper>
        {
            editors.map(editor => {
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