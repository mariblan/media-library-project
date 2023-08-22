const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer'>
      <p>Netflopy.inc</p>
      <p>©</p>
      <p>{year}</p>
    </footer>
  );
};
export default Footer;
