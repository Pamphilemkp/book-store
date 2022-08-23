

function InputItems (props) {

    return (
        <form onSubmit={props.handleSubmit}>
          <input type="text" placeholder="author" name="author" onChange={props.handleChange}/>
          <input type="text" placeholder="title" name="title" onChange={props.handleChange} />
          <button>submit</button>
        </form>
    )
}

export default InputItems;