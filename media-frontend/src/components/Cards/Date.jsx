const ReleaseDate = ({ comingSoon, releaseDate }) => {
  return (
    comingSoon && (
      <div className='date'>
        Released on: <b>{releaseDate}</b>
      </div>
    )
  );
};

export default ReleaseDate;
