 
 function ItemsList (props){
    
    return (
        <ul>
            {props.books.map(book =>{
             return  <li >{book.author}</li>
            })}
        </ul>
    )
 }
 export default ItemsList;