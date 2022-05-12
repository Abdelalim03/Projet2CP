import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import Menu from "./pages/Menu/Menu";
import MenuAr from "./pages/Menu/MenuAr";
import Avatar from "./pages/Avatar/Avatar";
import EtesVous from "./pages/EtesVous/EtesVous";
import Nom from "./pages/Nom/Nom";
import Editeur from "./pages/Editeur/Editeur";
import Exercices from "./pages/Exercices/Exercices";
import Langue from "./pages/Langue/Langue";
import Quiz from "./pages/Quiz/Quiz";
import Layout from "./Components/Layout";
import CoursContent from "./pages/Cours/CoursContent";
import Cours from "./pages/Cours/Cours";
import NoPage2 from "./pages/NoPage/NoPage2";
import Exercices2 from "./pages/Exercices/Exercices2";
import Landing from "./pages/Landing/Landing";

import Cours2Prof from "./pages/CoursProf/CoursProf";
import ContinueAs from "./pages/CoursProf/ContinueAs";

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" >
          <Route index element={<ContinueAs/>} />
{/*          
          <Route index element={<Cours2Prof/>} />
*/}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
{/*
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Langue />} />
          <Route path="welcome" element={<Landing />} />
          <Route path="choix" element={<EtesVous />} />
          <Route path="nom" element={<Nom />} />
          <Route path="avatar/:id" element={<Avatar />} />
          <Route path="*" element={<NoPage />} />

          <Route path="home/:id" element={<Layout />}>
            <Route index element={<Menu />} />
            <Route path="cours" element={<Cours />} />
            <Route path="courscontent/:coursId" element={<CoursContent />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="exercices" element={<Exercices />} />
            <Route path="exercices2" element={<Exercices2 />} />
            <Route path="dessiner" element={<Editeur />} />
            <Route path="*" element={<NoPage2 />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;*/}
