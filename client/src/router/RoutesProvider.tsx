import DayTasks from "@/common/components/tasks/DayTasks";
import MainLayout from "@/common/layouts/MainLayout";
import Home from "@/pages/Home";
import Schedule from "@/pages/Schedule";
import Tasks from "@/pages/Tasks";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export default function RoutesProvider() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="home" element={<Home />} />
                    {/* ToDo: возможно реализовать через параметр */}
                    <Route path="tasks" element={<Tasks />}>
                        <Route path="day" element={<DayTasks />}/>
                        <Route path="shedule" element={<Schedule />}/>
                    </Route>
                </Route>
            </>
        ))
    return <RouterProvider router={router} />
}
