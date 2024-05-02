import { useEffect, useState } from "react";
import  {auth} from "../config/firebase"
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIN, setUserLoggedIN] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() =>{
    const unsubscibe = onAuthStateChan
  },[])
}
