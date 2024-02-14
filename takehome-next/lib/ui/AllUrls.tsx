import React from "react";
import { getAllUrls } from "../api/getAllUrls";
import styles from "./AllUrls.module.css";
export type AllUrlsProps = {};

/**
 * a server-rendered component showing all of the urls that have been shortened
 * via our URL shortener
 */
export const AllUrls: React.FC<AllUrlsProps> = async ({}) => {
  const urls = await getAllUrls();

  return (
    <div className={styles.grid}>
      <div className={styles.gridHeader}>Original URL</div>
      <div className={styles.gridHeader}>Shortened URL</div>

      {urls.map((url) => (
        <>
          <div className={styles.gridCell}>{url.original}</div>
          <div className={styles.gridCell}>{url.shortened}</div>
        </>
      ))}
    </div>
  );
};
