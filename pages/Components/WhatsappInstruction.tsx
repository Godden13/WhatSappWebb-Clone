"use client";

import Styles from "../../styles/Instruction.module.css";
import InstructionImgIcon from "../../assets/images/whatlaptop.png";
import Image from "next/image";
import { BiLockAlt } from "react-icons/bi";

const WhatsappInstruction = () => {
  return (
    <div className={Styles.instruction}>
      <div className={Styles.instruction__firstcontainer}>
        <div className={Styles.imgContainer}>
          <Image src={InstructionImgIcon} alt="whatlaptop"  className={Styles.image}/>
        </div>
        <div className={Styles.first__containertext}>
          <div className={Styles.teaxtheading}>
            <h2>Whatsapp Web</h2>
          </div>
          <div className={Styles.teaxtparagraph}>
              <p>
                Envoyez et recevez des messages sans avoir à garder votre
                téléphone connecté. <br />
                Utilisez WhatsApp sur un maximum de 4 appareils et
                1&nbsp;téléphone, simultanément.
              </p>
            </div>
        </div>
      </div>
      <div className={Styles.instruction__bottom}>
        <BiLockAlt className={Styles.bottomicon} />
        <p>Chiffré de bout en bout</p>
      </div>
    </div>
  );
};

export default WhatsappInstruction;
