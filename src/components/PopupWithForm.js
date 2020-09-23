import React from 'react';

export default function PopupWithForm({ name, title, isOpen, onClose, buttonText, children}) {
  return(
    <section className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <form name={name} className={`popup__container popup__container_form popup_container_type_${name}`}>
        <button onClick={onClose} type="button" aria-label="Закрыть" className="popup__close popup__close_type_profile" />
        <h3 className="popup__title">{title}</h3>
        {children}
        <button type="submit" className="popup__save popup__save_type_add popup__save_inactive" disabled>{buttonText}</button>
      </form>
    </section>
  )
}


