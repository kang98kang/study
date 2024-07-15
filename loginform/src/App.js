import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup } from "react-transition-group"; //화면전환 애니메이션 라이브러리
import LoginForm from "./Component/LoginForm/LoginForm";
import "./App.css"; // 애니메이션 스타일 정의를 위해 CSS 파일을 추가해줘

function App() {
  const location = useLocation();

  return <LoginForm />;
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
