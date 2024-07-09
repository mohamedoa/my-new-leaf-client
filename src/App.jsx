import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Garden from "./pages/Garden/Garden";
import Community from "./pages/Community/Community";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import HabitTree from "./pages/HabitTree/HabitTree";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/habits/:id" Component={HabitTree} />
          <Route path="/habits" Component={Garden} />
          <Route path="/community" Component={Community} />
          <Route path="/users/:id" Component={Profile} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
