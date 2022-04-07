import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import Landing from "./pages/Landing/Landing";
import Menu from "./pages/Menu/Menu";
import Avatar from "./pages/Avatar/Avatar";
import EtesVous from "./pages/EtesVous/EtesVous";
import Nom from "./pages/Nom/Nom";
import Cours from "./pages/Cours/Cours";
import Quiz from "./pages/Quiz/Quiz";

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
        <Route path="avatar" element={<Avatar />} />
        <Route path="menu" element={<Menu />}>
        {/* <Route path=":avatarId" element={<Menu />} /> */}
        </Route>
        <Route path="cours" element={<Cours />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
