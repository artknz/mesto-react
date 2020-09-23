import React from 'react';

export default class imagePopup extends React.Component {
  render() {
    return (
      <section className="popup popup_image">
        <div className="popup__container popup__container_type_image">
          <button type="button" aria-label="Закрыть" className="popup__close popup__close_type_image" />
          <img src="#" alt="" className="popup__capture" />
          <h4 className="popup__titile popup__titile_type_image" />
        </div>
      </section>
    )
  }
}
