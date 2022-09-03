/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// const apiURl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IwD6i2qVfkciDWYsseU9/books';

function ItemsList(props) {
  return (
    <ul className="list">
      {props.books.map((data) => (
        <li key={data.item_id} className="list-items">
          <p>
            {data.author}
            :
          </p>
          <span>{data.title}</span>
          <span>{data.category}</span>
          <button onClick={() => props.bookRemove(data.item_id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
export default ItemsList;
