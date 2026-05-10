import "./App.css";
import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import ProjectDetails from "./pages/ProjectDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<MainPage />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
