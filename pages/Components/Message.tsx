"use client";
import React, { useState } from "react";
import styles from "../../styles/Messages.module.css";
import Computer from "../../assets/images/computer.jpg";
import Image from "next/image";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  BsThreeDotsVertical,
  BsEmojiLaughing,
  BsPersonFill,
  BsFillFileEarmarkFill,
  BsFillCameraFill,
  BsStickyFill,
} from "react-icons/bs";
import { HiOutlinePaperClip, HiPhotograph } from "react-icons/hi";
import { MdSend, MdBarChart } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import PagePopup from "./PagePopup";

function Message({ setChats }: any) {
  const [see, setSee] = useState(false);
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.messages__container}>
      <div className={styles.messages__nav}>
        <div className={styles.contact__infos}>
          <AiOutlineArrowLeft
            className={styles.arrowOut}
            onClick={() => setChats(false)}
          />
          <Image
            src={Computer}
            alt="mainperson"
            className={styles.contactImg}
          />

          <div className={styles.messages__name}>
            <p className={styles.name}>kadji Alan</p>
            <p className={styles.status}>online</p>
          </div>
        </div>

        <div className={styles.icons__holder}>
          <BiSearchAlt2 className={styles.sidebar__icons} title="Search..." />
          {hover ? (
            <BsThreeDotsVertical
              className={styles.sidebar__iconhover}
              onClick={() => {
                setMenu(!menu);
                setHover(false);
              }}
              title="Menu"
            />
          ) : (
            <BsThreeDotsVertical
              className={styles.sidebar__icon}
              onClick={() => {
                setMenu(!menu);
                setHover(true);
              }}
              title="Menu"
            />
          )}
        </div>
        {menu && <PagePopup />}
      </div>
      {see && (
        <div className={styles.multimedia}>
          <MdBarChart className={styles.bars} />
          <BsPersonFill className={styles.person} />
          <BsFillFileEarmarkFill className={styles.file} />
          <BsFillCameraFill className={styles.camera} />
          <BsStickyFill className={styles.sticker} />
          <HiPhotograph className={styles.gallerie} />
        </div>
      )}

      <div className={styles.bottom__nav}>
        <div className={styles.bottom__nav__content}>
          <BsEmojiLaughing className={styles.sidebar__icons} />
          <HiOutlinePaperClip
            className={styles.sidebar__icons}
            onClick={() => setSee(!see)}
            title="Attach"
          />
          <form>
            <input type="text" placeholder="write a message" />
            <MdSend className={styles.sidebar__icons} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Message;
