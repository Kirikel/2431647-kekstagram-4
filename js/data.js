import {getRandomInteger, getRandomItem} from './utilities.js';

const createCommentsData = (itemCount) => {
  const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const name = [
    'matvey', 'nikitka', 'cry', 'fottbic', 'kiri4', 'jkkbkbk', 'jjbb',
    'sdhefufjk', 'nikneim', 'privet', 'pogba', 'dzuba', 'gogol', 'golovin', 'kirik',
    'uufcfj', 'namer'
  ];

  return new Array(itemCount).fill(1).map((start,index) => ({
    id: start + index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomItem(message),
    name: getRandomItem(name)
  }));
};

const createImagesData = (itemCount = 25) => {

  const description = [
    'Продолжай улыбаться, потому что жизнь — прекрасная вещь и есть еще так много поводов для улыбки.',
    'Хочу увидеть, что произойдет, если я не сдамся.',
    'Лучше начать действовать, совершая ошибки, чем медлить, стремясь к безошибочности.',
    'Не бойся быть не таким, как все, и все захотят быть таким, как ты.',
    'Одна хорошая мысль утром меняет смысл целого дня.',
    'Что бы ни случилось завтра, у нас есть еще сегодня.',
    'Настойчивость окупается сполна. Будь голосом, а не эхом.',
    'Человек на вершине горы не упал туда с неба.',
    'Отсутствие сна — это не проблема. Проблема, когда ты не знаешь, ради чего просыпаешься по утрам.',
    'Мы растем, помогая расти другим.", "Каждое мгновенье жизни — еще одна возможность.',
    'Есть лишь один человек, на которого я могу надеяться ― это я сам. И знаете что? Этот человек ни разу меня не подводил.'
  ];

  return new Array(itemCount).fill(1).map((start,index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(description),
    likes: getRandomInteger(15, 200),
    comments: createCommentsData(getRandomInteger(0, 30))
  }));
};

export {createImagesData};
