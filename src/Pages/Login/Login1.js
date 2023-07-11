import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import '../Register/Register.css';
import '../../App.css';
import Navbar from '../../components/NavbarComponent/Navbar';
import Footer from '../../components/FooterComponent/Footer'
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

const Label = styled.label`
    color: #ccc;
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



export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    let handlesetFormData = useCallback(async (data) => {
        try {
            await axios
                .post("http://localhost:5500/api/users/login", data)
                .then((res) => {
                    sessionStorage.setItem("token", res.data.data.token)
                    sessionStorage.setItem('username', res.data.data.username);
                    sessionStorage.setItem('id', res.data.data.id);
                    sessionStorage.setItem('email', res.data.data.email);
                    navigate('/')
                })
                .catch((err) => {
                    if (err.response && err.response.status === 400) {
                        alert('Invalid email or password');
                    } else {
                        alert('An error occurred during login');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleInputData = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handlesetFormData(loginData);
    };

    return (
        <>
            <Container>
                <Navbar />
                <Authentication>
                    <H1>Login</H1>
                    <Form onSubmit={handleSubmit}>
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
                            onChange={handleInputData}
                        />
                        <Label htmlFor="remember" >
                            <input type="checkbox" name="remember" id="remember" />
                            Remember me
                        </Label>
                        <Button type="submit">Login</Button>
                        <Para>
                            Don't have an account? <Link to="/register" className='Link'>Register</Link>
                        </Para>
                    </Form>
                </Authentication>
            </Container>
            <Footer />
        </>
    );
}
