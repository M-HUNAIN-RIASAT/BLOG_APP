import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/blogs/${id}/`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p className="card-text">{blog.content}</p>
          <div className="mt-3">
            <button 
              className="btn btn-primary me-2"
              onClick={() => navigate(`/edit-blog/${blog.id}`)}
            >
              Edit
            </button>
            <button 
              className="btn btn-danger"
              onClick={async () => {
                try {
                  await axios.delete(`http://localhost:8000/api/blogs/${blog.id}/`);
                  navigate('/');
                } catch (error) {
                  console.error('Error deleting blog:', error);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;