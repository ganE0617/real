import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
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

const Container = styled.div`
  padding: 2rem;
  padding-top: 5rem;
  width: 100%;
  font-family: 'Cafe24Ssurround', sans-serif;
  background-color: white;
  min-height: 100vh;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #4B4B4B;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: normal;
`;

const CategoryTitle = styled.h3`
  color: #686666;
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  font-weight: normal;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const GameCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

const GameContent = styled.div`
  padding: 1rem;
`;

const GameTitle = styled.h3`
  color: #4B4B4B;
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  font-weight: normal;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span<{ type: 'developer' | 'category' | 'award' }>`
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  background-color: ${props => {
    switch (props.type) {
      case 'developer': return '#C6E9FF';
      case 'category': return '#FFF8DB';
      case 'award': return '#FFD8D8';
      default: return '#ffd6e0';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'developer': return '#009BFF';
      case 'category': return '#FFCD01';
      case 'award': return '#FF5C5C';
      default: return '#ff6b8b';
    }
  }};
  font-weight: normal;
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 0.8rem 2rem;
  background-color: #FF5C5C;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Cafe24Ssurround', sans-serif;
  font-weight: normal;

  &:hover {
    background-color: #FF5C5C;
  }
`;

const categoryLabels = {
  '레이싱': '레이싱 게임',
  '컨트롤': '컨트롤 게임',
  '리액션': '리액션 게임',
  '슬롯': '슬롯 게임',
  '자유': '자유 게임'
};

const gamesWithImages = games.map(game => ({
  ...game,
  image: game.id === '1' ? game1Image :
         game.id === '2' ? game2Image :
         game.id === '3' ? game3Image :
         game.id === '4' ? game4Image :
         game.id === '5' ? game5Image :
         game.id === '6' ? game6Image :
         game.id === '7' ? game7Image :
         game.id === '8' ? game8Image :
         game.id === '9' ? game9Image :
         game.id === '10' ? game10Image :
         game.id === '11' ? game11Image :
         game.id === '12' ? game12Image :
         game.id === '13' ? game13Image :
         game.id === '14' ? game14Image :
         game.id === '15' ? game15Image :
         game.id === '16' ? game16Image :
         game.id === '17' ? game17Image :
         game.id === '18' ? game18Image :
         game.id === '19' ? game19Image :
         game.id === '20' ? game20Image :
         game.id === '21' ? game21Image :
         game.id === '22' ? game22Image :
         game.id === '23' ? game23Image :
         game.id === '24' ? game24Image :
         game.id === '25' ? game25Image :
         game.id === '26' ? game26Image :
         game.id === '27' ? game27Image :
         game.id === '28' ? game28Image :
         game.id === '29' ? game29Image :
         game.id === '30' ? game30Image :
         game.id === '31' ? game31Image :
         game.id === '32' ? game32Image :
         game.id === '33' ? game33Image :
         game.id === '34' ? game34Image :
         game.id === '35' ? game35Image :
         game.id === '36' ? game36Image :
         game.id === '37' ? game37Image :
         game.id === '38' ? game38Image :
         game.id === '39' ? game39Image :
         game.id === '40' ? game40Image :
         game.id === '41' ? game41Image : game1Image
}));

const confettiAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Confetti = styled.span<{ direction: 'left' | 'right' }>`
  font-size: 2rem;
  animation: ${confettiAnimation} 2s infinite;
  margin: 0 1rem;
  display: inline-block;
  transform: scaleX(${props => props.direction === 'left' ? -1 : 1});
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: visible;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FloatingShape = styled.div<{ 
  size: number; 
  color: string; 
  left: number; 
  top: number;
  delay: number;
  shape: 'circle' | 'triangle' | 'square';
}>`
  position: fixed;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.color};
  ${props => {
    switch (props.shape) {
      case 'circle':
        return 'border-radius: 50%;';
      case 'triangle':
        return `
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          background-color: transparent;
          border-left: ${props.size/2}px solid transparent;
          border-right: ${props.size/2}px solid transparent;
          border-bottom: ${props.size}px solid ${props.color};
          width: 0;
          height: 0;
        `;
      case 'square':
        return 'border-radius: 10px;';
      default:
        return 'border-radius: 50%;';
    }
  }}
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  opacity: 0.6;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  transform-origin: center center;
  will-change: transform;
