import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import {api} from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


export default function App() {

  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const[selectedCard, setSelectedCard] = React.useState(null);
  const[currentUser, setCurrentUser] = React.useState(CurrentUserContext);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleUpdateUser(user) {
    api.editUserInfo(user).then((data) => {
      setCurrentUser(data)
    });
    closeAllPopups()
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  React.useEffect(() => {
    api.getUserInfo()
    .then(data => {
      setCurrentUser(data)
    })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={setSelectedCard}
      />
      <Footer />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input id="title-input" type="text" placeholder="Ссылка на изображение" name="avatar" minLength="1" className="popup__field popup__field_type_avatar" required />
      </PopupWithForm>

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

      <PopupWithForm
        name='addcard'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="title-input" type="text" placeholder="Название" name="name" minLength="1" maxLength="30" className="popup__field popup__field_type_title" required />
        <span id="title-input-error" className="popup__field-error" />

        <input id="link-input" type="url" placeholder="Ссылка на картинку" name="link" className="popup__field popup__field_type_link" required />
        <span id="link-input-error" className="popup__field-error" />
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
    </CurrentUserContext.Provider>
  );
}
