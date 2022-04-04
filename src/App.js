import EtesVous from "./pages/EtesVous/EtesVous";
import Nom from "./pages/Nom/Nom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import Landing from "./pages/Landing/Landing";
import Avatar from "./pages/Avatar/Avatar";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" >
          <Route index element={<Avatar />} />
          <Route path="choix" element={<EtesVous />} />
          <Route path="nom" element={<Nom />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
