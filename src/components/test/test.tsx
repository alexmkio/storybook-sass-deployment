import Image from "next/image";
import nextLogo from "../../../public/assets/images/next.svg";
import styles from "./test.module.scss";

export default function Test() {
  return (
    <>
      <p>This works:</p>
      <Image
        src="/assets/images/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <p>And this works:</p>
      <div
        className={styles.logo}
        style={{
          backgroundImage: `url(${nextLogo.src})`,
        }}
      />
      <p>But this doesn't:</p>
      <div className={styles.badLogo} />
    </>
  );
}
