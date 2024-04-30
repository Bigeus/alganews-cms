import { useNavigate, useRouteError } from "react-router-dom";
import UsePageTitle from "../../Core/Hooks/UsePageTitle";
import notFound from '../../Assets/not_found.svg'
import Button from "../../Components/Button/Button";
import styled from "styled-components";

export default function NotFound404View() {

    const navigate = useNavigate()

    UsePageTitle('Error')

    const error = useRouteError();
    console.error(error);

    return (
        <NotFound404Wrapper>
            <span>Oops!</span>
            <h1>Não encontramos esta página</h1>
            <img src={notFound} alt="não encontrado" />
            <Button label='Ir para a home' variant="primary" onClick={() => navigate('/', {replace: true})}/>
        </NotFound404Wrapper>
    );
}

const NotFound404Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    span{
        font-size: 72px;
    }

    h1{
        font-size: 18px;
        font-weight: 400;
    }
`