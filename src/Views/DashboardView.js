import React, { useEffect, useState } from "react";
import UsersList from "../Components/Organisms/UsersList/UsersList";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  grid-column: 2/3;
  grid-row: 2/3;
  margin-top: 8px;
  padding: 0.5rem 0;
`;

const DashboardView = () => {
  const { id } = useParams();

  const [usersList, setUsersList] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get("/groups")
      .then(({ data }) => {
        setGroups(data.groups);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setUsersList(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <>
      <Nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}
          </Link>
        ))}
      </Nav>
      <UsersList usersList={usersList} />
    </>
  );
};

export default DashboardView;
