import { Routes, Route } from "react-router";
import SectionNav from "../src/Components/SectionNav";
import Section from "../src/Components/Section";
import "./App.css";

function App() {
  return (
    <>
      <SectionNav />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/section/:section" element={<Section />} />
      </Routes>
    </>
  );
}

export default App;
