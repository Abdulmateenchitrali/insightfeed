import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../index.css";

import DashBoardIndexContainer from "../pages/home";
import FeedIndexContainer from "../pages/feeds";
import RootContainer from "../routes/root";



function Routers(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootContainer />}>
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