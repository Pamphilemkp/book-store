import {useState} from 'react';
import { v4 as uuid} from 'uuid';

function InputItems (props) {
  const [data, setData] = useState({
    id: uuid,
    author:'',
    title: '',
  })

  const handleChange = (e)=> {
    setData(prev => {
      return { ...prev, [e.target.name]: e.target.value}
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.author.trim() &&  data.title.trim()){
      props.handleChange(
        {
          id: uuid,
          author: data.author,
          title: data.title,
        }
      )
    }

    setData({
      author:'',
      title: '',
    })
   
  }

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={data.author} name="author" onChange={handleChange} />
          <input type="text"  value={data.title}  name="title" onChange={handleChange} />
          <button>submit</button>
        </form>
    )
}

export default InputItems;