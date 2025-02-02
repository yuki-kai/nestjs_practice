"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { createGetApi } from "@/lib/apiClient";
import { useEffect } from "react";

export default function PracticeCSR() {
  console.log("===== PracticeCSR =====");
  
  useEffect(() => {
    (async() => {
      const res =  await createGetApi("/practice");
      console.log(res);
    })();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>CSR</h1>
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
