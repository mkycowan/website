import React from "react";
import Head from "next/head";

import { Profile } from "@sections/profile";

const About = () => {
  return (
    <div>
      <Head>
        <title>Mikey - Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Profile />
      </main>
    </div>
  );
};

export default About;
