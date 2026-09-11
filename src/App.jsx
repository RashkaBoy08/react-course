import { UserList } from "./UserList";

const App = () => {
  const user = [
    {
      id: 1,
      userName: "John Doe",
      email: "John@gmail.com",
      nationality: "Sweden",
    },
  ];
  //markup
  return <UserList userData={user} />;
};

export default App;
