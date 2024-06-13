import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/dashboard"
import Stuff from "./pages/stuff"
import TrashStuff from "./pages/TrashStuff"
import Inbound from "./pages/Inbound"
import User from "./pages/User"
import Lending from "./pages/Lending"
import CreateUser from "./pages/CreateUSer"


export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/Profile', element: <Profile /> }, 
    { path: '/dashboard', element: <Dashboard /> }, 
    { path: '/stuffs', element: <Stuff /> }, 
    { path: '/stuff/trash', element: <TrashStuff /> }, 
    { path: '/Inbound', element: <Inbound /> }, 
    { path: '/User', element: <User /> }, 
    { path: '/Lending', element: <Lending /> }, 
    { path: '/user-create', element: <CreateUser /> }, 
    
])