import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import MyPage from "./pages/mypage/MyPage";
import MyPageEdit from "./pages/mypage/MyPageEdit";
import ProjectCreationPage from "./pages/projectCreation/ProjectCreationPage";
import ProjectMembers from "./pages/projectMembers/ProjectMembers";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import StartingPage from "./pages/startingPage/StartingPage";
import SigninRepw from "./pages/signin/SigninRepw";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" />
            <Route path="/startingpage" element={<StartingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            {/* 새로운 비밀번호 재설정 페이지 */}
            <Route path="/find-pw" element={<SigninRepw />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/myedit" element={<MyPageEdit />} />
            <Route path="/projectmembers" element={<ProjectMembers />} />
            <Route
              path="/projectCreationPage"
              element={<ProjectCreationPage />}
            />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
