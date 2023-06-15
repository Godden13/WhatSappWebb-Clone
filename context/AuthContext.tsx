import {
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../fireBase/config";
import Cookies from "universal-cookie"
const cookies = new Cookies()

const AuthContext = createContext<any>(null);
export const useAuth = ()=>useContext(AuthContext);
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const faceBookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
        cookies.remove("auth-cookies")
        console.log("logOut successful");
      })
      .catch((err) => {
        console.log(err + "  message");
      });
  };

  return (
    <AuthContext.Provider value={{ user, faceBookSignIn, logOut }}>
      {" "}
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};