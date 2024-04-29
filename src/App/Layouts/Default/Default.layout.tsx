import Logo from '../../../Components/Logo';
import NavBar from '../../../Components/NavBar';
import SessionController from '../../../Components/SessionController/SessionController';
import * as DL from './Default.layout.styles';

export interface DefaultLayoutProps {
    children: React.ReactNode

}

export default function DefaultLayout(props: DefaultLayoutProps) {
    return <DL.Wrapper>
        <DL.Header>
            <Logo />
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
            <NavBar />
            </DL.Navigation>
            <DL.FeaturedContent>    
                { props.children }
            </DL.FeaturedContent>
            <DL.Aside>
            <SessionController name='Vinícius Simões' description='programador júnior'/>
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}