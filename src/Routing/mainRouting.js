import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from '../components/ImageComp'
import ClickComp from '../components/ClickCounterComp'
import HoverCounterComp from "../components/HoverCounterComp";
import HooksComp from "../ReactHooks/HooksComp";
import ErrorBoundaryComp from "../components/ErrorBoundaryComp";
import UseStateComp from "../ReactHooks/UseStateComp";
import DashboardComp from '../layout/DashboardComp'
import NavComp from '../layout/NavComp'
import PageNotFound from '../layout/PageNotFound'
import ClassComp from '../components/ClassComp'
import VirtualDOMComp from "../components/VirtualDOMComp";

const router = createBrowserRouter([
    {
        path: "dashboard", element: <DashboardComp />, children: [
            { path: "", element: <ClassComp/> },
            //2.naming routing
            { path: "myimages", element: <MyImagesComp /> },
            //3.parameterized routing
            { path: "mycss", element: <ClickComp /> },
            //4.child routing
            {
                path: "hooks", element: <HooksComp />, children: [
                    { path: "usestate", element: <UseStateComp /> }
                ]
            },
            {path:"virtualdom",element:<VirtualDOMComp/>}
        ]
    },
    //1.default routing

    //5.wild card routing
    { path: "*", element: <PageNotFound /> }
])

export default router