import DayTasks from "@/common/components/tasks/DayTasks";
import MainLayout from "@/common/layouts/MainLayout";
import Create from "@/pages/Create";
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
                    <Route path="tasks" element={<Tasks />}>
                        <Route path="day" element={<DayTasks />}/>
                        <Route path="shedule" element={<Schedule />}/>
                    </Route>
                    <Route path="create" element={<Create />} />
                </Route>
            </>
        ))
    return <RouterProvider router={router} />
}
