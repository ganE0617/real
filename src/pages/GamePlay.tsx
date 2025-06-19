import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { games } from '../data/games';

// 이미지 import
import game1Image from '../images/game1.png';
import game2Image from '../images/game2.png';
import game3Image from '../images/game3.png';
import game4Image from '../images/game4.png';
import game5Image from '../images/game5.png';
import game6Image from '../images/game6.png';
import game7Image from '../images/game7.png';
import game8Image from '../images/game8.png';
import game9Image from '../images/game9.png';
import game10Image from '../images/game10.png';
import game11Image from '../images/game11.png';
import game12Image from '../images/game12.png';
import game13Image from '../images/game13.png';
import game14Image from '../images/game14.png';
import game15Image from '../images/game15.png';
import game16Image from '../images/game16.png';
import game17Image from '../images/game17.png';
import game18Image from '../images/game18.png';
import game19Image from '../images/game19.png';
import game20Image from '../images/game20.png';
import game21Image from '../images/game21.png';
import game22Image from '../images/game22.png';
import game23Image from '../images/game23.png';
import game24Image from '../images/game24.png';
import game25Image from '../images/game25.png';
import game26Image from '../images/game26.png';
import game27Image from '../images/game27.png';
import game28Image from '../images/game28.png';
import game29Image from '../images/game29.png';
import game30Image from '../images/game30.png';
import game31Image from '../images/game31.png';
import game32Image from '../images/game32.png';
import game33Image from '../images/game33.png';
import game34Image from '../images/game34.png';
import game35Image from '../images/game35.png';
import game36Image from '../images/game36.png';
import game37Image from '../images/game37.png';
import game38Image from '../images/game38.png';
import game39Image from '../images/game39.png';
import game40Image from '../images/game40.png';
import game41Image from '../images/game41.png';

const GameContainer = styled.div`
  padding: 2rem;
  padding-top: 5rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Cafe24Ssurround', sans-serif;
`;

const BackButton = styled.button`
  background-color: #FF5C5C;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #FF5C5C;
  }
`;

const Message = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const GameImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const GameTitle = styled.h2`
  color: #4B4B4B;
  margin-bottom: 1rem;
  font-family: 'Cafe24Ssurround', sans-serif;
`;

const GameDescription = styled.p`
  color: #666;
  margin: 1rem 0;
  font-family: 'Noto Sans KR', sans-serif;
`;

const GameLink = styled.a`
  display: inline-block;
  background-color: #FF5C5C;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  margin-top: 1rem;
  transition: background-color 0.2s;
  font-family: 'Cafe24Ssurround', sans-serif;
  
  &:hover {
    background-color: #FF5C5C;
  }
`;

// 이미지 매핑 객체 생성 (styled-components 선언 이후에 위치)
const imageMap: Record<string, string> = {
  'game1Image': game1Image,
  'game2Image': game2Image,
  'game3Image': game3Image,
  'game4Image': game4Image,
  'game5Image': game5Image,
  'game6Image': game6Image,
  'game7Image': game7Image,
  'game8Image': game8Image,
  'game9Image': game9Image,
  'game10Image': game10Image,
  'game11Image': game11Image,
  'game12Image': game12Image,
  'game13Image': game13Image,
  'game14Image': game14Image,
  'game15Image': game15Image,
  'game16Image': game16Image,
  'game17Image': game17Image,
  'game18Image': game18Image,
  'game19Image': game19Image,
  'game20Image': game20Image,
  'game21Image': game21Image,
  'game22Image': game22Image,
  'game23Image': game23Image,
  'game24Image': game24Image,
  'game25Image': game25Image,
  'game26Image': game26Image,
  'game27Image': game27Image,
  'game28Image': game28Image,
  'game29Image': game29Image,
  'game30Image': game30Image,
  'game31Image': game31Image,
  'game32Image': game32Image,
  'game33Image': game33Image,
  'game34Image': game34Image,
  'game35Image': game35Image,
  'game36Image': game36Image,
  'game37Image': game37Image,
  'game38Image': game38Image,
  'game39Image': game39Image,
  'game40Image': game40Image,
  'game41Image': game41Image,
};

const GamePlay: React.FC = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  
  const game = games.find(g => g.id === gameId);

  useEffect(() => {
    if (game) {
      window.open(game.scratchUrl, '_blank');
    }
  }, [game]);

  if (!game) {
    return <div>게임을 찾을 수 없습니다.</div>;
  }

  return (
    <GameContainer>
      <BackButton onClick={() => navigate('/')}>
        게임 목록으로 돌아가기
      </BackButton>
      <Message>
        <GameTitle>{game.title}</GameTitle>
        <GameImage src={imageMap[game.image]} alt={game.title} />
        <GameDescription>{game.description}</GameDescription>
        <p style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>게임이 새 창에서 열립니다. 창이 열리지 않았다면 아래 링크를 클릭해주세요.</p>
        <GameLink href={game.scratchUrl} target="_blank" rel="noopener noreferrer">
          게임 열기
        </GameLink>
      </Message>
    </GameContainer>
  );
};

export default GamePlay; 