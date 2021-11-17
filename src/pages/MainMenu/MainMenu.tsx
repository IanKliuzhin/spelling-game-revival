import React from 'react';

import './style.scss';

export const MainMenu = () => {
  return (
    <div className="globalWrapper">
      <div className="mainPage">
        <div className="wrapperButton">
          <div className="button">Создать битву</div>
          <div className="button">Присоедениться к битве</div>
        </div>
      </div>
    </div>
  );
};
