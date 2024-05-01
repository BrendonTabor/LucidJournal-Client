import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "./auth/Login.jsx"
import App from "../App.jsx"
import { Register } from './auth/Register.jsx'
import { EntryList } from "./entries/EntryList.jsx"
import { EntryForm } from "./entries/EntryForm.jsx"


export const ApplicationViews = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<App />} />
                <Route path="/entries"  element ={<EntryList />} />
                <Route path="/entries/new"  element ={<EntryForm />} />                
            </Route>
        </Routes>
    </BrowserRouter>
}