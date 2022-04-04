import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Langue from "./pages/Langue/Langue";
import NoPage from "./pages/NoPage/NoPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" >
          <Route index element={<Langue />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
