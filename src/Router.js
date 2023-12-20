import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import JoinCourse from './JoinCourse'
import Home from './Home'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" Component={Home}/>
                <Route path="/joinCourse" Component={JoinCourse}/>
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;