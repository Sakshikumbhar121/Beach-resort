import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Tropical Cocktail Creations for Beach Lovers.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Hiking is a recreational activity involving walking in natural enivironments, often on trails or paths.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "A shuttle at a beach resort provides complimentary transportaion for guests between the resort and nearby beaches or attractions.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "The strongest beers in the world often have an alcohol by volume(ABV) exceeding 40%.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            ); 
          })}
        </div>
      </section>
    );
  }
}
