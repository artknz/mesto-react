import React from 'react';
import custoAvatar from '../images/avatar-custo.jpg'

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar">
          <img src={custoAvatar} alt="#" className="profile__avatar-img" name="avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button type="button" aria-label="Редактировать" className="profile__edit-button" />
          <p className="profile__status">Исследователь океана</p>
        </div>
        <button type="button" aria-label="Добавить" className="profile__add-button" />
      </section>
      <section className="elements" />

      <section className="popup popup_profile">
        <form name="profile-popup" novalidate method="POST" action="#" className="popup__container popup__container_form popup_container_type_edit">
          <button type="button" aria-label="Закрыть" className="popup__close popup__close_type_profile" />
          <h3 className="popup__title">Редактировать профиль</h3>

          <input id="name-input" type="text" placeholder="Имя" name="name" minlength="2" maxlength="40" className="popup__field popup__field_type_name" required />
          <span id="name-input-error" className="popup__field-error" />

          <input id="status-input" type="text" placeholder="Статус" name="about" minlength="2" maxlength="200" className="popup__field popup__field_type_status" required />
          <span id="status-input-error" className="popup__field-error" />

          <button type="submit" className="popup__save popup__save_type_edit">Сохранить</button>
        </form>
      </section>

      <section className="popup popup_addcard">
        <form name="edit-popup" novalidate method="POST" action="#" className="popup__container popup__container_form popup__container_type_add">
          <button type="button" aria-label="Закрыть" className="popup__close popup__close_type_cards" />
          <h3 className="popup__title">Новое место</h3>

          <input id="title-input" type="text" placeholder="Название" name="name" minlength="1" maxlength="30" className="popup__field popup__field_type_title" required />
          <span id="title-input-error" className="popup__field-error" />

          <input id="link-input" type="url" placeholder="Ссылка на картинку" name="link" className="popup__field popup__field_type_link" required />
          <span id="link-input-error" className="popup__field-error" />

          <button type="submit" className="popup__save popup__save_type_add popup__save_inactive" disabled>Создать</button>
        </form>
      </section>

      <section className="popup popup_image">
        <div className="popup__container popup__container_type_image">
          <button type="button" aria-label="Закрыть" className="popup__close popup__close_type_image" />
          <img src="#" alt="" className="popup__capture" />
          <h4 className="popup__titile popup__titile_type_image" />
        </div>
      </section>

      <section className="popup popup_delete">
        <form name="delete-popup" novalidate action="#" className="popup__container popup__container_form popup__container_type_delete">
          <button type="button" aria-label="Закрыть" className="popup__close popup__close_type_delete" />
          <h3 className="popup__title">Вы уверены?</h3>
          <button type="submit" className="popup__save popup__save_type_delete">Да</button>
        </form>
      </section>

      <section className="popup popup_avatar">
        <form name="avatar-popup" novalidate action="#" className="popup__container popup__container_form">
          <button type="button" aria-label="Закрыть" className="popup__close popup__close_type_avatar" />
          <h3 className="popup__title">Обновить аватар</h3>
          <input id="title-input" type="text" placeholder="Ссылка на изображение" name="avatar" minlength="1" className="popup__field popup__field_type_avatar" required />
          <button type="submit" className="popup__save popup__save_type_avatar">Сохранить</button>
        </form>
      </section>

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
