export let responseMessage = [
  {
    id: 1,
    type: 'text',
    text: 'Привет. Для подбора косметики мне нужно определить ваш тип кожи и её особенности. ' +
    'Для этого вышлите свою фотографию и ответь на вопросы.Ваше имя:',
    field: 'name'
  },
  {
    id: 2,
    type: 'text',
    text: 'Ваш телефон',
    field: 'number'
  },
  {
    id: 3,
    type: 'file',
    text: 'Загрузите ваше фото.',
    field: 'avatar'
  },
  {
    id: 4,
    type: 'text',
    text: 'Ваш e-mail',
    field: 'email'
  },
  {
    id: 5,
    type: 'single_button',
    text: 'Возраст?',
    field: 'age',
    variants: [
      {
        text: 'До 20'
      },
      {
        text: '20-30'
      },
      {
        text: '31-45'
      },
      {
        text: '46-55'
      },
      {
        text: '56+'
      }
    ]
  },
  {
    id: 6,
    type: 'single_button',
    text: 'В течении какого времени появляется жирный блеск в Т-зоне?',
    field: 'description',
    variants: [
      {
        text: '1-3 часа'
      },
      {
        text: '4-6 часа'
      },
      {
        text: 'к вечеру'
      },
      {
        text: 'вообще нет жирного блеска'
      }
    ]
  },
  {
    id: 7,
    type: 'single_button',
    text: 'Кожа на щеках тоже жирниться или сухая?',
    field: 'lether',
    variants: [
      {
        text: 'да - жирный тип кожи',
      },
      {
        text: 'нет - комбинированный'
      }
    ]
  },
  {
    id: 8,
    type: 'single_button',
    text: ' Какие ощущения после умывания?',
    field: 'Feel',
    variants: [
      {
        text: 'Комфортные, могу забыть нанести крем'
      },
      {
        text: ' Кожу немного стягивает и сушит'
      },
      {
        text: 'Сильно стягивает и сушит кожу, хочется сразу нанести жирный крем'
      }
    ]
  },
  {
    id: 9,
    type: 'single_button',
    text: 'Цвет лица?',
    field: 'Complexion',
    variants: [
      {
        text: 'Здоровый цвет лица, кожа свежая, ровный тон.'
      },
      {
        text: 'Кожа тусклая, с землистым оттенком, тон не ровный'
      }
    ]
  },
  {
    id: 10,
    type: 'multi_button',
    text: 'Основные проблемы? (отметить галочкой)',
    field: 'main_problems',
    variants: [
      {
        text: 'жирный блеск',
        active: false
      },
      {
        text: 'расширенные поры',
        active: false
      },
      {
        text: 'черные точки',
        active: false
      },
      {
        text: 'прыщи (частые высыпания, внутренние болючие долго созревающие прыщи)',
        active: false
      },
      {
        text: 'прыщи (пару прыщиков в определенные дни месяца)',
        active: false
      },
      {
        text: 'закрытые комедоны ( прыщи которые не воспаляются и никак не беспокоят, но чувствуются проводя по коже пальцами.' +
        'Из-за этого кожа не ровная)',
        active: false
      },
      {
        text: 'следы после выдавливания прыщей',
        active: false
      },
      {
        text: 'купероз ( капилляры которые видно сквозь кожу)',
        active: false
      },
      {
        text: 'сухость и стянутость кожи',
        active: false
      },
      {
        text: 'первые неглубокие морщины',
        active: false
      },
      {
        text: 'Глубокие морщины',
        active: false
      },
      {
        text: 'морщины вокруг глаз',
        active: false
      },
      {
        text: 'пигментация',
        active: false
      },
      {
        text: 'шелушения',
        active: false
      },
      {
        text: 'после умывания или скраба кожа краснеет',
        active: false
      },
      {
        text: 'синяки под глазами',
        active: false
      },
      {
        text: 'морщины вокруг глаз',
        active: false
      }
    ]
  },
  {
    id: 11,
    type: 'single_button',
    text: 'Аллергия на косметику?',
    field: 'Allergy',
    variants: [
      {
        text: 'Да'
      },
      {
        text: 'Нет'
      }
    ]
  },
  {
    id: 12,
    type: 'text',
    text: 'На какие средства была аллергия и как проявлялась?',
    field: 'remedy'
  },
  {
    id: 13,
    type: 'text',
    text: 'Есть что добавить от себя?',
    field: 'about'
  }
];

