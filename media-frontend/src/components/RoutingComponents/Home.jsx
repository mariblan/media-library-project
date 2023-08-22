import Catalog from '../Cards/Catalog';

const Home = ({ sections, media }) => {
  return (
    <div className='info'>
      {sections.map((section) => (
        <Catalog key={section.id} section={section} media={media} />
      ))}
    </div>
  );
};

export default Home;
