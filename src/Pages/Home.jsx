import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import { useState } from "react";
import PostListProvider from "../Store/post-list-store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  // This state use to select the tabs in sidebar section.
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header1></Header1>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
};

export default Home;
