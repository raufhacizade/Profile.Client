const DeleteUserBtn = ({ handleOnClick }) => {
  return (
    <button
      className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-error"
      onClick={handleOnClick}
    >
      Delete
    </button>
  );
};

export default DeleteUserBtn;
