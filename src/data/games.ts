export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  scratchUrl: string;
  classNumber: string;
  category: '레이싱' | '컨트롤' | '리액션' | '자유' | '슬롯';
  isAward?: boolean;
  author: string;
  awardType?: '창의상' | '디자인상' | '감동상' | '대상';
}

export const games: Game[] = [
  {
    id: '1',
    title: '거북이 달리기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game1Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179514552',
    classNumber: '6-4',
    author: 'kang130609',
    category: '레이싱'
  },
  {
    id: '2',
    title: '보트 레이싱',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game2Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179515386',
    classNumber: '6-4',
    author: 'Kim20130502',
    category: '레이싱'
  },
  {
    id: '3',
    title: '인형뽑기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game3Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184615119',
    classNumber: '6-4',
    author: 'wrwrjk',
    category: '자유'
  },
  {
    id: '4',
    title: '추억의 두더지 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game4Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179515290',
    classNumber: '6-4',
    author: 'pang916',
    category: '리액션'
  },
  {
    //디자인상 수상자
    id: '5',
    title: '로켓 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game5Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179516158',
    classNumber: '6-4',
    author: 'Block0324',
    category: '자유',
    isAward: true,
    awardType: '디자인상'
  },
  {
    id: '6',
    title: '인어공주 탈출',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game6Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184618179',
    classNumber: '6-4',
    author: 'mangdungtomato',
    category: '레이싱'
  },
  {
    id: '7',
    title: '강아지 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game7Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179513194',
    classNumber: '6-4',
    author: 'daeun019284',
    category: '자유'
  },
  {
    id: '8',
    title: '노가다 겜(심심할때만 하세요)',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game8Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184618889',
    classNumber: '6-4',
    author: 'chaeyulyul',
    category: '자유'
  },
  {
    // 감동상 수상자
    id: '9',
    title: '딸바사모',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game9Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184619442',
    classNumber: '6-4',
    author: 'zzongari',
    category: '자유',
    isAward: true,
    awardType: '감동상'
  },
  {
    // 감동상 수상자
    id: '10',
    title: '꼬미돌을 잡아줘 ㅠㅠ',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game10Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184619998',
    classNumber: '6-4',
    author: 'oliviaya1012',
    category: '자유',
    isAward: true,
    awardType: '감동상'
  },
  {
    id: '11',
    title: '블록 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game11Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179514709',
    classNumber: '6-4',
    author: 'seohyun019283',
    category: '컨트롤'
  },
  {
    id: '12',
    title: '추리 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game12Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1182593077',
    classNumber: '6-4',
    author: 'ID4444444',
    category: '자유'
  },
  {
    id: '13',
    title: '축구 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game13Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179515064',
    classNumber: '6-4',
    author: 'kim130621',
    category: '컨트롤'
  },
  {
    //대상 수상자
    id: '14',
    title: '불가사리 블록 없애기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game14Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184620430',
    classNumber: '6-4',
    author: 'abcdpotato',
    category: '자유',
    isAward: true,
    awardType: '대상'
  },
  {
    id: '15',
    title: '피하고 피해라',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game15Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184620893',
    classNumber: '6-4',
    author: 'llamen',
    category: '자유'
  },
  {
    //디자인상 수상자
    id: '16',
    title: '암냠냠',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game16Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179514597',
    classNumber: '6-4',
    author: 'yun139',
    category: '자유',
    isAward: true,
    awardType: '디자인상'
  },
  { 
    //창의상 수상자
    id: '17',
    title: '홈런더비',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game17Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184621383',
    classNumber: '6-4',
    author: 'kbos2',
    category: '자유',
    isAward: true,
    awardType: '창의상'
  },
  {
    id: '18',
    title: '블록깨기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game18Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184621811',
    classNumber: '6-4',
    author: 'tokki0813',
    category: '컨트롤'
  },
  {
    id: '19',
    title: '쌈뽕한 겜',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game19Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1182612953/',
    classNumber: '6-5',
    author: 'lamhandsome77',
    category: '자유'
  },
  {
    id: '20',
    title: '개구리 잡기',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game20Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179528583',
    classNumber: '6-5',
    author: 'Kruby73',
    category: '리액션'
  },
  {
    //창의상 수상자
    id: '21',
    title: 'arrow Game',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game21Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1172626486',
    classNumber: '6-5',
    author: 'rlarkddb',
    category: '자유',
    isAward: true,
    awardType: '창의상'
  },
  {
    id: '22',
    title: 'cajino',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game22Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527626',
    classNumber: '6-5',
    author: 'rlarkddb',
    category: '슬롯'
  },
  {
    //감동상 수상자
    id: '23',
    title: '슬롯 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game23Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179525268',
    classNumber: '6-5',
    author: 'leo_jinjin3',
    category: '슬롯',
    isAward: true,
    awardType: '감동상'
  },
  {
    id: '24',
    title: '레이싱 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game24Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179526097',
    classNumber: '6-5',
    author: 'seou019283',
    category: '레이싱'
  },
  {
    id: '25',
    title: '슬롯 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game25Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1182606204',
    classNumber: '6-5',
    author: 'kim130521',
    category: '슬롯'
  },
  {
    //디자인상 수상자
    id: '26',
    title: '아리룰렛',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game26Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179528237',
    classNumber: '6-5',
    author: 'sponjyari1016',
    category: '슬롯',
    isAward: true,
    awardType: '디자인상'
  },
  {
    id: '27',
    title: '타티맨이 게이가 되어가는 과정',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game27Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179533834',
    classNumber: '6-5',
    author: 'clwmwngks',
    category: '자유'
  },
  {
    id: '28',
    title: '병아리!',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game28Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179538064',
    classNumber: '6-5',
    author: 'jia1218',
    category: '레이싱'
  },
  {
    id: '29',
    title: '두더지 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game29Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179526176',
    classNumber: '6-5',
    author: 'yeonjea0710',
    category: '리액션'
  },
  {
    //대상 수상자
    id: '30',
    title: '원숭이 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game30Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179526957',
    classNumber: '6-5',
    author: 'pappasii',
    category: '리액션',
    isAward: true,
    awardType: '대상'
  },
  {
    id: '31',
    title: '바닷속을 탈출하라!',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game31Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527910',
    classNumber: '6-5',
    author: 'hy1_ull',
    category: '레이싱'
  },
  {
    //디자인상 수상자
    id: '32',
    title: '블록 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game32Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527962',
    classNumber: '6-5',
    author: 'dbstj_1024',
    category: '컨트롤',
    isAward: true,
    awardType: '디자인상'
  },
  {
    id: '33',
    title: 'oh!',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game33Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527516',
    classNumber: '6-5',
    author: 'Astroid0130',
    category: '컨트롤'
  },
  {
    id: '34',
    title: '퉁퉁퉁퉁사후르',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game34Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527353',
    classNumber: '6-5',
    author: 'HYUN130614',
    category: '자유'
  },
  {
    id: '35',
    title: '병아리의 아침식사',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game35Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179528163',
    classNumber: '6-5',
    author: 'Eunseo0128',
    category: '레이싱'
  },
  {
    //감동상 수상자
    id: '36',
    title: '성공률1/27 도ㅂ 아닌 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game36Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179529196',
    classNumber: '6-5',
    author: 'ookpo',
    category: '슬롯',
    isAward: true,
    awardType: '감동상'
  },
  {
    id: '37',
    title: '컨트롤 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game37Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179526897',
    classNumber: '6-5',
    author: 'abcdeschool',
    category: '컨트롤'
  },
  {
    id: '38',
    title: '곰바!',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game38Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179530571',
    classNumber: '6-5',
    author: 'Number-one-1',
    category: '리액션'
  },
  {
    //창의상 수상자
    id: '39',
    title: '상식퀴즈',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game39Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179534725',
    classNumber: '6-5',
    author: 'chan0529',
    category: '자유',
    isAward: true,
    awardType: '창의상'
  },
  {
    id: '40',
    title: '슬롯게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game40Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179529544',
    classNumber: '6-5',
    author: 'sungha0422',
    category: '슬롯'
  },
  {
    //창의상 수상자
    id: '41',
    title: '병아리 잡기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game41Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179513601',
    classNumber: '6-4',
    author: 'Leek3939',
    category: '리액션',
    isAward: true,
    awardType: '창의상'
  },
  {
    id: '42',
    title: '별을 잡아라',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game42Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1176002335/',
    classNumber: '6-4',
    author: '90409sky',
    category: '리액션'
  }
]; 