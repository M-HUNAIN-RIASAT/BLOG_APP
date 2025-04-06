import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/blogs/');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading blogs...</div>;

  return (
    <div className="container mt-4">
      <h1>Latest Blog Posts</h1>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div key={blog.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.content.substring(0, 100)}...</p>
              <Link to={`/blog-details/${blog.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs available. Create one!</p>
      )}
    </div>
  );
};

export default Home;