import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { WhatsApp } from "./pages/Modules/WhatsApp";
import { Internet } from "./pages/Modules/Internet";
import { Seguranca } from "./pages/Modules/Seguranca";
import { WhatsApp as WhatsAppClass } from "./pages/Classes/WhatsApp";
import { Internet as InternetClass } from "./pages/Classes/Internet";
import { Seguranca as SegurancaClass } from "./pages/Classes/Seguranca";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Cadastro" element={<Register />} />
      <Route path="/Home" element={<DefaultLayout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/Modules/WhatsApp" element={<WhatsApp />} />
        <Route path="/Home/Modules/Internet" element={<Internet />} />
        <Route path="/Home/Modules/Seguranca" element={<Seguranca />} />
        <Route path="/Home/Classes/WhatsApp" element={<WhatsAppClass />} />
        <Route path="/Home/Classes/Internet" element={<InternetClass />} />
        <Route path="/Home/Classes/Seguranca" element={<SegurancaClass />} />
      </Route>
    </Routes>
  );
}
