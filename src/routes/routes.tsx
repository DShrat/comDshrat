import Home from "@/app/page";
import ProjectPages from "@/pages/project";
import path from "path";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children:[
            {path: "project", element:<ProjectPages />},
        ]

    }
])
