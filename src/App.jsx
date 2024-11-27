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
import TreeForm from "./components/TreeForm/TreeForm";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState(null);

  async function checkUserIsLoggedIn() {
    const token = sessionStorage.getItem("token");

    if (!token) {
      setUser(null);
      return;
    }

    try {
      const { data } = await axios.get(
        import.meta.env.VITE_API_URL + "/api/users/:id",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUser(data);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  }

  useEffect(() => {
    checkUserIsLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="layout">
          <NavBar
            classname="navigation-bar"
            user={user}
            checkUserIsLoggedIn={checkUserIsLoggedIn}
          />
          <main className="main">
            <Routes>
              <Route path="/" Component={Home} user={user} />

              <Route path="/habits/:id" Component={HabitTree} user={user} />

              <Route path="/habits" Component={Garden} user={user} />

              <Route path="/community" Component={Community} user={user} />
              <Route path="/users/:id" Component={Profile} user={user} />
              <Route
                path="/login"
                Component={Login}
                checkUserIsLoggedIn={checkUserIsLoggedIn}
              />
              <Route path="/register" Component={Register} />
              <Route path="/plant" Component={TreeForm} />
            </Routes>
          </main>
          <Footer className="footer-bar" />
        </div>
      </BrowserRouter>
    </>
  );
}
