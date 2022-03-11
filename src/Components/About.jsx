import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import ImageUrlBuilder from "@sanity/image-url";
import image from "../image/laptop image.jpg";
import BlockContent from "@sanity/block-content-to-react";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAbout(data[0]))
      .catch(console.error);
  }, []);

  if (!about) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={image} alt="Codes picture" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shodow-2xl lg:flex p-10">
          <div className="flex ">
            <img
              src={urlFor(about.authorImage).url()}
              className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
              alt={about.name}
            />
            <div className="text-lg font-Roboto flex-col justify-center">
              <h1 className="text-4xl text-green-300 mt-10">
                Hey there, I'm {""}
                <span className="text-green-100">{about.name} </span>
              </h1>
            </div>
          </div>
          <div className="prose lg:prose-xl text-white mt-4">
            <BlockContent
              blocks={about.bio}
              projectId="f0pg7qp9"
              dataset="production"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

// function About() {
//   const [about, setAbout] = useState(null);

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "author"]{
//       name,
//       bio,
//       "authorImage": image->url
//     }`
//       )
//       .then((data) => setAbout(data[0]))
//       .catch(console.error);
//   }, []);

//   // if (!author) return <div>Loading...</div>;

//   return (
//     <main className="relative">
//       <img src={image} alt="Codes picture" className="absolute w-full" />
//       <div className="p-10 lg:pt-48 container mx-auto relative">
//         <section className="bg-green-800 rounded-lg shodow-2xl lg:flex p-20">
//           <img
//             src={urlFor(about.authorImage).url()}
//             className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
//             alt={about.name}
//           />
//           <div className="text-lg flex flex-col justify-center">
//             <h1 className="text-6xl text-green-300 mb-4">
//               Hey there, I'm {""}
//               <span className="text-green-100">{about.name} </span>
//             </h1>
//             <div className="prose lg:prose-xl text-white">
//               <BlockContent
//                 blocks={about.bio}
//                 projectId="f0pg7qp9"
//                 dataset="production"
//               />
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default About;
