import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { createGetApi } from "@/lib/apiClient";

export default async function Ssr() {
  console.log("===== Ssr =====");
  await createGetApi("/practice");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>SSR</h1>
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
