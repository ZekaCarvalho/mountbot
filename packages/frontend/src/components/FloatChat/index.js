import React, { useState } from 'react';

// import Chat from '../Chat';

import { ReactComponent as BotImg } from '../../assets/bot.svg';
import './styles.css';

function FloatChat({ onClick }) {
  const [isOpened, setOpened] = useState(false);

  function handleOnClick() {
    if (onClick) {
      onClick();
    }

    setOpened(state => !state);
  }

  return (
    <div className="floatchat-container">
      <iframe
        className={`chat ${isOpened ? 'is-visible' : ''}`}
        title="mountbot"
        src="https://d2vcceer20pg9.cloudfront.net/index.html"
      />
      <button className="float-bottom" type="button" onClick={handleOnClick}>
        <BotImg />
      </button>
    </div>
  );
}

export default FloatChat;
