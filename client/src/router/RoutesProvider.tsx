import DayTasks from "@/common/components/tasks/DayTasks";
import MonthTasks from "@/common/components/tasks/MonthTasks";
import WeekTasks from "@/common/components/tasks/WeekTasks";
import MainLayout from "@/common/layouts/MainLayout";
import Home from "@/pages/Home";
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
                        <Route path="week" element={<MonthTasks />}/>
                        <Route path="month" element={<WeekTasks />}/>
                    </Route>
                </Route>
            </>
        ))
    return <RouterProvider router={router} />
}
