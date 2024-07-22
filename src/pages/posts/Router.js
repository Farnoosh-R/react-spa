
import { Route, Routes } from "react-router-dom";
import IndexPosts from "./Index";
import ShowPost from "./Show";
import CreatePost from "./Create";
import EditPost from "./Edit";

const RouterPosts = () => {

    return(
        <Routes>
            <Route path="/" element={<IndexPosts />}></Route>
            <Route path="/:postid" element={<ShowPost />}></Route>
            <Route path="/creat" element={<CreatePost />}></Route>
            <Route path="/edit/:postid" element={<EditPost />}></Route>
        </Routes>
    )
}
export default RouterPosts;