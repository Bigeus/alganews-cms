import usePageTitle from "../../Core/Hooks/UsePageTitle";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import PostList from "../../App/features/PostsList.features";
import UserEarnings from "../features/UserEarnings";
import UserPerformance from "../features/UserPerformance";
import DefaultLayout from "../Layouts/Default/Default.layout";
import UserTopTags from "../features/UserTopTags";

export default function Home() {
  usePageTitle('Home');

  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <ErrorBoundary component={'performance'}>
      <UserPerformance />
    </ErrorBoundary>
    <ErrorBoundary component={'lista de posts'}>
      <PostList />
    </ErrorBoundary>
  </DefaultLayout>
}