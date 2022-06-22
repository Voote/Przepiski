import { loremIpsum1p } from 'assets/loremIpsum';

const category = {
  breakfast: 'SNIADANIE',
  coctail: 'KOKTAJL',
  dinner: 'OBIAD',
  pastries: 'WYPIEKI',
  salad: 'SALATKA',
  soup: 'ZUPA',
  juice: 'SOK',
  dessert: 'DESER',
};

const time = {
  m15: 15,
  m30: 30,
  h1: 60,
  m90: 90,
  h2: 120,
  h3: 180,
  h6: 360,
};

const level = [0, 1, 2, 3];

export const recieps = [
  {
    name: 'Ramen',
    type: [category.soup, category.dinner],
    prepTime: time.h3,
    difficulty: level[2],
    ingridients: [
      'woda',
      'mieso',
      'czosnek',
      'makaron',
      'pakczoj',
      'nori',
      'jajko',
      'sos sojowy',
    ],
    instruction: `
        Ugotowac miesko, dodac rzeczy do wywaru, doprawic, gotowac 2h. 
        ${loremIpsum1p}
    `,
  },
  {
    name: 'Jajowa',
    type: [category.breakfast],
    prepTime: time.m15,
    difficulty: level[0],
    ingridients: [
      'jajka',
      'maslo',
      'szczypiorek',
      'suszone pomidory',
      'panczeta',
      'czedar',
      'sol',
      'pieprz',
    ],
    instruction: `
    na rozgrzanej patelce roztopic maslo, 
    pokrojona cebulke szczypiorku podsmazyc z panczeta i suszonymi pomidorami,
    wbic jajka, wymieszac, posolic i opieprzyc. podawac ze szczypiorkiem na wierzchu
    `,
  },
  {
    name: 'Owsianka',
    type: [category.soup, category.breakfast],
    prepTime: time.m15,
    difficulty: level[1],
    ingridients: [
      'platki owsiane',
      'mleko',
      'obrany banan',
      'swieze maliny',
      'dzem owocowy',
    ],
    instruction: `${loremIpsum1p}`,
  },
];
