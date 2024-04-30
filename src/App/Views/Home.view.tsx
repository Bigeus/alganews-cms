import UsePageTitle from "../../Core/Hooks/UsePageTitle"
import DefaultLayout from "../Layouts/Default/Default.layout"
import PostsList from "../features/PostsList.features"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
export default function HomeView() {

  UsePageTitle('Home')

  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '35px'}}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostsList />
  </DefaultLayout>
}