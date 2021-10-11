import React from 'react';

const UserItemList = ( {userData: {average, name, attendance}}) => (
    <li>
          <div>{average}</div>
          <div>
            <p>{name}</p>
            <p>{attendance}</p>
          </div>
          <button>x</button>
        </li>
);

export default UserItemList;