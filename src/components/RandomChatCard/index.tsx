import * as S from './index.css';
import * as I from 'assets';

const RandomChatCard = () => (
  <div className={S.RandomCardWrapper}>
    <div className={S.RandomCardContainer}>
      <I.RandomChatIcon />
      <button className={S.RandomButton}>랜덤채팅</button>
    </div>
  </div>
);

export default RandomChatCard;
