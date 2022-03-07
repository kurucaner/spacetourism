import React, { useState } from "react";
import { crew } from "../starter-code/data";

const Crew = () => {
  const [people] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = people[value];

  return (
    <>
      <section className="home crew px-5">
        <h1 className="pt-20  lg:pt-40 lg:max-w-7xl lg:mx-auto text-white text-4xl uppercase mb-10">
          02 Meet your crew
        </h1>

        <div className="md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto">
          <article>
            <img
              src={images.png}
              alt={name}
              title={name}
              className="block mx-auto w-3/4 bm-10"
            />
          </article>

          <article className="text-center lg:text-left">
            {people.map((item, index) => (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`uppercase text-white text-2xl pb-2 mx-2 ${
                  index === value && "border-b border-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <h2 className="text-5xl font-bold text-white mt-10 bm-5 uppercase tracking-widest">
              {name}
            </h2>
            <p className="text-gray-400 pb-10">{bio}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Crew;
