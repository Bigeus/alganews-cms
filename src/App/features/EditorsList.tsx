import styled from "styled-components";
import Profile from "../../Components/Profile/Profile";
import { User } from "../../sdk/@types/User";
import { Alganews } from "../../sdk/@types/Alganews";
import { useEffect } from "react";
import PostService from "../../sdk/Services/Post.service";

export default function EditorsList() {

    useEffect(()=> {
        const posts = PostService.getAllPosts() 
        console.log(posts)
    },[]);

  return <EditorsListWrapper>
        <Profile editorId={1} description="Editor há 10 anos" name="Vinícius Simões"/>
        <Profile editorId={2} description="Editor há 8 anos" name="Bigeus"/>
        <Profile editorId={3} description="Editor há 4 anos" name="João Frango"/>
        <Profile editorId={4} description="Editor há 7 meses" name="Kadu Maverick"/>
        <Profile editorId={5} description="Editor há 15 anos" name="John Smith"/>
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`