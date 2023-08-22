import { useParams } from 'react-router-dom';

const Serie = ({ media }) => {
  const { id } = useParams();
  const oneMedia = media.find((media) => media.id.toString() === id);
  console.log(oneMedia);
  return (
    <div className=''>
      <div className='onemedia'>
        <img src={oneMedia.image} alt={oneMedia.title} />
        <div>
          <h2>{oneMedia.title}</h2>
          <div className='smallInfo'>
            <div>
              <h4>Category</h4>
              <p>{oneMedia.category}</p>
            </div>
            <div>
              <h4>Sub-category</h4>
              <p>{oneMedia.subCategory}</p>
            </div>
            <div>
              <h4>Year</h4>
              <p>{oneMedia.year}</p>
            </div>
          </div>
          <div>
            <h4>Synopsis</h4>
            <p>{oneMedia.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Serie;
