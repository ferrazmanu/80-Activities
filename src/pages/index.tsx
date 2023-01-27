import Head from "next/head";
import { useEffect, useState } from "react";
import { data } from "../data";

export default function Home() {
  const [activePhrase, setActivePhrase] = useState(0);

  const phrases = data;

  const randomPhrase = () => {
    setActivePhrase(Math.floor(Math.random() * phrases.length));
  };

  useEffect(() => {
    randomPhrase();
  });

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
