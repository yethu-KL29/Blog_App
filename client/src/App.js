import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Header from './components/Header';
import Auth from './components/Auth';
import UserBlog from './components/UserBlog';
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <div className="App">
   
    <Header/>
    <Routes>
   {!isLoggedIn &&  <Route path='/auth' element={<Auth/>}></Route>}
      
    {isLoggedIn &&  <>
      <Route path='/blogs' element={<Blog/>}></Route>
      <Route path='/MyBlogs' element={<UserBlog/>}></Route>
      <Route path='/MyBlogs/:id' element={<BlogDetails/>}></Route>
      <Route path='/blogs/add' element={<AddBlog/>}></Route>
      </>
}
    </Routes>
    </div>
  );
}

export default App;
