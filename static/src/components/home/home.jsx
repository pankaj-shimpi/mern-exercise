import React from 'react';
import './home.css';
import Card from '../card/card';

function returnCards() {
  let users = Array(10).fill({
    id: Math.floor(100000 + Math.random() * 900000),
    title: 'Card title',
    details: `This is a wider card with supporting text below as a natural
    lead-in to additional content. This content is a little bit longer.`,
    lastUpdated: 'Last updated 3 mins ago',
    imgSrc: 'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
  });
  return users.map(user => {
    return <Card key={user.id} user={user} />
  })
}

export default () => {
  return (<div className="container-fluid">
    {returnCards()}
  </div>)
}
