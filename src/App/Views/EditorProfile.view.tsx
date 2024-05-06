import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import DefaultLayout from "../Layouts/Default/Default.layout";
import EditorProfileGrid from "../features/EditorProfileGrid";



export default function EditorProfileView() {
    return <DefaultLayout>
        <ErrorBoundary>
            <EditorProfileGrid hidePersonalData={true} />
        </ErrorBoundary>
    </DefaultLayout>
}