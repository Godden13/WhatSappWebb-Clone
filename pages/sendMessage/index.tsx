import { useAuth } from "@/context/AuthContext";
import { auth, db } from "@/fireBase/config";
import {
  QuerySnapshot,
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

export default function SendMessage() {
  const [message, setMessage] = useState<any>("");
  const { user } = useAuth();

  const sendMessage = async (e: any) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("send a valid message");
    }

    await addDoc(collection(db, "messages"), {
      text: message,
      name: user?.displayName,
      avatar: user?.photoURL,
      sent_datetime: serverTimestamp(),
    });
    setMessage("");
  };

  useEffect(():any => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(10)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages: any[] = [];
      QuerySnapshot.forEach((doc:any) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });
    return ()=>unsubscribe
  }, []);

  return (
    <form className="send-message" onSubmit={sendMessage}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
