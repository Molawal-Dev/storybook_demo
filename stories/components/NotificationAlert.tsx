import React, { useState } from 'react';

type NotifProps = {
    message: string;
    background?: string;
    buttonColor?: string;
}

const NotificationAlert = ({ message, background='green', buttonColor }: NotifProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div>
        <p>{message}</p>

        <button onClick={()=>{setIsVisible(false)}}>Close</button>


        <style jsx>{`
            div {
                background-color: ${background};
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                border-radius: 8px;
            }
            p {
                color: white;
                font-family: verdana;
            }
            button {
                background-color: ${buttonColor};
                padding: 8px;
                border-radius: 8px;
                position: relative;
                top: -25px;
                right: -17px;
                border: none;
                box-shadow: 1px 1px 10px yellow;
                cursor: pointer;
            }
      `}</style>
      </div>
    )
  );
};

export default NotificationAlert;