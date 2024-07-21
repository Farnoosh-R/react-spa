
import { Route, Routes } from "react-router-dom";
import IndexPosts from "./Index";

const RouterPosts = () => {

    return(
        <Routes>
            <Route path="/" element={<IndexPosts />}></Route>
            
        </Routes>
    )
}
export default RouterPosts;