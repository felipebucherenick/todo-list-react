import React from 'react';
import { withStorageListener } from './withStorageListener';

import '../styles/ChangeAlert.scss';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div className="ChangeAlert-container">
        <div className="ChangeAlert">
          <p>Parece que Hubo cambios en TODO list en otra pestaña o ventana de tu navegador</p>
          <p>¿Quieres sincronizar TODO list?</p>
          <button className="ChangeAlert__button" onClick={() => toggleShow(false)}>
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
