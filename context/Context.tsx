import { createContext } from "react";

const UserData = createContext();

const Context = ({ children }) => {
  const name: string = "NMJ";

  return <UserData.Provider value={name}>{children}</UserData.Provider>;
};

export default Context;
export { UserData };
