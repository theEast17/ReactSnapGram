import './App.css'
import {Routes,Route} from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SignInForm from './_auth/form/SignInForm'
import SignupForm from './_auth/form/SignupForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import { Toaster } from "@/components/ui/toaster"
import Explore from './_root/pages/Explore'
import Saved from './_root/pages/Saved'
import AllUsers from './_root/pages/AllUsers'
import CreatePosts from './_root/pages/CreatePosts'
import EditPost from './_root/pages/EditPost'
import PostDetails from './_root/pages/PostDetails'
import Profile from './_root/pages/Profile'
import UpdateProfile from './_root/pages/UpdateProfile'



const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout/>}>
            <Route path='/signIn' element={<SignInForm/>} />
            <Route path='/signUp' element={<SignupForm/>} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/all-users' element={<AllUsers/>}/>
          <Route path='/create-post' element={<CreatePosts/>}/>
          <Route path='/update-post/:id' element={<EditPost/>}/>
          <Route path='/posts/:id' element={<PostDetails/>}/>
          <Route path='/profile/:id/*' element={<Profile/>}/>
          <Route path='/update-profile/:id' element={<UpdateProfile/>}/>
        </Route>
      </Routes>
      <Toaster/>
    </main>
  )
}

export default App
