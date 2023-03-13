import * as React from 'react';
import { useState } from 'react';
import ProgressBar from '../ProgressBar/Index';
import {
  badgeIconContinaer,
  badgeSectionContainer,
  button,
  cardContainer,
  cardTitle,
  featureIcon,
  featureItemContainer,
  featureItemDescription,
  featureItemSubtitle,
  featureItemTitle,
  featureItemTitleSection,
  featureListContainer,
  subTitle,
  usageContainer,
  usageCount,
  usageTitle,
} from './card.css';

function Card() {
  const [board, setBoard] = useState(1);

  const maxBoard = 10;

  const handleButtonClick = () => {
    if (board < maxBoard) {
      setBoard(board + 1);
    }
  };
  return (
    <div className={cardContainer}>
      <div className={badgeSectionContainer}>
        <div className={badgeIconContinaer}>
          <img src='https://i.imgur.com/fUNaUk8.png' alt='icon' />
        </div>
        <h1 className={cardTitle}>
          Upgrade to Riddey PRO and boost productivity!
        </h1>
        <h2 className={subTitle}>
          Pellentesque porttitor euismod ante, accumsan consequat purus!
        </h2>
      </div>
      <div className={featureListContainer}>
        <div className={featureItemContainer}>
          <div className={featureIcon}>
            <img src='https://i.imgur.com/b8BoNaT.png' alt='check icon' />
          </div>
          <div>
            <div className={featureItemTitleSection}>
              <h3 className={featureItemTitle}>Feature #1</h3>
              <p className={featureItemSubtitle}>- Etiam convallis</p>
            </div>
            <div>
              <p className={featureItemDescription}>nibh vitae dui risus</p>
            </div>
          </div>
        </div>
        <div className={featureItemContainer}>
          <div className={featureIcon}>
            <img src='https://i.imgur.com/b8BoNaT.png' alt='check icon' />
          </div>
          <div>
            <div className={featureItemTitleSection}>
              <h3 className={featureItemTitle}>Feature #2</h3>
              <p className={featureItemSubtitle}>- Etiam</p>
            </div>
            <div>
              <p className={featureItemDescription}>
                convallis, nibh vitae dui risus
              </p>
            </div>
          </div>
        </div>
        <div className={featureItemContainer}>
          <div className={featureIcon}>
            <img src='https://i.imgur.com/b8BoNaT.png' alt='check icon' />
          </div>
          <div>
            <div className={featureItemTitleSection}>
              <h3 className={featureItemTitle}>Feature #3</h3>
              <p className={featureItemSubtitle}>- Etiam</p>
            </div>
            <div>
              <p className={featureItemDescription}>
                convallis, nibh vitae dui risus
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={usageContainer}>
        <h3 className={usageTitle}>Current usage</h3>
        <p className={usageCount}>
          {board} out of {maxBoard} boards in use
        </p>
        <div>
          <ProgressBar board={board} maxBoard={maxBoard} />
        </div>
      </div>
      <div>
        <button
          className={button}
          onClick={handleButtonClick}
          disabled={board === maxBoard}
        >
          Add New Board
        </button>
      </div>
    </div>
  );
}

export default Card;
