import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import QuizPage from "./pages/QuizPage";
import InstructorPanel from "./pages/InstructorPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/instructor" element={<InstructorPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
