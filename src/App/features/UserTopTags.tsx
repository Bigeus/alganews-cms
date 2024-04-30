import styled from "styled-components";
import CircleChart from "../../Components/CircleChart/CircleChart";

export default function UserTopTags() {
    return <UserTopTagsWrapper>
        <CircleChart progress={80} size={88} caption="javascript" theme="primary"/>
        <CircleChart progress={30} size={88} caption="Java" />
        <CircleChart progress={24} size={88} caption="scrum" />
    </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`