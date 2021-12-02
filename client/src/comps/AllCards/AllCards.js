import { Link } from "react-router-dom";
import React from "react";
import './AllCards.scss';

function AllCards(props) {

  return (
    <section>
      {props.cards.length > 0 &&
        props.cards.map((card) => (
          <div className="card" key={card.id}>
            <Link to={`/card/${card.name.toLowerCase()}`}>
              <img className="card-Pokemon" src={card.images.logo} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default AllCards;





