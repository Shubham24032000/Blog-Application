import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from './components/home/Home.jsx';
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import AdminLogin from "./components/auth/AdminLogin.jsx";
import Dashborad from "./components/dashborad/Dashborad.jsx";
import ProtectRoute from "./components/auth/ProtectRoute.jsx";
import EmailVerify from "./components/auth/EmailVerify.jsx";
import {userView} from "./store/actions/home/homeAction.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeAdd from "./components/home/HomeAdd.jsx";
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(userView())
  },[]);
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/register' component={Register} exact/>
        <Route path='/register/email-verify' component={EmailVerify} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/admin/login' component={AdminLogin} exact/>
        <Route path='/article/:currentPage?' component={Home} exact/>
        <Route path='/artical/details/:slug' component={Home} exact/>
        <Route path='/artical/category/:categorySlug/:currentPage?' component={Home} exact/>
        <Route path='/artical/tag/:tagSlug/:currentPage?' component={Home} exact/>
        <Route path='/artical/search/:searchValue' component={Home} exact/>
        
        
        <ProtectRoute path='/dashborad' component={Dashborad} exact/>
        
        <Route path='/dashborad/all-article/:currentPage?' component={Dashborad} exact/>
        <Route path='/dashborad/article-add' component={Dashborad} exact/>
         <Route path='/dashborad/article/edit/:articleSlug' component={Dashborad} exact/>

        <Route path='/dashborad/all-category/:currentPage?' component={Dashborad} exact/>
        <Route path='/dashborad/add-category' component={Dashborad} exact/>
        <Route path='/dashborad/category/edit/:cateSlug' component={Dashborad} exact/>

        <Route path='/dashborad/all-tag/:currentPage?' component={Dashborad} exact/>
        <Route path='/dashborad/add-tag' component={Dashborad} exact/>
        <Route path='/dashborad/tag/edit/:tagSlug' component={Dashborad} exact/>

        <Route path='/dashborad/all-sub-admin/:currentPage?' component={Dashborad} exact/>

        <Route path='/dashborad/all-user/:currentPage?' component={Dashborad} exact/>

        <Route path='/dashborad/sub-admin-profile/:adminId' component={Dashborad} exact/>

        <Route path='/dashborad/comments/:currentPage?' component={Dashborad} exact/>

        <Route path='/artical/article-add' component={HomeAdd} exact/>
      </Switch>
    </Router>
  );
}

export default App;
