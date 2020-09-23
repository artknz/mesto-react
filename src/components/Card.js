import React from 'react';

export default function Card(props) {
  const { card, onCardClick } = props;

  const handleCardClick = () => {
    onCardClick(card);
  }

  return(
    <div className="element">
      <img onClick={handleCardClick} src={card.link} alt={card.name} className="element__image" />
      <button type="button" className="element__delete" />
      <div className="element__title">
        <h3 className="element__text">{card.name}</h3>
        <div className="element__likes">
          <button type="button" className="element__like" />
          <div className="element__like-count">{card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}
