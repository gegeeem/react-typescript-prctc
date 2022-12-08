import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  //   const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
  };
  const handleLogout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <div>User name is: {user?.name}</div>{" "} */}
      {/*option chaining  because of <AuthUser | null> */}
      {/* <div>User email is: {user?.email}</div> */}

      {/* after type of state is setstate<AuthUser>({} as AuthUser) */}
      <div>User name is: {user.name}</div>
      <div>User email is: {user.email}</div>
    </div>
  );
};
