import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Game from "./pages/Game";
import Act from "./pages/Act";

const App = () => {
  return (
   
      <Routes>
        <ScrollToTop />
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="learn" element={<Learn />} />
        <Route path="game" element={<Game />} />
        <Route path="act" element={<Act />} />
        </Route>
      </Routes>
   
  );
};

export default App;