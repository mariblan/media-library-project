import Card from '../Cards/Card';
import { Link } from 'react-router-dom';

const Series = ({ media }) => {
  return (
    <div className='films'>
      <div className='cards'>
        {media
          .filter((media) => media.category === 'Serie')
          .map((media) => (
            <Link key={media.id} to={`/films/${media.id}`}>
              <Card {...media} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Series;
