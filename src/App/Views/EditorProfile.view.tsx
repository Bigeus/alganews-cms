import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import EditorProfile from "../features/EditorProfileGrid";
import DefaultLayout from "../Layouts/Default/Default.layout";

function EditorProfileView() {
  return (
    <DefaultLayout>
      <ErrorBoundary>
        <EditorProfile />
      </ErrorBoundary>
    </DefaultLayout>
  );
}

export default EditorProfileView;