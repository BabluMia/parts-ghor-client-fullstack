import React from "react";
import swal from "sweetalert";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        // "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          swal({
            title: "Admin Making Error",
            text: "Faild To Make An Admin",
            icon: "error",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
            swal({
              title: "Admin Information",
              text: "Succesfully Added Admin",
              icon: "success",
            })}


        refetch();
      })
  };
  return (
    <tr class="hover">
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button class="btn btn-sm" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-sm">Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
