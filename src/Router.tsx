import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Rankings } from "./pages/Rankings";
import { Perfil } from "./pages/Perfil";
import { WhatsApp as WhatsAppModule } from "./pages/Modules/WhatsApp";
import { Internet as InternetModule } from "./pages/Modules/Internet";
import { Seguranca as SegurancaModule } from "./pages/Modules/Seguranca";
import { WhatsApp as WhatsAppClass } from "./pages/Classes/WhatsApp";
import { Internet as InternetClass } from "./pages/Classes/Internet";
import { Seguranca as SegurancaClass } from "./pages/Classes/Seguranca";
import { WhatsApp as WhatsAppTest } from "./pages/Tests/WhatsApp";
import { Internet as InternetTest } from "./pages/Tests/Internet";
import { Seguranca as SegurancaTest } from "./pages/Tests/Seguranca";
import { WhatsApp as WhatsAppFeedBack } from "./pages/Feedback/WhatsApp";
import { Internet as InternetFeedBack } from "./pages/Feedback/Internet";
import { Seguranca as SegurancaFeedBack } from "./pages/Feedback/Seguranca";
import { Edit } from "./pages/Perfil/Edit";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Cadastro" element={<Register />} />
      <Route path="/Home" element={<DefaultLayout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/Modules/WhatsApp" element={<WhatsAppModule />} />
        <Route path="/Home/Modules/Internet" element={<InternetModule />} />
        <Route path="/Home/Modules/Seguranca" element={<SegurancaModule />} />
        <Route path="/Home/Classes/WhatsApp" element={<WhatsAppClass />} />
        <Route path="/Home/Classes/Internet" element={<InternetClass />} />
        <Route path="/Home/Classes/Seguranca" element={<SegurancaClass />} />
        <Route path="/Home/Tests/WhatsApp" element={<WhatsAppTest />} />
        <Route path="/Home/Tests/Internet" element={<InternetTest />} />
        <Route path="/Home/Tests/Seguranca" element={<SegurancaTest />} />
        <Route path="/Home/Feedback/WhatsApp" element={<WhatsAppFeedBack />} />
        <Route path="/Home/Feedback/Internet" element={<InternetFeedBack />} />
        <Route
          path="/Home/Feedback/Seguranca"
          element={<SegurancaFeedBack />}
        />
      </Route>
      <Route path="/Rankings" element={<DefaultLayout />}>
        <Route path="/Rankings" element={<Rankings />} />
      </Route>
      <Route path="/Perfil" element={<DefaultLayout />}>
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Perfil/Edicao" element={<Edit />} />
      </Route>
    </Routes>
  );
}
