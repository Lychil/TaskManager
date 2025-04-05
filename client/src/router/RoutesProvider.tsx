import MainLayout from "@/common/layouts/MainLayout";
import Home from "@/pages/Home";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export default function RoutesProvider() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="home" element={<Home />} />
                    {/* ToDo: возможно реализовать через параметр */}
                    <Route path="tasks" element={<></>}>
                        <Route path="day" element={<></>}/>
                        <Route path="week" element={<></>}/>
                        <Route path="month" element={<></>}/>
                    </Route>
                </Route>
            </>
        ))
    return <RouterProvider router={router} />
}
