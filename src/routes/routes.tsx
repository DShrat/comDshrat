import Home from "@/app/page";
import path from "path";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    }
])
