import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import DefaultLayout from "../Layouts/Default/Default.layout";
import EditorProfileGrid from "../features/EditorProfileGrid";
interface EditorProfileProps {
    hidePersonalData?: boolean
}

export default function EditorProfileView(props: EditorProfileProps) {
   
    return <DefaultLayout>
        <ErrorBoundary>
            <EditorProfileGrid hidePersonalData={true} />
        </ErrorBoundary>
    </DefaultLayout>
}