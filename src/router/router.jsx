import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../index.css";

import Root from "../routes/root";



import DashBoardIndexContainer from "../pages/home";
import FeedIndexContainer from "../pages/feeds";



function Routers(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<DashBoardIndexContainer />} />
          <Route
            path="feed/:feedId"
            element={<FeedIndexContainer />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;