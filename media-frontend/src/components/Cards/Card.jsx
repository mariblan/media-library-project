import ReleaseDate from './Date';
import { Link, Outlet } from 'react-router-dom';

function Card({ id, image, title, category, year, ...rest }) {
  return (
    <div key={id} className='card'>
      <div className='cardimg'>
        <img src={image} alt={title} />
        <ReleaseDate {...rest} />
      </div>
      <div className='container'>
        <h4>{title}</h4>
        <div className='piece-of-info'>
          <h6>Category:</h6>
          <small>{category}</small>
        </div>
        <div className='piece-of-info'>
          <h6>Year:</h6>
          <small>{year}</small>
        </div>
        <div className='piece-of-info'>
          <h6>Sinopsis:</h6>
          <Link to={`${id}`}>
            <small>See more...</small>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default Card;
