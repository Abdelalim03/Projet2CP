import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" >
          <Route index element={<Quiz />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
