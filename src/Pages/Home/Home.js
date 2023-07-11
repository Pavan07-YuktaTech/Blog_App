
import Navbar from '../../components/NavbarComponent/Navbar';
import Banner from '../../components/BannerComponent/Banner';
import Allposts from '../../components/Allposts/Allposts';
import Footer from '../../components/FooterComponent/Footer';
import {  useState } from 'react';
import { getToken } from '../../common';


const Home = () => {
  const token = getToken();
  const [isLogin,setLogin] = useState(token);

    const handleLogin = () =>{
      setLogin(!isLogin)
    }

  return (
    <div>
      <Navbar onLogin ={isLogin} handleLogin={handleLogin}/>
      <Banner/>
      <Allposts/>
      <Footer/>      
    </div>
  )
}

export default Home
