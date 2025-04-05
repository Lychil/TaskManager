import MainLayout from "@/common/layouts/MainLayout";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export default function RoutesProvider() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout/>} />
            </>
        ))
    return <RouterProvider router={router} />
}
