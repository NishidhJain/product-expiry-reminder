import { collection, getDoc } from "@firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebaseConfig";

const UserData = createContext();
const usersCollection = collection(db, "users");

const Context = ({ children }) => {
  const getProductList = async () => {
    const products = await getDoc(usersCollection);
  };
  const [items, setItems] = useState([
    {
      id: 1,
      productName: "Metacin",
      sellerName: "Jatin Pharma",
      returnStatus: false,
      purchaseDate: "Nov 2020",
      expiryDate: "Dec 2021",
    },
    {
      id: 2,
      productName: "Crocin",
      sellerName: "Jatin Pharma",
      returnStatus: true,
      purchaseDate: "Nov 2020",
      expiryDate: "Dec 2021",
    },
  ]);

  useEffect(() => {
    getProductList();
  }, []);

  const itemsNotReturned = items.filter((item) => item.returnStatus === false);
  const itemsReturned = items.filter((item) => item.returnStatus === true);

  const values = {
    items,
    itemsNotReturned,
    itemsReturned,
  };

  return <UserData.Provider value={values}>{children}</UserData.Provider>;
};

export default Context;
export { UserData };
