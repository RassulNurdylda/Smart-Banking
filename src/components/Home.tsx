import React from "react";
import Card from "./Card";
import Chat from "./Chat";
import Finance from "./Finance";
import Main from "./Main";
import Plan from "./Plan";
import Faq from "./Faq";
import { Foooter } from "./Foooter";

const Home = () => {
  return (
    <main>
      <Main />
      <Card />
      <Finance />
      <Chat />
      <Plan />
      <Faq />
      <Foooter />
    </main>
  );
};

export default Home;
