import { createBrowserRouter } from 'react-router';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Feed from './features/posts/pages/Feed';
import CreatePost from './features/posts/pages/CreatePost';

export const router = createBrowserRouter([
    {
        path: '/login',
        element: (<Login />),
    },
    {
        path: '/register',
        element: (<Register />),
    },
    {
        path: '/',
        element: (<Feed />),
    },
    {
        path: '/create-post',
        element: (<CreatePost />),
    }
])

// function AppRoutes() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<h1>Welcome to the App</h1>} />
//                 <Route path='/login' element={<Login />} />
//                 <Route path='/register' element={<Register />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default AppRoutes;
