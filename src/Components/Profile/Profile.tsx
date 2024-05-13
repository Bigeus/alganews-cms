import * as P from './Profile.styles';

export interface ProfileProps {
    name: string;
    description: string;
    editorId: number;
    avatarUrl?: string; 
}

export default function Profile(props: ProfileProps) {
    return <P.Wrapper className='wrapper' to={`/editores/${props.editorId}`}>
        <P.imgContainer
            src={props.avatarUrl}>
        </P.imgContainer>
        <P.textContainer>
            <span className='name'>{props.name}</span>
            <span className='description'>{props.description}</span>
        </P.textContainer>
    </P.Wrapper>
}