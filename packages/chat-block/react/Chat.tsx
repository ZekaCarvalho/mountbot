import React, { useState } from 'react';
import { useCssHandles } from 'vtex.css-handles'

import { ReactComponent as BotImg } from '../assets/bot.svg';
import './styles.css';

interface ChatProps {}

const CSS_HANDLES = ['floatchat', 'floatBottom'] as const

const Chat: StorefrontFunctionComponent<ChatProps> = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const [isOpened, setOpened] = useState(false);

  function handleOnClick() {
    setOpened(state => !state);
  }
// className="floatchat-container"
// className={`chat ${isOpened ? 'is-visible' : ''}`}
// className="float-bottom"
  return (
    <div className={handles.floatchat} style={{
      position: 'absolute',
      right: '32px',
      bottom: '32px',
      borderColor: '#E76F51',
      borderWidth: '2px',
    }}>
      <div className={`chat ${isOpened ? 'is-visible' : ''}`}>
        <iframe src="https://d1ynr93g6z78ed.cloudfront.net/index.html"
          width="400px"
          height="500px" />
      </div>

      <button className={handles.floatBottom} type="button" >
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
