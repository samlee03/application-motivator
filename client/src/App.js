import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from './pages/Home';
import JobPage from './pages/JobPage';
import ApplicationPage from './pages/ApplicationPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="jobs-page" element={<JobPage />}/>
            <Route path="applications-page" element={<ApplicationPage />}/>
            <Route path="signup-page" element={<SignUpPage />}/>
            <Route path="signin-page" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
