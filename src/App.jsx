import "./App.css";
import Counter from "./Counter";
import ShowHideText from "./ShowHideText";
import UserList from "./UserList";

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

function App() {
  const usersPromise = fetchUsers();

  return (
    <>
      <UserList usersPromise={usersPromise}></UserList>

      <ShowHideText></ShowHideText>

      <Counter></Counter>
    </>
  );
}

export default App;
