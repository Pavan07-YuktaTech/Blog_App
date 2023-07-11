import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';
import styled from '@emotion/styled';


const AllPostContainer = styled.div`
  max-height: fit-content;
  background-color: aliceblue;
  padding-bottom: 70px;
`;

const AllPostInner = styled.div`
  margin: 0px 20px;
  padding-top: 5px;
`;


const PostHeading = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
  margin:0 50px;
`;

const Span = styled.span`
  padding-right: 5px;
  border-radius: 50%;
  margin-top:5px;
  height: 4vh;
  width: 4vh;
  &.span{
    margin-right:7px ;
    border:1px solid black;
}
`;

const H2 = styled.h2``;
const PostConatiner = styled.div`
width: 1200px;
display: flex;
margin:30px;
flex-wrap: wrap;
justify-content: space-between;
`;

const Post = styled.div`
  width: 550px;
  box-sizing: border-box;
  border: none;
  margin: 10px;
  border-radius: 10px;
  padding:7px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
`;

const Para = styled.p`
  text-align: justify; 
  margin-bottom: 10px; 
  padding: 0px 10px;

  &.description{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; 
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.navigatelink{
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
`;

const H3 = styled.h3`
  margin-bottom:0;
`;




const Allposts = () => {

  const [getposts, setPost] = useState([]);

  const getData = useCallback(async () => {
    try {
      await axios
        .get("http://localhost:5500/api/posts/")
        .then((res) => {
          // console.log(res.data.data);
          setPost(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);


  return (
    <AllPostContainer>
      <AllPostInner>

        <PostHeading>
          <Span className='span'>
            <MovingRoundedIcon  />
          </Span>
          <H2>Trending on the Medium</H2>
        </PostHeading>
        <PostConatiner>

          {getposts.map((post) => (
            
            <Post key={post.id} className='post'>
              <H2><span><AccountCircleIcon /></span>  {post.title}</H2>
              <Para>{post.content}</Para>
              <Para className="description">{post.description}</Para>
              <Link to={`/singlePage/${post.id}`} className='Link'>
              <H3 className='navigatelink'><span><AssistantDirectionOutlinedIcon/></span>   {post.slug}</H3>
              <Para>to continue reading click here...</Para>
              </Link>
            </Post>
          ))}
        </PostConatiner>
      </AllPostInner>
    </AllPostContainer>

  )
}

export default Allposts
