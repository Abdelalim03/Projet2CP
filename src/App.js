import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Langue from "./pages/Langue/Langue";
import NoPage from "./pages/NoPage/NoPage";
import Landing from "./pages/Landing/Landing"
import EtesVous from "./pages/EtesVous/EtesVous";
import Nom from "./pages/Nom/Nom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" >
          <Route index element={<Langue />} />
          <Route path="welcome"  >
            <Route path="arabe" element={<NoPage />} />
            <Route path="francais" element={<Landing />} />
          </Route>

          <Route path="choix" element={<EtesVous />} />
          <Route path="nom" element={<Nom />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
