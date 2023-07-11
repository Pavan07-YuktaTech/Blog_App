import React, { useCallback, useState } from 'react';
import axios from 'axios';
import * as ReactIcons from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/NavbarComponent/Navbar';
import styled from '@emotion/styled';


const ContainerPost = styled.div`
  display: flex;
  justify-content: center;
  background-color: azure;
  position: relative;
  top: 70px;
  height: 90vh;
  @media (max-width: 768px){
    top: 50px;
  }
  @media (max-width: 480px){
    top: 30px;
  }
`;

const Posts = styled.div`
border-radius: 10px;
  height: 70vh;
  width: 600px;
  margin-top: 20px;
  @media (max-width: 768px){
    width: 80%;
  }
  @media (max-width: 480px){
    width: 90%;
  }
`;


const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  margin-left: 30px;
  border-radius: 10px;
  height: 50vh;
  margin-top: 50px;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);
  line-height: 30px;
  background-color: aliceblue;
  @media (max-width: 768px){
    width: 80%;
    margin-left: 0;
    margin-top: 30px;
  }
  @media (max-width: 480px){
    width: 90%;
    margin-top: 20px;
  }
`;

const Data1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

const Input = styled.input`
  height: 5vh;
  width: 14vw;
  line-height: 30px;
  margin: 30px 0px 20px 78px;
  font-size: 17px;
  border-radius: 5px;
  border: none;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid #4caf50;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-right: 30px;
`;
const Span = styled.span``;

const Data2 = styled.div`
  margin-top: 10px;
  display: flex;
`;

const TextArea = styled.textarea`
  height: 10vh;
  width: 15vw;
  margin-left: 12px;
  font-size: 17px;
  border-radius: 5px;
  border: none;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid #4caf50;}
    @media (max-width: 480px){
      margin: 20px 0;
    }
`;

const Button = styled.button`
  width: 90px;
  height: 7vh;
  border: none;
  margin-left: 30px;
  font-size: 18px;
  margin-top: 30px;
  border-radius: 5px;
  color: aliceblue;
  cursor: pointer;
  background-color: black;

  &:hover{
    background-color: #45a049;
  }
  @media (max-width: 768px){
    width: 100px;
    height: 50px;
    margin-left: 0;
    margin-top: 20px;
    font-size: 16px;
  }
  @media (max-width: 768px){
    width: 100%;
    height: 40px;
    margin-top: 20px;
    font-size: 14px;
  }
`;

  
const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
  });
  const location = useLocation();

  const isCreatePost = location.pathname === '/create-post';
  const navbarClassName = isCreatePost ? 'Navbar create-post' : 'Navbar';

  const handleSubmit = (event) => {
    event.preventDefault();
    handlesetFormData(post);
  };

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setPost((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlesetFormData = useCallback(async (data) => {
    try {
      const token = sessionStorage.getItem('token');
      await axios.post('http://localhost:5500/api/posts', data, {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setPost({
        title: '',
        description: '',
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Navbar className={navbarClassName} />
      <ContainerPost>
        <Posts>
          <H1>Unleash Your Verbal Brushstrokes</H1>
          <Form onSubmit={handleSubmit} className='form'>
            <Data1>
              <Label>
                <Span>
                  <ReactIcons.SubtitlesRounded />
                </Span>{' '}
                Title:
              </Label>
              <Input
                type='text'
                name='title'
                placeholder='Enter a Title'
                value={post.title}
                onChange={handleInputData}
              />
            </Data1>
            <Data2>
              <Label>
                <Span>
                  <ReactIcons.DescriptionRounded />
                </Span>
                Description:
              </Label>
              <TextArea
                name='description'
                placeholder='Enter your Description'
                value={post.description}
                onChange={handleInputData}
              />
            </Data2>
            <Button type='submit'>Submit</Button>
          </Form>
        </Posts>
      </ContainerPost>
    </>
  );
};

export default CreatePost;

