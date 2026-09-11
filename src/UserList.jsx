export const UserList = ({ userData }) => {
  //markup
  return (
    <div>
      <h1>User list</h1>
      <ul>
        {userData.map((user) => {
          return (
            <li key={user.id}>
              Name: {user.userName} Email: {user.email} Country:{" "}
              {user.nationality}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
