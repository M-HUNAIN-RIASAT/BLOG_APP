import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    date: ''
  });

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const foundBlog = storedBlogs.find((blog) => blog.id === Number(id));
    if (foundBlog) {
      setBlog(foundBlog); // Pre-fill the form with existing blog data
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value
    });
  };

  const handleSave = () => {
    let storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = storedBlogs.map((b) => 
      b.id === Number(id) ? { ...b, title: blog.title, content: blog.content, date: new Date().toISOString() } : b
    );
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate(`/blog-details/${id}`); // Redirect to the Blog Details page after saving
  };

  return (
    <div className="container mt-5">
      <h2>Edit Blog</h2>
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
        <button type="button" onClick={handleSave} className="btn btn-success">Save Changes</button>
      </form>
    </div>
  );
}

export default EditBlog;
