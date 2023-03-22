import './App.css';
import MainPage from "./components/pages/mainPage/MainPage";
import AboutPage from "./components/pages/aboutPage/AboutPage";
import NavBar from "./components/navBar/NavBar";
import BlogsPage from "./components/pages/blogsPage/BlogsPage";
import LoginPage from "./components/pages/loginPage/LoginPage";
import { UserPage } from './components/pages/userPage/UserPage';

import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="blogs" element={<BlogsPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="user" element={<UserPage/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
