import { useState, useEffect } from "react";

export const FetchUserData = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //delay
      await new Promise((resolve) => setTimeout(resolve, 10000));

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        let data = await response.json();
        setUser(data);
        setLoading(false);
        //error
      } catch (error) {
        console.error("error Failed to fetch user data", error);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h2> Loading...</h2>;

  //markup
  return (
    <div>
      <h1>Users data</h1>

      <ul>
        {user.map((u) => (
          <li>
            {" "}
            iD: {u.id}
            UserNames: {u.name} email: {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
