import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export default function RoutesProvider() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<></>} />
            </>
        ))
    return <RouterProvider router={router} />
}
