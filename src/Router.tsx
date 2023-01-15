import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { WhatsApp } from "./pages/Modules/WhatsApp";
import { Internet } from "./pages/Modules/Internet";
import { Seguranca } from "./pages/Modules/Seguranca";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Cadastro" element={<Register />} />
      <Route path="/Home" element={<DefaultLayout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/Modules/Whatsapp" element={<WhatsApp />} />
        <Route path="/Home/Modules/Internet" element={<Internet />} />
        <Route path="/Home/Modules/Seguranca" element={<Seguranca />} />
      </Route>
    </Routes>
  );
}
