import React from 'react';
import {api} from '../utils/api.js';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar}) {
  const[userAvatar, setUserAvatar] = React.useState('');
  const[userName, setUserName] = React.useState('');
  const[userDescription, setUserDescription] = React.useState('');
  const[cards, setCards] = React.useState('');

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
      <section className="elements" />

      <template className="elements-template">
        <div className="element">
          <img src="#" alt="" className="element__image" />
          <button type="button" className="element__delete" />
          <div className="element__title">
            <h3 className="element__text" />
            <div className="element__likes">
              <button type="button" className="element__like" />
              <div className="element__like-count" />
            </div>
          </div>
        </div>
      </template>
    </main>
  )
}
