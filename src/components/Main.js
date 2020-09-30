import React from 'react';
import {api} from '../utils/api.js';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const[cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext)

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id)
      setCards(newCards);
    });
  }

  React.useEffect(() => {
    api.getInitialCards().then(
      (item) => {
        setCards(item);
      }
    )
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button onClick={onEditAvatar} className="profile__avatar">
          <img src={currentUser.avatar} alt="#" className="profile__avatar-img" name="avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button onClick={onEditProfile} type="button" aria-label="Редактировать" className="profile__edit-button" />
          <p className="profile__status">{currentUser.about}</p>
        </div>
        <button onClick={onAddPlace} type="button" aria-label="Добавить" className="profile__add-button" />
      </section>
      <section className="elements">{cards.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />)}</section>
    </main>
  )
}
