export const responseMessage = [
  {
    id: 1,
    type: 'text',
    text: 'Привет. Для подбора косметики мне нужно определить ваш тип кожи и её особенности. ' +
    'Для этого вышлите свою фотографию и ответь на вопросы.',
    field: 'hi'
  },
  {
    id: 2,
    type: 'text',
    text: 'Ваше имя:',
    field: 'name'
  },
  {
    id: 3,
    type: 'text',
    text: 'Ваш телефон',
    field: 'number'
  },
  {
    id: 4,
    type: 'text',
    text: 'Ваш e-mail',
    field: 'email'

  },
  {
    id: 5,
    type: 'file',
    text: 'Загрузите ваше фото.',
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
        recommendation: ''
      },
      {
        text: '20-30',
        recommendation: ''
      },
      {
        text: '31-45',
        recommendation: 'Антивозрастные компоненты (коллаген, гиалуроновая кислота, пептиды)'
      },
      {
        text: '46-55',
        recommendation: 'Антивозрастные компоненты (коллаген, гиалуроновая кислота, пептиды)'
      },
      {
        text: '56+',
        recommendation: 'Антивозрастные компоненты (коллаген, гиалуроновая кислота, пептиды)'
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
        text: 'к вечеру',
        skin_characteristics: 'комбинированный склонный к сухости',
        product: '1DM1, 2PY5, 2PY6, 5PL1, 4MAS6 + 5PL2, 2PY1, 3TN1, 4MS1',
        comment: 'Допы номер 2',
        additional: false
      },
      {
        text: 'вообще нет жирного блеска',
        skin_characteristics: 'сухой тип кожи',
        product: '1DM1, 2PY5, 2PY6, 5PL1, 4MAS6 + 5PL2, 2PY1, 3TN1, 4MS1',
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
        text: 'да - жирный тип кожи',
        skin_characteristics: 'жирный тип кожи',
        product: '1DM1, 2PY5, 2PY6, 5PL1, 4MAS6 + 5PL3, 2PY3, 3TN2, 4MSL5',
        comments: 'Допы номер 1'
      },
      {
        text: 'нет - комбинированный',
        skin_characteristics: 'комбинированный склонный к жирности',
        product: '1DM1, 2PY5, 2PY6, 5PL1, 4MAS6 + 5PL3, 2PY3, 3TN2, 4MSL5',
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
        recommendation: 'Сделайте акцент на увлажнении, добавив в уход увлажняющие' +
        ' средства(тканевые маски, тонеры и лосьоны на основе гиалуроновой кислоты)'
      },
      {
        text: 'Сильно стягивает и сушит кожу, хочется сразу нанести жирный крем',
        recommendation: 'Сделайте акцент на увлажнении, добавив в ' +
        'уход увлажняющие средства (тканевые маски, тонеры и лосьоны на основе гиалуроновой кислоты) '
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
        recommendation: 'отшелушивающие средства (Пилинги, средства с фруктовыми кислотами и энзимами)',
        skin_characteristics: 'Кожа тусклая, не хватает отшелушивания'
      }
    ]
  },
  {
    id: 11,
    type: 'multi_button',
    text: 'Основные проблемы? (отметить галочкой)',
    field: 'main_problems',
    variants: [
      {
        text: 'жирный блеск',
        recommendation: 'Очищение должно быть мягкое, которое не пересушивает кожу.',
        skin_characteristics: '',
        product: '',
        active: false
      },
      {
        text: 'расширенные поры',
        recommendation: 'Сделайте курс альгинантные масок (сужают поры, выравнивают кожу, ' +
        'увлажняют и насыщает витаминами. выводят токсины, омолаживают кожу )',
        skin_characteristics: '',
        active: false
      },
      {
        text: 'черные точки',
        recommendation: '',
        skin_characteristics: '',
        product: '4MS2',
        active: false
      },
      {
        text: 'прыщи (частые высыпания, внутренние болючие долго созревающие прыщи)',
        recommendation: '',
        skin_characteristics: '',
        product: '4MAS1',
        active: false
      },
      {
        text: 'прыщи (пару прыщиков в определенные дни месяца)',
        recommendation: '',
        skin_characteristics: '',
        product: '4MAS1',
        active: false
      },
      {
        text: 'закрытые комедоны ( прыщи которые не воспаляются и никак не беспокоят, но чувствуются проводя по коже пальцами.' +
        'Из-за этого кожа не ровная)',
        recommendation: 'Добавьте в список отшелушивающие средства (Пилинги, средства с фруктовыми кислотами и энзимами)',
        skin_characteristics: '',
        product: '',
        active: false
      },
      {
        text: 'следы после выдавливания прыщей',
        recommendation: '',
        skin_characteristics: '',
        product: '',
        active: false
      },
      {
        text: 'купероз ( капилляры которые видно сквозь кожу)',
        recommendation: '',
        skin_characteristics: '',
        product: '4MAS2',
        active: false
      },
      {
        text: 'сухость и стянутость кожи',
        recommendation: '',
        skin_characteristics: '',
        product: '4KR4',
        active: false
      },
      {
        text: 'первые неглубокие морщины',
        recommendation: '',
        skin_characteristics: '',
        product: '4MAS2',
        active: false
      },
      {
        text: 'Глубокие морщины',
        recommendation: '',
        skin_characteristics: '',
        product: '4MAS2, 6ESS2',
        active: false
      },
      {
        text: 'морщины вокруг глаз',
        recommendation: '',
        skin_characteristics: '',
        product: '',
        active: false
      },
      {
        text: 'пигментация',
        recommendation: 'Обязательно использовать СПФ защиту и добавить в ' +
        'уход средства с содержанием витамина С (осветляет пигментацию и выравнивает цвет кожи)',
        skin_characteristics: '',
        product: ' 4KR6, 4MAS2, 4MS3',
        active: false
      },
      {
        text: 'шелушения',
        recommendation: '',
        product: '',
        active: false
      },
      {
        text: 'после умывания или скраба кожа краснеет',
        recommendation: '',
        skin_characteristics: '',
        product: '4MSL1',
        active: false
      },
      {
        text: 'синяки под глазами',
        recommendation: '',
        skin_characteristics: '',
        product: '6PCH1',
        active: false
      },
      {
        text: 'морщины вокруг глаз',
        recommendation: '',
        skin_characteristics: '',
        product: '4KR5',
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

