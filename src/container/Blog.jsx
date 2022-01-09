import React from "react";

import { useSelector } from "react-redux";

import ActionAreaCard from "../components/ActionAreaCard";

const paras = [
  {
    id: 1,
    text:
      "Star Wars is an American epic space opera[1] multimedia franchise created by George Lucas, which began with the eponymous 1977 film[b] and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[c] In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.",
  },
  {
    id: 2,
    text:
      "The original film (Star Wars), retroactively subtitled Episode IV: A New Hope (1977), was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to filmmaking to direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).",
  },
  {
    id: 3,
    text:
      "All nine films of the 'Skywalker saga' were nominated for Academy Awards, with wins going to the first two releases. Together with the theatrical live action \"anthology\" films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10 billion, which makes it the second-highest-grossing film franchise of all time.[3][4] An additional film, Rogue Squadron, is planned for release. A number of other films, including an independent trilogy, are suggested to be in development.",
  },
];
const Blog = () => {
  const movies = useSelector((state) => state.films);

  return (
    <div>
      <div className="row blog">
        {paras.map((p) => {
          return <p key={p.id}>{p.text}</p>;
        })}
      </div>

      <div className="row column-center">
        {movies.map((item) => {
          return (
            <div
              key={item.episode_id}
              className="col-lg-3 col-md-auto col-sm-auto"
            >
              <ActionAreaCard
                imgName={item.episode_id}
                title={item.title}
                description={item.opening_crawl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
