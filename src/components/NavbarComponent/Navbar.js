import  { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import Profile from '../../common';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import styled1 from 'styled-components';


const NavbarContainer = styled.div`
  &.Navbar{
    background-color: #FAC213;
    border-bottom: 1px solid black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    transition: background-color 0.3s ease; 
  }
  &.scrolled {
    background-color: white;
  }

  &.create-post {
    background-color: #7c9de8;
  }

  &.single-post {
    background-color: #8696b3;
  }
  &.LoginRegister {
    background-color: rgba(105, 105, 105, 0.7);
    color: aliceblue;
    padding-left: 50px;
    text-decoration: none;
    font-size: 25px;
  }
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  margin: 0 80px;
  text-align: center;
  font-size: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
const LeftSide = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;
const Span = styled.span`
  font-size: 30px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration:none;

  &.span{
    font-size: 20px;
    letter-spacing: .05rem;
    cursor: pointer;
    font-family: 'Gill Sans MT',  'Trebuchet MS', sans-serif;
  }
  &.spanlog{
    font-size:25px;
    color:black;
  }
`;


const StyledLink = styled1(Link)`
text-decoration:none;
  &.LoginRegisterHome {
    color: aliceblue;
    padding-left: 50px;
    text-decoration: none;
    font-size: 25px;
  }
  &.Link1 {
    text-decoration: none;
    margin-left: 30px;
    font-size: 20px;
    font-weight: 500;
    width: 150px;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 7vh;
    border-radius: 5px;
    color: black; 
  }
  & .logout {
    color: black;
    text-decoration: none;
    margin-right: 10px;
  }

  &.logRegLink{
    font-size: 20px;
    color: rgb(42, 42, 42);
    padding: 5px;
    font-weight: 500;
    text-decoration: none;
    margin:5px;
  }

`;

const RightSide = styled.div``;


const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.div`
  margin-left:20px;
  cursor:pointer;
`;


const Img = styled.img`
  border-radius: 50%; 
  width: 50px;
  height: 50px;
`;

const Button = styled.button`
  background-color: #232222;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 20px;
  margin: 4px 0px;
  border-radius: 30px;
  cursor: pointer;
`;









const Navbar = ({ onLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const popupRef = useRef();



  const handleLogout = () => {
    sessionStorage.clear();
  };

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.querySelector('.Banner');

      if (bannerElement) {
        const bannerHeight = bannerElement.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > bannerHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsidePopup = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    const handleScrollOutsidePopup = () => {
      setIsPopupOpen(false);
    };

    window.addEventListener('mousedown', handleClickOutsidePopup);
    window.addEventListener('scroll', handleScrollOutsidePopup);

    return () => {
      window.removeEventListener('mousedown', handleClickOutsidePopup);
      window.removeEventListener('scroll', handleScrollOutsidePopup);
    };
  }, []);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    const storedId = sessionStorage.getItem('id');
    const storedEmail = sessionStorage.getItem('email');

    setUsername(storedUsername);
    setId(storedId);
    setEmail(storedEmail);
  }, []);

  const handleProfileClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const location = useLocation();
  const iscreatePost = location.pathname === '/create-post'
  const isSinglePost = location.pathname.startsWith('/singlePage/');
  const isLoginRegister = location.pathname === '/login' || location.pathname === '/register'
  const isHomePage = location.pathname === '/';

  const navbarClassName = iscreatePost ? 'Navbar create-post' : 'Navbar';
  const navbarClassName1 = isSinglePost ? 'Navbar single-post' : 'Navbar';
  const navbarClassName2 = isLoginRegister ? 'Navbar LoginRegister' : 'Navbar';



  return (
    <NavbarContainer className={`Navbar ${isScrolled ? 'scrolled' : ''} ${navbarClassName} ${navbarClassName1} ${navbarClassName2}`}>
      <NavbarInner>
        <LeftSide>
          <Span>BLOG.</Span>
          <StyledLink to="/" className={isLoginRegister ? 'LoginRegisterHome' : 'Link1'}>Home</StyledLink>
          {
            isHomePage &&(
            <StyledLink to={onLogin? '/create-post' : '/login'} className='Link1' >
              Create a Post
            </StyledLink>
            )
          }
        </LeftSide>
        <RightSide>
          { onLogin || iscreatePost ? (
            <RightSideContainer>

              <StyledLink
                to="/login"
                className='logout'
                onClick={handleLogout}
              >
                <Span className='spanlog'>Logout</Span>
              </StyledLink>
              <ProfilePic className='Profile' onClick={handleProfileClick}>
                <Img src={Profile} alt="Profile" />
              </ProfilePic>
            </RightSideContainer>
            ) : (!isLoginRegister && !isSinglePost &&(<div className='rightbar-container'>

            <StyledLink
              to="/login"
              className='logRegLink'
            >
              <Button >Login</Button>
            </StyledLink>
            <StyledLink
              to="/register"
              className='logRegLink'
            >
              <Button >Register</Button>
            </StyledLink>

          </div>))}
          {isPopupOpen && (
            <ProfilePopup
              ref={popupRef}
              id={id}
              name={username}
              email={email} 
              profilePhoto={Profile}
            />
          )}
        </RightSide>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
