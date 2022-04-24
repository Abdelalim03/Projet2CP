import EtesVous from "./pages/EtesVous/EtesVous";
import Nom from "./pages/Nom/Nom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import Landing from "./pages/Landing/Landing";
import Menu from "./pages/Menu/Menu";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="bg-symapp-blue-light-second">
      <main>
      <Router>
        <div className="flex">
        <SideBar />
          <Routes>
            <Route path="/" element={ <Menu/>} />
            <Route path="/Nopage" element={ <NoPage />} />
           
          </Routes>
        </div>
          
        </Router>
      </main>
      {/* <SideBar/> */}
      {/* <Nom/> */}
      {/* <EtesVous /> */}
      {/* <Landing /> */}
      {/* <Router>
      <Routes>
        <Route path="/" >
          <Route index element={<Landing />} />
          <Route path="choix" element={<EtesVous />} />
          <Route path="nom" element={<Nom />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
