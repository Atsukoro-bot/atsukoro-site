import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import preview1 from "../../public/images/preview1.png";

interface Props {}

export const FeaturePreview: React.FC<Props> = () => {
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    var maxWidth: number = 740;
    if (window.innerWidth < maxWidth) return setMobile(true);
  }, []);

  const updateImage = () => {
    if (!mobile)
      return (
        <div data-aos="fade-up-left" className={styles.info}>
          <div className={styles.dcs_l}>
            <h1>Play music quiz</h1>
            <h2>
              bruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh
              bruhbruhbruh bruhbruhbruh bruhbruhbruh bruh
            </h2>
          </div>
          <div className={styles.image}>
            <Image src={preview1} alt="preview2" placeholder="blur" />
          </div>
        </div>
      );
    else
      return (
        <div data-aos="fade-up-left" className={styles.info}>
          <div className={styles.image}>
            <Image src={preview1} alt="preview2" placeholder="blur" />
          </div>
          <div className={styles.dcs_l}>
            <h1>Play music quiz</h1>
            <h2>
              bruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh
              bruhbruhbruh bruhbruhbruh bruhbruhbruh bruh
            </h2>
          </div>
        </div>
      );
  };

  return (
    <div className={styles.container}>
      <div data-aos="fade-up-right" className={styles.info}>
        <div className={styles.image}>
          <Image src={preview1} alt="preview1" placeholder="blur" />
        </div>
        <div className={styles.dcs}>
          <h1>Search from Anilist</h1>
          <h2>You </h2>
        </div>
      </div>
      {updateImage()}
      <div data-aos="fade-up-right" className={styles.info}>
        <div className={styles.image}>
          <Image src={preview1} alt="preview3" placeholder="blur" />
        </div>
        <div className={styles.dcs}>
          <h1>Roleplay Commands</h1>
          <h2>
            bruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh
            bruhbruhbruh bruhbruhbruh bruhbruhbruh bruh
          </h2>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.ready}>
        <p>Ready to try it?</p>
        <Link
          href={
            "https://discord.com/oauth2/authorize?client_id=806179206785794098&permissions=139589963072&scope=bot"
          }
          passHref
        >
          <div className={styles.invite}>Invite</div>
        </Link>
      </div>
    </div>
  );
};
