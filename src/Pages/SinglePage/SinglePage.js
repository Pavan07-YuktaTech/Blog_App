import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/NavbarComponent/Navbar";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import Footer from "../../components/FooterComponent/Footer";
import styled from "@emotion/styled";


const SinglepageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background-color: #fff;
`;

const Span = styled.span``;

const H1 = styled.h1`
    position: relative;
    top: 90px;
`;

const Singlepage = styled.div`
    margin: auto 160px;
    font-size: 20px;
    border: 1px solid rgb(212, 212, 212);
`;

const Table = styled.table``;

const TableRow = styled.tr``;

const TableData = styled.td`
  &:nth-child(1) {
    background-color: rgb(201, 201, 201);
    width: 15vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-weight: 500;
  }
  &:nth-child(1) span{
    margin-top: 5px;
    }
  &:nth-child(2){
    padding: 15px;
    background-color: rgb(241, 240, 240);
    margin-top: 5px;    
`;

const SinglePage = () => {
    const [data, setData] = useState({});

    const { id } = useParams();

    const singlePost = async () => {
        try {
            const response = await axios.get(`http://localhost:5500/api/posts/${id}`);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        singlePost();
    }, []);

    return (
        <>
            <Navbar />
            <SinglepageContainer>
                <Navbar />
                <H1>
                    <Span><MarkAsUnreadIcon /></Span> Your Creative Post
                </H1>
                <Singlepage>
                    <Table>
                        <TableRow>
                            <TableData ><Span><PermIdentityOutlinedIcon /></Span> User ID:</TableData>
                            <TableData>{data.id}</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData><Span><SubtitlesOutlinedIcon /></Span>  Title:</TableData>
                            <TableData>{data.title}</TableData>
                        </TableRow>
                        <TableRow >
                            <TableData><Span><DescriptionOutlinedIcon /></Span> Description:</TableData>
                            <TableData>{data.description}</TableData>
                        </TableRow>
                    </Table>
                </Singlepage>
            </SinglepageContainer>
            <Footer />
        </>
    );
};

export default SinglePage;
