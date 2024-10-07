import { Route, Routes } from "react-router-dom";
import { Banda } from "../pages/Banda";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Banda />} />
            <Route path="/Banda" element={<Banda />} />
        </Routes>
    )
}