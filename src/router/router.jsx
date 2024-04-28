import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../index.css";

import Root from "../routes/root";



import FeedIndex from "../pages/feeds";
import DashBoardIndexContainer from "../pages/home";



function Routers(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<DashBoardIndexContainer />} />
          <Route
            path="feed/:feedId"
            element={<FeedIndex />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;