import { useParams } from "react-router-dom";
import DefaultLayout from "../Layouts/Default/Default.layout";
import PostForm from "../features/PostForm";
import UsePageTitle from "../../Core/Hooks/UsePageTitle";

export default function PostEditView(){
   const params = useParams<{id: string}>(); 
   UsePageTitle('Novo post');
   


   return <DefaultLayout>
        <PostForm postId={Number(params.id)}/>
    </DefaultLayout>
}