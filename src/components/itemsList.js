/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

function ItemsList(props) {
  const percentage = Math.floor(Math.random() * 100 + 1);
  return (
    <ul className="list">
      {props.books.map((data) => (
        <li key={data.item_id} className="list-items">
          <div className="data-elememts">
            <span>{data.category}</span>
            <h2 className="data-title">{data.title}</h2>
            <p>
              {data.author}
            </p>
            <div className="buttons">
              <span>Comments</span>
              <button onClick={() => props.bookRemove(data.item_id)}>delete</button>
              <span>Edit</span>
            </div>
          </div>

          <div className="progress-bar">
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={percentage} styles={buildStyles({ pathColor: '#379cf6', trailColor: 'rgb(177, 174, 174)' })} />
            </div>
            <div>
              <p>
                {`${percentage}%`}
                {' '}
                <br />
                <span className="low-color">Completed</span>
              </p>
            </div>

            <div>
              <p className="low-color">Chapter</p>
              <p>Preriquisty</p>
              <button className="progress-color" width="11.5rem">Update progress</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default ItemsList;
