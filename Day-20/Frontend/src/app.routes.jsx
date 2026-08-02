import { createBrowserRouter } from 'react-router';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';

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
        element: <h1>Welcome to 4 layer architecture of React</h1>,
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
