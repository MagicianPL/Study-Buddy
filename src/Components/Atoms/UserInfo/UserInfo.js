import React from "react";
import {Wrapper} from "./UserInfo.styles"

const UserInfo = ({ name, attendance }) => (
  <Wrapper>
    <p>{name}</p>
    <p>attendance: {attendance}</p>
  </Wrapper>
);

export default UserInfo;
