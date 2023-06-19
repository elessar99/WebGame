import {useRoutes} from "react-router-dom"

import "./Router.css";
import MainPage from "../views/MainPage";
import Game from "../views/mid/Game";
import Login from "../containers/loginRegister/Login";
import Register from "../containers/loginRegister/Register";
import Overview from "../views/mid/Overview";
import Resources from "../views/mid/Resources";
import Facilities from "../views/mid/Facilities";
import Merchant from "../views/mid/Merchant";
import Shipyard from "../views/mid/Shipyard";
import Pvp from "../views/mid/Pvp";
import Raid from "../views/mid/Raid";
import Expedition from "../views/mid/Expedition";
import Plunder from "../views/mid/Plunder";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <MainPage/>,
                children: [
                    {
                      path: "login",
                      element: <Login/>,
                    },
                    {
                      path: "register",
                      element: <Register/>,
                    },
                  ],
            },
            {
                path: "/game",
                element: <Game/>,
                children: [
                  {
                    path: "overview",
                    element: <Overview/>,
                  },
                  {
                    path: "resources",
                    element: <Resources/>,
                  },
                  {
                    path: "facilities",
                    element: <Facilities/>,
                  },
                  {
                    path: "merchant",
                    element: <Merchant/>,
                  },
                  {
                    path: "shipyard",
                    element: <Shipyard/>,
                  },
                  {
                    path: "pvp",
                    element: <Pvp/>,
                  },
                  {
                    path: "raid",
                    element: <Raid/>,
                  },
                  {
                    path: "expedition",
                    element: <Expedition/>,
                  },
                  {
                    path: "plunder",
                    element: <Plunder/>,
                  },
                ],
            },
            {
                path: '*',
                element: <div>
                    404 Not Found
                </div>
            }
        ]
    )
    return routes
}
export default Router