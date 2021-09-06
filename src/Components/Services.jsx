import React, { Component } from 'react';
import Title from './Title';
import { FaDungeon, FaGhost, FaSkullCrossbones, FaRestroom} from 'react-icons/fa';

export default class Services extends Component {
  state={
    services: [
      {
        icon: <FaDungeon/>,
        title:"free cocktails",
        info: "Lorem ipsum CCC sit amet, consectetur adipisicing elit. Neque, asperiores."
      },
      {
        icon: <FaGhost/>,
        title:"endless hiking",
        info: "Lorem ipsum EEE sit amet, consectetur adipisicing elit. Neque, asperiores."
      },
      {
        icon: <FaSkullCrossbones/>,
        title:"free shutle",
        info: "Lorem ipsum FFF sit amet, consectetur adipisicing elit. Neque, asperiores."
      },
      {
        icon: <FaRestroom/>,
        title:"strong beer",
        info: "Lorem ipsum SSS sit amet, consectetur adipisicing elit. Neque, asperiores."
      }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
          {
            this.state.services.map((item, index) => {
              return (
                <article key={index} className="sevice">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })
          }
        </div>
      </section>
    )
  }
}
