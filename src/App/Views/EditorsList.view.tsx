import DefaultLayout from "../Layouts/Default/Default.layout";
import UsePageTitle from "../../Core/Hooks/UsePageTitle";
import EditorsList from "../features/EditorsList";

export default function EditorsListView() {
    UsePageTitle('Lista de Editores')

    return <DefaultLayout>
        <EditorsList />
    </DefaultLayout>
}

