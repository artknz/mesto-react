import React from 'react';
import {api} from '../utils/api.js';
import Card from './Card';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const[userAvatar, setUserAvatar] = React.useState('');
  const[userName, setUserName] = React.useState('');
  const[userDescription, setUserDescription] = React.useState('');
  const[cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()]).then(
      ([item, data]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(item);
      }
    )
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button onClick={onEditAvatar} className="profile__avatar">
          <img src={userAvatar} alt="#" className="profile__avatar-img" name="avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button onClick={onEditProfile} type="button" aria-label="Редактировать" className="profile__edit-button" />
          <p className="profile__status">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} type="button" aria-label="Добавить" className="profile__add-button" />
      </section>
      <section className="elements">{cards.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} />)}</section>
    </main>
  )
}
