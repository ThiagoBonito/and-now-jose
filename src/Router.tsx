import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
}
