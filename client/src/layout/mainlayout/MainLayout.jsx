import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function MainLayout() {
  return (
    <div className="main">
    <Header />    
    <Outlet />
    <Footer />
    </div>
  )
}
