import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import FeedSection from "./components/FeedSection";
import News from "./components/News";
import PostSection from "./components/PostSection";

function App() {
  return (
    <div className=" min-h-screen" style={{ backgroundColor: "#e9ebdc" }}>
      <Header />
      <div id="body" className="md:flex md:m-5 lg:mx-52 md:gap-4">
        <SideBar />
        <div className="md:basis-2/3">
          <FeedSection />
          <hr className="h-1 mt-3 bg-gray-400"/>
          <PostSection />
        </div>
        <News />
      </div>
    </div>
  );
}

export default App;
