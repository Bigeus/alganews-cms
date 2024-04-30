import Logo from '../../../Components/Logo';
import NavBar from '../../../Components/NavBar';
import SessionController from '../../../Components/SessionController/SessionController';
import * as DL from './Default.layout.styles';
//@ts-ignore
import confirm from '../../../Core/Utils/confirm';
import info from '../../../Core/Utils/info';

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
                {props.children}
            </DL.FeaturedContent>
            <DL.Aside>
                <SessionController
                    name='Vinícius Simões'
                    description='programador júnior'
                    onLogout={() => {
                        confirm({
                            title: 'Você tem certeza que quer deslogar?',
                            onConfirm: () => info({
                                title: 'Você foi deslogado',
                                description: 'Você será redirecionado para a página de login'
                            }),
                            onCancel: () => window.alert('cancelou')
                        })
                    }}
                />
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}