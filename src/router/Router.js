import { createBrowserRouter } from "react-router-dom";
import Addtask from "../pages/addtask/Addtask";
import CompleteTask from "../pages/completetask/CompleteTask";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Mytask from "../pages/mytask/Mytask";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/addtask",
    element: <Addtask></Addtask>,
  },
  {
    path: "completedtask",
    element: <CompleteTask></CompleteTask>,
  },
  {
    path: "/mytask",
    element: <Mytask></Mytask>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
