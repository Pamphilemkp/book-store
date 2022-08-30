/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
function ItemsList(props) {
  return (
    <ul className="list">
      {props.books.map((data) => (
        <li key={data.id} className="list-items">
          <p>
            {data.author}
            :
            <span>{data.title}</span>
          </p>
          <button>delete</button>
        </li>
      ))}
    </ul>
  );
}
export default ItemsList;
