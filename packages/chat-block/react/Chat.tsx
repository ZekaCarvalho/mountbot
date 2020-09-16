import React, { useState } from 'react';

import { ReactComponent as BotImg } from '../assets/bot.svg';
import './styles.css';

interface ChatProps {}

const Chat: StorefrontFunctionComponent<ChatProps> = () => {
  const [isOpened, setOpened] = useState(false);

  function handleOnClick() {
    setOpened(state => !state);
  }

  return (
    <div className="floatchat-container">
      <div className={`chat ${isOpened ? 'is-visible' : ''}`}>
        <iframe src="https://d1ynr93g6z78ed.cloudfront.net/index.html"
          width="500px"
          height="500px" />
      </div>

      <button className="float-bottom" type="button" onClick={handleOnClick}>
        <BotImg />
      </button>
    </div>
  );
}

Chat.schema = {
  title: 'editor.chat.title',
  description: 'editor.chat.description',
  type: 'object',
  properties: {},
}

export default Chat
