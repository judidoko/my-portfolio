import React, { useEffect, useState } from "react";
import SanityClient from "../client.js";

function Project() {
  const [projectData, setprojectData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type =="project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
    )
      .then((data) => setprojectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container font-Roboto mx-auto">
        <h1 className="text-5xl flex justify-center"> My Projects</h1>
        <h1 className="text-lg text-gray-600 flex justify-center mb-12">
          {" "}
          Welcome to my project page!
        </h1>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow xl bg-white p-6">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-2">
                  <span>
                    <strong className="font-bold"> Finished Date:</strong>{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold"> Company:</strong>{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold"> Type:</strong>{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 font-bold hover:underline hover:text-blue-400"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      {" "}
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Project;
