import Head from "next/head";
import { useState } from "react";
import { data } from "../data";

export default function Home() {
  const [activePhrase, setActivePhrase] = useState(0);

  const phrases = data;

  const randomPhrase = (e: any) => {
    const len = phrases.length;
    setActivePhrase(Math.floor(Math.random() * len));
  };

  return (
    <>
      <Head>
        <title>80 Activities</title>
        <meta
          name="description"
          content="80 atividades para fazer após o trabalho"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="content">
          <h1>Your activity after work today is:</h1>
          <h2 key={activePhrase}>{phrases[activePhrase]}</h2>
          <button onClick={randomPhrase}>Change</button>
        </div>
      </main>
    </>
  );
}
