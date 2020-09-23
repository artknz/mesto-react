import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

export default function App() {

  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
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

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="name-input" type="text" placeholder="Имя" name="name" minLength="2" maxLength="40" className="popup__field popup__field_type_name" required />
        <span id="name-input-error" className="popup__field-error" />

        <input id="status-input" type="text" placeholder="Статус" name="about" minLength="2" maxLength="200" className="popup__field popup__field_type_status" required />
        <span id="status-input-error" className="popup__field-error" />
      </PopupWithForm>

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
    </div>
  );
}
