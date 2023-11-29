import { Link } from "react-router-dom";

const EditUserBtn = ({ id }) => {
  return (
    <Link
      to={`/update/${id}`}
      className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
    >
      Edit
    </Link>
  );
};

export default EditUserBtn;
