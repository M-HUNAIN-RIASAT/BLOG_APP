// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar'; // Import Navbar component
// import Home from './pages/Home'; // Import Home page
// import BlogDetails from './pages/BlogDetails'; // Import BlogDetails page
// import EditBlog from './pages/EditBlog'; // Import EditBlog page
// import Signup from './pages/Signup'; // Import Signup page
// import Login from './pages/Login'; // Import Login page
// import CreateBlog from './pages/CreateBlog'; // Import CreateBlog page

// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Include the Navbar component */}
//       <Routes>
//         {/* Define the routes for different pages */}
//         <Route path="/" element={<Home />} /> {/* Home Page */}
//         <Route path="/blog-details/:id" element={<BlogDetails />} /> {/* Blog Details Page */}
//         <Route path="/edit-blog/:id" element={<EditBlog />} /> {/* Edit Blog Page */}
//         <Route path="/create-blog" element={<CreateBlog />} /> {/* Create Blog Page */}
//         <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
//         <Route path="/login" element={<Login />} /> {/* Login Page */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './pages/Home'; // Import Home page
import BlogDetails from './pages/BlogDetails'; // Import BlogDetails page
import EditBlog from './pages/EditBlog'; // Import EditBlog page
import Signup from './pages/Signup'; // Import Signup page
import Login from './pages/Login'; // Import Login page
import CreateBlog from './pages/CreateBlog'; // Import CreateBlog page

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        {/* Define the routes for different pages */}
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/blog-details/:id" element={<BlogDetails />} /> {/* Blog Details Page */}
        <Route path="/edit-blog/:id" element={<EditBlog />} /> {/* Edit Blog Page */}
        <Route path="/create-blog" element={<CreateBlog />} /> {/* Create Blog Page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
      </Routes>
    </Router>
  );
}

export default App;
