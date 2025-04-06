import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value
    });
  };

  const handleSave = () => {
    const newBlog = {
      ...blog,
      id: Date.now(),
      date: new Date().toISOString()
    };
    let storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    storedBlogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(storedBlogs));
    navigate('/'); // Redirect to Home page after saving the blog
  };

  return (
    <div className="container mt-5">
      <h2>Create Blog</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            name="content"
            value={blog.content}
            onChange={handleChange}
            className="form-control"
            rows="6"
          />
        </div>
        <button type="button" onClick={handleSave} className="btn btn-success">Save Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
