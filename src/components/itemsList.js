 
 function ItemsList (props){
    
    return (
        <ul className="list">
           {props.books.map( data => {
            return  <li key={data.id} className="list-items">
            <p> {data.author} : <span>{data.title}</span> </p>
            <button>delete</button>
        </li>
           })
            }
        </ul>
    )
 }
 export default ItemsList;