import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { Route, Routes } from "react-router";
import MainList from "./components/MainList";
import { api } from "./api/apiResource";
import DreamList from "./components/DreamList";

const App = () => {
  const [blogdata, setBlogData] = useState([]);
  const getDreamHeaders = async () => {
    const res = await api.get("/BlogHeader");
    console.log(res.data);
    setBlogData(res.data);
  };

  useEffect(() => {
    getDreamHeaders();
  }, []);

  const [blogdetail, setBlogDetail] = useState("[]");
  const getDreamDetail = async () => {
    const res = await api.get("/BlogDetail");
    console.log(res.data);
    setBlogDetail(res.data);
  };

  useEffect(() => {
    getDreamDetail();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dreamlists" element={<MainList blogdata={blogdata} />} />
        <Route path="/dreamlists/:blogId/:blogName" element={<DreamList blogdetail={blogdetail} />}/>
      </Routes>
    </div>
  );
};

export default App;
