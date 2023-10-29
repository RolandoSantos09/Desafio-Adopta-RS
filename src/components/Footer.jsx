const Footer = ({ text }) => {
  const estiloFooter = {
    color: "blue",
    fontSize: "0.9rem",
    textAlign: "center",
  };
  return (
    <div className="footer">
      <h5 style={estiloFooter}>{text}</h5>
    </div>
  );
};
export default Footer;
