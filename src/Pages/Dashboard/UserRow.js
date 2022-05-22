import React from 'react';

const UserRow = ({user , index}) => {
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{user?.displayName}</td>
            <td>{user?.email}</td>
            <td>Purple</td>
          </tr>
    );
};

export default UserRow;