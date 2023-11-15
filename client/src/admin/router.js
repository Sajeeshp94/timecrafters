import {  Routes, Route} from "react-router-dom"
import Homepage from "./pages/Home"
import SignUPPage from "./pages/SignUp"
import SignInPage from "./pages/Signin"
import DashboardPage from "./pages/Dashboard"
import OrdersPage from "./pages/Orders"
import ProductsPage from "./pages/Products"
import SettingsPage from "./pages/Settings"
import LogoutPage from "./pages/Logout"

export default function Router(){
    return (
        
            <Routes>
                <Route path="/" element = {<Homepage />} />
                <Route path="/signup" element = {<SignUPPage />}/>
                <Route path="/login" element = {<SignInPage />} />
                <Route path="/dashboard" element = {<DashboardPage />} />
                <Route path="/orders" element = {<OrdersPage />} />
                <Route path="/products" element = {<ProductsPage />} />
                <Route path="/settings" element = {<SettingsPage />} />
                <Route path="/logout" element = {<LogoutPage />} />
            </Routes>
            
    )
}