import React from "react";
import image from "../image/laptop image.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Laptop"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-10 lg:pt-60 px-8">
        <h1 className=" mt-20 text-blue-700 font-Roboto font-bold leading-none lg:leading-snug home-name">
          {" "}
          Haloo. I'm Juddoko.
        </h1>
      </section>
    </main>
  );
}
