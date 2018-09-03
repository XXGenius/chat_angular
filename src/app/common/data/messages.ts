export const responseMessage = [
  {
    id: 1,
    type: 'text',
    text: 'Здравствуйте! Для подбора косметики мне нужно определить Ваш тип кожи и её особенности. ' +
    'Для этого ответьте, пожалуйста, на несколько вопросов и вышлите свою фотографию.',
    field: 'hi'
  },
  {
    id: 2,
    type: 'text',
    text: 'Ваше имя?',
    field: 'name'
  },
  {
    id: 3,
    type: 'text',
    text: 'Ваш телефон?',
    field: 'number'
  },
  {
    id: 4,
    type: 'text',
    text: 'Ваш e-mail?',
    field: 'email'

  },
  {
    id: 5,
    type: 'file',
    text: 'Загрузите ваше фото. (В хорошем качестве! Крупный план, без макияжа, при дневном свете)',
    field: 'photo'
  },
  {
    id: 6,
    type: 'single_button',
    text: 'Возраст?',
    field: 'age',
    variants: [
      {
        text: 'До 20',
        recommendation: []
      },
      {
        text: '20-30',
        recommendation: []
      },
      {
        text: '31-45',
        recommendation: ['Антивозрастные компоненты (коллаген, гиалуроновая кислота, пептиды)']
      },
      {
        text: '46-55',
        recommendation: ['Антивозрастные компоненты (коллаген, гиалуроновая кислота, пептиды)']
      },
      {
        text: '56+',
        recommendation: ['Антивозрастные компоненты (коллаген, гиалуроновая кислота, пептиды)']
      }
    ]
  },
  {
    id: 7,
    type: 'single_button',
    text: 'В течении какого времени появляется жирный блеск в Т-зоне?',
    field: 'description',
    variants: [
      {
        text: '1-3 часа',
        skin_characteristics: '',
        product: '',
        comment: '',
        additional: true
      },
      {
        text: '4-6 часа',
        skin_characteristics: '',
        product: '',
        additional: true
      },
      {
        text: 'К вечеру',
        skin_characteristics: 'комбинированный склонный к сухости',
        product: [37, 53, 55, 15, 33, 39, 17, 19, 35],
        comment: 'Допы номер 2',
        additional: false
      },
      {
        text: 'Вообще нет жирного блеска',
        skin_characteristics: 'сухой тип кожи',
        product: [37, 53, 55, 15, 33, 39, 17, 19, 35],
        comment: 'Допы номер 2',
        additional: false
      }
    ]
  },
  {
    id: 8,
    type: 'single_button',
    text: 'Кожа на щеках тоже жирниться или сухая?',
    field: 'leather',
    variants: [
      {
        text: 'Да',
        skin_characteristics: 'жирный тип кожи',
        product: [37, 17, 55, 15, 33, 41, 9, 7, 29],
        comments: 'Допы номер 1'
      },
      {
        text: 'Нет',
        skin_characteristics: 'комбинированный склонный к жирности',
        product: [37, 17, 55, 15, 33, 41, 9, 7, 29],
        comments: 'Допы номер 1'
      }
    ]
  },
  {
    id: 9,
    type: 'single_button',
    text: ' Какие ощущения после умывания?',
    field: 'Feel',
    variants: [
      {
        text: 'Комфортные, могу забыть нанести крем',
        recommendation: ''
      },
      {
        text: ' Кожу немного стягивает и сушит',
        recommendation: ['Сделайте акцент на увлажнении, добавив в уход увлажняющие' +
        ' средства(тканевые маски, тонеры и лосьоны на основе гиалуроновой кислоты)']
      },
      {
        text: 'Сильно стягивает и сушит кожу, хочется сразу нанести жирный крем',
        recommendation: ['Сделайте акцент на увлажнении, добавив в ' +
        'уход увлажняющие средства (тканевые маски, тонеры и лосьоны на основе гиалуроновой кислоты) ']
      }
    ]
  },
  {
    id: 10,
    type: 'single_button',
    text: 'Цвет лица?',
    field: 'Complexion',
    variants: [
      {
        text: 'Здоровый цвет лица, кожа свежая, ровный тон.',
        recommendation: '',
        skin_characteristics: ''
      },
      {
        text: 'Кожа тусклая, с землистым оттенком, тон не ровный',
        recommendation: ['Добавьте в список отшелушивающие средства (Пилинги, средства с фруктовыми кислотами и энзимами)'],
        skin_characteristics: 'Кожа тусклая, не хватает отшелушивания'
      }
    ]
  },
  {
    id: 11,
    type: 'multi_button',
    text: 'Основные проблемы? (Отметить нужное)',
    field: 'main_problems',
    variants: [
      {
        text: 'Жирный блеск',
        recommendation: ['Очищение должно быть мягкое, которое не пересушивает кожу.'],
        skin_characteristics: '',
        product: [],
        active: false
      },
      {
        text: 'Расширенные поры',
        recommendation: ['Сделайте курс альгинантные масок (сужают поры, выравнивают кожу, ' +
        'увлажняют и насыщает витаминами. выводят токсины, омолаживают кожу )'],
        skin_characteristics: '',
        active: false
      },
      {
        text: 'Черные точки',
        recommendation: [],
        skin_characteristics: '',
        product: [59],
        active: false
      },
      {
        text: 'Прыщи (частые высыпания, внутренние болючие долго созревающие прыщи)',
        recommendation: [],
        skin_characteristics: '',
        product: [45],
        active: false
      },
      {
        text: 'Прыщи (пару прыщиков в определенные дни месяца)',
        recommendation: [],
        skin_characteristics: '',
        product: [45],
        active: false
      },
      {
        text: 'Закрытые комедоны ( прыщи которые не воспаляются и никак не беспокоят, но чувствуются проводя по коже пальцами.' +
        'Из-за этого кожа не ровная)',
        recommendation: ['Добавьте в список отшелушивающие средства (Пилинги, средства с фруктовыми кислотами и энзимами)'],
        skin_characteristics: '',
        product: [],
        active: false
      },
      {
        text: 'Следы после выдавливания прыщей',
        recommendation: [],
        skin_characteristics: '',
        product: [],
        active: false
      },
      {
        text: 'Купероз ( капилляры которые видно сквозь кожу)',
        recommendation: [],
        skin_characteristics: '',
        product: [47],
        active: false
      },
      {
        text: 'Сухость и стянутость кожи',
        recommendation: [],
        skin_characteristics: '',
        product: [65],
        active: false
      },
      {
        text: 'Первые неглубокие морщины',
        recommendation: [],
        skin_characteristics: '',
        product: [47],
        active: false
      },
      {
        text: 'Глубокие морщины',
        recommendation: [],
        skin_characteristics: '',
        product: [47, 5],
        active: false
      },
      {
        text: 'Пигментация',
        recommendation: ['Обязательно использовать СПФ защиту и добавить в ' +
        'уход средства с содержанием витамина С (осветляет пигментацию и выравнивает цвет кожи)'],
        skin_characteristics: '',
        product: [13, 47, 63], // '4KR6(прверить!!!), 4MAS2, 4MS3',  //ToDO
        active: false
      },
      {
        text: 'Шелушения',
        recommendation: [],
        product: [],
        active: false
      },
      {
        text: 'После умывания или скраба кожа краснеет',
        recommendation: [],
        skin_characteristics: '',
        product: [21],
        active: false
      },
      {
        text: 'Синяки под глазами',
        recommendation: [],
        skin_characteristics: '',
        product: [57],
        active: false
      },
      {
        text: 'Морщины вокруг глаз',
        recommendation: [],
        skin_characteristics: '',
        product: [13],
        active: false
      }
    ]
  },
  {
    id: 12,
    type: 'single_button',
    text: 'Аллергия на косметику?',
    field: 'Allergy',
    variants: [
      {
        text: 'Да',
        additional: true
      },
      {
        text: 'Нет',
        additional: false
      }
    ]
  },
  {
    id: 13,
    type: 'text',
    text: 'На какие средства была аллергия и как проявлялась?',
    field: 'remedy'
  },
  {
    id: 14,
    type: 'text',
    text: 'Есть что добавить от себя?',
    field: 'about'
  }
];

