import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { WhatsApp } from "./pages/Modules/WhatsApp";
import { Internet } from "./pages/Modules/Internet";
import { Seguranca } from "./pages/Modules/Seguranca";
import { WhatsApp as WhatsAppTest } from "./pages/Tests/WhatsApp";
import { Internet as InternetTest } from "./pages/Tests/Internet";
import { Seguranca as SegurancaTest } from "./pages/Tests/Seguranca";

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
        <Route path="/Home/Tests/WhatsApp" element={<WhatsAppTest />} />
        <Route path="/Home/Tests/Internet" element={<InternetTest />} />
        <Route path="/Home/Tests/Seguranca" element={<SegurancaTest />} />
      </Route>
    </Routes>
  );
}
