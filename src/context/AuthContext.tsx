import { auth } from "@/fireBase/config";
import { FacebookAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
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
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  return (
    <AuthContext.Provider value={{ user, faceBookSignIn}} > {isLoading ? null : children}</AuthContext.Provider>
  )
}