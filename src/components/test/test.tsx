import Image from "next/image";
import nextLogo from "../../../public/assets/images/next.svg";
import styles from "./test.module.scss";

export default function Test() {
  return (
    <>
      <p>This works:</p>
      <div
        className={styles.logo}
        style={{
          backgroundImage: `url(${nextLogo.src})`,
        }}
      />

      <Image src={nextLogo} alt="Next.js Logo" />
      <p>But this doesn't:</p>
      <div className={styles.badLogo} />
      <p>And neither does this (although not my main objective):</p>
      <Image
        src="/assets/images/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </>
  );
}
