import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MisCartas = ({
  nombre,
  imagen,
  descripcion,
  colorButton,
  textButton,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags colorButton={colorButton} textButton={textButton} />
      </Card.Body>
    </Card>
  );
};

export default MisCartas;
