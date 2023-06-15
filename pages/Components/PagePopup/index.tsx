"use client";

import React from "react";
import Styles from "../../../styles/Popup.module.css";

export default function PagePopup() {
  return (
    <div className={Styles.Box__content} style={{ width: 250 }}>
      <div className={Styles.Texte}>
        <div className={Styles.Texte__field}>
          <p>Contact info</p>
        </div>
        <div className={Styles.Texte__field}>
          <p>Select messages</p>
        </div>
        <div className={Styles.Texte__field}>
          <p>Close chat</p>
        </div>
        <div className={Styles.Texte__field}>
          <p>Mute notifications</p>
        </div>
        <div className={Styles.Texte__field}>
          <p>Disappearing messages</p>
        </div>
        <div className={Styles.Texte__field}>
          <p>Clear messages</p>
        </div>
        <div className={Styles.Texte__field}>
          <p>Delete chat</p>
        </div>
        <div className={Styles.Texte__field}>
          <p>Report</p>
        </div>
        <div className={Styles.Texte__field}>
          <p>Block</p>
        </div>
      </div>
    </div>
  );
}
