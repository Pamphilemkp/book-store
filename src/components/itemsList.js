 
 function ItemsList (props){

    
    
    
    return (
        <ul>
            <li>
                <p key= { props.author } > { props.handleSubmitprop.author } : 
                <span> {props.title } </span> </p>
                <button key= { props.title } > delete </button>
            </li>
        </ul>
    )
 }
 export default ItemsList;