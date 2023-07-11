import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login1';
import Home from './Pages/Home/Home';
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute';
import CreatePostPage from './Pages/CreatePosts/CreatePost';
import SinglePage from './Pages/SinglePage/SinglePage';
import PublicRoute from './components/PublicRoute/PublicRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/singlePage/:id" element={<SinglePage />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<PublicRoute />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/create-post" element={<CreatePostPage />} />
                </Route>
            </Routes>
        </Router>
    );

}
export default App;