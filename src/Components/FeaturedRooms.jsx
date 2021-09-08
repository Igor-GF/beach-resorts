import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from '../Components/Loading';
import Room from '../Components/Room';
import Title from '../Components/Title';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {

    const { featuredRooms } = this.context;
    console.log(featuredRooms);

    return (
      <div>
        <Title title="featured rooms"/>
        <Room />
        <Loading />
      </div>
    )
  }
}
