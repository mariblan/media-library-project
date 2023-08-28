import Card from './Card';
import { Link } from 'react-router-dom';

const Catalog = ({ section, media }) => {
  return (
    <>
      <h3 className='section'>{section.name}</h3>
      <div className='cards'>
        {media
          .filter(
            (media) =>
              media.comingSoon === section.comingSoon &&
              media.recentlyAdded === section.recentlyAdded
          )
          .map((media) => (
            <Link key={media.id} to={`/${media.category}s/${media.id}`}>
              <Card {...media} />
            </Link>
          ))}
      </div>
    </>
  );
};
export default Catalog;
