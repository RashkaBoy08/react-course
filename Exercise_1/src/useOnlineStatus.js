import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);

  console.log(navigator.onLine);

  useEffect(() => {
    window.addEventListener("offline", () => setOnline(false));

    window.addEventListener("online", () => setOnline(true));
  }, []);

  return { isOnline };

  //end
};
