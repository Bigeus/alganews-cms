import { useRouteError } from "react-router-dom";
import UsePageTitle from "../../Core/Hooks/UsePageTitle";


export default function ErrorPage() {
    
    UsePageTitle('Error')

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Não foi posssível recarregar a página.</p>
        </div>
    );
}
