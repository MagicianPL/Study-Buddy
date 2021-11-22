import React, { useEffect, useState } from "react";
import UsersList from "../Components/Organisms/UsersList/UsersList";
import { useParams } from "react-router-dom";
import axios from "axios";

const DashboardView = () => {
  const { id } = useParams();

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get(`/students/${id}`)
      .then(({ data }) => setUsersList(data.students))
      .catch((err) => console.log(err));
  }, [id]);

  return <UsersList usersList={usersList} />;
};

export default DashboardView;
