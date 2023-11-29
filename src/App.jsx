import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import CreateUserPage from "./pages/CreateUserPage";
import EditUserPage from "./pages/EditUserPage";
import '@progress/kendo-theme-default/dist/all.css';
import "@progress/kendo-theme-bootstrap/dist/all.css";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/create" element={<CreateUserPage />} />
        <Route path="/update/:id" element={<EditUserPage />} />
        {/* <Route path="/read/:id" element={<Read />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
