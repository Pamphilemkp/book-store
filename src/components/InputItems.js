/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function InputItems(props) {
  const [data, setData] = useState({
    id: uuid(),
    author: '',
    title: '',
    category: 'Biography',
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.author.trim() && data.title.trim()) {
      props.handleChange(
        {
          item_id: uuid(),
          title: data.title,
          author: data.author,
          category: data.category,
        },
      );
    }

    setData({
      author: '',
      title: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="author" value={data.author} name="author" onChange={handleChange} />
      <input type="text" placeholder="title" value={data.title} name="title" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        <option value="Fiction">Fiction</option>
        <option value="Biography">Biography</option>
        <option value="Romance novel">Romance novel</option>
        <option value="Spirituality">Spirituality</option>
        <option value="Horror">Horror</option>
        <option value="Poetry">Poetry</option>
        <option value="Business">Business</option>
        <option value="Cookbook">Cookbook</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Short story">Short story</option>
        <option value="Misery">Misery</option>
        <option value="Science">Science</option>
        <option value="Avanture">Avanture</option>
      </select>
      <button className="submit">submit</button>
    </form>
  );
}

export default InputItems;
