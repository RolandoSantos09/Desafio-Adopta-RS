import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Tags = ({ colorButton, textButton }) => {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Badge bg={colorButton}>{textButton}</Badge>
      </Stack>
    </>
  );
};
export default Tags;
