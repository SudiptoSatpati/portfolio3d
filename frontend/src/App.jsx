import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Timeline from "./components/AdminPanel/Timeline";
import Youtube from "./components/AdminPanel/Youtube";
import Project from "./components/AdminPanel/Project";

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="center">
          <h1>Loading.......</h1>
        </div>
      ) : (
        <>
          {" "}
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  youtubes={user.youtube}
                  timelines={user.timeline}
                  skills={user.skills}
                />
              }
            />
            <Route path="/about" element={<About abouts={user.about} />} />
            <Route
              path="/projects"
              element={<Projects projects={user.projects} />}
            />
            <Route path="/contact" element={<Contacts />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
