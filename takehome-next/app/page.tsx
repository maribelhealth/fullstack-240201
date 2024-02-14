import { AllUrls } from "../lib/ui/AllUrls";
import { ResolveUrlForm } from "../lib/ui/ResolveUrlForm";
import { ShortenUrlForm } from "../lib/ui/ShortenUrlForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Short.ly</h1>
      <p>A simple URL shortener</p>
      <div className={styles.spacer} />

      <h2>Shorten a URL</h2>
      <ShortenUrlForm />
      <div className={styles.spacer} />

      <h2>Resolve a shortened URL</h2>
      <ResolveUrlForm />
      <div className={styles.spacer} />

      <h2>All URLs</h2>
      <AllUrls />
    </main>
  );
}
