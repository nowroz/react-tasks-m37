import { Suspense, use } from "react";

export default function UserList({ usersPromise }) {
  if (usersPromise === null) {
    return <h1>Failed to fetch data...</h1>;
  }
  return (
    <Suspense fallback={<LoadingUsers></LoadingUsers>}>
      <Users usersPromise={usersPromise}></Users>
    </Suspense>
  );
}

function Users({ usersPromise }) {
  const users = use(usersPromise);

  return (
    <div className="card">
      <h3>Users: {users.length}</h3>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}

function User({ user }) {
  const {
    name,
    company: { name: companyName },
    address: { city },
  } = user;

  return (
    <div className="card">
      <h4>{name}</h4>
      <h5>Company: {companyName}</h5>
      <h5>City: {city}</h5>
    </div>
  );
}

function LoadingUsers() {
  return (
    <div className="card">
      <h3>Fetching users...</h3>
    </div>
  );
}
