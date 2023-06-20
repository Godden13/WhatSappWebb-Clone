"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../../styles/ContactBar.module.css";
import { MdGroups2, MdMessage } from "react-icons/md";
import { BsThreeDotsVertical, BsFilter } from "react-icons/bs";
import { BiChevronDown, BiSearchAlt2 } from "react-icons/bi";
import { TbCircleDotted } from "react-icons/tb";
import Alan from "../../assets/images/pic.png";
import Flower from "../../assets/images/love.jpg";
import { useState } from "react";
import WhatsappInstruction from "./WhatsappInstruction";
import Message from "./Message";
import SidebarPopup from "./SidebarPopup";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const [isHovering, setIsHovering] = useState(false);
  const [chats, setChats] = useState(false);
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.nav__background}>
          <div className={styles.main}>
            <div className={styles.wrapper}>
              <div className={styles.sidebar}>
                <div className={styles.sidebar__head}>
                  <div className={styles.sidebar__nav}>
                    <Image
                      src={Alan}
                      alt="mainperson"
                      className={styles.profilUserImg}
                    />
                    <div className={styles.icons__holder}>
                      <MdGroups2
                        className={styles.sidebar__icons}
                        title="Communities"
                      />
                      <TbCircleDotted
                        className={styles.sidebar__icons}
                        title="Status"
                      />
                      <MdMessage
                        className={styles.sidebar__icons}
                        title="New chat"
                      />

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
                  </div>

                  {menu && <SidebarPopup />}
                  <div className={styles.input__holder}>
                    <div className={styles.input}>
                      <input
                        placeholder="Search or start new chat"
                        className={styles.sidebar__input}
                      />
                      <BiSearchAlt2 className={styles.search} />
                    </div>
                    <BsFilter
                      className={styles.sidebar__Icon}
                      title="Unread chats filter"
                    />
                  </div>
                </div>

                <div className={styles.contact__holders}>
                  <div
                    className={styles.contact}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={() => setChats(true)}
                  >
                    <Image
                      src={Flower}
                      alt="mainperson"
                      className={styles.contactImg}
                    />

                    <div className={styles.messages__container}>
                      <div className={styles.messages__name}>
                        <p className={styles.name}>Kadji alan</p>
                        <p className={styles.text}>welcome home</p>
                      </div>

                      <div className={styles.messages__time}>
                        <label>15:30</label>
                        {isHovering && <BiChevronDown />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.show}>
                <WhatsappInstruction />
                {chats && (
                  <div className={styles.exchange}>
                    <Message setChats={setChats} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
