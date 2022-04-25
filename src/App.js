import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import Landing from "./pages/Landing/Landing";
import Menu from "./pages/Menu/Menu";
import Avatar from "./pages/Avatar/Avatar";
import EtesVous from "./pages/EtesVous/EtesVous";
import Nom from "./pages/Nom/Nom";
import Cours from "./pages/Cours/Cours";
import Langue from "./pages/Langue/Langue";
import Quiz from "./pages/Quiz/Quiz";
import Layout from "./Components/Layout";

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
        <Route path="*" element={<NoPage />} />

        <Route path="home" element={<Layout />} >
          <Route index element={<Menu />} />
          <Route path="cours" element={<Cours />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Route>
        
        
        
    </Routes>
  </Router>
  );
}
        

export default App;
