import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { createGetApi, createGetIsrApi } from "@/lib/apiClient";

export default async function Isr() {
  console.log("===== Isr =====");
  const data = await createGetIsrApi("/practice/time/get");
  console.log(data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>ISR</h1>
        <p>{ data }</p>
        <Link href="/">Home</Link>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
