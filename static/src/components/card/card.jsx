import React from 'react';
import './card.css'
export default (props) => {
  return (
    <div className="card-deck col-sm-4">
      <div className="card">
        <img src={props.user.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.user.title}</h5>
          <p className="card-text">{props.user.details}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{props.user.lastUpdated}</small>
        </div>
      </div>
    </div>)
}
