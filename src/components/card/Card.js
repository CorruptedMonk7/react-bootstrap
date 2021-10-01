import React from 'react';

const Card = (props) => {
    const{name,img}= props.item;
    return (
        <div class="col">
        <div class="card">
          <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
      </div>
    );
};

export default Card;