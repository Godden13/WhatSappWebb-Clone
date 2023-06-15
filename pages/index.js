import Head from "next/head";
import Image from "next/image";
import Styles from "../styles/Landing.module.css";
import { GrSettingsOption } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import Icon from "../assets/images/Whatsapp.png"
import Code from "../assets/images/scan.png";
import Scene from "../assets/images/video.png";
// import useAuth from "../context/AuthContext"
export default function Home() {

  // const handleClick = async ()=>{
  //   await faceBookSignIn()

  // }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Styles.Landing__page}>
        <div className={Styles.Main}>
          <div className={Styles.Upper__section}>
            <div className={Styles.Container}>
              <div className={Styles.Icon__field}>
                <Image src={Icon} alt="whatsapp" height="45" />
                <h4 className={Styles.iconame}>WHATSAPP WEB</h4>
              </div>
              <div className={Styles.Button__field}>
                <button className={Styles.Button}>Login</button>
                <button className={Styles.Button}>Signup</button> 
              </div>
            </div>
            <div className={Styles.Main__container}>
              <div className={Styles.Box__infos}>
                <section className={Styles.Section__one}>
                  <div className={Styles.Instructions}>
                    <h1 className={Styles.Header}>
                      Use WhatsApp on your computer
                    </h1>
                    <div className={Styles.Steps}>
                      <p>1. Open WhatsApp on your phone</p>
                      <p className={Styles.Para}>
                        2. Tap Menu{" "}
                        <SlOptionsVertical className={Styles.Smallicons} /> or
                        Settings{" "}
                        <GrSettingsOption className={Styles.Smallicons} /> and
                        select Linked Devices
                      </p>
                      <p>3. Tap on Link a device</p>
                      <p>
                        4. Point your phone to this screen to capture the QR
                        code
                      </p>
                    </div>
                  </div>
                  <Image className={Styles.WhatsappImg} src={Code} alt="scan" />
                </section>
                <section className={Styles.Section__two}>
                  <div className={Styles.Head__link}>
                    <h1 className={Styles.Header1}>Tutorail</h1>
                    <a
                      href="https://faq.whatsapp.com/1317564962315842/?helpref=uf_share"
                      className={Styles.Getlink}
                    >
                      Need help to get started?
                    </a>
                  </div>
                  <Image src={Scene} alt="video" className={Styles.VideoImg} />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
