import React from "react";
import { useQuery } from "react-query";
import swal from "sweetalert";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch
  } = useQuery(["usersData"], () =>
    fetch("https://nameless-inlet-18267.herokuapp.com/user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    swal({
      title: "Fetch Error",
      text: "Faild To Fetch Data",
      icon: "error",
    });
  }
  // console.log(users);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            
            <th>Email</th>
            <th>Admin</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((user, index) => (
              <UserRow refetch={refetch} key={index} index={index} user={user} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
