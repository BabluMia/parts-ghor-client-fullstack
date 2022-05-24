import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useToken = (email , displayName) => {
  // console.log(user);
  const [token, setToken] = useState("");
  // const [user1] = useAuthState(auth);
  useEffect(() => {
    // const email = user1?.email;

    if (email && displayName) {
      const currentUser = { email: email, displayName: displayName };
      fetch(`https://nameless-inlet-18267.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          // console.log(accessToken);
        });
    }
  }, [email,displayName]);
  return [token];
};
export default useToken;
