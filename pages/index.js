import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>moneyGPT家族</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" className={styles.icon} />
        <h4>第一个moneyGPT应用：大哥/妹子, </h4>
        <h3>给我个名字吧</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="human"
            placeholder="给我一个特点"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="起名" />
        </form>
        <div className={styles.result}>{result}</div>
        
        <h5>
          <a href="mailto:moneygpt@clovercapital.cn">我要：出钱、出力、出意见</a> 
          <p>出生日期：2023/02/16(0天)</p>
          <p>功能：english name generator</p>
        </h5>
      </main>
    </div>
  );
}
