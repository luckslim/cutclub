import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login/login";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}