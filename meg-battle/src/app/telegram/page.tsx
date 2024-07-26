'use client';
import React from 'react';
import { telegramClient } from '../provider/telegram-provider';

const WebApp = () => {
  const { user, webApp } = telegramClient();
  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user?.first_name}</h1>
          User data:
          <pre>{JSON.stringify(user, null, 2)}</pre>
          Entire Web App data:
          <pre>{JSON.stringify(webApp, null, 2)}</pre>
        </div>
      ) : (
        <div>Make sure web app is opened from telegram client</div>
      )}
    </div>
  );
};

export default WebApp;
