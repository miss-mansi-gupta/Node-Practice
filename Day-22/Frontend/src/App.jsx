import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import { AuthProvider } from "./features/auth/auth.context"
// import "./style.scss"
import "./features/shared/global.scss"
import { PostContextProvider } from "./features/posts/post.context"

function App() {
  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>

    // <AuthProvider>
    //   <AppRoutes />
    // </AuthProvider>
  )
}

export default App
