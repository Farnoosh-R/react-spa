
import { Route, Routes } from "react-router-dom";
import IndexUsers from "./Index";
import ShowUser from "./Show";
const RouterUsers = () => {

    return(
        <Routes>
            <Route path="/" element={<IndexUsers />}></Route>
            <Route path="/:userid" element={<ShowUser />}></Route>
        </Routes>
    )
}
export default RouterUsers;