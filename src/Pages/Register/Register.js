import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './Register.css';
import '../../App.css';
import Navbar from '../../components/NavbarComponent/Navbar';
import Footer from '../../components/FooterComponent/Footer';
import styled from '@emotion/styled';
import backgroundImage from '../../Assets/Images/background2.jpg';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url(${backgroundImage});
`

const Authentication = styled.div`
background-color: rgba(105, 105, 105, 0.5); /* Adjust the alpha value as needed */
padding: 2rem;
border-radius: 10px;
height: 53vh;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
const H1 = styled.h1`
    margin-top: 0;  
    text-align: center;
    margin-bottom: 1.5rem;
    color: #fff;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Input = styled.input`
    padding: .8rem;
    border-radius: 4px;
    border: 1px solid #ccc;

    &:focus{
        outline: none;
        border: none;
        border-bottom: 2px solid #4caf50;
    }
`;


const Button = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #45a049;
    }
`;

const Para = styled.p`
    text-align: center;
    margin-top: 1.5rem;
    color: #ccc;
`;
function isValidPassword(password) {
  // Password validation regex
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
}

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handlesetFormData = async (data) => {
    try {
      const res = await axios.post('http://localhost:5500/api/users/', data);
      console.log('res', res);
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert('User UserName, Email, and Password should not be Empty');
      }
    }
  };

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlesetFormData(formData);
  };

  return (
    <>
    <Container>
      <Navbar />
      <Authentication>
          <H1>Register</H1>
        <Form noValidate onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Name"
            required
            onChange={handleInputData}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleInputData}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            autoComplete="new-password"
            onChange={handleInputData}
          />
          <Button type="submit">Register</Button>
          <Para>
            Already have an account? <Link to="/login" className='Link'>Login</Link>
          </Para>
        </Form>
      </Authentication>
    </Container>
    <Footer/>
    </>
  );
}

export default Register;
