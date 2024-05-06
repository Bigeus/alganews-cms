import * as P from './Profile.styles';

export interface ProfileProps {
    name: string
    description: string
    editorId: number
}

export default function Profile(props: ProfileProps) {
    return <P.Wrapper className='wrapper' to={`/editores/${props.editorId}`}>
        <P.imgContainer
            src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}>
        </P.imgContainer>
        <P.textContainer>
            <span className='name'>{props.name}</span>
            <span className='description'>{props.description}</span>
        </P.textContainer>
    </P.Wrapper>
}