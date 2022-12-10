import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  PostsPage,
  PostPage,
  AddPostPage,
  LoginPage,
  RegisterPage,
  EditPostPage,
} from "./pages";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMe } from "./redux/features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(getMe());
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"posts"} element={<PostsPage />} />
        <Route path={":id"} element={<PostPage />} />
        <Route path={":id/edit"} element={<EditPostPage />} />
        <Route path={"new"} element={<AddPostPage />} />
        <Route path={"login"} element={<LoginPage />} />
        <Route path={"register"} element={<RegisterPage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
