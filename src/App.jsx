import { Routes, Route } from "react-router";
import Header from "./Components/Header";
import Section from "../src/Components/Section";
import NotFound from "./Components/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/section/:section" element={<Section />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
