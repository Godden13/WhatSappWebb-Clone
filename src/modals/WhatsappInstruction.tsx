import styles from "../styles/whatsappInstruction.module.css";
import InstructionImgIcon from "../assets/images/whatlaptop.png";
import Image from "next/image";
import {BiLockAlt} from "react-icons/bi"

const WhatsappInstruction = () => {
  return (
    <div className={styles.instruction}>
      <div className={styles.instruction__firstcontainer}>
        <div className={styles.imgContainer}>
          <Image src={InstructionImgIcon} alt="whatlaptop" />
        </div>
        <div className={styles.first__containertext}>
          <div className={styles.teaxtheading}>
            <h2>Whatsapp Web</h2>
            <div className={styles.teaxtparagraph }>
              <p>
                Envoyez et recevez des messages sans avoir à garder votre
                téléphone connecté. <br />
                Utilisez WhatsApp sur un maximum de 4 appareils et
                1&nbsp;téléphone, simultanément.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instruction__bottom}>
        <BiLockAlt className={styles.bottomicon} />
        <p>Chiffré de bout en bout</p>
      </div>
    </div>
  );
};

export default WhatsappInstruction;
