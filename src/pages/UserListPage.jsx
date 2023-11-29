import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { API_URL_USER } from "../utils/urls/index";
import EditUserBtn from "../components/EditUserBtn";
import DeleteUserBtn from "../components/DeleteUserBtn";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const initialDataState = {
  skip: 0,
  take: 10,
};

function UserListPage() {
  const [users, setUsers] = useState([]);
  const [totalUserNumber, seTotalUserNumber] = useState();
  const [page, setPage] = useState(initialDataState);
  const [pageSizeValue, setPageSizeValue] = useState();

  const loadData = () => {
    axios
      .get(API_URL_USER + page.skip + ":" + page.take)
      .then((res) => {
        setUsers(res.data.data);
        seTotalUserNumber(res.data.totalCount);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.delete(API_URL_USER + id);
      console.log(response);
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const pageChange = (event) => {
    const targetEvent = event.targetEvent;
    const take =
      targetEvent.value === "All" ? totalUserNumber : event.page.take;
    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    loadData();
    setPage({
      ...event.page,
      take,
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const ActionCell = (props) => {
    return (
      <td>
        <DeleteUserBtn
          handleOnClick={() => handleDeleteUser(props.dataItem.id)}
        />
        <EditUserBtn id={props.dataItem.id} />
      </td>
    );
  };

  return !users ? (
    <Loading />
  ) : (
    <div>
      <Link
        to={"/create"}
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
      >
        Add User
      </Link>
      <Grid
        data={users}
        skip={page.skip}
        take={page.take}
        total={totalUserNumber}
        pageable={{
          buttonCount: 4,
          pageSizes: [5, 10, 15, "All"],
          pageSizeValue: pageSizeValue,
        }}
        onPageChange={pageChange}
      >
        <GridColumn field="id" width={50} />
        <GridColumn field="firstName" title="First Name" />
        <GridColumn field="lastName" title="Last name" />
        <GridColumn field="email" title="Email address" />
        <GridColumn field="address" title="Address" />
        <GridColumn field="phoneNumber" title="Phone Number" />
        <GridColumn title="Action" cell={ActionCell} />
      </Grid>
    </div>
  );
}

export default UserListPage;
