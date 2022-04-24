import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Langue from "./pages/Langue/Langue";
import NoPage from "./pages/NoPage/NoPage";
import Landing from "./pages/Landing/Landing";
import Menu from "./pages/Menu/Menu";
import Avatar from "./pages/Avatar/Avatar";
import EtesVous from "./pages/EtesVous/EtesVous";
import Nom from "./pages/Nom/Nom";
import Cours from "./pages/Cours/Cours";
import Editeur from "./pages/Editeur/Editeur";
import Cours2 from "./pages/Cours/Cours2";
import Card from "./pages/EtesVous/Card";
import Chapitre from "./pages/Cours/Chapitre";
import Exercices from "./pages/Exercices/Exercices";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" >
      <Route index element={<Cours2 />} />

        <Route path="welcome"  >
          <Route path="arabe" element={<NoPage />} />
          <Route path="francais" element={<Landing />} />
        </Route>
        <Route path="choix" element={<EtesVous />} />
        <Route path="nom" element={<Nom />} />
        <Route path="avatar" element={<Avatar />} />
        <Route path="menu" element={<Menu />}>
        {/* <Route path=":avatarId" element={<Menu />} /> */}
        </Route>
        <Route path="cours" element={<Cours />} />
        <Route path="*" element={<NoPage />} />
        <Route path="dessiner" element={<Editeur />} />

      </Route>
    </Routes>
  </Router>
  );
}

export default App;
