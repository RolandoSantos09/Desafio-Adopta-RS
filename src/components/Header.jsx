const Header = ({ titulo }) => {
  const misEstilos = {
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
  };
  return (
    <div>
      {" "}
      <h1 style={misEstilos}>{titulo}Adopta un Cachupín</h1>
    </div>
  );
};
export default Header;
