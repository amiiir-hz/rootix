import { useState, useEffect } from "react";
import { useGetUser } from "src/shared/auth/UserProvider";

export default () => {
  const [value, setValue] = useState("");
  const user = useGetUser();
  useEffect(() => {
    if (user?.is_admin ===1) {
      setValue("admin");
    } else if (user?.is_admin === 0) {
      setValue("client");
    }
  }, [user]);
  return [value];
};
