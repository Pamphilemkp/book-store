import {useState} from 'react'

function InputItems (props) {

  const [data, setData] = useState({
        author:'',
        title:'',
    });

    const handleChange = (e)=>{
      setData(prev => {
        return {
          ...prev,[e.target.name] : e.target.value
        }
      })
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.author.trim() !=='' && data.title.trim() !=='' ){
        props.handleChange({
          author: data.author,
          title: data.title
        })
       
    }
  }

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="author" onChange={handleChange} />
          <input type="text"  name="title" onChange={handleChange} />
          <button>submit</button>
        </form>
    )
}

export default InputItems;