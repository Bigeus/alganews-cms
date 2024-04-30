import styled from "styled-components";
import Profile from "../../Components/Profile/Profile";

export default function EditorsList() {
    return <EditorsListWrapper>
        <Profile description="Editor há 10 anos" name="Vinícius Simões"/>
        <Profile description="Editor há 8 anos" name="Bigeus"/>
        <Profile description="Editor há 4 anos" name="João Frango"/>
        <Profile description="Editor há 7 meses" name="Kadu Maverick"/>
        <Profile description="Editor há 15 anos" name="John Smith"/>
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`