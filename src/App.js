import { Route, Routes, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/UI/Layout";
import Home from './pages/Home';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile'

function App() {

  //const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/login' element={<Login/>} exact/>
        <Route path='/profile' element={<MyProfile/>} exact/>
      </Routes>
    </Layout>
  );
}

export default App;