`;

const GameList: React.FC = () => {
  const navigate = useNavigate();
  const { classNumber, category } = useParams();
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const handleGameClick = (gameId: string) => {
    navigate(`/play/${gameId}`);
  };

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const renderAwardSection = () => {
    const awardGames = gamesWithImages.filter(game => game.isAward);

    return (
      <Section>
        <TitleContainer>
          <Confetti direction="left">🎉</Confetti>
          <SectionTitle>수상작 게임</SectionTitle>
          <Confetti direction="right">🎉</Confetti>
        </TitleContainer>
        <GameGrid>
          {awardGames.map((game) => (
            <GameCard key={game.id} onClick={() => handleGameClick(game.id)}>
              <GameImage src={game.image} alt={game.title} />
              <GameContent>
                <GameTitle>{game.title}</GameTitle>
                <TagContainer>
                  <Tag type="developer">{game.author}</Tag>
                  <Tag type="category">{categoryLabels[game.category]}</Tag>
                  {game.awardType && <Tag type="award">{game.awardType}</Tag>}
                </TagContainer>
              </GameContent>
            </GameCard>
          ))}
        </GameGrid>
      </Section>
    );
  };

  const renderClassSection = (classNum: string) => {
    const classGames = gamesWithImages.filter(game => game.classNumber === classNum);
    const gamesByCategory = classGames.reduce((acc, game) => {
      if (!acc[game.category]) {
        acc[game.category] = [];
      }
      acc[game.category].push(game);
      return acc;
    }, {} as Record<string, typeof games>);

    return (
      <Section>
        <SectionTitle>{classNum}반</SectionTitle>
        {Object.entries(gamesByCategory).map(([cat, games]) => {
          const categoryKey = `${classNum}-${cat}`;
          const isExpanded = expandedCategories[categoryKey];
          const displayedGames = isExpanded ? games : games.slice(0, 5);

          return (
            <div key={cat}>
              <CategoryTitle>{categoryLabels[cat as keyof typeof categoryLabels]}</CategoryTitle>
              <GameGrid>
                {displayedGames.map((game) => (
                  <GameCard key={game.id} onClick={() => handleGameClick(game.id)}>
                    <GameImage src={game.image} alt={game.title} />
                    <GameContent>
                      <GameTitle>{game.title}</GameTitle>
                      <TagContainer>
                        <Tag type="developer">{game.author}</Tag>
                        <Tag type="category">{categoryLabels[game.category]}</Tag>
                        {game.awardType && <Tag type="award">{game.awardType}</Tag>}
                      </TagContainer>
                    </GameContent>
                  </GameCard>
                ))}
              </GameGrid>
              {games.length > 5 && (
                <ShowMoreButton onClick={() => toggleCategory(categoryKey)}>
                  {isExpanded ? '접기' : '더보기'}
                </ShowMoreButton>
              )}
            </div>
          );
        })}
      </Section>
    );
  };

  const renderBackgroundShapes = () => (
    <>
      {/* 왼쪽 도형들 */}
      <FloatingShape size={60} color="#FFC5C5" left={5} top={20} delay={0} shape="circle" />
      <FloatingShape size={60} color="#A5D7F5" left={8} top={40} delay={1} shape="triangle" />
      <FloatingShape size={50} color="#FFD8BA" left={3} top={60} delay={2} shape="square" />
      <FloatingShape size={30} color="#D8C5F5" left={7} top={80} delay={3} shape="circle" />
  
      {/* 오른쪽 도형들 */}
      <FloatingShape size={50} color="#FFE1AD" left={92} top={15} delay={0.5} shape="triangle" />
      <FloatingShape size={40} color="#FFCCE4" left={95} top={35} delay={1.5} shape="square" />
      <FloatingShape size={60} color="#B8F0D1" left={90} top={55} delay={2.5} shape="circle" />
      <FloatingShape size={40} color="#D8C5F5" left={93} top={75} delay={3.5} shape="square" />
    </>
  );
  

  // 특정 클래스의 특정 카테고리 게임만 보여주기
  if (classNumber && category) {
    // category가 한글로 들어오므로 그대로 비교
    const filteredGames = gamesWithImages.filter(
      game => game.classNumber === classNumber && game.category === category
    );

    return (
      <BackgroundContainer>
        {renderBackgroundShapes()}
        <ContentContainer>
          <Container>
            <SectionTitle>{classNumber} {categoryLabels[category as keyof typeof categoryLabels] || ''}</SectionTitle>
            <GameGrid>
              {filteredGames.map((game) => (
                <GameCard key={game.id} onClick={() => handleGameClick(game.id)}>
                  <GameImage src={game.image} alt={game.title} />
                  <GameContent>
                    <GameTitle>{game.title}</GameTitle>
                    <TagContainer>
                      <Tag type="developer">{game.author}</Tag>
                      <Tag type="category">{categoryLabels[game.category]}</Tag>
                      {game.awardType && <Tag type="award">{game.awardType}</Tag>}
                    </TagContainer>
                  </GameContent>
                </GameCard>
              ))}
            </GameGrid>
          </Container>
        </ContentContainer>
      </BackgroundContainer>
    );
  }

  // 수상작 페이지
  if (location.pathname === '/awards') {
    return (
      <BackgroundContainer>
        {renderBackgroundShapes()}
        <ContentContainer>
          <Container>
            {renderAwardSection()}
          </Container>
        </ContentContainer>
      </BackgroundContainer>
    );
  }

  // 특정 클래스의 모든 게임 보여주기
  if (classNumber) {
    return (
      <BackgroundContainer>
        {renderBackgroundShapes()}
        <ContentContainer>
          <Container>
            {renderClassSection(classNumber)}
          </Container>
        </ContentContainer>
      </BackgroundContainer>
    );
  }

  // 메인 페이지 (수상작 + 모든 클래스)
  return (
    <BackgroundContainer>
      {renderBackgroundShapes()}
      <ContentContainer>
        <Container>
          {renderAwardSection()}
          {renderClassSection('6-4')}
          {renderClassSection('6-5')}
        </Container>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default GameList; 