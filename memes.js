const BASE1 = "https://raw.githubusercontent.com/georapbox/meme-generator/refs/heads/master/src/assets/meme-templates/";
const BASE2 = "https://raw.githubusercontent.com/jacebrowning/memegen/refs/heads/main/templates/";
const BASE3 = "https://berdiyev-english.github.io/osm/memes/"

const MEMES_DB = [
    {
        id: 1,
        image: BASE3 + "sad/cat is in tears eating.jpg",
        text: "Me: I'll start my diet on Monday\nAlso me on Monday: Next Monday for sure",
        translation: "Я: начну диету в понедельник\nЯ же в понедельник: точно со следующего понедельника",
        difficulty: "easy",
        words: [
            { id: "w1_1", en: "diet", ru: "диета" },
            { id: "w1_2", en: "to start", ru: "начинать" },
            { id: "w1_3", en: "Monday", ru: "понедельник" },
            { id: "w1_4", en: "for sure", ru: "точно, наверняка" }
        ]
    },
    {
        id: 2,
        image: BASE3 + "offend/come in.jpg",
        text: "Mom: Dinner is ready!\nMe: *already ate snacks and not hungry*\nMe anyway: Coming!",
        translation: "Мама: ужин готов!\nЯ: *уже поел перекусов и не голодный*\nЯ всё равно: иду!",
        difficulty: "easy",
        words: [
            { id: "w2_1", en: "dinner", ru: "ужин, обед" },
            { id: "w2_2", en: "ready", ru: "готово, готовый" },
            { id: "w2_3", en: "snacks", ru: "перекус, закуски" },
            { id: "w2_4", en: "hungry", ru: "голодный" },
            { id: "w2_5", en: "anyway", ru: "в любом случае" }
        ]
    },
    {
        id: 3,
        image: BASE3 + "sad/Angry Pakistani Fan.jpg",
        text: "When you clean your room and can't find anything anymore:\nThis is fine",
        translation: "Когда убрался в комнате и теперь ничего не можешь найти:\nВсё нормально",
        difficulty: "easy",
        words: [
            { id: "w3_1", en: "to clean", ru: "убирать, чистить" },
            { id: "w3_2", en: "room", ru: "комната" },
            { id: "w3_3", en: "anymore", ru: "больше, уже" },
            { id: "w3_4", en: "to find", ru: "находить" }
        ]
    },
    {
        id: 4,
        image: BASE1 + "shut-up-and-take-my-money.jpg",
        text: "Me: I need to save money\nAlso me five minutes later: *adds everything to cart*",
        translation: "Я: нужно экономить деньги\nЯ же пять минут спустя: *добавляет всё в корзину*",
        difficulty: "easy",
        words: [
            { id: "w4_1", en: "to save", ru: "экономить, сберегать" },
            { id: "w4_2", en: "money", ru: "деньги" },
            { id: "w4_3", en: "cart", ru: "корзина (в магазине)" },
            { id: "w4_4", en: "five minutes later", ru: "пять минут спустя" }
        ]
    },
    {
        id: 5,
        image: BASE1 + "drake-hotline-bling.jpg",
        text: "Google something.\nAsk AI",
        translation: "Загуглить что-то\nСпросить у искуственного интелекта",
        difficulty: "medium",
        words: [
            { id: "w5_1", en: "to google", ru: "гуглить, искать в интернете" },
            { id: "w5_2", en: "ask", ru: "спросить" },
            { id: "w5_3", en: "something", ru: "что-то" },
            { id: "w5_4", en: "AI", ru: "искуственный интелект" }
        ]
    },
    {
        id: 6,
        image: BASE1 + "waiting-skeleton.jpg",
        text: "When the alarm goes off:\nJust 5 more minutes\n3 hours later: oh no",
        translation: "Когда срабатывает будильник:\nЕщё всего 5 минут\n3 часа спустя: о нет",
        difficulty: "easy",
        words: [
            { id: "w6_1", en: "alarm", ru: "будильник, сигнал" },
            { id: "w6_2", en: "goes off", ru: "срабатывает (о будильнике)" },
            { id: "w6_3", en: "5 more minutes", ru: "ещё 5 минут" },
            { id: "w6_4", en: "later", ru: "позже, спустя" }
        ]
    },
    {
        id: 7,
        image: BASE2 + "yallgot/default.jpg",
        text: "Me walking past the kitchen: I'm not hungry\nAlso me 10 minutes later: *opens fridge for the 5th time*",
        translation: "Я прохожу мимо кухни: я не голодный\nЯ же 10 минут спустя: *открывает холодильник в пятый раз*",
        difficulty: "medium",
        words: [
            { id: "w7_1", en: "walking past", ru: "проходя мимо" },
            { id: "w7_2", en: "kitchen", ru: "кухня" },
            { id: "w7_3", en: "hungry", ru: "голодный" },
            { id: "w7_4", en: "fridge", ru: "холодильник" },
            { id: "w7_5", en: "5th time", ru: "пятый раз" }
        ]
    },
    {
        id: 8,
        image: BASE2 + "rollsafe/default.jpg",
        text: "When someone says: We need to talk\nMy brain: *lists every mistake since childhood*",
        translation: "Когда кто-то говорит: нам нужно поговорить\nМой мозг: *перечисляет все ошибки с самого детства*",
        difficulty: "medium",
        words: [
            { id: "w8_1", en: "we need to talk", ru: "нам нужно поговорить" },
            { id: "w8_2", en: "brain", ru: "мозг" },
            { id: "w8_3", en: "mistake", ru: "ошибка" },
            { id: "w8_4", en: "childhood", ru: "детство" },
            { id: "w8_5", en: "since", ru: "с тех пор как, начиная с" }
        ]
    },
    {
        id: 9,
        image: BASE1 + "monkey_puppet.jpg",
        text: "Me at 10pm: I should go to sleep\nMe at 3am: *watching 47th video about random facts*",
        translation: "Я в 22:00: надо бы поспать\nЯ в 3 ночи: *смотрю 47-е видео о случайных фактах*",
        difficulty: "medium",
        words: [
            { id: "w9_1", en: "should", ru: "должен, следует" },
            { id: "w9_2", en: "to sleep", ru: "спать" },
            { id: "w9_3", en: "random", ru: "случайный, произвольный" },
            { id: "w9_4", en: "facts", ru: "факты" },
            { id: "w9_5", en: "47th", ru: "сорок седьмой" }
        ]
    },
    {
        id: 10,
        image: BASE1 + "mr-bean-waiting.jpg",
        text: "Me: I'll be ready in 5 minutes\nAlso me: *hasn't even started getting ready*",
        translation: "Я: буду готов через 5 минут\nЯ же: *даже не начал собираться*",
        difficulty: "easy",
        words: [
            { id: "w10_1", en: "ready", ru: "готовый" },
            { id: "w10_2", en: "in 5 minutes", ru: "через 5 минут" },
            { id: "w10_3", en: "hasn't even", ru: "даже не (начал)" },
            { id: "w10_4", en: "getting ready", ru: "собираться, готовиться" }
        ]
    },
    {
        id: 11,
        image: BASE1 + "sweating-bullets.jpg",
        text: "When you finally sit down to relax\nand suddenly remember 10 things you forgot to do",
        translation: "Когда наконец садишься отдохнуть\nи вдруг вспоминаешь 10 дел которые забыл сделать",
        difficulty: "medium",
        words: [
            { id: "w11_1", en: "finally", ru: "наконец" },
            { id: "w11_2", en: "to relax", ru: "расслабляться, отдыхать" },
            { id: "w11_3", en: "suddenly", ru: "вдруг, внезапно" },
            { id: "w11_4", en: "to remember", ru: "вспоминать, помнить" },
            { id: "w11_5", en: "forgot", ru: "забыл (прош. от forget)" }
        ]
    },
    {
        id: 12,
        image: BASE1 + "sad-pablo-escobar.jpg",
        text: "Teacher: you have the whole weekend to do this\nMe on Sunday night: okay let's go",
        translation: "Учитель: у вас есть целые выходные на это\nЯ в воскресенье вечером: ну ладно, поехали",
        difficulty: "easy",
        words: [
            { id: "w12_1", en: "whole", ru: "весь, целый" },
            { id: "w12_2", en: "weekend", ru: "выходные" },
            { id: "w12_3", en: "Sunday night", ru: "воскресный вечер" },
            { id: "w12_4", en: "let's go", ru: "ну давай, поехали" }
        ]
    },
    {
        id: 13,
        image: BASE1 + "one-does-not-simply.jpg",
        text: "Me: I'll just watch one episode\nNetflix: *plays next episode automatically*\nMe: well okay then",
        translation: "Я: посмотрю только одну серию\nNetflix: *автоматически включает следующую*\nЯ: ну ладно тогда",
        difficulty: "medium",
        words: [
            { id: "w13_1", en: "episode", ru: "серия, эпизод" },
            { id: "w13_2", en: "automatically", ru: "автоматически" },
            { id: "w13_3", en: "well okay then", ru: "ну ладно тогда" },
            { id: "w13_4", en: "to play", ru: "воспроизводить, играть" }
        ]
    },
    {
        id: 14,
        image: BASE2 + "keanu/default.jpg",
        text: "Me leaving the house:\nDid I lock the door?\n*comes back*\n*locked*\nDid I lock the door?",
        translation: "Я выхожу из дома:\nЯ закрыл дверь?\n*возвращается*\n*закрыта*\nЯ закрыл дверь?",
        difficulty: "medium",
        words: [
            { id: "w14_1", en: "leaving", ru: "уходя, покидая" },
            { id: "w14_2", en: "to lock", ru: "запирать, закрывать на замок" },
            { id: "w14_3", en: "door", ru: "дверь" },
            { id: "w14_4", en: "comes back", ru: "возвращается" }
        ]
    },
    {
        id: 15,
        image: BASE2 + "awkward/default.jpg",
        text: "When your phone dies and you don't know what to do with your hands",
        translation: "Когда телефон разрядился и ты не знаешь куда девать руки",
        difficulty: "easy",
        words: [
            { id: "w15_1", en: "phone dies", ru: "телефон разряжается" },
            { id: "w15_2", en: "hands", ru: "руки" },
            { id: "w15_3", en: "to know", ru: "знать" },
            { id: "w15_4", en: "what to do", ru: "что делать" }
        ]
    },
    {
        id: 16,
        image: BASE2 + "kermit/default.jpg",
        text: "Me: I don't care what people think about me\nAlso me: *overthinks every conversation for 3 days*",
        translation: "Я: мне всё равно что люди думают обо мне\nЯ же: *прокручивает каждый разговор в голове 3 дня*",
        difficulty: "hard",
        words: [
            { id: "w16_1", en: "to care", ru: "заботиться, переживать" },
            { id: "w16_2", en: "overthinks", ru: "слишком много думает" },
            { id: "w16_3", en: "conversation", ru: "разговор, беседа" },
            { id: "w16_4", en: "for 3 days", ru: "на протяжении 3 дней" }
        ]
    },
    {
        id: 17,
        image: BASE2 + "pigeon/default.jpg",
        text: "When you buy something expensive online\nand refresh the tracking page every 5 minutes",
        translation: "Когда купил что-то дорогое онлайн\nи обновляешь страницу отслеживания каждые 5 минут",
        difficulty: "medium",
        words: [
            { id: "w17_1", en: "expensive", ru: "дорогой" },
            { id: "w17_2", en: "to refresh", ru: "обновлять (страницу)" },
            { id: "w17_3", en: "tracking", ru: "отслеживание" },
            { id: "w17_4", en: "every 5 minutes", ru: "каждые 5 минут" }
        ]
    },
    {
        id: 18,
        image: BASE2 + "woman-cat/default.jpg",
        text: "Me: I don't need a list, I'll remember everything\nMe at the store: *buys everything except what I needed*",
        translation: "Я: список не нужен, всё запомню\nЯ в магазине: *покупает всё кроме того что нужно*",
        difficulty: "medium",
        words: [
            { id: "w18_1", en: "list", ru: "список" },
            { id: "w18_2", en: "to remember", ru: "помнить, запоминать" },
            { id: "w18_3", en: "store", ru: "магазин" },
            { id: "w18_4", en: "except", ru: "кроме, за исключением" },
            { id: "w18_5", en: "needed", ru: "нужное, необходимое" }
        ]
    },
    {
        id: 19,
        image: BASE1 + "two-buttons.jpg",
        text: "That feeling when you're home alone\nand someone knocks on the door:\nOpen it or pretend I don't exist?",
        translation: "То чувство когда ты дома один\nи кто-то стучит в дверь:\nОткрыть или притвориться что меня нет?",
        difficulty: "easy",
        words: [
            { id: "w19_1", en: "feeling", ru: "чувство, ощущение" },
            { id: "w19_2", en: "home alone", ru: "дома один" },
            { id: "w19_3", en: "knocks", ru: "стучит" },
            { id: "w19_4", en: "pretend", ru: "притворяться" },
            { id: "w19_5", en: "exist", ru: "существовать" }
        ]
    },
{
    id: 20,
    image: BASE1 + "ben-affleck-smoking.jpg",
    text: "Me: tomorrow I'll wake up early and be productive\nNext morning me: *snoozes alarm 7 times*",
    translation: "Я: завтра встану пораньше и буду продуктивным\nЯ же утром: *откладывает будильник 7 раз*",
    difficulty: "medium",
    words: [
        { id: "w20_1", en: "tomorrow", ru: "завтра" },
        { id: "w20_2", en: "to wake up", ru: "просыпаться" },
        { id: "w20_3", en: "productive", ru: "продуктивный" },
        { id: "w20_4", en: "snoozes", ru: "откладывает будильник" },
        { id: "w20_5", en: "alarm", ru: "будильник" }
    ]
},
{
    id: 21,
    image: BASE3 + "offend/grandpa uses phone.jpg",
    text: "Me: I'll just check my phone for 5 minutes\nAlso me: *2 hours later still scrolling*",
    translation: "Я: просто проверю телефон на 5 минут\nЯ же: *2 часа спустя всё ещё листаю*",
    difficulty: "easy",
    words: [
        { id: "w21_1", en: "to check", ru: "проверять" },
        { id: "w21_2", en: "scrolling", ru: "листать, прокручивать" },
        { id: "w21_3", en: "still", ru: "всё ещё" },
        { id: "w21_4", en: "later", ru: "позже, спустя" }
    ]
},
{
    id: 22,
    image: BASE1 + "this-is-fine.jpg",
    text: "Me: everything is under control\nMy life: *literally on fire*\nMe: this is fine",
    translation: "Я: всё под контролем\nМоя жизнь: *буквально горит*\nЯ: всё нормально",
    difficulty: "medium",
    words: [
        { id: "w22_1", en: "under control", ru: "под контролем" },
        { id: "w22_2", en: "literally", ru: "буквально" },
        { id: "w22_3", en: "on fire", ru: "горит, в огне" },
        { id: "w22_4", en: "fine", ru: "нормально, хорошо" }
    ]
},
{
    id: 23,
    image: BASE1 + "captain-picard-facepalm.jpg",
    text: "When you send a message to the wrong person\nand it's exactly about them",
    translation: "Когда отправляешь сообщение не тому человеку\nи оно именно про него",
    difficulty: "medium",
    words: [
        { id: "w23_1", en: "to send", ru: "отправлять" },
        { id: "w23_2", en: "message", ru: "сообщение" },
        { id: "w23_3", en: "wrong person", ru: "не тот человек" },
        { id: "w23_4", en: "exactly", ru: "именно, точно" }
    ]
},
{
    id: 24,
    image: BASE1 + "laughing-leo.jpg",
    text: "When you find money in your old jacket pocket\nand remember you were broke last week",
    translation: "Когда находишь деньги в старом кармане куртки\nи вспоминаешь что на прошлой неделе был без копейки",
    difficulty: "medium",
    words: [
        { id: "w24_1", en: "to find", ru: "находить" },
        { id: "w24_2", en: "jacket", ru: "куртка, пиджак" },
        { id: "w24_3", en: "pocket", ru: "карман" },
        { id: "w24_4", en: "broke", ru: "без денег, на мели" },
        { id: "w24_5", en: "last week", ru: "на прошлой неделе" }
    ]
},
{
    id: 25,
    image: BASE1 + "uno-draw-25-cards.jpg",
    text: "Say sorry first\nOr draw 25 cards",
    translation: "Извинись первым\nИли тяни 25 карт",
    difficulty: "easy",
    words: [
        { id: "w25_1", en: "to say sorry", ru: "извиняться" },
        { id: "w25_2", en: "first", ru: "первым, сначала" },
        { id: "w25_3", en: "or", ru: "или" },
        { id: "w25_4", en: "draw", ru: "тянуть, брать" }
    ]
},
{
    id: 26,
    image: BASE1 + "epic-handshake.jpg",
    text: "People who haven't texted back for 3 days\nand people who ignore calls:\nWe are the same",
    translation: "Люди которые не отвечают на сообщения 3 дня\nи люди которые игнорируют звонки:\nМы одинаковые",
    difficulty: "hard",
    words: [
        { id: "w26_1", en: "to text back", ru: "ответить на сообщение" },
        { id: "w26_2", en: "to ignore", ru: "игнорировать" },
        { id: "w26_3", en: "calls", ru: "звонки" },
        { id: "w26_4", en: "the same", ru: "одинаковые, такие же" }
    ]
},
{
    id: 27,
    image: BASE1 + "change-my-mind.jpg",
    text: "Lying in bed is more comfortable\nthan any other activity. Change my mind.",
    translation: "Лежать в кровати комфортнее\nчем любое другое занятие. Переубеди меня.",
    difficulty: "hard",
    words: [
        { id: "w27_1", en: "lying in bed", ru: "лежать в кровати" },
        { id: "w27_2", en: "comfortable", ru: "комфортный, удобный" },
        { id: "w27_3", en: "activity", ru: "занятие, деятельность" },
        { id: "w27_4", en: "change my mind", ru: "переубеди меня" }
    ]
},
{
    id: 28,
    image: BASE1 + "disappointed-guy.jpg",
    text: "When you cook something for the first time\nand it actually tastes good:\nWait... I have a talent?",
    translation: "Когда готовишь что-то впервые\nи это реально вкусно:\nПодождите... у меня есть талант?",
    difficulty: "medium",
    words: [
        { id: "w28_1", en: "to cook", ru: "готовить (еду)" },
        { id: "w28_2", en: "for the first time", ru: "впервые, в первый раз" },
        { id: "w28_3", en: "actually", ru: "на самом деле, реально" },
        { id: "w28_4", en: "tastes good", ru: "вкусно, хорошо на вкус" },
        { id: "w28_5", en: "talent", ru: "талант" }
    ]
},
{
    id: 29,
    image: BASE1 + "jack-sparrow-being-chased.jpg",
    text: "Me running away from my responsibilities\nevery single day",
    translation: "Я убегаю от своих обязанностей\nкаждый божий день",
    difficulty: "medium",
    words: [
        { id: "w29_1", en: "running away", ru: "убегать, сбегать" },
        { id: "w29_2", en: "responsibilities", ru: "обязанности, ответственность" },
        { id: "w29_3", en: "every single day", ru: "каждый день без исключения" }
    ]
},
{
    id: 30,
    image: BASE1 + "matrix-morpheus.jpg",
    text: "What if I told you\nthat you can just go to sleep\nwithout checking your phone one last time",
    translation: "Что если я скажу тебе\nчто можно просто лечь спать\nне проверив телефон последний раз",
    difficulty: "hard",
    words: [
        { id: "w30_1", en: "what if", ru: "что если, а вдруг" },
        { id: "w30_2", en: "to check", ru: "проверять" },
        { id: "w30_3", en: "one last time", ru: "последний раз" },
        { id: "w30_4", en: "without", ru: "без" }
    ]
},
{
    id: 31,
    image: BASE1 + "spiderman-pointing-at-spiderman.jpg",
    text: "Me judging others for being lazy\nAlso me: *hasn't moved from the couch in 6 hours*",
    translation: "Я осуждаю других за лень\nЯ же: *не вставал с дивана 6 часов*",
    difficulty: "medium",
    words: [
        { id: "w31_1", en: "judging", ru: "осуждая, оценивая" },
        { id: "w31_2", en: "lazy", ru: "ленивый" },
        { id: "w31_3", en: "couch", ru: "диван" },
        { id: "w31_4", en: "hasn't moved", ru: "не двигался, не вставал" }
    ]
},
{
    id: 32,
    image: BASE1 + "waiting-skeleton.jpg",
    text: "My sleep schedule:\nMonday: 2am\nTuesday: 3am\nWednesday: 4am\nThursday: this is fine",
    translation: "Мой режим сна:\nПонедельник: 2 ночи\nВторник: 3 ночи\nСреда: 4 ночи\nЧетверг: всё нормально",
    difficulty: "easy",
    words: [
        { id: "w32_1", en: "sleep schedule", ru: "режим сна" },
        { id: "w32_2", en: "Monday", ru: "понедельник" },
        { id: "w32_3", en: "Wednesday", ru: "среда" },
        { id: "w32_4", en: "Thursday", ru: "четверг" }
    ]
},
{
    id: 33,
    image: BASE2 + "buzz/default.jpg",
    text: "Excuses, excuses everywhere",
    translation: "Отговорки, отговорки везде",
    difficulty: "easy",
    words: [
        { id: "w33_1", en: "excuses", ru: "отговорки, оправдания" },
        { id: "w33_2", en: "everywhere", ru: "везде, повсюду" }
    ]
},
{
    id: 34,
    image: BASE2 + "gru/default.jpg",
    text: "Step 1: Make plans with friends\nStep 2: Get excited about plans\nStep 3: Cancel plans and stay home\nStep 3: Cancel plans and stay home",
    translation: "Шаг 1: Строю планы с друзьями\nШаг 2: Радуюсь планам\nШаг 3: Отменяю планы и сижу дома\nШаг 3: Отменяю планы и сижу дома",
    difficulty: "medium",
    words: [
        { id: "w34_1", en: "to make plans", ru: "строить планы" },
        { id: "w34_2", en: "excited", ru: "взволнованный, радостный" },
        { id: "w34_3", en: "to cancel", ru: "отменять" },
        { id: "w34_4", en: "to stay home", ru: "оставаться дома" }
    ]
},
{
    id: 35,
    image: BASE1 + "bill-murray-groundhog-day.jpg",
    text: "Monday again?\nDidn't we just have one of those?",
    translation: "Снова понедельник?\nРазве не было его совсем недавно?",
    difficulty: "easy",
    words: [
        { id: "w35_1", en: "again", ru: "снова, опять" },
        { id: "w35_2", en: "didn't we", ru: "разве не было" },
        { id: "w35_3", en: "just", ru: "только что, совсем" }
    ]
},
{
    id: 36,
    image: BASE2 + "morpheus/default.jpg",
    text: "What if I told you\nthat the weekend goes faster\nthan the working week",
    translation: "Что если я скажу тебе\nчто выходные проходят быстрее\nчем рабочая неделя",
    difficulty: "medium",
    words: [
        { id: "w36_1", en: "weekend", ru: "выходные" },
        { id: "w36_2", en: "faster", ru: "быстрее" },
        { id: "w36_3", en: "working week", ru: "рабочая неделя" },
        { id: "w36_4", en: "what if I told you", ru: "что если я скажу тебе" }
    ]
},
{
    id: 37,
    image: BASE1 + "two-buttons.jpg",
    text: "Eating healthy: salad with water\nAlso eating healthy: extra large pizza\nbut I walked to the fridge",
    translation: "Правильное питание: салат с водой\nТоже правильное питание: пицца экстра ларж\nно я же дошёл до холодильника пешком",
    difficulty: "medium",
    words: [
        { id: "w37_1", en: "healthy", ru: "здоровый, полезный" },
        { id: "w37_2", en: "extra large", ru: "очень большой" },
        { id: "w37_3", en: "walked", ru: "прошёл, дошёл пешком" },
        { id: "w37_4", en: "fridge", ru: "холодильник" }
    ]
},
{
    id: 38,
    image: BASE1 + "shut-up-and-take-my-money.jpg",
    text: "Me: you need to stop spending money\nAlso me: but the sale ends today",
    translation: "Я: нужно прекратить тратить деньги\nЯ же: но скидки заканчиваются сегодня",
    difficulty: "medium",
    words: [
        { id: "w38_1", en: "to stop", ru: "прекращать, останавливаться" },
        { id: "w38_2", en: "spending", ru: "тратя, расходуя" },
        { id: "w38_3", en: "sale", ru: "распродажа, скидки" },
        { id: "w38_4", en: "ends", ru: "заканчивается" },
        { id: "w38_5", en: "today", ru: "сегодня" }
    ]
},
{
    id: 39,
    image: BASE1 + "drake-hotline-bling.jpg",
    text: "Going to bed at a normal time\nWatching one more video at 3am",
    translation: "Лечь спать в нормальное время\nПосмотреть ещё одно видео в 3 ночи",
    difficulty: "easy",
    words: [
        { id: "w39_1", en: "normal time", ru: "нормальное время" },
        { id: "w39_2", en: "one more", ru: "ещё один" },
        { id: "w39_3", en: "going to bed", ru: "ложиться спать" }
    ]
},
{
    id: 40,
    image: BASE2 + "spiderman/default.jpg",
    text: "Me telling myself to be productive\nMe actually being productive",
    translation: "Я говорю себе быть продуктивным\nЯ реально продуктивный",
    difficulty: "medium",
    words: [
        { id: "w40_1", en: "telling", ru: "говоря, указывая" },
        { id: "w40_2", en: "productive", ru: "продуктивный" },
        { id: "w40_3", en: "actually", ru: "на самом деле, реально" },
        { id: "w40_4", en: "yourself", ru: "себе, себя" }
    ]
},
{
    id: 41,
    image: BASE1 + "disappointed-guy.jpg",
    text: "When you open the fridge for the 10th time\nhoping something new appeared",
    translation: "Когда открываешь холодильник в десятый раз\nнадеясь что появилось что-то новое",
    difficulty: "medium",
    words: [
        { id: "w41_1", en: "hoping", ru: "надеясь" },
        { id: "w41_2", en: "appeared", ru: "появилось" },
        { id: "w41_3", en: "10th time", ru: "десятый раз" },
        { id: "w41_4", en: "new", ru: "новый" }
    ]
},
{
    id: 42,
    image: BASE1 + "disappointed-guy.jpg",
    text: "Not sure if I'm tired\nor just bored of everything",
    translation: "Не пойму я устал\nили просто всё надоело",
    difficulty: "medium",
    words: [
        { id: "w42_1", en: "not sure", ru: "не уверен" },
        { id: "w42_2", en: "tired", ru: "уставший, устал" },
        { id: "w42_3", en: "bored", ru: "скучно, надоело" },
        { id: "w42_4", en: "everything", ru: "всё" }
    ]
},
{
    id: 43,
    image: BASE1 + "sweating-bullets.jpg",
    text: "When someone says\n'surprise visit in 5 minutes'\nand your house looks like a disaster",
    translation: "Когда кто-то говорит\n'приеду в гости через 5 минут'\nа твой дом выглядит как катастрофа",
    difficulty: "hard",
    words: [
        { id: "w43_1", en: "surprise visit", ru: "неожиданный визит" },
        { id: "w43_2", en: "disaster", ru: "катастрофа, беспорядок" },
        { id: "w43_3", en: "in 5 minutes", ru: "через 5 минут" },
        { id: "w43_4", en: "looks like", ru: "выглядит как" }
    ]
},
{
    id: 44,
    image: BASE1 + "batman-slapping-robin.jpg",
    text: "Robin: but maybe just one more episode\nBatman: NO",
    translation: "Робин: но может ещё одну серию\nБэтмен: НЕТ",
    difficulty: "easy",
    words: [
        { id: "w44_1", en: "maybe", ru: "может быть, возможно" },
        { id: "w44_2", en: "just", ru: "просто, только" },
        { id: "w44_3", en: "one more", ru: "ещё один" },
        { id: "w44_4", en: "episode", ru: "серия, эпизод" }
    ]
},
{
    id: 45,
    image: BASE1 + "sad-pablo-escobar.jpg",
    text: "That feeling on Sunday evening\nknowing tomorrow is Monday",
    translation: "То чувство в воскресенье вечером\nкогда знаешь что завтра понедельник",
    difficulty: "medium",
    words: [
        { id: "w45_1", en: "feeling", ru: "чувство, ощущение" },
        { id: "w45_2", en: "Sunday evening", ru: "воскресный вечер" },
        { id: "w45_3", en: "knowing", ru: "зная" },
        { id: "w45_4", en: "tomorrow", ru: "завтра" }
    ]
},
{
    id: 46,
    image: BASE3 + "hmm/Kermit thinking.jpg",
    text: "Me at 2am:\nWhat if animals have their own language\nand we just can't hear it",
    translation: "Я в 2 ночи:\nА что если у животных есть свой язык\nи мы просто не можем его слышать",
    difficulty: "medium",
    words: [
        { id: "w46_1", en: "language", ru: "язык" },
        { id: "w46_2", en: "animals", ru: "животные" },
        { id: "w46_3", en: "can't hear", ru: "не можем слышать" },
        { id: "w46_4", en: "their own", ru: "свой собственный" }
    ]
},
{
    id: 47,
    image: BASE3 + "dumb/Outstanding move.jpg",
    text: "Me: accidentally closes 47 tabs\nAlso me: actually that's fine\nI wasn't reading any of them",
    translation: "Я: случайно закрываю 47 вкладок\nЯ же: ну и ладно\nЯ всё равно ни одну не читал",
    difficulty: "medium",
    words: [
        { id: "w47_1", en: "accidentally", ru: "случайно, нечаянно" },
        { id: "w47_2", en: "tabs", ru: "вкладки (браузера)" },
        { id: "w47_3", en: "wasn't reading", ru: "не читал" },
        { id: "w47_4", en: "any of them", ru: "ни одну из них" }
    ]
},
{
    id: 48,
    image: BASE3 + "angry/Homer angry.jpg",
    text: "When you're trying to sleep\nbut your brain decides to replay\nevery embarrassing moment from 2014",
    translation: "Когда пытаешься уснуть\nно мозг решает прокрутить\nкаждый неловкий момент из 2014 года",
    difficulty: "hard",
    words: [
        { id: "w48_1", en: "trying", ru: "пытаясь, стараясь" },
        { id: "w48_2", en: "to replay", ru: "прокручивать, повторять" },
        { id: "w48_3", en: "embarrassing", ru: "неловкий, стыдный" },
        { id: "w48_4", en: "moment", ru: "момент" },
        { id: "w48_5", en: "decides", ru: "решает" }
    ]
},
{
    id: 49,
    image: BASE3 + "hmm/Blinking guy.jpg",
    text: "When someone cancels plans\nand you secretly wanted to cancel too",
    translation: "Когда кто-то отменяет планы\nа ты втайне тоже хотел отменить",
    difficulty: "medium",
    words: [
        { id: "w49_1", en: "cancels", ru: "отменяет" },
        { id: "w49_2", en: "plans", ru: "планы" },
        { id: "w49_3", en: "secretly", ru: "втайне, тайно" },
        { id: "w49_4", en: "wanted", ru: "хотел" }
    ]
},
{
    id: 50,
    image: BASE3 + "dumb/Big brain time.jpg",
    text: "Me: I should drink more water\nAlso me: *pours another cup of coffee*\nBig brain time",
    translation: "Я: надо пить больше воды\nЯ же: *наливает ещё одну чашку кофе*\nВремя большого мозга",
    difficulty: "easy",
    words: [
        { id: "w50_1", en: "should", ru: "должен, следует" },
        { id: "w50_2", en: "water", ru: "вода" },
        { id: "w50_3", en: "pours", ru: "наливает" },
        { id: "w50_4", en: "cup", ru: "чашка" },
        { id: "w50_5", en: "coffee", ru: "кофе" }
    ]
},
{
    id: 51,
    image: BASE3 + "funny/Comedy gold.jpg",
    text: "When you make a joke\nand nobody laughs\nbut you still think it was hilarious",
    translation: "Когда шутишь\nи никто не смеётся\nно ты всё равно считаешь это очень смешным",
    difficulty: "medium",
    words: [
        { id: "w51_1", en: "joke", ru: "шутка" },
        { id: "w51_2", en: "laughs", ru: "смеётся" },
        { id: "w51_3", en: "still", ru: "всё равно, всё же" },
        { id: "w51_4", en: "hilarious", ru: "очень смешной, уморительный" }
    ]
},
{
    id: 52,
    image: BASE3 + "hmm/Baby Yoda sipping soup.jpg",
    text: "Me watching drama unfold\nbetween two people\nand I have nothing to do with it",
    translation: "Я наблюдаю как разворачивается драма\nмежду двумя людьми\nи я тут вообще ни при чём",
    difficulty: "hard",
    words: [
        { id: "w52_1", en: "watching", ru: "наблюдая, смотря" },
        { id: "w52_2", en: "drama", ru: "драма, скандал" },
        { id: "w52_3", en: "to unfold", ru: "разворачиваться" },
        { id: "w52_4", en: "nothing to do with", ru: "не имею отношения к" }
    ]
},
{
    id: 53,
    image: BASE3 + "angry/Calm down calm down.jpg",
    text: "My wallet: please stop\nMe: but it's on sale\nMy wallet: CALM DOWN",
    translation: "Мой кошелёк: пожалуйста остановись\n��: но там скидка\nМой кошелёк: УСПОКОЙСЯ",
    difficulty: "easy",
    words: [
        { id: "w53_1", en: "wallet", ru: "кошелёк" },
        { id: "w53_2", en: "to stop", ru: "останавливаться, прекращать" },
        { id: "w53_3", en: "on sale", ru: "со скидкой, на распродаже" },
        { id: "w53_4", en: "calm down", ru: "успокойся" }
    ]
},
{
    id: 54,
    image: BASE3 + "dumb/Everyone is stupid except me.jpg",
    text: "Me explaining something simple\nfor the third time:\nEveryone is stupid except me",
    translation: "Я объясняю что-то простое\nуже в третий раз:\nВсе тупые кроме меня",
    difficulty: "medium",
    words: [
        { id: "w54_1", en: "explaining", ru: "объясняя" },
        { id: "w54_2", en: "simple", ru: "простой, несложный" },
        { id: "w54_3", en: "third time", ru: "третий раз" },
        { id: "w54_4", en: "except", ru: "кроме, за исключением" },
        { id: "w54_5", en: "stupid", ru: "глупый, тупой" }
    ]
},
{
    id: 55,
    image: BASE3 + "hmm/Kombucha girl.jpg",
    text: "Waking up without an alarm: amazing, refreshed\nWaking up with an alarm: who invented this torture",
    translation: "Просыпаться без будильника: прекрасно, бодрый\nПросыпаться с будильником: кто придумал эту пытку",
    difficulty: "hard",
    words: [
        { id: "w55_1", en: "waking up", ru: "просыпаясь" },
        { id: "w55_2", en: "refreshed", ru: "бодрый, освежившийся" },
        { id: "w55_3", en: "invented", ru: "придумал, изобрёл" },
        { id: "w55_4", en: "torture", ru: "пытка, мучение" },
        { id: "w55_5", en: "amazing", ru: "удивительный, потрясающий" }
    ]
},
{
    id: 56,
    image: BASE3 + "hmm/Suspicious spongebob.jpg",
    text: "When someone is being\ntoo nice to you for no reason:\nWhat do they want from me",
    translation: "Когда кто-то ведёт себя\nслишком мило без причины:\nЧего они от меня хотят",
    difficulty: "medium",
    words: [
        { id: "w56_1", en: "too nice", ru: "слишком мило, чересчур добрый" },
        { id: "w56_2", en: "for no reason", ru: "без причины" },
        { id: "w56_3", en: "suspicious", ru: "подозрительный" },
        { id: "w56_4", en: "what do they want", ru: "чего они хотят" }
    ]
},
{
    id: 57,
    image: BASE3 + "funny/I have achieved comedy.jpg",
    text: "When you finally think of\nthe perfect comeback\n3 days after the argument",
    translation: "Когда наконец придумываешь\nидеальный ответ\nчерез 3 дня после спора",
    difficulty: "hard",
    words: [
        { id: "w57_1", en: "finally", ru: "наконец" },
        { id: "w57_2", en: "comeback", ru: "остроумный ответ, реванш" },
        { id: "w57_3", en: "argument", ru: "спор, ссора" },
        { id: "w57_4", en: "perfect", ru: "идеальный, совершенный" }
    ]
},
{
    id: 58,
    image: BASE3 + "hmm/Hamster.jpg",
    text: "Me: I'll just rest my eyes for 10 minutes\n8 hours later: good morning",
    translation: "Я: просто дам глазам отдохнуть на 10 минут\n8 часов спустя: доброе утро",
    difficulty: "easy",
    words: [
        { id: "w58_1", en: "to rest", ru: "отдыхать, давать отдых" },
        { id: "w58_2", en: "eyes", ru: "глаза" },
        { id: "w58_3", en: "later", ru: "позже, спустя" },
        { id: "w58_4", en: "good morning", ru: "доброе утро" }
    ]
},
{
    id: 59,
    image: BASE3 + "dumb/Genius.jpg",
    text: "My plan: wake up, exercise, eat healthy, be productive\nReality: wake up, phone, eat, sleep, repeat",
    translation: "Мой план: встать, потренироваться, есть здорово, быть продуктивным\nРеальность: встать, телефон, поесть, поспать, повторить",
    difficulty: "medium",
    words: [
        { id: "w59_1", en: "exercise", ru: "тренироваться, делать упражнения" },
        { id: "w59_2", en: "reality", ru: "реальность, действительность" },
        { id: "w59_3", en: "repeat", ru: "повторять, повторить" },
        { id: "w59_4", en: "productive", ru: "продуктивный" },
        { id: "w59_5", en: "healthy", ru: "здорово, полезно" }
    ]
},
{
    id: 60,
    image: BASE3 + "hmm/Interesting.jpg",
    text: "Person: how are you?\nMe out loud: fine thanks\nMe in my head: interesting question",
    translation: "Человек: как дела?\nЯ вслух: нормально, спасибо\nЯ в голове: интересный вопрос",
    difficulty: "medium",
    words: [
        { id: "w60_1", en: "how are you", ru: "как дела, как ты" },
        { id: "w60_2", en: "out loud", ru: "вслух" },
        { id: "w60_3", en: "fine", ru: "нормально, хорошо" },
        { id: "w60_4", en: "in my head", ru: "в голове, про себя" },
        { id: "w60_5", en: "interesting", ru: "интересный" }
    ]
},
{
    id: 61,
    image: BASE3 + "hmm/Wojak using pc lying on the sofa.png",
    text: "My plan: study for 2 hours\nReality: open laptop, go to YouTube,\nwatch videos for 4 hours, close laptop,\ncall it a productive day",
    translation: "Мой план: учиться 2 часа\nРеальность: открываю ноутбук, захожу на YouTube,\nсмотрю видео 4 часа, закрываю ноутбук,\nназываю это продуктивным днём",
    difficulty: "medium",
    words: [
        { id: "w61_1", en: "to study", ru: "учиться, заниматься" },
        { id: "w61_2", en: "laptop", ru: "ноутбук" },
        { id: "w61_3", en: "productive", ru: "продуктивный" },
        { id: "w61_4", en: "reality", ru: "реальность" },
        { id: "w61_5", en: "call it", ru: "называть это" }
    ]
},
{
    id: 62,
    image: BASE3 + "angry/John Wick.jpg",
    text: "Me when someone\ntalks during a movie:\nYou have made a grave mistake",
    translation: "Я когда кто-то\nразговаривает во время фильма:\nТы совершил серьёзную ошибку",
    difficulty: "hard",
    words: [
        { id: "w62_1", en: "during", ru: "во время" },
        { id: "w62_2", en: "movie", ru: "фильм" },
        { id: "w62_3", en: "grave mistake", ru: "серьёзная ошибка" },
        { id: "w62_4", en: "made", ru: "совершил, сделал" }
    ]
},
{
    id: 63,
    image: BASE3 + "hmm/Jerry shocked.jpg",
    text: "When you check your bank account\nafter the weekend:\nWhere did all the money go",
    translation: "Когда проверяешь счёт в банке\nпосле выходных:\nКуда делись все деньги",
    difficulty: "medium",
    words: [
        { id: "w63_1", en: "to check", ru: "проверять" },
        { id: "w63_2", en: "bank account", ru: "банковский счёт" },
        { id: "w63_3", en: "weekend", ru: "выходные" },
        { id: "w63_4", en: "where did it go", ru: "куда это делось" }
    ]
},
{
    id: 64,
    image: BASE3 + "dumb/Certified idiot.jpg",
    text: "Me: I won't forget that\nAlso me 5 minutes later:\nWhat was I supposed to remember",
    translation: "Я: это не забуду\nЯ же 5 минут спустя:\nЧто я должен был запомнить",
    difficulty: "easy",
    words: [
        { id: "w64_1", en: "won't forget", ru: "не забуду" },
        { id: "w64_2", en: "supposed to", ru: "должен был" },
        { id: "w64_3", en: "to remember", ru: "помнить, запомнить" },
        { id: "w64_4", en: "5 minutes later", ru: "5 минут спустя" }
    ]
},
{
    id: 65,
    image: BASE3 + "hmm/Simpsons deep thinking.jpg",
    text: "At 3am my brain decides to think about:\nEvery mistake I've ever made\nThat awkward thing I said in 2012\nWhether penguins have knees",
    translation: "В 3 ночи мой мозг решает подумать о:\nКаждой ошибке которую я когда-либо делал\nТой неловкой фразе которую сказал в 2012\nЕсть ли у пингвинов колени",
    difficulty: "hard",
    words: [
        { id: "w65_1", en: "decides", ru: "решает" },
        { id: "w65_2", en: "awkward", ru: "неловкий, awkward" },
        { id: "w65_3", en: "ever made", ru: "когда-либо совершил" },
        { id: "w65_4", en: "whether", ru: "есть ли, интересно" },
        { id: "w65_5", en: "knees", ru: "колени" }
    ]
},
{
    id: 66,
    image: BASE3 + "funny/Not funny didn_t laugh Gru.jpg",
    text: "Friend: say something funny\nMe: something funny\nFriend: ...\nMe: ...\nWe are no longer friends",
    translation: "Друг: скажи что-нибудь смешное\nЯ: что-нибудь смешное\nДруг: ...\nЯ: ...\nМы больше не друзья",
    difficulty: "easy",
    words: [
        { id: "w66_1", en: "something funny", ru: "что-нибудь смешное" },
        { id: "w66_2", en: "no longer", ru: "больше не, уже не" },
        { id: "w66_3", en: "friends", ru: "друзья" },
        { id: "w66_4", en: "say", ru: "сказать, говорить" }
    ]
},
{
    id: 67,
    image: BASE3 + "hmm/Winnie shocked.jpg",
    text: "When you find out\nthe movie you watched as a kid\nwas actually really dark",
    translation: "Когда узнаёшь\nчто фильм который смотрел в детстве\nна самом деле был очень тёмным",
    difficulty: "hard",
    words: [
        { id: "w67_1", en: "find out", ru: "узнавать, выяснять" },
        { id: "w67_2", en: "as a kid", ru: "в детстве, будучи ребёнком" },
        { id: "w67_3", en: "actually", ru: "на самом деле" },
        { id: "w67_4", en: "dark", ru: "тёмный, мрачный" }
    ]
},
{
    id: 68,
    image: BASE3 + "angry/Homer.jpg",
    text: "When you're trying to parallel park\nand everyone is watching:\nThis is not happening",
    translation: "Когда паркуешься параллельно\nи все смотрят:\nЭтого не происходит",
    difficulty: "hard",
    words: [
        { id: "w68_1", en: "parallel park", ru: "парковаться параллельно" },
        { id: "w68_2", en: "watching", ru: "наблюдая, смотря" },
        { id: "w68_3", en: "happening", ru: "происходящее, случающееся" },
        { id: "w68_4", en: "trying", ru: "пытаясь" }
    ]
},
{
    id: 69,
    image: BASE3 + "hmm/Pepe 1.jpg",
    text: "Me: I'll reply later\nThat message: *sits unread for 3 weeks*\nMe: I should reply\nAlso me: later",
    translation: "Я: отвечу позже\nТо сообщение: *лежит непрочитанным 3 недели*\nЯ: надо бы ответить\nЯ же: позже",
    difficulty: "medium",
    words: [
        { id: "w69_1", en: "to reply", ru: "отвечать, ответить" },
        { id: "w69_2", en: "later", ru: "позже" },
        { id: "w69_3", en: "unread", ru: "непрочитанный" },
        { id: "w69_4", en: "sits", ru: "лежит, остаётся" },
        { id: "w69_5", en: "weeks", ru: "недели" }
    ]
},
{
    id: 70,
    image: BASE3 + "dumb/Big brain kowalski.jpg",
    text: "Me: I need to go to sleep\nAlso me: let me just think about\neverything that could go wrong in my life",
    translation: "Я: мне нужно поспать\nЯ же: дай-ка просто подумаю\nобо всём что может пойти не так в моей жизни",
    difficulty: "hard",
    words: [
        { id: "w70_1", en: "could go wrong", ru: "может пойти не так" },
        { id: "w70_2", en: "let me just", ru: "дай-ка просто" },
        { id: "w70_3", en: "life", ru: "жизнь" },
        { id: "w70_4", en: "everything", ru: "всё" }
    ]
},
{
    id: 71,
    image: BASE3 + "funny/Clown.jpg",
    text: "Me: I won't spend money this month\nAlso me: *orders food delivery every single day*\nClown behaviour",
    translation: "Я: в этом месяце не буду тратить деньги\nЯ же: *заказывает доставку еды каждый день*\nПоведение клоуна",
    difficulty: "medium",
    words: [
        { id: "w71_1", en: "to spend", ru: "тратить" },
        { id: "w71_2", en: "orders", ru: "заказывает" },
        { id: "w71_3", en: "food delivery", ru: "доставка еды" },
        { id: "w71_4", en: "behaviour", ru: "поведение" },
        { id: "w71_5", en: "every single day", ru: "каждый день без исключения" }
    ]
},
{
    id: 72,
    image: BASE3 + "hmm/Spongebob smiling.jpg",
    text: "When your food arrives\nand it looks exactly like the photo:\nToday is a good day",
    translation: "Когда твоя еда приходит\nи выглядит точно как на фото:\nСегодня хороший день",
    difficulty: "easy",
    words: [
        { id: "w72_1", en: "arrives", ru: "приходит, прибывает" },
        { id: "w72_2", en: "looks like", ru: "выглядит как" },
        { id: "w72_3", en: "exactly", ru: "точно, именно" },
        { id: "w72_4", en: "good day", ru: "хороший день" }
    ]
},
{
    id: 73,
    image: BASE3 + "angry/Lisa angry.jpg",
    text: "When someone spoils the ending\nof the show you were watching:\nYou had one job",
    translation: "Когда кто-то раскрывает концовку\nсериала который ты смотрел:\nУ тебя была одна задача",
    difficulty: "medium",
    words: [
        { id: "w73_1", en: "spoils", ru: "спойлерит, портит" },
        { id: "w73_2", en: "ending", ru: "концовка, финал" },
        { id: "w73_3", en: "show", ru: "сериал, шоу" },
        { id: "w73_4", en: "you had one job", ru: "у тебя была одна задача" }
    ]
},
{
    id: 74,
    image: BASE3 + "hmm/Morty on bed shocked.jpg",
    text: "When you realize\nit's already the middle of the year\nand you haven't done anything you planned",
    translation: "Когда понимаешь\nчто уже середина года\nа ты не сделал ничего из запланированного",
    difficulty: "hard",
    words: [
        { id: "w74_1", en: "realize", ru: "осознавать, понимать" },
        { id: "w74_2", en: "middle", ru: "середина" },
        { id: "w74_3", en: "haven't done", ru: "не сделал" },
        { id: "w74_4", en: "planned", ru: "запланированное, планировал" }
    ]
},
{
    id: 75,
    image: BASE3 + "hmm/Feels good.jpg",
    text: "That feeling when you finish\nall your tasks for the day\nand it's only 6pm:\nI am unstoppable",
    translation: "То чувство когда заканчиваешь\nвсе дела за день\nи ещё только 6 вечера:\nЯ неостановим",
    difficulty: "medium",
    words: [
        { id: "w75_1", en: "to finish", ru: "заканчивать, завершать" },
        { id: "w75_2", en: "tasks", ru: "задачи, дела" },
        { id: "w75_3", en: "unstoppable", ru: "неостановимый, непобедимый" },
        { id: "w75_4", en: "feeling", ru: "чувство, ощущение" },
        { id: "w75_5", en: "only", ru: "только, всего лишь" }
    ]
},
{
    id: 76,
    image: BASE3 + "hmm/Damn I kinda don_t care.jpg",
    text: "Someone: you should really fix your sleep schedule\nMe: yeah you're probably right\nAlso me at 4am:",
    translation: "Кто-то: тебе правда нужно наладить режим сна\nЯ: да ты наверное прав\nЯ же в 4 ночи:",
    difficulty: "medium",
    words: [
        { id: "w76_1", en: "sleep schedule", ru: "режим сна" },
        { id: "w76_2", en: "probably", ru: "наверное, вероятно" },
        { id: "w76_3", en: "should", ru: "следует, должен" },
        { id: "w76_4", en: "fix", ru: "исправить, наладить" }
    ]
},
{
    id: 77,
    image: BASE3 + "funny/Toy Story.jpg",
    text: "Anxiety, anxiety everywhere\nBefore an important event",
    translation: "Тревога, тревога везде\nПеред важным событием",
    difficulty: "medium",
    words: [
        { id: "w77_1", en: "anxiety", ru: "тревога, беспокойство" },
        { id: "w77_2", en: "everywhere", ru: "везде, повсюду" },
        { id: "w77_3", en: "important", ru: "важный" },
        { id: "w77_4", en: "event", ru: "событие, мероприятие" }
    ]
},
{
    id: 78,
    image: BASE3 + "dumb/Years of academy wasted.jpg",
    text: "Me after spending 3 hours\nlooking for something\nthat was in front of me the whole time",
    translation: "Я после того как провёл 3 часа\nв поисках чего-то\nчто всё это время было прямо передо мной",
    difficulty: "hard",
    words: [
        { id: "w78_1", en: "spending", ru: "проводя, тратя" },
        { id: "w78_2", en: "looking for", ru: "ища, в поисках" },
        { id: "w78_3", en: "in front of", ru: "перед, напротив" },
        { id: "w78_4", en: "the whole time", ru: "всё это время" }
    ]
},
{
    id: 79,
    image: BASE3 + "hmm/Rick 1.jpg",
    text: "Me: I don't need anyone's approval\nAlso me: *checks likes every 30 seconds*",
    translation: "Я: мне не нужно ничьё одобрение\nЯ же: *проверяет лайки каждые 30 секунд*",
    difficulty: "hard",
    words: [
        { id: "w79_1", en: "approval", ru: "одобрение" },
        { id: "w79_2", en: "checks", ru: "проверяет" },
        { id: "w79_3", en: "likes", ru: "лайки" },
        { id: "w79_4", en: "seconds", ru: "секунды" },
        { id: "w79_5", en: "anyone's", ru: "чьё-либо, ничьё" }
    ]
},
{
    id: 80,
    image: BASE3 + "angry/So you have chosen death.jpg",
    text: "Me: please don't touch my food\nSomeone: *touches my food*\nSo you have chosen death",
    translation: "Я: пожалуйста не трогай мою еду\nКто-то: *трогает мою еду*\nИтак ты выбрал смерть",
    difficulty: "medium",
    words: [
        { id: "w80_1", en: "touch", ru: "трогать, касаться" },
        { id: "w80_2", en: "chosen", ru: "выбрал, избрал" },
        { id: "w80_3", en: "death", ru: "смерть" },
        { id: "w80_4", en: "please", ru: "пожалуйста" }
    ]
},
{
    id: 81,
    image: BASE3 + "hmm/Pikachu caprisun.jpg",
    text: "Me pretending everything is fine\nwhile drinking my morning coffee",
    translation: "Я делаю вид что всё хорошо\nпока пью утренний кофе",
    difficulty: "medium",
    words: [
        { id: "w81_1", en: "pretending", ru: "притворяясь, делая вид" },
        { id: "w81_2", en: "everything is fine", ru: "всё хорошо, всё нормально" },
        { id: "w81_3", en: "morning", ru: "утро, утренний" },
        { id: "w81_4", en: "while", ru: "пока, в то время как" }
    ]
},
{
    id: 82,
    image: BASE3 + "dumb/Outstanding move.jpg",
    text: "Me: I'll save money by cooking at home\nAlso me: *buys ingredients for 50 dollars\nto make a meal worth 5 dollars*\nOutstanding move",
    translation: "Я: буду экономить деньги готовя дома\nЯ же: *покупает ингредиентов на 50 долларов\nчтобы приготовить блюдо стоимостью 5 долларов*\nВыдающийся ход",
    difficulty: "hard",
    words: [
        { id: "w82_1", en: "ingredients", ru: "ингредиенты" },
        { id: "w82_2", en: "meal", ru: "блюдо, еда" },
        { id: "w82_3", en: "worth", ru: "стоимостью, ценой в" },
        { id: "w82_4", en: "outstanding", ru: "выдающийся, замечательный" },
        { id: "w82_5", en: "to save money", ru: "экономить деньги" }
    ]
},
{
    id: 83,
    image: BASE3 + "hmm/Spongebob sus.jpg",
    text: "When someone says\n'I need to tell you something'\nand then says 'never mind'",
    translation: "Когда кто-то говорит\n'мне нужно кое-что сказать тебе'\nа потом говорит 'ладно забудь'",
    difficulty: "medium",
    words: [
        { id: "w83_1", en: "never mind", ru: "ладно забудь, неважно" },
        { id: "w83_2", en: "need to tell", ru: "нужно сказать" },
        { id: "w83_3", en: "something", ru: "кое-что, что-то" },
        { id: "w83_4", en: "suspicious", ru: "подозрительный" }
    ]
},
{
    id: 84,
    image: BASE3 + "funny/John Cena laughing.jpg",
    text: "When someone says\n'working from home must be so easy'\nHahaha yes totally",
    translation: "Когда кто-то говорит\n'работать из дома наверное так легко'\nХахаха да конечно",
    difficulty: "medium",
    words: [
        { id: "w84_1", en: "working from home", ru: "работать из дома" },
        { id: "w84_2", en: "must be", ru: "должно быть, наверное" },
        { id: "w84_3", en: "totally", ru: "полностью, абсолютно" },
        { id: "w84_4", en: "easy", ru: "лёгкий, простой" }
    ]
},
{
    id: 85,
    image: BASE3 + "hmm/Wojak 1.jpg",
    text: "Me reading old texts\nI sent to my crush 5 years ago:\nWhy did I say that\nWhy did I say ANY of that",
    translation: "Я читаю старые сообщения\nкоторые отправлял симпатии 5 лет назад:\nЗачем я это написал\nЗачем я написал ВООБЩЕ ЭТО",
    difficulty: "hard",
    words: [
        { id: "w85_1", en: "texts", ru: "сообщения, смски" },
        { id: "w85_2", en: "crush", ru: "симпатия, тот кто нравится" },
        { id: "w85_3", en: "sent", ru: "отправил (прош. от send)" },
        { id: "w85_4", en: "any of that", ru: "вообще это, хоть что-то из этого" }
    ]
},
{
    id: 86,
    image: BASE3 + "angry/Thomas had never seen such bullshit before.jpg",
    text: "When someone cuts in line\nright in front of you",
    translation: "Когда кто-то лезет без очереди\nпрямо перед тобой",
    difficulty: "medium",
    words: [
        { id: "w86_1", en: "cuts in line", ru: "лезет без очереди" },
        { id: "w86_2", en: "right in front", ru: "прямо перед" },
        { id: "w86_3", en: "line", ru: "очередь, линия" }
    ]
},
{
    id: 87,
    image: BASE3 + "hmm/Perhaps.jpg",
    text: "Me: maybe I should start exercising\nAlso me: or perhaps I should just\nthink about exercising again tomorrow",
    translation: "Я: может мне начать заниматься спортом\nЯ же: или пожалуй просто\nснова подумаю об этом завтра",
    difficulty: "medium",
    words: [
        { id: "w87_1", en: "perhaps", ru: "пожалуй, возможно" },
        { id: "w87_2", en: "exercising", ru: "заниматься спортом" },
        { id: "w87_3", en: "maybe", ru: "может быть" },
        { id: "w87_4", en: "tomorrow", ru: "завтра" }
    ]
},
{
    id: 88,
    image: BASE3 + "dumb/Spell red.jpg",
    text: "Brain at 3am:\nDid I lock the door?\nDid I turn off the stove?\nIs a hotdog a sandwich?",
    translation: "Мозг в 3 ночи:\nЯ закрыл дверь?\nЯ выключил плиту?\nХот-дог это сэндвич?",
    difficulty: "medium",
    words: [
        { id: "w88_1", en: "lock", ru: "запирать, закрывать на замок" },
        { id: "w88_2", en: "turn off", ru: "выключать" },
        { id: "w88_3", en: "stove", ru: "плита, духовка" },
        { id: "w88_4", en: "sandwich", ru: "бутерброд, сэндвич" }
    ]
},
{
    id: 89,
    image: BASE3 + "hmm/Quentin Tarantino walking around.jpg",
    text: "Me walking around the house\ndoing absolutely nothing\nbut feeling very busy",
    translation: "Я хожу по дому\nне делая абсолютно ничего\nно чувствуя себя очень занятым",
    difficulty: "medium",
    words: [
        { id: "w89_1", en: "walking around", ru: "ходить, слоняться" },
        { id: "w89_2", en: "absolutely nothing", ru: "абсолютно ничего" },
        { id: "w89_3", en: "feeling", ru: "чувствуя, ощущая" },
        { id: "w89_4", en: "busy", ru: "занятой, занятый" }
    ]
},
{
    id: 90,
    image: BASE3 + "funny/I have achieved comedy.jpg",
    text: "When you finally understand\na joke from 3 years ago:\nI HAVE ACHIEVED ENLIGHTENMENT",
    translation: "Когда наконец понимаешь\nшутку трёхлетней давности:\nЯ ДОСТИГ ПРОСВЕТЛЕНИЯ",
    difficulty: "hard",
    words: [
        { id: "w90_1", en: "finally", ru: "наконец" },
        { id: "w90_2", en: "to understand", ru: "понимать" },
        { id: "w90_3", en: "achieved", ru: "достиг, добился" },
        { id: "w90_4", en: "enlightenment", ru: "просветление" },
        { id: "w90_5", en: "years ago", ru: "лет назад" }
    ]
},
{
    id: 91,
    image: BASE3 + "hmm/Kermit.jpg",
    text: "Me: I should really clean my room\nInner me: or you could just\nclose the door and pretend it doesn't exist",
    translation: "Я: надо бы убраться в комнате\nВнутренний я: или ты можешь просто\nзакрыть дверь и делать вид что её не существует",
    difficulty: "medium",
    words: [
        { id: "w91_1", en: "inner", ru: "внутренний" },
        { id: "w91_2", en: "close the door", ru: "закрыть дверь" },
        { id: "w91_3", en: "pretend", ru: "притворяться, делать вид" },
        { id: "w91_4", en: "exist", ru: "существовать" },
        { id: "w91_5", en: "really", ru: "действительно, реально" }
    ]
},
{
    id: 92,
    image: BASE3 + "hmm/Shrugging Tom HD Redraw - Tom and Jerry - u_Gibus_Squidward on Reddit.jpg",
    text: "Me: I'll just have one cookie\n*eats entire pack*\nMe: I have no regrets",
    translation: "Я: возьму только одно печенье\n*съедает всю пачку*\nЯ: я ни о чём не сожалею",
    difficulty: "medium",
    words: [
        { id: "w92_1", en: "cookie", ru: "печенье" },
        { id: "w92_2", en: "entire", ru: "весь, целый" },
        { id: "w92_3", en: "pack", ru: "пачка, упаковка" },
        { id: "w92_4", en: "regrets", ru: "сожаления" },
        { id: "w92_5", en: "no regrets", ru: "без сожалений" }
    ]
},
{
    id: 93,
    image: BASE3 + "hmm/Zootopie confused.jpg",
    text: "When someone asks\nwhat you've been doing all day\nand you genuinely have no idea",
    translation: "Когда кто-то спрашивает\nчем ты занимался весь день\nи ты искренне понятия не имеешь",
    difficulty: "hard",
    words: [
        { id: "w93_1", en: "genuinely", ru: "искренне, по-настоящему" },
        { id: "w93_2", en: "no idea", ru: "понятия не имею" },
        { id: "w93_3", en: "all day", ru: "весь день" },
        { id: "w93_4", en: "been doing", ru: "занимался, делал" }
    ]
},
{
    id: 94,
    image: BASE3 + "angry/Angry doge.jpg",
    text: "Me: I'll go to bed at 10pm tonight\nMy bed at 10pm: *empty*\nMe at 2am: on my way",
    translation: "Я: сегодня лягу спать в 10 вечера\nМоя кровать в 10 вечера: *пустая*\nЯ в 2 ночи: уже иду",
    difficulty: "easy",
    words: [
        { id: "w94_1", en: "tonight", ru: "сегодня вечером, сегодня ночью" },
        { id: "w94_2", en: "empty", ru: "пустой" },
        { id: "w94_3", en: "on my way", ru: "уже иду, в пути" },
        { id: "w94_4", en: "bed", ru: "кровать" }
    ]
},
{
    id: 95,
    image: BASE3 + "hmm/Carlos 1.jpg",
    text: "Friend: how did you sleep?\nMe: well I closed my eyes at 2am\nthought about life for 3 hours\nthen it was morning",
    translation: "Друг: как спалось?\nЯ: ну я закрыл глаза в 2 ночи\nдумал о жизни 3 часа\nпотом наступило утро",
    difficulty: "medium",
    words: [
        { id: "w95_1", en: "closed my eyes", ru: "закрыл глаза" },
        { id: "w95_2", en: "thought about", ru: "думал о" },
        { id: "w95_3", en: "morning", ru: "утро" },
        { id: "w95_4", en: "life", ru: "жизнь" },
        { id: "w95_5", en: "how did you sleep", ru: "как спалось" }
    ]
},
{
    id: 96,
    image: BASE3 + "funny/Clown university invitation.jpg",
    text: "Me making the same mistake\nfor the 10th time:\nYou are invited to clown university",
    translation: "Я совершаю одну и ту же ошибку\nв десятый раз:\nТебя приглашают в университет клоунов",
    difficulty: "medium",
    words: [
        { id: "w96_1", en: "same mistake", ru: "одна и та же ошибка" },
        { id: "w96_2", en: "invited", ru: "приглашён" },
        { id: "w96_3", en: "university", ru: "университет" },
        { id: "w96_4", en: "10th time", ru: "десятый раз" }
    ]
},
{
    id: 97,
    image: BASE3 + "hmm/Pikachu 2.jpg",
    text: "When you accidentally press send\nbefore finishing the message:\nOh no",
    translation: "Когда случайно нажимаешь отправить\nне закончив сообщение:\nО нет",
    difficulty: "easy",
    words: [
        { id: "w97_1", en: "accidentally", ru: "случайно, нечаянно" },
        { id: "w97_2", en: "press", ru: "нажимать" },
        { id: "w97_3", en: "send", ru: "отправить" },
        { id: "w97_4", en: "finishing", ru: "заканчивая, дописывая" },
        { id: "w97_5", en: "message", ru: "сообщение" }
    ]
},
{
    id: 98,
    image: BASE3 + "dumb/What if we use 100_ of our brain.jpg",
    text: "Normal people: sets one alarm\nMe: sets 14 alarms\nand still oversleeps",
    translation: "Обычные люди: ставят один будильник\nЯ: ставлю 14 будильников\nи всё равно просыпаю",
    difficulty: "medium",
    words: [
        { id: "w98_1", en: "sets alarm", ru: "ставит будильник" },
        { id: "w98_2", en: "still", ru: "всё равно, всё же" },
        { id: "w98_3", en: "oversleeps", ru: "просыпает, спит дольше" },
        { id: "w98_4", en: "normal", ru: "обычный, нормальный" }
    ]
},
{
    id: 99,
    image: BASE3 + "hmm/Toy Story hmm.jpg",
    text: "Me: I have so much to do today\nAlso me: *spends 4 hours deciding\nwhere to start*",
    translation: "Я: у меня так много дел сегодня\nЯ же: *тратит 4 часа решая\nс чего начать*",
    difficulty: "medium",
    words: [
        { id: "w99_1", en: "so much", ru: "так много" },
        { id: "w99_2", en: "to do", ru: "делать, сделать" },
        { id: "w99_3", en: "spends", ru: "тратит (время)" },
        { id: "w99_4", en: "deciding", ru: "решая, принимая решение" },
        { id: "w99_5", en: "where to start", ru: "с чего начать" }
    ]
},
{
    id: 100,
    image: BASE3 + "funny/Comedy gold.jpg",
    text: "Me: *makes a joke*\nEveryone: ...\nMe 3 seconds later: that was comedy gold\nI don't know what's wrong with you people",
    translation: "Я: *шучу*\nВсе: ...\nЯ 3 секунды спустя: это было золото\nНе знаю что с вами не так",
    difficulty: "hard",
    words: [
        { id: "w100_1", en: "comedy gold", ru: "чистое золото (об очень смешном)" },
        { id: "w100_2", en: "wrong with", ru: "не так с, не в порядке у" },
        { id: "w100_3", en: "seconds later", ru: "секунды спустя" },
        { id: "w100_4", en: "people", ru: "люди, народ" }
    ]
},
{
    id: 101,
    image: BASE3 + "hmm/Simpsons - waiting for something.jpg",
    text: "Me waiting for my life\nto magically get better\nwithout changing anything",
    translation: "Я жду пока моя жизнь\nволшебным образом станет лучше\nне меняя при этом ничего",
    difficulty: "hard",
    words: [
        { id: "w101_1", en: "waiting", ru: "ожидая, жду" },
        { id: "w101_2", en: "magically", ru: "волшебным образом, магически" },
        { id: "w101_3", en: "to get better", ru: "становиться лучше" },
        { id: "w101_4", en: "without changing", ru: "не меняя, без изменений" },
        { id: "w101_5", en: "anything", ru: "что-либо, ничего" }
    ]
},
{
    id: 102,
    image: BASE3 + "angry/Is that a personal attack or something.jpg",
    text: "Mom: You should get married\nMe : is that a personal attack",
    translation: "Мама: Тебе бы пора семью завести\nЯ : это что личная атака (угроза)",
    difficulty: "medium",
    words: [
        { id: "w102_1", en: "should", ru: "должен,следует" },
        { id: "w102_2", en: "get married", ru: "жениться/выйти замуж" },
        { id: "w102_3", en: "personal attack", ru: "личная атака, нападки" }
    ]
},
{
    id: 103,
    image: BASE3 + "hmm/Spongebob 1.jpg",
    text: "Me: I'm going to be so productive today\n*opens Netflix*\n*opens food delivery app*\n*opens YouTube*\nProductivity loading...",
    translation: "Я: сегодня буду таким продуктивным\n*открывает Netflix*\n*открывает приложение доставки еды*\n*открывает YouTube*\nПродуктивность загружается...",
    difficulty: "medium",
    words: [
        { id: "w103_1", en: "productive", ru: "продуктивный" },
        { id: "w103_2", en: "delivery app", ru: "приложение доставки" },
        { id: "w103_3", en: "loading", ru: "загружается, загрузка" },
        { id: "w103_4", en: "opens", ru: "открывает" }
    ]
},
{
    id: 104,
    image: BASE3 + "dumb/Smort.jpg",
    text: "Me: I should eat something healthy\nBrain: pizza is made from wheat\nwheat is a plant\nplants are healthy\npizza is healthy",
    translation: "Я: надо бы съесть что-то полезное\nМозг: пицца сделана из пшеницы\nпшеница это растение\nрастения полезны\nпицца полезна",
    difficulty: "hard",
    words: [
        { id: "w104_1", en: "wheat", ru: "пшеница" },
        { id: "w104_2", en: "plant", ru: "растение" },
        { id: "w104_3", en: "healthy", ru: "полезный, здоровый" },
        { id: "w104_4", en: "made from", ru: "сделано из" },
        { id: "w104_5", en: "brain", ru: "мозг" }
    ]
},
{
    id: 105,
    image: BASE3 + "hmm/Bois Bob l_éponge.jpg",
    text: "Day 1 of diet: I got this\nDay 2 of diet: this is manageable\nDay 3 of diet: *orders entire menu*",
    translation: "День 1 диеты: я справлюсь\nДень 2 диеты: это терпимо\nДень 3 диеты: *заказывает всё меню*",
    difficulty: "medium",
    words: [
        { id: "w105_1", en: "I got this", ru: "я справлюсь, я смогу" },
        { id: "w105_2", en: "manageable", ru: "терпимо, выполнимо" },
        { id: "w105_3", en: "entire menu", ru: "всё меню" },
        { id: "w105_4", en: "orders", ru: "заказывает" },
        { id: "w105_5", en: "diet", ru: "диета" }
    ]
},
{
    id: 106,
    image: BASE3 + "hmm/Wojak 2.jpg",
    text: "Me: I need to save money\nAlso me: *subscribes to 7 streaming services*\nI am very smart",
    translation: "Я: нужно экономить деньги\nЯ же: *подписывается на 7 стриминговых сервисов*\nЯ очень умный",
    difficulty: "medium",
    words: [
        { id: "w106_1", en: "subscribes", ru: "подписывается" },
        { id: "w106_2", en: "streaming services", ru: "стриминговые сервисы" },
        { id: "w106_3", en: "to save money", ru: "экономить деньги" },
        { id: "w106_4", en: "smart", ru: "умный" }
    ]
},
{
    id: 107,
    image: BASE3 + "angry/Angry kid.jpg",
    text: "When someone touches the thermostat\nwithout asking:\nYou have crossed the line",
    translation: "Когда кто-то трогает термостат\nне спросив:\nТы перешёл черту",
    difficulty: "medium",
    words: [
        { id: "w107_1", en: "thermostat", ru: "термостат, регулятор температуры" },
        { id: "w107_2", en: "without asking", ru: "не спросив" },
        { id: "w107_3", en: "crossed the line", ru: "перешёл черту" },
        { id: "w107_4", en: "touches", ru: "трогает, касается" }
    ]
},
{
    id: 108,
    image: BASE3 + "hmm/Ne sais pas.jpg",
    text: "Friend: what do you want to eat?\nMe: I don't know\nFriend: pizza?\nMe: no\nFriend: burgers?\nMe: no\nFriend: what then?\nMe: I don't know",
    translation: "Друг: что хочешь поесть?\nЯ: не знаю\nДруг: пиццу?\nЯ: нет\nДруг: бургеры?\nЯ: нет\nДруг: тогда что?\nЯ: не знаю",
    difficulty: "easy",
    words: [
        { id: "w108_1", en: "what do you want", ru: "что ты хочешь" },
        { id: "w108_2", en: "I don't know", ru: "не знаю" },
        { id: "w108_3", en: "then", ru: "тогда, в таком случае" },
        { id: "w108_4", en: "burgers", ru: "бургеры" }
    ]
},
{
    id: 109,
    image: BASE3 + "dumb/Filosof.jpg",
    text: "Me at night: I should write that down\nso I don't forget\nMe in the morning: what was it again",
    translation: "Я ночью: надо записать это\nчтобы не забыть\nЯ утром: что это было",
    difficulty: "medium",
    words: [
        { id: "w109_1", en: "write down", ru: "записать, написать" },
        { id: "w109_2", en: "forget", ru: "забывать, забыть" },
        { id: "w109_3", en: "what was it", ru: "что это было" },
        { id: "w109_4", en: "again", ru: "снова, опять" },
        { id: "w109_5", en: "morning", ru: "утро" }
    ]
},
{
    id: 110,
    image: BASE3 + "hmm/Simpsons disgusted.jpg",
    text: "When you smell something weird\nbut decide to eat it anyway:\nThis is probably fine",
    translation: "Когда чувствуешь странный запах\nно решаешь всё равно это съесть:\nЭто наверное нормально",
    difficulty: "medium",
    words: [
        { id: "w110_1", en: "smell", ru: "запах, нюхать" },
        { id: "w110_2", en: "weird", ru: "странный, необычный" },
        { id: "w110_3", en: "decide", ru: "решать" },
        { id: "w110_4", en: "anyway", ru: "в любом случае, всё равно" },
        { id: "w110_5", en: "probably", ru: "наверное, вероятно" }
    ]
},
{
    id: 111,
    image: BASE3 + "funny/masterclass.jpg",
    text: "Me explaining to my mom\nhow to use her smartphone\nfor the 47th time this week",
    translation: "Я объясняю маме\nкак пользоваться смартфоном\nв 47-й раз на этой неделе",
    difficulty: "medium",
    words: [
        { id: "w111_1", en: "explaining", ru: "объясняя" },
        { id: "w111_2", en: "smartphone", ru: "смартфон" },
        { id: "w111_3", en: "this week", ru: "на этой неделе" },
        { id: "w111_4", en: "47th time", ru: "сорок седьмой раз" }
    ]
},
{
    id: 112,
    image: BASE3 + "hmm/Pepe 2.jpg",
    text: "Me in public: I am a normal functioning human being\nMe at home alone:",
    translation: "Я на людях: я нормальный функционирующий человек\nЯ дома один:",
    difficulty: "medium",
    words: [
        { id: "w112_1", en: "public", ru: "общественное место, на людях" },
        { id: "w112_2", en: "normal", ru: "нормальный" },
        { id: "w112_3", en: "functioning", ru: "функционирующий, работающий" },
        { id: "w112_4", en: "human being", ru: "человек, человеческое существо" },
        { id: "w112_5", en: "alone", ru: "один, в одиночестве" }
    ]
},
{
    id: 113,
    image: BASE3 + "angry/Rick.jpg",
    text: "When the wifi is slow\nand you're watching something important:\nI did not come here to suffer",
    translation: "Когда wifi медленный\nи ты смотришь что-то важное:\nЯ пришёл сюда не страдать",
    difficulty: "medium",
    words: [
        { id: "w113_1", en: "wifi", ru: "вайфай, беспроводной интернет" },
        { id: "w113_2", en: "slow", ru: "медленный" },
        { id: "w113_3", en: "important", ru: "важный" },
        { id: "w113_4", en: "suffer", ru: "страдать, мучиться" }
    ]
},
{
    id: 114,
    image: BASE3 + "hmm/Dormir 3.jpg",
    text: "My bed on weekdays:\n*just a bed*\nMy bed on weekends:\nthe most comfortable place on earth",
    translation: "Моя кровать в будни:\n*просто кровать*\nМоя кровать в выходные:\nсамое комфортное место на земле",
    difficulty: "medium",
    words: [
        { id: "w114_1", en: "weekdays", ru: "будние дни, будни" },
        { id: "w114_2", en: "weekends", ru: "выходные" },
        { id: "w114_3", en: "comfortable", ru: "комфортный, удобный" },
        { id: "w114_4", en: "earth", ru: "земля, мир" },
        { id: "w114_5", en: "place", ru: "место" }
    ]
},
{
    id: 115,
    image: BASE3 + "dumb/Brainlet 30.jpg",
    text: "Me: I'll just check one notification\n*opens phone*\n*45 minutes later*\nHow did I end up here",
    translation: "Я: просто проверю одно уведомление\n*открывает телефон*\n*45 минут спустя*\nКак я здесь оказался",
    difficulty: "medium",
    words: [
        { id: "w115_1", en: "notification", ru: "уведомление" },
        { id: "w115_2", en: "end up", ru: "оказаться, в итоге попасть" },
        { id: "w115_3", en: "later", ru: "позже, спустя" },
        { id: "w115_4", en: "how did I", ru: "как я" }
    ]
},
{
    id: 116,
    image: BASE3 + "hmm/Bart.jpg",
    text: "Teacher: class pay attention\nMe: *already daydreaming about lunch*",
    translation: "Учитель: класс будьте внимательны\nЯ: *уже мечтаю об обеде*",
    difficulty: "easy",
    words: [
        { id: "w116_1", en: "pay attention", ru: "обращать внимание, слушать" },
        { id: "w116_2", en: "daydreaming", ru: "мечтать, витать в облаках" },
        { id: "w116_3", en: "already", ru: "уже" },
        { id: "w116_4", en: "lunch", ru: "обед" }
    ]
},
{
    id: 117,
    image: BASE3 + "funny/Pepe.jpg",
    text: "When the weekend finally arrives\nbut you spent all week\nlooking forward to it\nand now you don't know what to do",
    translation: "Когда выходные наконец наступают\nно ты всю неделю\nждал их с нетерпением\nи теперь не знаешь что делать",
    difficulty: "hard",
    words: [
        { id: "w117_1", en: "finally arrives", ru: "наконец наступает" },
        { id: "w117_2", en: "spent", ru: "провёл, потратил" },
        { id: "w117_3", en: "looking forward to", ru: "ждать с нетерпением" },
        { id: "w117_4", en: "what to do", ru: "что делать" }
    ]
},
{
    id: 118,
    image: BASE3 + "hmm/Bob l_éponge casque.jpg",
    text: "Me listening to music\nand pretending I'm in a movie\nwalking in slow motion",
    translation: "Я слушаю музыку\nи представляю что я в фильме\nиду в замедленной съёмке",
    difficulty: "medium",
    words: [
        { id: "w118_1", en: "listening to", ru: "слушая, слушать" },
        { id: "w118_2", en: "pretending", ru: "притворяясь, представляя" },
        { id: "w118_3", en: "slow motion", ru: "замедленная съёмка" },
        { id: "w118_4", en: "walking", ru: "идущий, идя" }
    ]
},
{
    id: 119,
    image: BASE3 + "dumb/Detectiv.jpg",
    text: "When mom hid sweets\nand you found them",
    translation: "Когда мама спрятала конфеты\nа ты все равно их нашел",
    difficulty: "easy",
    words: [
        { id: "w119_1", en: "hid", ru: "спрятал" },
        { id: "w119_2", en: "sweets", ru: "конфеты" },
        { id: "w119_4", en: "found", ru: "нашел" },
        { id: "w119_5", en: "when", ru: "когда" }
    ]
},
{
    id: 120,
    image: BASE3 + "hmm/Simpsons 1.jpg",
    text: "Me: today I will be a new person\nAlso me by 9am:\nyep same old me",
    translation: "Я: сегодня я буду новым человеком\nЯ же к 9 утра:\nда всё тот же я",
    difficulty: "easy",
    words: [
        { id: "w120_1", en: "new person", ru: "новый человек" },
        { id: "w120_2", en: "by 9am", ru: "к 9 утра" },
        { id: "w120_3", en: "same old", ru: "всё тот же, старый добрый" },
        { id: "w120_4", en: "today", ru: "сегодня" },
        { id: "w120_5", en: "yep", ru: "ага, да" }
    ]
},
{
    id: 121,
    image: BASE3 + "hmm/Pikachu looking into zooming glass.jpg",
    text: "Me searching my bag for my phone\nwhile holding my phone",
    translation: "Я ищу телефон в сумке\nдержа телефон в руке",
    difficulty: "easy",
    words: [
        { id: "w121_1", en: "searching", ru: "ища, в поисках" },
        { id: "w121_2", en: "bag", ru: "сумка, пакет" },
        { id: "w121_3", en: "while", ru: "пока, в то время как" },
        { id: "w121_4", en: "holding", ru: "держа, удерживая" }
    ]
},
{
    id: 122,
    image: BASE3 + "funny/Steve.jpg",
    text: "Me after doing one productive thing:\nI am the most efficient person alive\nTime to rest for 6 hours",
    translation: "Я после одного продуктивного дела:\nЯ самый эффективный человек на земле\nПора отдохнуть 6 часов",
    difficulty: "hard",
    words: [
        { id: "w122_1", en: "efficient", ru: "эффективный, продуктивный" },
        { id: "w122_2", en: "alive", ru: "живой, на земле" },
        { id: "w122_3", en: "productive", ru: "продуктивный" },
        { id: "w122_4", en: "rest", ru: "отдыхать, отдых" },
        { id: "w122_5", en: "time to", ru: "пора, время" }
    ]
},
{
    id: 123,
    image: BASE3 + "dumb/Detectiv.jpg",
    text: "Me trying to remember\nif I took my medicine today:\nI need to investigate this",
    translation: "Я пытаюсь вспомнить\nпринял ли я лекарство сегодня:\nМне нужно расследовать это",
    difficulty: "hard",
    words: [
        { id: "w123_1", en: "trying to remember", ru: "пытаясь вспомнить" },
        { id: "w123_2", en: "medicine", ru: "лекарство, медицина" },
        { id: "w123_3", en: "investigate", ru: "расследовать, изучать" },
        { id: "w123_4", en: "took", ru: "принял, взял" }
    ]
},
{
    id: 124,
    image: BASE3 + "hmm/Dormir crowded.jpg",
    text: "Me: I sleep better alone\nAlso me: *surrounded by 4 pillows\n2 blankets and a stuffed animal*",
    translation: "Я: мне лучше спится одному\nЯ же: *окружён 4 подушками\n2 одеялами и мягкой игрушкой*",
    difficulty: "medium",
    words: [
        { id: "w124_1", en: "surrounded", ru: "окружённый" },
        { id: "w124_2", en: "pillows", ru: "подушки" },
        { id: "w124_3", en: "blankets", ru: "одеяла" },
        { id: "w124_4", en: "stuffed animal", ru: "мягкая игрушка" },
        { id: "w124_5", en: "alone", ru: "один, в одиночестве" }
    ]
},
{
    id: 125,
    image: BASE3 + "angry/Homer angry.jpg",
    text: "When someone says\n'you look tired'\nfor the 5th time today:\nI AM FULLY AWARE THANK YOU",
    translation: "Когда кто-то говорит\n'ты выглядишь уставшим'\nуже в пятый раз сегодня:\nЯ ПРЕКРАСНО ЗНАЮ СПАСИБО",
    difficulty: "medium",
    words: [
        { id: "w125_1", en: "look tired", ru: "выглядишь уставшим" },
        { id: "w125_2", en: "fully aware", ru: "прекрасно знаю, полностью осознаю" },
        { id: "w125_3", en: "5th time", ru: "пятый раз" },
        { id: "w125_4", en: "today", ru: "сегодня" }
    ]
},
{
    id: 126,
    image: BASE3 + "hmm/Chat.jpg",
    text: "Me ignoring all my problems:\nEverything is fine\nI am fine\nThis is fine",
    translation: "Я игнорирую все свои проблемы:\nВсё хорошо\nЯ в порядке\nВсё нормально",
    difficulty: "easy",
    words: [
        { id: "w126_1", en: "ignoring", ru: "игнорируя" },
        { id: "w126_2", en: "problems", ru: "проблемы" },
        { id: "w126_3", en: "fine", ru: "хорошо, нормально" },
        { id: "w126_4", en: "everything", ru: "всё" }
    ]
},
{
    id: 127,
    image: BASE3 + "dumb/Smort.jpg",
    text: "Me: I'll wake up naturally without an alarm\nMy body: wakes up at 6am on Saturday\nand sleeps through alarm on Monday",
    translation: "Я: проснусь естественно без будильника\nМоё тело: просыпается в 6 утра в субботу\nи спит сквозь будильник в понедельник",
    difficulty: "hard",
    words: [
        { id: "w127_1", en: "naturally", ru: "естественно, само по себе" },
        { id: "w127_2", en: "without", ru: "без" },
        { id: "w127_3", en: "sleeps through", ru: "проспать, спать сквозь" },
        { id: "w127_4", en: "Saturday", ru: "суббота" },
        { id: "w127_5", en: "Monday", ru: "понедельник" }
    ]
},
{
    id: 128,
    image: BASE3 + "funny/Clown to clown communication.jpg",
    text: "Me and my friend\nboth procrastinating together:\nClown to clown communication",
    translation: "Я и мой друг\nоба откладываем дела вместе:\nКлоун клоуну",
    difficulty: "hard",
    words: [
        { id: "w128_1", en: "procrastinating", ru: "откладывать дела, прокрастинировать" },
        { id: "w128_2", en: "together", ru: "вместе" },
        { id: "w128_3", en: "communication", ru: "общение, связь" },
        { id: "w128_4", en: "both", ru: "оба, обе" }
    ]
},
{
    id: 129,
    image: BASE3 + "hmm/Poisson de bob l_éponge 1.jpg",
    text: "When someone knocks on the bathroom door\nthe exact second you sit down:\nCan I not have ONE moment",
    translation: "Когда кто-то стучит в дверь ванной\nровно в ту секунду когда ты садишься:\nНельзя ли мне хоть ОДНУ минуту",
    difficulty: "hard",
    words: [
        { id: "w129_1", en: "knocks", ru: "стучит" },
        { id: "w129_2", en: "exact second", ru: "ровно в ту секунду" },
        { id: "w129_3", en: "moment", ru: "момент, минута" },
        { id: "w129_4", en: "bathroom", ru: "ванная, туалет" }
    ]
},
{
    id: 130,
    image: BASE3 + "angry/Shrek 1.jpg",
    text: "Me: I just need 10 more minutes of sleep\nMy alarm: that's not how this works\nThat's not how any of this works",
    translation: "Я: мне нужно ещё 10 минут сна\nМой будильник: это не так работает\nЭто совсем не так работает",
    difficulty: "medium",
    words: [
        { id: "w130_1", en: "that's not how it works", ru: "это не так работает" },
        { id: "w130_2", en: "any of this", ru: "всё это, ничто из этого" },
        { id: "w130_3", en: "alarm", ru: "будильник" },
        { id: "w130_4", en: "10 more minutes", ru: "ещё 10 минут" }
    ]
},
{
    id: 131,
    image: BASE3 + "hmm/Jojo emoji.jpg",
    text: "Me: I have no money\nOnline store: SALE 70% OFF\nMe: I have money actually",
    translation: "Я: у меня нет денег\nИнтернет магазин: СКИДКА 70%\nЯ: на самом деле деньги есть",
    difficulty: "easy",
    words: [
        { id: "w131_1", en: "online store", ru: "интернет магазин" },
        { id: "w131_2", en: "sale", ru: "распродажа, скидка" },
        { id: "w131_3", en: "actually", ru: "на самом деле, вообще-то" },
        { id: "w131_4", en: "off", ru: "скидка (процент)" }
    ]
},
{
    id: 132,
    image: BASE3 + "dumb/Next you_ll say Joseph.jpg",
    text: "Me: I won't check my phone before bed\nMy brain: next you'll say\nyou're going to sleep early too",
    translation: "Я: не буду проверять телефон перед сном\nМой мозг: дальше скажешь\nчто ещё и рано ляжешь спать",
    difficulty: "hard",
    words: [
        { id: "w132_1", en: "before bed", ru: "перед сном" },
        { id: "w132_2", en: "next", ru: "дальше, следующим" },
        { id: "w132_3", en: "going to sleep", ru: "ложиться спать" },
        { id: "w132_4", en: "early", ru: "рано, ранний" }
    ]
},
{
    id: 133,
    image: BASE3 + "hmm/Spice adams hiding behind a tree.jpg",
    text: "Me hiding from responsibilities\nbehind a very thin tree:\nThey can't see me",
    translation: "Я прячусь от обязанностей\nза очень тонким деревом:\nОни меня не видят",
    difficulty: "medium",
    words: [
        { id: "w133_1", en: "hiding", ru: "прячась, скрываясь" },
        { id: "w133_2", en: "responsibilities", ru: "обязанности, ответственность" },
        { id: "w133_3", en: "thin", ru: "тонкий, худой" },
        { id: "w133_4", en: "tree", ru: "дерево" },
        { id: "w133_5", en: "they can't see me", ru: "они меня не видят" }
    ]
},
{
    id: 134,
    image: BASE3 + "funny/Sans nom 3.jpg",
    text: "Me: I'm going to be so organised this year\nAlso me: *loses keys every single morning*",
    translation: "Я: в этом году буду таким организованным\nЯ же: *теряет ключи каждое утро*",
    difficulty: "medium",
    words: [
        { id: "w134_1", en: "organised", ru: "организованный" },
        { id: "w134_2", en: "loses", ru: "теряет" },
        { id: "w134_3", en: "keys", ru: "ключи" },
        { id: "w134_4", en: "every single morning", ru: "каждое утро без исключения" },
        { id: "w134_5", en: "this year", ru: "в этом году" }
    ]
},
{
    id: 135,
    image: BASE3 + "hmm/Simpsons - sideeyefromdog.jpg",
    text: "When someone says\n'you've changed'\nand you're like: yes\nthat's called growing up",
    translation: "Когда кто-то говорит\n'ты изменился'\nа ты такой: да\nэто называется взрослеть",
    difficulty: "hard",
    words: [
        { id: "w135_1", en: "you've changed", ru: "ты изменился" },
        { id: "w135_2", en: "growing up", ru: "взрослеть, расти" },
        { id: "w135_3", en: "called", ru: "называется, называемый" },
        { id: "w135_4", en: "that's", ru: "это, вот это" }
    ]
},
{
    id: 136,
    image: BASE3 + "offend/Surprised Pikachu.jpg",
    text: "Me: *does something stupid*\nAlso me: *surprised*",
    translation: "Я: *делаю что-то глупое*\nЯ же: *удивлён*",
    difficulty: "easy",
    words: [
        { id: "w136_1", en: "surprised", ru: "удивлённый, изумлённый" },
        { id: "w136_2", en: "stupid", ru: "глупый, тупой" },
        { id: "w136_3", en: "does", ru: "делает" }
    ]
},
{
    id: 137,
    image: BASE3 + "offend/Disappointed but not surprised.jpg",
    text: "Me checking my bank account\nafter the weekend:\nDisappointed but not surprised",
    translation: "Я проверяю банковский счёт\nпосле выходных:\nРазочарован но не удивлён",
    difficulty: "medium",
    words: [
        { id: "w137_1", en: "disappointed", ru: "разочарованный" },
        { id: "w137_2", en: "surprised", ru: "удивлённый" },
        { id: "w137_3", en: "bank account", ru: "банковский счёт" },
        { id: "w137_4", en: "weekend", ru: "выходные" }
    ]
},
{
    id: 138,
    image: BASE3 + "offend/Hold up.jpg",
    text: "Me reading the terms and conditions:\nHold up\nDid I just agree to sell my soul",
    translation: "Я читаю условия и соглашения:\nПодождите\nЯ только что согласился продать душу",
    difficulty: "hard",
    words: [
        { id: "w138_1", en: "terms and conditions", ru: "условия и соглашения" },
        { id: "w138_2", en: "hold up", ru: "подождите, стоп" },
        { id: "w138_3", en: "agree", ru: "соглашаться" },
        { id: "w138_4", en: "soul", ru: "душа" }
    ]
},
{
    id: 139,
    image: BASE3 + "offend/I Miss Ten Seconds Ago.jpg",
    text: "Me after opening my exam paper:\nI miss ten seconds ago\nwhen I didn't know what was on this",
    translation: "Я после того как открыл экзаменационный лист:\nЯ скучаю по десяти секундам назад\nкогда ещё не знал что здесь написано",
    difficulty: "hard",
    words: [
        { id: "w139_1", en: "exam paper", ru: "экзаменационный лист" },
        { id: "w139_2", en: "miss", ru: "скучать, упустить" },
        { id: "w139_3", en: "ten seconds ago", ru: "десять секунд назад" },
        { id: "w139_4", en: "didn't know", ru: "не знал" }
    ]
},
{
    id: 140,
    image: BASE3 + "offend/Piano music stops.jpg",
    text: "Me telling a story at a party:\n*piano music stops*\nEveryone staring at me",
    translation: "Я рассказываю историю на вечеринке:\n*музыка останавливается*\nВсе смотрят на меня",
    difficulty: "medium",
    words: [
        { id: "w140_1", en: "story", ru: "история, рассказ" },
        { id: "w140_2", en: "party", ru: "вечеринка, праздник" },
        { id: "w140_3", en: "staring", ru: "пристально смотрящий, уставившийся" },
        { id: "w140_4", en: "stops", ru: "останавливается" },
        { id: "w140_5", en: "everyone", ru: "все, каждый" }
    ]
},
{
    id: 141,
    image: BASE3 + "offend/bruh.jpg",
    text: "Friend: wake up it's noon\nMe: *woke up at 8am\nbut stayed in bed until noon*\nBruh",
    translation: "Друг: просыпайся уже полдень\nЯ: *проснулся в 8 утра\nно пролежал в кровати до полудня*\nБрат",
    difficulty: "easy",
    words: [
        { id: "w141_1", en: "noon", ru: "полдень" },
        { id: "w141_2", en: "woke up", ru: "проснулся" },
        { id: "w141_3", en: "stayed in bed", ru: "остался в кровати, пролежал" },
        { id: "w141_4", en: "bruh", ru: "брат, братан (восклицание)" },
        { id: "w141_5", en: "until", ru: "до, пока не" }
    ]
},
{
    id: 142,
    image: BASE3 + "offend/disgusted.jpg",
    text: "When someone says\nthey don't like pizza:\nI don't know you anymore",
    translation: "Когда кто-то говорит\nчто не любит пиццу:\nЯ тебя больше не знаю",
    difficulty: "easy",
    words: [
        { id: "w142_1", en: "don't like", ru: "не нравится, не любить" },
        { id: "w142_2", en: "anymore", ru: "больше, уже" },
        { id: "w142_3", en: "pizza", ru: "пицца" },
        { id: "w142_4", en: "I don't know you", ru: "я тебя не знаю" }
    ]
},
{
    id: 143,
    image: BASE3 + "offend/Wait. That_s illegal.jpg",
    text: "My alarm clock: good morning!\nMe at 6am on a Monday:\nWait that's illegal",
    translation: "Мой будильник: доброе утро!\nЯ в 6 утра в понедельник:\nПодождите это незаконно",
    difficulty: "easy",
    words: [
        { id: "w143_1", en: "illegal", ru: "незаконный, запрещённый" },
        { id: "w143_2", en: "good morning", ru: "доброе утро" },
        { id: "w143_3", en: "alarm clock", ru: "будильник" },
        { id: "w143_4", en: "Monday", ru: "понедельник" }
    ]
},
{
    id: 144,
    image: BASE3 + "offend/Impossible.jpg",
    text: "Me: I'll be ready in 5 minutes\nIt's been 45 minutes:\nThis is impossible",
    translation: "Я: буду готов через 5 минут\nПрошло 45 минут:\nЭто невозможно",
    difficulty: "easy",
    words: [
        { id: "w144_1", en: "impossible", ru: "невозможный, невозможно" },
        { id: "w144_2", en: "ready", ru: "готовый" },
        { id: "w144_3", en: "it's been", ru: "прошло, уже" },
        { id: "w144_4", en: "minutes", ru: "минуты" }
    ]
},
{
    id: 145,
    image: BASE3 + "offend/seriously.jpg",
    text: "When someone spoils a movie\nyou were about to watch:\nSeriously?\nSERIOUSLY?",
    translation: "Когда кто-то спойлерит фильм\nкоторый ты собирался посмотреть:\nСерьёзно?\nСЕРЬЁЗНО?",
    difficulty: "medium",
    words: [
        { id: "w145_1", en: "spoils", ru: "спойлерит, портит" },
        { id: "w145_2", en: "were about to", ru: "собирался, только что хотел" },
        { id: "w145_3", en: "seriously", ru: "серьёзно, ты серьёзно" },
        { id: "w145_4", en: "watch", ru: "смотреть" }
    ]
},
{
    id: 146,
    image: BASE3 + "offend/Mom comme pick me up.jpg",
    text: "Me at a social event\nafter 20 minutes:\nMom come pick me up\nI want to go home",
    translation: "Я на каком-то мероприятии\nчерез 20 минут:\nМама приедь забери меня\nЯ хочу домой",
    difficulty: "medium",
    words: [
        { id: "w146_1", en: "social event", ru: "общественное мероприятие" },
        { id: "w146_2", en: "pick me up", ru: "забери меня, приедь за мной" },
        { id: "w146_3", en: "want to go home", ru: "хочу домой" },
        { id: "w146_4", en: "after", ru: "после, через" },
        { id: "w146_5", en: "minutes", ru: "минуты" }
    ]
},
{
    id: 147,
    image: BASE3 + "offend/dissapointed.jpg",
    text: "Me: I'll start my new healthy lifestyle tomorrow\nTomorrow: *eats chips for breakfast*\nMe:",
    translation: "Я: начну новый здоровый образ жизни завтра\nЗавтра: *ест чипсы на завтрак*\nЯ:",
    difficulty: "medium",
    words: [
        { id: "w147_1", en: "healthy lifestyle", ru: "здоровый образ жизни" },
        { id: "w147_2", en: "tomorrow", ru: "завтра" },
        { id: "w147_3", en: "chips", ru: "чипсы" },
        { id: "w147_4", en: "breakfast", ru: "завтрак" },
        { id: "w147_5", en: "eats", ru: "ест" }
    ]
},
{
    id: 148,
    image: BASE3 + "offend/what.jpg",
    text: "Teacher: the exam is tomorrow\nMe who forgot completely:\nI'm sorry WHAT",
    translation: "Учитель: экзамен завтра\nЯ который полностью забыл:\nИзвините ЧТО",
    difficulty: "easy",
    words: [
        { id: "w148_1", en: "exam", ru: "экзамен" },
        { id: "w148_2", en: "tomorrow", ru: "завтра" },
        { id: "w148_3", en: "forgot", ru: "забыл" },
        { id: "w148_4", en: "completely", ru: "полностью, совсем" },
        { id: "w148_5", en: "I'm sorry what", ru: "простите что, как вы сказали" }
    ]
},
{
    id: 149,
    image: BASE3 + "offend/Pepe in real shock.jpg",
    text: "When you're singing in the shower\nand realize someone is home:\nAnd I took that personally",
    translation: "Когда поёшь в душе\nи понимаешь что кто-то дома:\nИ я принял это близко к сердцу",
    difficulty: "hard",
    words: [
        { id: "w149_1", en: "singing", ru: "пение, петь" },
        { id: "w149_2", en: "shower", ru: "душ" },
        { id: "w149_3", en: "realize", ru: "осознавать, понимать" },
        { id: "w149_4", en: "took personally", ru: "принял близко к сердцу" },
        { id: "w149_5", en: "someone is home", ru: "кто-то дома" }
    ]
},
{
    id: 150,
    image: BASE3 + "offend/two friends looking at each other in shock.jpg",
    text: "Me and my friend\nwhen the bill arrives\nat the restaurant:\nWho is going to pay for this",
    translation: "Я и мой друг\nкогда в ресторане\nприносят счёт:\nКто будет за это платить",
    difficulty: "medium",
    words: [
        { id: "w150_1", en: "bill", ru: "счёт (в ресторане)" },
        { id: "w150_2", en: "arrives", ru: "приходит, приносят" },
        { id: "w150_3", en: "restaurant", ru: "ресторан" },
        { id: "w150_4", en: "pay", ru: "платить, оплачивать" },
        { id: "w150_5", en: "going to", ru: "собирается, будет" }
    ]
},
{
    id: 151,
    image: BASE3 + "offend/Homer in disbelive.jpg",
    text: "Me: I'll spend only 10 minutes on social media\nSocial media: *shows me something interesting*\n3 hours later:",
    translation: "Я: проведу только 10 минут в соцсетях\nСоцсети: *показывают что-то интересное*\n3 часа спустя:",
    difficulty: "medium",
    words: [
        { id: "w151_1", en: "social media", ru: "социальные сети, соцсети" },
        { id: "w151_2", en: "spend", ru: "проводить, тратить" },
        { id: "w151_3", en: "interesting", ru: "интересный" },
        { id: "w151_4", en: "later", ru: "позже, спустя" },
        { id: "w151_5", en: "shows", ru: "показывает" }
    ]
},
{
    id: 152,
    image: BASE3 + "offend/Gumball shocked.jpg",
    text: "When you accidentally\nlike a photo from 3 years ago\nwhile stalking someone's profile",
    translation: "Когда случайно\nставишь лайк на фото трёхлетней давности\nпока листаешь чей-то профиль",
    difficulty: "hard",
    words: [
        { id: "w152_1", en: "accidentally", ru: "случайно, нечаянно" },
        { id: "w152_2", en: "like", ru: "лайкнуть, поставить лайк" },
        { id: "w152_3", en: "stalking", ru: "слежка, листать чужой профиль" },
        { id: "w152_4", en: "profile", ru: "профиль, страница" },
        { id: "w152_5", en: "years ago", ru: "лет назад" }
    ]
},
{
    id: 153,
    image: BASE3 + "offend/Dear God.jpg",
    text: "Me opening my email\nafter ignoring it for 2 weeks:\nDear God\n847 unread messages",
    translation: "Я открываю почту\nпосле того как игнорировал её 2 недели:\nГосподи\n847 непрочитанных сообщений",
    difficulty: "medium",
    words: [
        { id: "w153_1", en: "email", ru: "электронная почта" },
        { id: "w153_2", en: "ignoring", ru: "игнорируя" },
        { id: "w153_3", en: "unread", ru: "непрочитанный" },
        { id: "w153_4", en: "messages", ru: "сообщения" },
        { id: "w153_5", en: "dear God", ru: "Господи, Боже мой" }
    ]
},
{
    id: 154,
    image: BASE3 + "offend/dog is shocked.jpg",
    text: "When someone rings the doorbell\nat 8am on a Saturday:\nWho gave you this address",
    translation: "Когда кто-то звонит в дверь\nв 8 утра в субботу:\nКто дал тебе этот адрес",
    difficulty: "medium",
    words: [
        { id: "w154_1", en: "rings the doorbell", ru: "звонит в дверь" },
        { id: "w154_2", en: "Saturday", ru: "суббота" },
        { id: "w154_3", en: "address", ru: "адрес" },
        { id: "w154_4", en: "gave", ru: "дал, дала" },
        { id: "w154_5", en: "who", ru: "кто" }
    ]
},
{
    id: 155,
    image: BASE3 + "offend/I pretend I do not see it.jpg",
    text: "Me seeing the pile of dishes\nin the sink:\nI pretend I do not see it",
    translation: "Я вижу гору посуды\nв раковине:\nЯ делаю вид что не вижу этого",
    difficulty: "medium",
    words: [
        { id: "w155_1", en: "pile", ru: "куча, гора" },
        { id: "w155_2", en: "dishes", ru: "посуда, тарелки" },
        { id: "w155_3", en: "sink", ru: "раковина" },
        { id: "w155_4", en: "pretend", ru: "притворяться, делать вид" },
        { id: "w155_5", en: "I do not see it", ru: "я не вижу этого" }
    ]
},
{
    id: 156,
    image: BASE3 + "offend/Confused screaming.jpg",
    text: "Me trying to understand\nmy phone bill:\nWhy is it different every month\nWHAT ARE THESE NUMBERS",
    translation: "Я пытаюсь понять\nсчёт за телефон:\nПочему он каждый месяц разный\nЧТО ЭТО ЗА ЦИФРЫ",
    difficulty: "hard",
    words: [
        { id: "w156_1", en: "phone bill", ru: "счёт за телефон" },
        { id: "w156_2", en: "different", ru: "разный, другой" },
        { id: "w156_3", en: "every month", ru: "каждый месяц" },
        { id: "w156_4", en: "numbers", ru: "цифры, числа" },
        { id: "w156_5", en: "trying to understand", ru: "пытаясь понять" }
    ]
},
{
    id: 157,
    image: BASE3 + "offend/Skipper.jpg",
    text: "Me checking if anyone\nliked my post\nafter 30 seconds:\nJust smile and wave boys",
    translation: "Я проверяю лайкнул ли кто-нибудь\nмой пост\nчерез 30 секунд:\nПросто улыбайся и маши",
    difficulty: "medium",
    words: [
        { id: "w157_1", en: "liked", ru: "лайкнул, понравилось" },
        { id: "w157_2", en: "post", ru: "пост, публикация" },
        { id: "w157_3", en: "smile", ru: "улыбаться, улыбка" },
        { id: "w157_4", en: "wave", ru: "махать рукой" },
        { id: "w157_5", en: "checking", ru: "проверяя" }
    ]
},
{
    id: 158,
    image: BASE3 + "offend/grandma is looking into computer.jpg",
    text: "Grandma: how do I attach a file\nMe: *explains for 30 minutes*\nGrandma: okay so I just press the button?",
    translation: "Бабушка: как прикрепить файл\nЯ: *объясняю 30 минут*\nБабушка: то есть мне просто нажать кнопку?",
    difficulty: "medium",
    words: [
        { id: "w158_1", en: "attach", ru: "прикреплять, присоединять" },
        { id: "w158_2", en: "file", ru: "файл" },
        { id: "w158_3", en: "explains", ru: "объясняет" },
        { id: "w158_4", en: "press the button", ru: "нажать кнопку" },
        { id: "w158_5", en: "just", ru: "просто, только" }
    ]
},
{
    id: 159,
    image: BASE3 + "offend/I_m gonna stop you right there.jpg",
    text: "Friend: let's go outside today\nMe who already made plans\nwith my couch:\nI'm gonna stop you right there",
    translation: "Друг: давай выйдем сегодня на улицу\nЯ который уже строил планы\nс диваном:\nЯ тебя остановлю прямо здесь",
    difficulty: "hard",
    words: [
        { id: "w159_1", en: "outside", ru: "на улицу, на улице" },
        { id: "w159_2", en: "made plans", ru: "строил планы" },
        { id: "w159_3", en: "couch", ru: "диван" },
        { id: "w159_4", en: "gonna stop", ru: "остановлю" },
        { id: "w159_5", en: "right there", ru: "прямо здесь, прямо сейчас" }
    ]
},
{
    id: 160,
    image: BASE3 + "offend/ops.jpg",
    text: "Me: *sends voice message by accident*\nAlso me: *deletes entire contact*\nand moves to another country",
    translation: "Я: *случайно отправляю голосовое*\nЯ же: *удаляет весь контакт*\nи переезжает в другую страну",
    difficulty: "hard",
    words: [
        { id: "w160_1", en: "voice message", ru: "голосовое сообщение" },
        { id: "w160_2", en: "by accident", ru: "случайно, по ошибке" },
        { id: "w160_3", en: "deletes", ru: "удаляет" },
        { id: "w160_4", en: "contact", ru: "контакт" },
        { id: "w160_5", en: "moves", ru: "переезжает, переходит" }
    ]
},
{
    id: 161,
    image: BASE3 + "offend/Pepe looking through fingers.jpg",
    text: "Me watching a horror movie:\n*covers eyes but watches through fingers*\nI am not scared at all",
    translation: "Я смотрю фильм ужасов:\n*закрывает глаза но смотрит сквозь пальцы*\nЯ совсем не боюсь",
    difficulty: "medium",
    words: [
        { id: "w161_1", en: "horror movie", ru: "фильм ужасов" },
        { id: "w161_2", en: "covers", ru: "закрывает, накрывает" },
        { id: "w161_3", en: "fingers", ru: "пальцы" },
        { id: "w161_4", en: "scared", ru: "испуганный, боится" },
        { id: "w161_5", en: "at all", ru: "совсем, вообще" }
    ]
},
{
    id: 162,
    image: BASE3 + "offend/a guy shocked after looking at papers.jpg",
    text: "Me opening my credit card statement:\nThis can't be right\nI don't even remember buying half of this",
    translation: "Я открываю выписку по кредитной карте:\nЭтого не может быть\nЯ даже не помню как купил половину из этого",
    difficulty: "hard",
    words: [
        { id: "w162_1", en: "credit card", ru: "кредитная карта" },
        { id: "w162_2", en: "statement", ru: "выписка, отчёт" },
        { id: "w162_3", en: "can't be right", ru: "не может быть правдой" },
        { id: "w162_4", en: "remember", ru: "помнить, вспоминать" },
        { id: "w162_5", en: "half", ru: "половина" }
    ]
},
{
    id: 163,
    image: BASE3 + "offend/Hamster is scared.jpg",
    text: "Me: I love meeting new people\nActual me at a party:\n*stands in the corner eating snacks*",
    translation: "Я: обожаю знакомиться с новыми людьми\nЯ реальный на вечеринке:\n*стою в углу и ем закуски*",
    difficulty: "medium",
    words: [
        { id: "w163_1", en: "meeting", ru: "встреча, знакомство" },
        { id: "w163_2", en: "actual", ru: "реальный, настоящий" },
        { id: "w163_3", en: "corner", ru: "угол, уголок" },
        { id: "w163_4", en: "stands", ru: "стоит" },
        { id: "w163_5", en: "snacks", ru: "закуски, перекус" }
    ]
},
{
    id: 164,
    image: BASE3 + "offend/Get therapy please.jpg",
    text: "Me: I'm fine\nMy search history at 3am:\nwhy do I overthink everything\nhow to stop being anxious\ndo penguins feel emotions",
    translation: "Я: я в порядке\nМоя история поиска в 3 ночи:\nпочему я всё обдумываю слишком много\nкак перестать тревожиться\nиспытывают ли пингвины эмоции",
    difficulty: "hard",
    words: [
        { id: "w164_1", en: "search history", ru: "история поиска" },
        { id: "w164_2", en: "overthink", ru: "слишком много думать, обдумывать" },
        { id: "w164_3", en: "anxious", ru: "тревожный, беспокойный" },
        { id: "w164_4", en: "emotions", ru: "эмоции, чувства" },
        { id: "w164_5", en: "fine", ru: "в порядке, нормально" }
    ]
},
{
    id: 165,
    image: BASE3 + "offend/Morty goes from shock to fake smile.jpg",
    text: "Me when someone unexpectedly\ncalls me instead of texting:\n*instant fake smile*\nHello yes I am a normal person",
    translation: "Я когда кто-то неожиданно\nзвонит вместо того чтобы написать:\n*мгновенная фальшивая улыбка*\nАлло да я нормальный человек",
    difficulty: "hard",
    words: [
        { id: "w165_1", en: "unexpectedly", ru: "неожиданно, внезапно" },
        { id: "w165_2", en: "instead of", ru: "вместо, вместо того чтобы" },
        { id: "w165_3", en: "texting", ru: "писать сообщения" },
        { id: "w165_4", en: "instant", ru: "мгновенный, немедленный" },
        { id: "w165_5", en: "fake smile", ru: "фальшивая улыбка" }
    ]
},
{
    id: 166,
    image: BASE3 + "offend/Doge looking at you.jpg",
    text: "Me: I'll go to bed early\nBed: *empty at midnight*\nMe at 2am: on my way bestie",
    translation: "Я: лягу спать пораньше\nКровать: *пустая в полночь*\nЯ в 2 ночи: уже иду подруга",
    difficulty: "easy",
    words: [
        { id: "w166_1", en: "midnight", ru: "полночь" },
        { id: "w166_2", en: "empty", ru: "пустой" },
        { id: "w166_3", en: "bestie", ru: "лучший друг, подруга (сленг)" },
        { id: "w166_4", en: "early", ru: "рано, пораньше" },
        { id: "w166_5", en: "on my way", ru: "уже иду, в пути" }
    ]
},
{
    id: 167,
    image: BASE3 + "offend/Will Smith looking at his phone.jpg",
    text: "Me reading a text\nfrom an unknown number:\nWho is this\nWhy do they know my name",
    translation: "Я читаю сообщение\nс неизвестного номера:\nКто это\nПочему они знают моё имя",
    difficulty: "medium",
    words: [
        { id: "w167_1", en: "unknown number", ru: "неизвестный номер" },
        { id: "w167_2", en: "text", ru: "сообщение, смска" },
        { id: "w167_3", en: "name", ru: "имя" },
        { id: "w167_4", en: "reading", ru: "читая, читает" }
    ]
},
{
    id: 168,
    image: BASE3 + "offend/Shaggy.jpg",
    text: "Me using 100% of my power\nto get out of bed\non a Monday morning",
    translation: "Я использую 100% своих сил\nчтобы встать с кровати\nв понедельник утром",
    difficulty: "medium",
    words: [
        { id: "w168_1", en: "power", ru: "сила, мощь" },
        { id: "w168_2", en: "get out of bed", ru: "встать с кровати" },
        { id: "w168_3", en: "Monday morning", ru: "понедельник утром" },
        { id: "w168_4", en: "using", ru: "используя, применяя" }
    ]
},
{
    id: 169,
    image: BASE3 + "offend/Luigi looking at his phone.jpg",
    text: "Me checking if my friends\nare online\nbut not wanting to start a conversation",
    translation: "Я проверяю онлайн ли мои друзья\nно не хочу\nначинать разговор",
    difficulty: "medium",
    words: [
        { id: "w169_1", en: "online", ru: "онлайн, в сети" },
        { id: "w169_2", en: "wanting", ru: "желая, хотя" },
        { id: "w169_3", en: "conversation", ru: "разговор, беседа" },
        { id: "w169_4", en: "checking", ru: "проверяя" },
        { id: "w169_5", en: "start", ru: "начать, начинать" }
    ]
},
{
    id: 170,
    image: BASE3 + "offend/Patrick numbed.jpg",
    text: "Me after a long day:\nFeeling absolutely nothing\nand that's okay",
    translation: "Я после долгого дня:\nНичего абсолютно не чувствую\nи это нормально",
    difficulty: "medium",
    words: [
        { id: "w170_1", en: "long day", ru: "долгий день, тяжёлый день" },
        { id: "w170_2", en: "feeling", ru: "чувствую, ощущаю" },
        { id: "w170_3", en: "absolutely nothing", ru: "абсолютно ничего" },
        { id: "w170_4", en: "okay", ru: "нормально, окей" }
    ]
},
{
    id: 171,
    image: BASE3 + "offend/grandpa uses phone.jpg",
    text: "Grandpa: I don't need technology\nAlso grandpa: *sends 47 forwarded messages per day*",
    translation: "Дедушка: мне не нужны технологии\nОн же: *пересылает 47 сообщений в день*",
    difficulty: "medium",
    words: [
        { id: "w171_1", en: "technology", ru: "технологии" },
        { id: "w171_2", en: "forwarded", ru: "пересланный, перенаправленный" },
        { id: "w171_3", en: "per day", ru: "в день, за день" },
        { id: "w171_4", en: "messages", ru: "сообщения" }
    ]
},
{
    id: 172,
    image: BASE3 + "offend/Spiderman omg.jpg",
    text: "When you remember\nyou have a dentist appointment tomorrow\nthat you completely forgot about",
    translation: "Когда вспоминаешь\nчто завтра у тебя приём у стоматолога\nо котором ты полностью забыл",
    difficulty: "hard",
    words: [
        { id: "w172_1", en: "dentist", ru: "стоматолог, дантист" },
        { id: "w172_2", en: "appointment", ru: "приём, запись" },
        { id: "w172_3", en: "completely", ru: "полностью, совсем" },
        { id: "w172_4", en: "forgot about", ru: "забыл о, забыл про" },
        { id: "w172_5", en: "remember", ru: "вспоминать, помнить" }
    ]
},
{
    id: 173,
    image: BASE3 + "offend/Mario working at pc and leaves.jpg",
    text: "My shift:\n*ends at 18:00*\nMe: at 17:59",
    translation: "Моя смена:\n*заканчивается в 18:00 *\nЯ: в 17:59",
    difficulty: "easy",
    words: [
        { id: "w173_1", en: "shift", ru: "смена" },
        { id: "w173_2", en: "end", ru: "заканчиваться" }
    ]
},
{
    id: 174,
    image: BASE3 + "offend/Spongebob cleaning his eyes.jpg",
    text: "Me after accidentally\nreading spoilers for my favourite show:\nI need to unsee this",
    translation: "Я после того как случайно\nпрочитал спойлеры к любимому сериалу:\nМне нужно развидеть это",
    difficulty: "hard",
    words: [
        { id: "w174_1", en: "accidentally", ru: "случайно, нечаянно" },
        { id: "w174_2", en: "spoilers", ru: "спойлеры" },
        { id: "w174_3", en: "favourite", ru: "любимый" },
        { id: "w174_4", en: "unsee", ru: "развидеть, забыть увиденное" },
        { id: "w174_5", en: "show", ru: "сериал, шоу" }
    ]
},
{
    id: 175,
    image: BASE3 + "offend/a woman reading a book and looking with a smirk.jpg",
    text: "Me listening to someone's problems\nknowing I have the same problems\nbut giving advice anyway",
    translation: "Я слушаю чужие проблемы\nзная что у меня такие же проблемы\nно всё равно даю советы",
    difficulty: "hard",
    words: [
        { id: "w175_1", en: "listening", ru: "слушая, слушать" },
        { id: "w175_2", en: "problems", ru: "проблемы" },
        { id: "w175_3", en: "advice", ru: "совет, советы" },
        { id: "w175_4", en: "anyway", ru: "всё равно, в любом случае" },
        { id: "w175_5", en: "same", ru: "такой же, одинаковый" }
    ]
},
{
    id: 176,
    image: BASE3 + "offend/go out.jpg",
    text: "Me: I need fresh air\nAlso me: *opens window\nbreathes for 3 seconds\ncloses window*\nThat's enough nature for today",
    translation: "Я: мне нужен свежий воздух\nЯ же: *открывает окно\nдышит 3 секунды\nзакрывает окно*\nДостаточно природы на сегодня",
    difficulty: "medium",
    words: [
        { id: "w176_1", en: "fresh air", ru: "свежий воздух" },
        { id: "w176_2", en: "breathes", ru: "дышит, дышать" },
        { id: "w176_3", en: "enough", ru: "достаточно, хватит" },
        { id: "w176_4", en: "nature", ru: "природа" },
        { id: "w176_5", en: "window", ru: "окно" }
    ]
},
{
    id: 177,
    image: BASE3 + "offend/come in.jpg",
    text: "Me: I hate surprises\nFriend: surprise we're going out tonight\nMe: I hate this\nAlso me: *already getting dressed*",
    translation: "Я: ненавижу сюрпризы\nДруг: сюрприз мы идём гулять сегодня\nЯ: ненавижу это\nЯ же: *уже одеваюсь*",
    difficulty: "medium",
    words: [
        { id: "w177_1", en: "surprises", ru: "сюрпризы" },
        { id: "w177_2", en: "going out", ru: "идти гулять, выходить" },
        { id: "w177_3", en: "tonight", ru: "сегодня вечером" },
        { id: "w177_4", en: "getting dressed", ru: "одеваться" },
        { id: "w177_5", en: "hate", ru: "ненавидеть, ненависть" }
    ]
},
{
    id: 178,
    image: BASE3 + "offend/Toy Story.jpg",
    text: "Responsibilities, responsibilities everywhere\nand not a single one completed",
    translation: "Обязанности, обязанности везде\nи ни одной выполненной",
    difficulty: "hard",
    words: [
        { id: "w178_1", en: "responsibilities", ru: "обязанности, ответственность" },
        { id: "w178_2", en: "everywhere", ru: "везде, повсюду" },
        { id: "w178_3", en: "single", ru: "единственный, ни одного" },
        { id: "w178_4", en: "completed", ru: "выполненный, завершённый" },
        { id: "w178_5", en: "not a single one", ru: "ни одного, ни единого" }
    ]
},
{
    id: 179,
    image: BASE3 + "offend/disgusted pro max.jpg",
    text: "When you clean your room\nand your parents say\n'why don't you always keep it like this':\nBecause I'm human",
    translation: "Когда убираешься в комнате\nа родители говорят\n'почему ты не держишь её всегда в таком виде':\nПотому что я человек",
    difficulty: "medium",
    words: [
        { id: "w179_1", en: "keep it", ru: "держать, поддерживать" },
        { id: "w179_2", en: "always", ru: "всегда" },
        { id: "w179_3", en: "like this", ru: "вот так, в таком виде" },
        { id: "w179_4", en: "human", ru: "человек, человеческий" },
        { id: "w179_5", en: "parents", ru: "родители" }
    ]
},
{
    id: 180,
    image: BASE3 + "offend/what did you say.jpg",
    text: "Me: I don't care about drama\nSomeone: did you hear what happened?\nMe: WHAT\nWHAT HAPPENED\nTELL ME EVERYTHING",
    translation: "Я: мне всё равно на драму\nКто-то: ты слышал что случилось?\nЯ: ЧТО\nЧТО СЛУЧИЛОСЬ\nРАССКАЖИ МНЕ ВСЁ",
    difficulty: "medium",
    words: [
        { id: "w180_1", en: "drama", ru: "драма, скандал" },
        { id: "w180_2", en: "did you hear", ru: "ты слышал" },
        { id: "w180_3", en: "happened", ru: "случилось, произошло" },
        { id: "w180_4", en: "tell me everything", ru: "расскажи мне всё" },
        { id: "w180_5", en: "care about", ru: "заботиться о, интересоваться" }
    ]
},
{
    id: 181,
    image: BASE3 + "offend/Homer cleaning his eyes.jpg",
    text: "Me after seeing my photo\ntaken by someone else:\nI need to unsee this immediately",
    translation: "Я после того как вижу своё фото\nсделанное кем-то другим:\nМне нужно немедленно развидеть это",
    difficulty: "medium",
    words: [
        { id: "w181_1", en: "photo", ru: "фото, фотография" },
        { id: "w181_2", en: "taken by", ru: "сделанное, снятое" },
        { id: "w181_3", en: "immediately", ru: "немедленно, сразу" },
        { id: "w181_4", en: "unsee", ru: "развидеть" },
        { id: "w181_5", en: "someone else", ru: "кто-то другой" }
    ]
},
{
    id: 182,
    image: BASE3 + "offend/Spiderman 2.jpg",
    text: "Me telling myself to be confident\nAlso me in public:\nthey're all looking at me\neveryone knows",
    translation: "Я говорю себе быть уверенным\nЯ же на людях:\nвсе смотрят на меня\nвсе знают",
    difficulty: "hard",
    words: [
        { id: "w182_1", en: "confident", ru: "уверенный, самоуверенный" },
        { id: "w182_2", en: "in public", ru: "на людях, публично" },
        { id: "w182_3", en: "everyone", ru: "все, каждый" },
        { id: "w182_4", en: "telling myself", ru: "говорю себе" }
    ]
},
{
    id: 183,
    image: BASE3 + "hmm/Kermit thinking.jpg",
    text: "Me at 1am:\nIs a hot dog a sandwich\nIs cereal a soup\nIs a pop tart a calzone",
    translation: "Я в 1 ночи:\nХот-дог это сэндвич\nКаша это суп\nПоп-тарт это кальцоне",
    difficulty: "hard",
    words: [
        { id: "w183_1", en: "hot dog", ru: "хот-дог" },
        { id: "w183_2", en: "sandwich", ru: "сэндвич, бутерброд" },
        { id: "w183_3", en: "cereal", ru: "каша, хлопья" },
        { id: "w183_4", en: "soup", ru: "суп" },
        { id: "w183_5", en: "calzone", ru: "кальцоне (закрытая пицца)" }
    ]
},
{
    id: 184,
    image: BASE3 + "funny/Sans nom 2.jpg",
    text: "When autocorrect changes\nyour message to something completely wrong\nand you already pressed send",
    translation: "Когда автокоррект меняет\nтвоё сообщение на что-то совершенно неправильное\nа ты уже нажал отправить",
    difficulty: "hard",
    words: [
        { id: "w184_1", en: "autocorrect", ru: "автокоррект, автоисправление" },
        { id: "w184_2", en: "completely wrong", ru: "совершенно неправильно" },
        { id: "w184_3", en: "already", ru: "уже" },
        { id: "w184_4", en: "pressed send", ru: "нажал отправить" },
        { id: "w184_5", en: "changes", ru: "меняет, изменяет" }
    ]
},
{
    id: 185,
    image: BASE3 + "dumb/Harvard wants to know your location.jpg",
    text: "Me: *solves a basic math problem in my head*\nHarvard wants to know your location",
    translation: "Я: *решаю простую задачу по математике в уме*\nГарвард хочет знать твоё местоположение",
    difficulty: "medium",
    words: [
        { id: "w185_1", en: "solves", ru: "решает" },
        { id: "w185_2", en: "basic", ru: "базовый, простой" },
        { id: "w185_3", en: "math problem", ru: "задача по математике" },
        { id: "w185_4", en: "location", ru: "местоположение, локация" },
        { id: "w185_5", en: "in my head", ru: "в уме, в голове" }
    ]
},
{
    id: 186,
    image: BASE3 + "hmm/Sans nom 6.jpg",
    text: "Me: I should drink less coffee\nAlso me: *pours fourth cup at 9pm*\nThis is the last one I promise",
    translation: "Я: надо пить меньше кофе\nЯ же: *наливает четвёртую чашку в 9 вечера*\nЭто последняя обещаю",
    difficulty: "medium",
    words: [
        { id: "w186_1", en: "less", ru: "меньше" },
        { id: "w186_2", en: "pours", ru: "наливает" },
        { id: "w186_3", en: "fourth", ru: "четвёртый" },
        { id: "w186_4", en: "promise", ru: "обещать, обещание" },
        { id: "w186_5", en: "last one", ru: "последний, последняя" }
    ]
},
{
    id: 187,
    image: BASE3 + "angry/Donald.jpg",
    text: "When someone says\n'you look different without makeup':\nYes that's literally the point",
    translation: "Когда кто-то говорит\n'ты выглядишь иначе без макияжа':\nДа это буквально и есть смысл",
    difficulty: "hard",
    words: [
        { id: "w187_1", en: "different", ru: "другой, иной, иначе" },
        { id: "w187_2", en: "makeup", ru: "макияж, косметика" },
        { id: "w187_3", en: "literally", ru: "буквально" },
        { id: "w187_4", en: "the point", ru: "смысл, суть" },
        { id: "w187_5", en: "look", ru: "выглядеть, смотреть" }
    ]
},
{
    id: 188,
    image: BASE3 + "hmm/Sans nom 8.jpg",
    text: "Me pretending to be busy\nwhen someone walks past my desk:\n*types randomly on keyboard*\nVery important work happening here",
    translation: "Я делаю вид что занят\nкогда кто-то проходит мимо моего стола:\n*случайно печатает на клавиатуре*\nЗдесь происходит очень важная работа",
    difficulty: "hard",
    words: [
        { id: "w188_1", en: "pretending", ru: "притворяясь, делая вид" },
        { id: "w188_2", en: "busy", ru: "занятой, занятый" },
        { id: "w188_3", en: "walks past", ru: "проходит мимо" },
        { id: "w188_4", en: "randomly", ru: "случайно, произвольно" },
        { id: "w188_5", en: "keyboard", ru: "клавиатура" }
    ]
},
{
    id: 189,
    image: BASE3 + "offend/Waluigi.jpg",
    text: "Me: I'm totally an adult\nAlso me: *buys chocolate milk\nand a toy from the checkout line*",
    translation: "Я: я полностью взрослый\nЯ же: *покупает шоколадное молоко\nи игрушку на кассе*",
    difficulty: "medium",
    words: [
        { id: "w189_1", en: "totally", ru: "полностью, абсолютно" },
        { id: "w189_2", en: "adult", ru: "взрослый" },
        { id: "w189_3", en: "checkout line", ru: "касса, очередь на кассе" },
        { id: "w189_4", en: "chocolate milk", ru: "шоколадное молоко" },
        { id: "w189_5", en: "toy", ru: "игрушка" }
    ]
},
{
    id: 190,
    image: BASE3 + "hmm/Sans nom 10.jpg",
    text: "When the food is so good\nyou close your eyes\nand forget all your problems",
    translation: "Когда еда настолько вкусная\nчто закрываешь глаза\nи забываешь все проблемы",
    difficulty: "easy",
    words: [
        { id: "w190_1", en: "so good", ru: "настолько хорошо, очень вкусно" },
        { id: "w190_2", en: "close your eyes", ru: "закрывать глаза" },
        { id: "w190_3", en: "forget", ru: "забывать" },
        { id: "w190_4", en: "problems", ru: "проблемы" },
        { id: "w190_5", en: "food", ru: "еда, пища" }
    ]
},
{
    id: 191,
    image: BASE3 + "dumb/No sign of intelligent life.jpg",
    text: "My group chat at 2am:\nSending memes\nno context\njust memes",
    translation: "Мой групповой чат в 2 ночи:\nОтправляем мемы\nбез контекста\nпросто мемы",
    difficulty: "easy",
    words: [
        { id: "w191_1", en: "group chat", ru: "групповой чат" },
        { id: "w191_2", en: "sending", ru: "отправляя, посылая" },
        { id: "w191_3", en: "context", ru: "контекст" },
        { id: "w191_4", en: "memes", ru: "мемы" },
        { id: "w191_5", en: "just", ru: "просто, только" }
    ]
},
{
    id: 192,
    image: BASE3 + "offend/Star Trek choqué.jpg",
    text: "Me finding out\nmy favourite restaurant closed down:\nThis is not what I signed up for",
    translation: "Я узнаю\nчто мой любимый ресторан закрылся:\nЯ не на это подписывался",
    difficulty: "hard",
    words: [
        { id: "w192_1", en: "favourite", ru: "любимый" },
        { id: "w192_2", en: "closed down", ru: "закрылся, прекратил работу" },
        { id: "w192_3", en: "signed up for", ru: "подписался на, согласился на" },
        { id: "w192_4", en: "finding out", ru: "узнавая, выясняя" }
    ]
},
{
    id: 193,
    image: BASE3 + "hmm/Mickey 1.jpg",
    text: "Me: I'll just watch one YouTube video\nYouTube algorithm:\n*shows me 47 more interesting videos*\nOh no",
    translation: "Я: посмотрю только одно видео на YouTube\nАлгоритм YouTube:\n*показывает ещё 47 интересных видео*\nО нет",
    difficulty: "medium",
    words: [
        { id: "w193_1", en: "algorithm", ru: "алгоритм" },
        { id: "w193_2", en: "shows", ru: "показывает" },
        { id: "w193_3", en: "interesting", ru: "интересный" },
        { id: "w193_4", en: "just", ru: "просто, только" },
        { id: "w193_5", en: "oh no", ru: "о нет, ой нет" }
    ]
},
{
    id: 194,
    image: BASE3 + "angry/Pepe 1.jpg",
    text: "When someone chews loudly\nnext to you:\nI have never hated anyone more in my life",
    translation: "Когда кто-то громко жуёт\nрядом с тобой:\nЯ никогда никого так не ненавидел в жизни",
    difficulty: "hard",
    words: [
        { id: "w194_1", en: "chews", ru: "жуёт, жевать" },
        { id: "w194_2", en: "loudly", ru: "громко" },
        { id: "w194_3", en: "next to", ru: "рядом с, около" },
        { id: "w194_4", en: "hated", ru: "ненавидел" },
        { id: "w194_5", en: "never", ru: "никогда" }
    ]
},
{
    id: 195,
    image: BASE3 + "hmm/Dormir 5.jpg",
    text: "My bed on a work day:\njust a bed\nMy bed when I have things to do:\nthe most magical place on earth",
    translation: "Моя кровать в рабочий день:\nпросто кровать\nМоя кровать когда есть дела:\nсамое волшебное место на земле",
    difficulty: "medium",
    words: [
        { id: "w195_1", en: "work day", ru: "рабочий день" },
        { id: "w195_2", en: "magical", ru: "волшебный, магический" },
        { id: "w195_3", en: "earth", ru: "земля, мир" },
        { id: "w195_4", en: "things to do", ru: "дела, задачи" },
        { id: "w195_5", en: "place", ru: "место" }
    ]
},
{
    id: 196,
    image: BASE3 + "offend/mona liza shocked.jpg",
    text: "When you find out\nthe price of something\nyou really wanted to buy",
    translation: "Когда узнаёшь\nцену чего-то\nчто очень хотел купить",
    difficulty: "easy",
    words: [
        { id: "w196_1", en: "price", ru: "цена, стоимость" },
        { id: "w196_2", en: "really", ru: "очень, действительно" },
        { id: "w196_3", en: "wanted", ru: "хотел, желал" },
        { id: "w196_4", en: "find out", ru: "узнавать, выяснять" },
        { id: "w196_5", en: "buy", ru: "покупать, купить" }
    ]
},
{
    id: 197,
    image: BASE3 + "dumb/intellecc.jpg",
    text: "Me: I'll just have a small snack\nSmall snack: *becomes a full meal*\nMe: I am a genius",
    translation: "Я: просто немного перекушу\nНебольшой перекус: *становится полноценным обедом*\nЯ: я гений",
    difficulty: "easy",
    words: [
        { id: "w197_1", en: "small snack", ru: "небольшой перекус" },
        { id: "w197_2", en: "becomes", ru: "становится" },
        { id: "w197_3", en: "full meal", ru: "полноценный обед, сытная еда" },
        { id: "w197_4", en: "genius", ru: "гений, гениальный" }
    ]
},
{
    id: 198,
    image: BASE3 + "hmm/Simpsons looking in the window.jpg",
    text: "Me looking at people\nwho have their life together:\nHow do they do it\nWhat is their secret",
    translation: "Я смотрю на людей\nу которых всё в жизни хорошо:\nКак они это делают\nВ чём их секрет",
    difficulty: "hard",
    words: [
        { id: "w198_1", en: "have their life together", ru: "наладить жизнь, всё в жизни хорошо" },
        { id: "w198_2", en: "secret", ru: "секрет, тайна" },
        { id: "w198_3", en: "how do they", ru: "как они" },
        { id: "w198_4", en: "looking at", ru: "смотря на, глядя на" }
    ]
},
{
    id: 199,
    image: BASE3 + "funny/Soufflement de nez.jpg",
    text: "When someone sends you\na meme so funny\nyou make a weird noise\nand have to explain yourself",
    translation: "Когда кто-то присылает тебе\nмем настолько смешной\nчто издаёшь странный звук\nи приходится объясняться",
    difficulty: "hard",
    words: [
        { id: "w199_1", en: "sends", ru: "присылает, отправляет" },
        { id: "w199_2", en: "weird noise", ru: "странный звук" },
        { id: "w199_3", en: "explain yourself", ru: "объясняться, оправдываться" },
        { id: "w199_4", en: "funny", ru: "смешной, забавный" },
        { id: "w199_5", en: "have to", ru: "приходится, нужно" }
    ]
},
{
    id: 200,
    image: BASE3 + "hmm/Feels good.jpg",
    text: "Me after completing\neverything on my to-do list:\nI am unstoppable\nI am a legend\nI deserve a 3 hour break",
    translation: "Я после того как выполнил\nвсё из списка дел:\nЯ неостановим\nЯ легенда\nЯ заслуживаю перерыва на 3 часа",
    difficulty: "medium",
    words: [
        { id: "w200_1", en: "completing", ru: "завершая, выполняя" },
        { id: "w200_2", en: "to-do list", ru: "список дел" },
        { id: "w200_3", en: "unstoppable", ru: "неостановимый" },
        { id: "w200_4", en: "legend", ru: "легенда" },
        { id: "w200_5", en: "deserve", ru: "заслуживать, быть достойным" }
    ]
},
{
    id: 201,
    image: BASE3 + "offend/Teddy bear shocked.jpg",
    text: "When you wake up\nand check the time\nexpecting it to be 6am\nbut it's actually 11am",
    translation: "Когда просыпаешься\nи смотришь на время\nожидая что будет 6 утра\nно на самом деле уже 11",
    difficulty: "easy",
    words: [
        { id: "w201_1", en: "expecting", ru: "ожидая, думая что" },
        { id: "w201_2", en: "actually", ru: "на самом деле" },
        { id: "w201_3", en: "check the time", ru: "проверить время" },
        { id: "w201_4", en: "wake up", ru: "просыпаться" }
    ]
},
{
    id: 202,
    image: BASE3 + "dumb/Mafs.jpg",
    text: "Me calculating\nhow many more minutes I can sleep\nif I skip breakfast:\nAdvanced mathematics",
    translation: "Я подсчитываю\nсколько ещё минут могу поспать\nесли пропущу завтрак:\nВысшая математика",
    difficulty: "medium",
    words: [
        { id: "w202_1", en: "calculating", ru: "подсчитывая, вычисляя" },
        { id: "w202_2", en: "skip", ru: "пропускать, пропустить" },
        { id: "w202_3", en: "breakfast", ru: "завтрак" },
        { id: "w202_4", en: "advanced", ru: "продвинутый, высший" },
        { id: "w202_5", en: "mathematics", ru: "математика" }
    ]
},
{
    id: 203,
    image: BASE3 + "hmm/Wojak 1.jpg",
    text: "Me: I'm a very social person\nAlso me: *rehearses what to say\nbefore making a phone call*",
    translation: "Я: я очень общительный человек\nЯ же: *репетирует что сказать\nперед тем как позвонить*",
    difficulty: "hard",
    words: [
        { id: "w203_1", en: "social", ru: "общительный, социальный" },
        { id: "w203_2", en: "rehearses", ru: "репетирует" },
        { id: "w203_3", en: "phone call", ru: "телефонный звонок" },
        { id: "w203_4", en: "before", ru: "перед, до" },
        { id: "w203_5", en: "making a call", ru: "звонить, совершать звонок" }
    ]
},
{
    id: 204,
    image: BASE3 + "angry/Pepe 2.jpg",
    text: "When someone uses\nthe last of the shampoo\nand puts the empty bottle back:\nThis means war",
    translation: "Когда кто-то использует\nпоследний шампунь\nи ставит пустую бутылку обратно:\nЭто означает войну",
    difficulty: "medium",
    words: [
        { id: "w204_1", en: "shampoo", ru: "шампунь" },
        { id: "w204_2", en: "empty bottle", ru: "пустая бутылка" },
        { id: "w204_3", en: "puts back", ru: "ставит обратно" },
        { id: "w204_4", en: "this means war", ru: "это означает войну" },
        { id: "w204_5", en: "last", ru: "последний" }
    ]
},
{
    id: 205,
    image: BASE3 + "hmm/Carlos 2.jpg",
    text: "Me: I hate small talk\nAlso me: so how about this weather huh",
    translation: "Я: ненавижу светские беседы\nЯ же: ну как вам эта погода а",
    difficulty: "hard",
    words: [
        { id: "w205_1", en: "small talk", ru: "светская беседа, болтовня ни о чём" },
        { id: "w205_2", en: "hate", ru: "ненавидеть" },
        { id: "w205_3", en: "weather", ru: "погода" },
        { id: "w205_4", en: "how about", ru: "как насчёт, ну как" }
    ]
},
{
    id: 206,
    image: BASE3 + "offend/Sans nom 5.jpg",
    text: "When you trip in public\nand have to do the\n'I totally meant to do that' walk",
    translation: "Когда спотыкаешься на людях\nи приходится делать\nпоходку 'я так и хотел'",
    difficulty: "hard",
    words: [
        { id: "w206_1", en: "trip", ru: "споткнуться, запнуться" },
        { id: "w206_2", en: "in public", ru: "на людях, публично" },
        { id: "w206_3", en: "totally meant to", ru: "специально хотел, так и задумал" },
        { id: "w206_4", en: "walk", ru: "походка, ходьба" }
    ]
},
{
    id: 207,
    image: BASE3 + "hmm/Bois Bob l_éponge.jpg",
    text: "Me drinking water at 3am\nlike it's going to fix\nall my problems",
    translation: "Я пью воду в 3 ночи\nкак будто это исправит\nвсе мои проблемы",
    difficulty: "medium",
    words: [
        { id: "w207_1", en: "drinking", ru: "пить, пьющий" },
        { id: "w207_2", en: "fix", ru: "исправить, починить" },
        { id: "w207_3", en: "problems", ru: "проблемы" },
        { id: "w207_4", en: "going to", ru: "собирается, будет" },
        { id: "w207_5", en: "like it's", ru: "как будто это" }
    ]
},
{
    id: 208,
    image: BASE3 + "dumb/Outstanding move.jpg",
    text: "Me: I'll clean the house this weekend\nWeekend: arrives\nMe: *watches entire TV series instead*\nOutstanding move",
    translation: "Я: уберусь дома на выходных\nВыходные: наступают\nЯ: *смотрит целый сериал вместо этого*\nВыдающийся ход",
    difficulty: "medium",
    words: [
        { id: "w208_1", en: "clean the house", ru: "убраться дома" },
        { id: "w208_2", en: "entire", ru: "весь, целый" },
        { id: "w208_3", en: "instead", ru: "вместо, вместо этого" },
        { id: "w208_4", en: "arrives", ru: "наступает, приходит" },
        { id: "w208_5", en: "TV series", ru: "сериал, телесериал" }
    ]
},
{
    id: 209,
    image: BASE3 + "offend/Sans nom 6.jpg",
    text: "When you're trying to be healthy\nbut smell someone's fast food:\nI have been betrayed by my own nose",
    translation: "Когда пытаешься питаться здорово\nно чувствуешь запах чьего-то фастфуда:\nМеня предал мой собственный нос",
    difficulty: "hard",
    words: [
        { id: "w209_1", en: "healthy", ru: "здорово, полезно" },
        { id: "w209_2", en: "smell", ru: "чувствовать запах, нюхать" },
        { id: "w209_3", en: "fast food", ru: "фастфуд, быстрая еда" },
        { id: "w209_4", en: "betrayed", ru: "предан, предал" },
        { id: "w209_5", en: "own", ru: "собственный, свой" }
    ]
},
{
    id: 210,
    image: BASE3 + "hmm/Pikachu 3.jpg",
    text: "Me waking up\nfrom a 20 minute nap:\nWhat year is it\nWho am I\nWhere are my shoes",
    translation: "Я просыпаюсь\nпосле 20-минутного сна:\nКакой сейчас год\nКто я\nГде мои ботинки",
    difficulty: "medium",
    words: [
        { id: "w210_1", en: "nap", ru: "дневной сон, вздремнуть" },
        { id: "w210_2", en: "waking up", ru: "просыпаясь" },
        { id: "w210_3", en: "what year is it", ru: "какой сейчас год" },
        { id: "w210_4", en: "shoes", ru: "ботинки, обувь" },
        { id: "w210_5", en: "who am I", ru: "кто я" }
    ]
},
{
    id: 211,
    image: BASE3 + "funny/Wow genius so funny.jpg",
    text: "Me laughing at my own jokes\nbefore I even finish telling them:\nI am hilarious",
    translation: "Я смеюсь над собственными шутками\nдаже не успев их рассказать:\nЯ очень смешной",
    difficulty: "medium",
    words: [
        { id: "w211_1", en: "laughing", ru: "смеясь, смеяться" },
        { id: "w211_2", en: "own jokes", ru: "собственные шутки" },
        { id: "w211_3", en: "even", ru: "даже" },
        { id: "w211_4", en: "finish", ru: "заканчивать, завершать" },
        { id: "w211_5", en: "hilarious", ru: "очень смешной, уморительный" }
    ]
},
{
    id: 212,
    image: BASE3 + "offend/Sans nom 13.jpg",
    text: "When your phone battery\nhits 1%\nand you're not near a charger:\nThis is the end",
    translation: "Когда заряд телефона\nдоходит до 1%\nа зарядки рядом нет:\nЭто конец",
    difficulty: "easy",
    words: [
        { id: "w212_1", en: "battery", ru: "батарея, заряд" },
        { id: "w212_2", en: "hits", ru: "достигает, доходит до" },
        { id: "w212_3", en: "charger", ru: "зарядное устройство, зарядка" },
        { id: "w212_4", en: "near", ru: "рядом, вблизи" },
        { id: "w212_5", en: "the end", ru: "конец" }
    ]
},
{
    id: 213,
    image: BASE3 + "hmm/Bois Kermit.jpg",
    text: "Me: I should really exercise\nAlso me: *takes elevator\nto go up one floor*",
    translation: "Я: надо бы заняться спортом\nЯ же: *едет на лифте\nчтобы подняться на один этаж*",
    difficulty: "easy",
    words: [
        { id: "w213_1", en: "exercise", ru: "заниматься спортом, тренироваться" },
        { id: "w213_2", en: "elevator", ru: "лифт" },
        { id: "w213_3", en: "floor", ru: "этаж, пол" },
        { id: "w213_4", en: "takes", ru: "берёт, едет на" },
        { id: "w213_5", en: "go up", ru: "подниматься, идти наверх" }
    ]
},
{
    id: 214,
    image: BASE3 + "dumb/Filosof.jpg",
    text: "Me at 3am:\nIf I fall asleep right now\nI'll get exactly 4 hours and 23 minutes of sleep\nPerfect",
    translation: "Я в 3 ночи:\nЕсли засну прямо сейчас\nу меня будет ровно 4 часа и 23 минуты сна\nИдеально",
    difficulty: "medium",
    words: [
        { id: "w214_1", en: "fall asleep", ru: "засыпать, уснуть" },
        { id: "w214_2", en: "right now", ru: "прямо сейчас" },
        { id: "w214_3", en: "exactly", ru: "ровно, точно" },
        { id: "w214_4", en: "perfect", ru: "идеально, отлично" },
        { id: "w214_5", en: "minutes", ru: "минуты" }
    ]
},
{
    id: 215,
    image: BASE3 + "offend/happy.jpg",
    text: "Me: today is going to be different\nI'll be productive\npositive\nand healthy\nAlso me by noon: same old story",
    translation: "Я: сегодня всё будет иначе\nЯ буду продуктивным\nпозитивным\nи здоровым\nЯ же к полудню: та же история",
    difficulty: "medium",
    words: [
        { id: "w215_1", en: "different", ru: "другой, иначе" },
        { id: "w215_2", en: "positive", ru: "позитивный" },
        { id: "w215_3", en: "by noon", ru: "к полудню" },
        { id: "w215_4", en: "same old story", ru: "та же история, всё то же самое" },
        { id: "w215_5", en: "healthy", ru: "здоровый, полезный" }
    ]
},
{
    id: 216,
    image: BASE3 + "hmm/Rick 2.jpg",
    text: "Me: I don't need anyone\nAlso me at 2am:\n*sends funny meme to friend",
    translation: "Я: мне никто не нужен\nЯ же в 2 ночи:\n*отправляю смешной мем другу",
    difficulty: "easy",
    words: [
        { id: "w216_1", en: "awake", ru: "не сплю, бодрствую" },
        { id: "w216_2", en: "anyone", ru: "кто-либо, никто" },
        { id: "w216_3", en: "sends", ru: "отправляет, посылает" },
        { id: "w216_4", en: "need", ru: "нуждаться, нужен" }
    ]
},
{
    id: 217,
    image: BASE3 + "dumb/Genius.jpg",
    text: "Me: I'll just reorganise my desk\nbefore I start working\n3 hours later:\ndesk looks exactly the same\nstill haven't started",
    translation: "Я: просто приведу стол в порядок\nперед тем как начну работать\n3 часа спустя:\nстол выглядит точно так же\nтак и не начал",
    difficulty: "hard",
    words: [
        { id: "w217_1", en: "reorganise", ru: "реорганизовать, привести в порядок" },
        { id: "w217_2", en: "desk", ru: "стол, рабочий стол" },
        { id: "w217_3", en: "exactly the same", ru: "точно так же" },
        { id: "w217_4", en: "still haven't", ru: "так и не, всё ещё не" },
        { id: "w217_5", en: "started", ru: "начал, приступил" }
    ]
},
{
    id: 218,
    image: BASE3 + "offend/Razowski 1.jpg",
    text: "When someone says\n'let's do something fun'\nand suggests something\nthat costs money",
    translation: "Когда кто-то говорит\n'давай сделаем что-нибудь весёлое'\nи предлагает что-то\nчто стоит денег",
    difficulty: "medium",
    words: [
        { id: "w218_1", en: "suggests", ru: "предлагает, советует" },
        { id: "w218_2", en: "fun", ru: "весёлый, забавный" },
        { id: "w218_3", en: "costs", ru: "стоит, обходится" },
        { id: "w218_4", en: "something", ru: "что-нибудь, кое-что" }
    ]
},
{
    id: 219,
    image: BASE3 + "hmm/Bois Lisa.jpg",
    text: "Me reading the same paragraph\nfor the fifth time\nand still not understanding it",
    translation: "Я читаю один и тот же абзац\nв пятый раз\nи всё равно не понимаю его",
    difficulty: "medium",
    words: [
        { id: "w219_1", en: "paragraph", ru: "абзац, параграф" },
        { id: "w219_2", en: "fifth time", ru: "пятый раз" },
        { id: "w219_3", en: "still", ru: "всё равно, всё ещё" },
        { id: "w219_4", en: "understanding", ru: "понимая, понимание" },
        { id: "w219_5", en: "same", ru: "тот же самый" }
    ]
},
{
    id: 220,
    image: BASE3 + "angry/Morty.jpg",
    text: "When someone wakes you up\nfive minutes before\nyour alarm goes off:\nYou had no right to do this",
    translation: "Когда кто-то будит тебя\nза пять минут до\nсрабатывания будильника:\nТы не имел права так делать",
    difficulty: "hard",
    words: [
        { id: "w220_1", en: "wakes up", ru: "будит, просыпается" },
        { id: "w220_2", en: "five minutes before", ru: "за пять минут до" },
        { id: "w220_3", en: "alarm goes off", ru: "будильник срабатывает" },
        { id: "w220_4", en: "had no right", ru: "не имел права" },
        { id: "w220_5", en: "do this", ru: "делать это" }
    ]
},
{
    id: 221,
    image: BASE3 + "hmm/Krabs 1.jpg",
    text: "Me checking prices\nat a fancy restaurant:\n*folds menu slowly*\nI'll just have water thank you",
    translation: "Я смотрю цены\nв дорогом ресторане:\n*медленно складывает меню*\nЯ просто возьму воду спасибо",
    difficulty: "medium",
    words: [
        { id: "w221_1", en: "fancy", ru: "дорогой, шикарный" },
        { id: "w221_2", en: "folds", ru: "складывает, сворачивает" },
        { id: "w221_3", en: "slowly", ru: "медленно" },
        { id: "w221_4", en: "water", ru: "вода" },
        { id: "w221_5", en: "prices", ru: "цены" }
    ]
},
{
    id: 222,
    image: BASE3 + "dumb/Big brain time.jpg",
    text: "Me: I should start saving for the future\nAlso me: *buys something completely unnecessary*\nBig brain time",
    translation: "Я: надо начать копить на будущее\nЯ же: *покупает что-то совершенно ненужное*\nВремя большого мозга",
    difficulty: "medium",
    words: [
        { id: "w222_1", en: "saving", ru: "копить, откладывать" },
        { id: "w222_2", en: "future", ru: "будущее" },
        { id: "w222_3", en: "unnecessary", ru: "ненужный, лишний" },
        { id: "w222_4", en: "completely", ru: "полностью, совершенно" }
    ]
},
{
    id: 223,
    image: BASE3 + "offend/Sans nom 15.jpg",
    text: "When you're in a meeting\nthat could have been an email:\n*slowly losing the will to live*",
    translation: "Когда ты на совещании\nкоторое могло быть письмом:\n*медленно теряю желание жить*",
    difficulty: "hard",
    words: [
        { id: "w223_1", en: "meeting", ru: "совещание, встреча" },
        { id: "w223_2", en: "could have been", ru: "могло быть, можно было" },
        { id: "w223_3", en: "email", ru: "электронное письмо" },
        { id: "w223_4", en: "losing", ru: "теряя, лишаясь" },
        { id: "w223_5", en: "will to live", ru: "желание жить" }
    ]
},
{
    id: 224,
    image: BASE3 + "hmm/Bois chien.jpg",
    text: "Me trying to look cool\nwhile tripping over nothing:\nThis never happened\nwe don't talk about this",
    translation: "Я пытаюсь выглядеть круто\nспотыкаясь на ровном месте:\nЭтого не было\nмы об этом не говорим",
    difficulty: "medium",
    words: [
        { id: "w224_1", en: "cool", ru: "круто, классно" },
        { id: "w224_2", en: "tripping", ru: "спотыкаясь" },
        { id: "w224_3", en: "over nothing", ru: "на ровном месте, ни обо что" },
        { id: "w224_4", en: "never happened", ru: "никогда не было" },
        { id: "w224_5", en: "we don't talk about", ru: "мы об этом не говорим" }
    ]
},
{
    id: 225,
    image: BASE3 + "funny/Clown Wojak.jpg",
    text: "Me: I'm not going to procrastinate today\nAlso me: *spends 2 hours\nmaking a perfect to-do list\ninstead of doing the tasks*",
    translation: "Я: сегодня не буду прокрастинировать\nЯ же: *тратит 2 часа\nна составление идеального списка дел\nвместо того чтобы делать их*",
    difficulty: "hard",
    words: [
        { id: "w225_1", en: "procrastinate", ru: "прокрастинировать, откладывать дела" },
        { id: "w225_2", en: "perfect", ru: "идеальный, совершенный" },
        { id: "w225_3", en: "to-do list", ru: "список дел" },
        { id: "w225_4", en: "instead of", ru: "вместо, вместо того чтобы" },
        { id: "w225_5", en: "tasks", ru: "задачи, дела" }
    ]
},
{
    id: 226,
    image: BASE3 + "offend/Sans nom 22.jpg",
    text: "When you finally reply\nto a message from 3 weeks ago:\nSorry just saw this\n*lying*",
    translation: "Когда наконец отвечаешь\nна сообщение трёхнедельной давности:\nИзвини только что увидел\n*врёт*",
    difficulty: "medium",
    words: [
        { id: "w226_1", en: "reply", ru: "отвечать, ответ" },
        { id: "w226_2", en: "just saw", ru: "только что увидел" },
        { id: "w226_3", en: "lying", ru: "лжёт, врёт" },
        { id: "w226_4", en: "sorry", ru: "извини, прости" },
        { id: "w226_5", en: "weeks ago", ru: "недель назад" }
    ]
},
{
    id: 227,
    image: BASE3 + "hmm/Bois Bart.jpg",
    text: "Me in class:\n*stares out the window*\n*imagines an entire different life*\nTeacher: so what's the answer?",
    translation: "Я на уроке:\n*смотрит в окно*\n*представляет совсем другую жизнь*\nУчитель: итак какой ответ?",
    difficulty: "medium",
    words: [
        { id: "w227_1", en: "stares", ru: "пристально смотрит, уставился" },
        { id: "w227_2", en: "imagines", ru: "представляет, воображает" },
        { id: "w227_3", en: "entire", ru: "целый, совсем" },
        { id: "w227_4", en: "answer", ru: "ответ" },
        { id: "w227_5", en: "window", ru: "окно" }
    ]
},
{
    id: 228,
    image: BASE3 + "dumb/bOb L_ePoNgE.jpg",
    text: "Me: I'll go to sleep at 10pm\nYouTube at 10pm: here's a 3 hour documentary\nabout something you've never thought about\nbut now desperately need to watch",
    translation: "Я: лягу спать в 10 вечера\nYouTube в 10 вечера: вот трёхчасовой документальный\nо чём-то о чём вы никогда не думали\nно теперь отчаянно хотите посмотреть",
    difficulty: "hard",
    words: [
        { id: "w228_1", en: "documentary", ru: "документальный фильм" },
        { id: "w228_2", en: "desperately", ru: "отчаянно, очень сильно" },
        { id: "w228_3", en: "thought about", ru: "думал о, думал про" },
        { id: "w228_4", en: "never", ru: "никогда" },
        { id: "w228_5", en: "now", ru: "теперь, сейчас" }
    ]
},
{
    id: 229,
    image: BASE3 + "offend/Sans nom 23.jpg",
    text: "When someone asks\nif you've been exercising\nand you walked to the fridge today:\nActually yes",
    translation: "Когда кто-то спрашивает\nзанимаешься ли ты спортом\nа ты сегодня дошёл до холодильника:\nВообще-то да",
    difficulty: "medium",
    words: [
        { id: "w229_1", en: "exercising", ru: "заниматься спортом" },
        { id: "w229_2", en: "walked", ru: "прошёл, дошёл пешком" },
        { id: "w229_3", en: "fridge", ru: "холодильник" },
        { id: "w229_4", en: "actually", ru: "вообще-то, на самом деле" },
        { id: "w229_5", en: "asks", ru: "спрашивает" }
    ]
},
{
    id: 230,
    image: BASE3 + "hmm/Spongebob smiling.jpg",
    text: "That feeling when\nyou find leftover food\nin the fridge\nyou completely forgot about:\nToday is a great day",
    translation: "То чувство когда\nнаходишь остатки еды\nв холодильнике\nо которых совсем забыл:\nСегодня отличный день",
    difficulty: "easy",
    words: [
        { id: "w230_1", en: "leftover food", ru: "остатки еды, объедки" },
        { id: "w230_2", en: "completely forgot", ru: "совсем забыл, полностью забыл" },
        { id: "w230_3", en: "great day", ru: "отличный день" },
        { id: "w230_4", en: "feeling", ru: "чувство, ощущение" },
        { id: "w230_5", en: "find", ru: "находить, найти" }
    ]
},
{
    id: 231,
    image: BASE3 + "hmm/Rick 2.jpg",
    text: "Me: I'm going to eat healthy this week\nDay 1: salad\nDay 2: salad\nDay 3: pizza\nDay 4: we don't talk about day 4",
    translation: "Я: на этой неделе буду есть здорово\nДень 1: салат\nДень 2: салат\nДень 3: пицца\nДень 4: мы не говорим о дне 4",
    difficulty: "easy",
    words: [
        { id: "w231_1", en: "healthy", ru: "здорово, полезно" },
        { id: "w231_2", en: "salad", ru: "салат" },
        { id: "w231_3", en: "this week", ru: "на этой неделе" },
        { id: "w231_4", en: "we don't talk about", ru: "мы не говорим о" },
        { id: "w231_5", en: "pizza", ru: "пицца" }
    ]
},
{
    id: 232,
    image: BASE3 + "offend/Sans nom 25.jpg",
    text: "When you clean your glasses\nand realize the world\nwas not supposed to be that blurry",
    translation: "Когда чистишь очки\nи понимаешь что мир\nне должен был быть таким размытым",
    difficulty: "hard",
    words: [
        { id: "w232_1", en: "glasses", ru: "очки" },
        { id: "w232_2", en: "realize", ru: "осознавать, понимать" },
        { id: "w232_3", en: "supposed to be", ru: "должен был быть" },
        { id: "w232_4", en: "blurry", ru: "размытый, нечёткий" },
        { id: "w232_5", en: "clean", ru: "чистить, убирать" }
    ]
},
{
    id: 233,
    image: BASE3 + "hmm/Krabs 2.jpg",
    text: "Me calculating\nhow much money I spend on coffee\nvs how much I could save:\n*immediately orders another coffee*",
    translation: "Я подсчитываю\nсколько трачу на кофе\nпо сравнению с тем сколько мог бы сэкономить:\n*немедленно заказывает ещё один кофе*",
    difficulty: "hard",
    words: [
        { id: "w233_1", en: "calculating", ru: "подсчитывая, вычисляя" },
        { id: "w233_2", en: "spend", ru: "тратить, расходовать" },
        { id: "w233_3", en: "save", ru: "экономить, сберегать" },
        { id: "w233_4", en: "immediately", ru: "немедленно, сразу" },
        { id: "w233_5", en: "orders", ru: "заказывает" }
    ]
},
{
    id: 234,
    image: BASE3 + "angry/Pepe 3.jpg",
    text: "When someone asks\nif they can have one chip\nand grabs a whole handful:\nBetray me not",
    translation: "Когда кто-то спрашивает\nможно ли взять один чипс\nи берёт целую горсть:\nНе предавай меня",
    difficulty: "medium",
    words: [
        { id: "w234_1", en: "chip", ru: "чипс" },
        { id: "w234_2", en: "grabs", ru: "хватает, берёт" },
        { id: "w234_3", en: "handful", ru: "горсть, пригоршня" },
        { id: "w234_4", en: "betray", ru: "предавать, предать" },
        { id: "w234_5", en: "whole", ru: "целый, весь" }
    ]
},
{
    id: 235,
    image: BASE3 + "hmm/Bois 2.jpg",
    text: "Me: I should really call my friend\nAlso me: *sends meme instead*\nThis counts as socialising",
    translation: "Я: надо бы позвонить другу\nЯ же: *вместо этого отправляет мем*\nЭто считается общением",
    difficulty: "medium",
    words: [
        { id: "w235_1", en: "instead", ru: "вместо, вместо этого" },
        { id: "w235_2", en: "counts as", ru: "считается, засчитывается" },
        { id: "w235_3", en: "socialising", ru: "общение, социализация" },
        { id: "w235_4", en: "really", ru: "действительно, на самом деле" },
        { id: "w235_5", en: "sends", ru: "отправляет, посылает" }
    ]
},
{
    id: 236,
    image: BASE3 + "offend/Sans nom 29.jpg",
    text: "When the WiFi goes down\nfor 5 minutes:\nThis is what the end of the world feels like",
    translation: "Когда WiFi отключается\nна 5 минут:\nВот как ощущается конец света",
    difficulty: "medium",
    words: [
        { id: "w236_1", en: "goes down", ru: "отключается, падает" },
        { id: "w236_2", en: "end of the world", ru: "конец света" },
        { id: "w236_3", en: "feels like", ru: "ощущается как, чувствуется как" },
        { id: "w236_4", en: "WiFi", ru: "вайфай, беспроводной интернет" }
    ]
},
{
    id: 237,
    image: BASE3 + "dumb/Siense.jpg",
    text: "Me: I'll just google one thing\nOne hour later:\n*reading about the history of ancient Rome*\nHow did I get here",
    translation: "Я: просто загуглю одну вещь\nЧас спустя:\n*читает историю древнего Рима*\nКак я сюда попал",
    difficulty: "medium",
    words: [
        { id: "w237_1", en: "google", ru: "гуглить, искать в интернете" },
        { id: "w237_2", en: "ancient", ru: "древний, античный" },
        { id: "w237_3", en: "history", ru: "история" },
        { id: "w237_4", en: "how did I get here", ru: "как я сюда попал" },
        { id: "w237_5", en: "reading", ru: "читая, читает" }
    ]
},
{
    id: 238,
    image: BASE3 + "hmm/Bois 3.jpg",
    text: "Me trying to fall asleep:\nBrain: remember that time in 2009\nwhen you said something weird\nto someone you barely knew",
    translation: "Я пытаюсь заснуть:\nМозг: помнишь тот случай в 2009\nкогда сказал что-то странное\nкому-то кого едва знал",
    difficulty: "hard",
    words: [
        { id: "w238_1", en: "fall asleep", ru: "засыпать, уснуть" },
        { id: "w238_2", en: "remember", ru: "помнить, вспоминать" },
        { id: "w238_3", en: "weird", ru: "странный, необычный" },
        { id: "w238_4", en: "barely knew", ru: "едва знал, почти не знал" },
        { id: "w238_5", en: "brain", ru: "мозг" }
    ]
},
{
    id: 239,
    image: BASE3 + "funny/Pepe clown 1.jpg",
    text: "When someone finally laughs\nat your joke after 10 minutes:\nSee I told you it was funny\nJUST A BIT DELAYED",
    translation: "Когда кто-то наконец смеётся\nнад твоей шуткой через 10 минут:\nВидишь я же говорил что это смешно\nПРОСТО НЕМНОГО ЗАПОЗДАЛО",
    difficulty: "medium",
    words: [
        { id: "w239_1", en: "finally", ru: "наконец, в конце концов" },
        { id: "w239_2", en: "told you", ru: "говорил тебе" },
        { id: "w239_3", en: "delayed", ru: "запоздалый, с опозданием" },
        { id: "w239_4", en: "funny", ru: "смешной, забавный" },
        { id: "w239_5", en: "just a bit", ru: "просто немного" }
    ]
},
{
    id: 240,
    image: BASE3 + "offend/Sans nom 30.jpg",
    text: "Me: I'll take a quick 20 minute nap\nMy body: no you won't\n*sleeps for 4 hours*\n*misses everything*",
    translation: "Я: вздремну на быстрые 20 минут\nМоё тело: нет не вздремнёшь\n*спит 4 часа*\n*пропускает всё*",
    difficulty: "medium",
    words: [
        { id: "w240_1", en: "quick", ru: "быстрый, краткий" },
        { id: "w240_2", en: "nap", ru: "дневной сон, вздремнуть" },
        { id: "w240_3", en: "misses", ru: "пропускает, упускает" },
        { id: "w240_4", en: "everything", ru: "всё" },
        { id: "w240_5", en: "body", ru: "тело, организм" }
    ]
},
{
    id: 241,
    image: BASE3 + "hmm/Bois Violette.jpg",
    text: "Me listening to a sad song\nand making myself even sadder:\nI am a professional",
    translation: "Я слушаю грустную песню\nи делаю себя ещё грустнее:\nЯ профессионал",
    difficulty: "medium",
    words: [
        { id: "w241_1", en: "sad song", ru: "грустная песня" },
        { id: "w241_2", en: "even sadder", ru: "ещё грустнее" },
        { id: "w241_3", en: "professional", ru: "профессионал, профессиональный" },
        { id: "w241_4", en: "listening to", ru: "слушая, слушать" }
    ]
},
{
    id: 242,
    image: BASE3 + "angry/Pepe 2.jpg",
    text: "When you step on a LEGO\nin the middle of the night:\nThis is the worst thing\nthat has ever happened to anyone",
    translation: "Когда наступаешь на LEGO\nпосреди ночи:\nЭто худшее что\nкогда-либо случалось с кем-либо",
    difficulty: "medium",
    words: [
        { id: "w242_1", en: "step on", ru: "наступить на" },
        { id: "w242_2", en: "middle of the night", ru: "посреди ночи" },
        { id: "w242_3", en: "worst", ru: "худший, самый плохой" },
        { id: "w242_4", en: "ever happened", ru: "когда-либо случалось" },
        { id: "w242_5", en: "anyone", ru: "кто-либо, кто-нибудь" }
    ]
},
{
    id: 243,
    image: BASE3 + "hmm/Pikachu 4.jpg",
    text: "Me: I have no interesting stories\nAlso me at 3am:\n*tells entire life story\nto a stranger on the internet*",
    translation: "Я: у меня нет интересных историй\nЯ же в 3 ночи:\n*рассказывает всю историю жизни\nнезнакомцу в интернете*",
    difficulty: "hard",
    words: [
        { id: "w243_1", en: "interesting stories", ru: "интересные истории" },
        { id: "w243_2", en: "entire", ru: "весь, целый" },
        { id: "w243_3", en: "stranger", ru: "незнакомец, чужой" },
        { id: "w243_4", en: "life story", ru: "история жизни" },
        { id: "w243_5", en: "internet", ru: "интернет" }
    ]
},
{
    id: 244,
    image: BASE3 + "hmm/Pepe 1.jpg",
    text: "Me: I'm very responsible\nAlso me: *forgets to eat\nuntil 4pm\nthen eats everything in the house*",
    translation: "Я: я очень ответственный\nЯ же: *забывает поесть\nдо 4 дня\nпотом съедает всё в доме*",
    difficulty: "medium",
    words: [
        { id: "w244_1", en: "responsible", ru: "ответственный" },
        { id: "w244_2", en: "forgets", ru: "забывает" },
        { id: "w244_3", en: "until", ru: "до, пока не" },
        { id: "w244_4", en: "everything", ru: "всё" },
        { id: "w244_5", en: "eats", ru: "ест, съедает" }
    ]
},
{
    id: 245,
    image: BASE3 + "hmm/Carlos 2.jpg",
    text: "Me: I'm totally ready for winter\nFirst cold day:\n*wearing 5 layers\nstill freezing*\nI lied",
    translation: "Я: я полностью готов к зиме\nПервый холодный день:\n*надеваю 5 слоёв\nвсё равно мёрзну*\nЯ солгал",
    difficulty: "medium",
    words: [
        { id: "w245_1", en: "totally ready", ru: "полностью готов" },
        { id: "w245_2", en: "layers", ru: "слои, слоёв одежды" },
        { id: "w245_3", en: "freezing", ru: "замерзаю, очень холодно" },
        { id: "w245_4", en: "lied", ru: "солгал, соврал" },
        { id: "w245_5", en: "cold day", ru: "холодный день" }
    ]
},
  {
    id: 246,
    image: BASE3 + "sad/Harold sad.jpg",
    text: "Me: I'm fine\nAlso me at night:\n*staring at the ceiling\nthinking about everything*",
    translation: "Я: я в порядке\nЯ же ночью:\n*смотрю в потолок\nдумая обо всём*",
    difficulty: "medium",
    words: [
        { id: "w246_1", en: "fine", ru: "в порядке, нормально" },
        { id: "w246_2", en: "staring", ru: "пристально смотрит, уставился" },
        { id: "w246_3", en: "ceiling", ru: "потолок" },
        { id: "w246_4", en: "thinking about", ru: "думая о, размышляя" },
        { id: "w246_5", en: "everything", ru: "всё, обо всём" }
    ]
},
{
    id: 247,
    image: BASE3 + "sad/Ah%20shit%20here%20we%20go%20again%20GTA.jpg",
    text: "When you check your to-do list\nand realize you haven't done\na single thing all week:\nAh shit here we go again",
    translation: "Когда смотришь на список дел\nи понимаешь что не сделал\nни одной вещи за всю неделю:\nАх чёрт ну вот опять",
    difficulty: "medium",
    words: [
        { id: "w247_1", en: "to-do list", ru: "список дел" },
        { id: "w247_2", en: "realize", ru: "осознавать, понимать" },
        { id: "w247_3", en: "single thing", ru: "ни одной вещи, ничего" },
        { id: "w247_4", en: "all week", ru: "всю неделю" },
        { id: "w247_5", en: "here we go again", ru: "ну вот опять, снова за своё" }
    ]
},
{
    id: 248,
    image: BASE3 + "sad/Not stonks.jpg",
    text: "My bank account\nafter the weekend:\nNot stonks",
    translation: "Мой банковский счёт\nпосле выходных:\nНе в гору",
    difficulty: "easy",
    words: [
        { id: "w248_1", en: "bank account", ru: "банковский счёт" },
        { id: "w248_2", en: "weekend", ru: "выходные" },
        { id: "w248_3", en: "stonks", ru: "акции растут (мем про финансы)" },
        { id: "w248_4", en: "not", ru: "не, нет" }
    ]
},
{
    id: 249,
    image: BASE3 + "sad/Wojak crying under a smiling mask.jpg",
    text: "Me in public: everything is great\nMe inside:\nI am barely holding it together",
    translation: "Я на людях: всё отлично\nЯ внутри:\nЯ едва держусь",
    difficulty: "hard",
    words: [
        { id: "w249_1", en: "in public", ru: "на людях, публично" },
        { id: "w249_2", en: "inside", ru: "внутри, внутренне" },
        { id: "w249_3", en: "barely", ru: "едва, с трудом" },
        { id: "w249_4", en: "holding it together", ru: "держаться, не сдаваться" },
        { id: "w249_5", en: "great", ru: "отлично, великолепно" }
    ]
},
{
    id: 250,
    image: BASE3 + "sad/I know that feel bro.jpg",
    text: "Someone: I'm having a rough day\nMe who always has a rough day:\nI know that feel bro",
    translation: "Кто-то: у меня тяжёлый день\nЯ у которого каждый день тяжёлый:\nЯ знаю это чувство брат",
    difficulty: "medium",
    words: [
        { id: "w250_1", en: "rough day", ru: "тяжёлый день, трудный день" },
        { id: "w250_2", en: "I know that feel", ru: "я знаю это чувство" },
        { id: "w250_3", en: "bro", ru: "брат, братан" },
        { id: "w250_4", en: "having", ru: "иметь, переживать" }
    ]
},
{
    id: 251,
    image: BASE3 + "sad/Kermit looking in the rainy window.jpg",
    text: "Me on a rainy Sunday:\n*stares out the window*\n*thinks about every life decision*\n*orders pizza*",
    translation: "Я в дождливое воскресенье:\n*смотрит в окно*\n*думает о каждом жизненном решении*\n*заказывает пиццу*",
    difficulty: "medium",
    words: [
        { id: "w251_1", en: "rainy", ru: "дождливый" },
        { id: "w251_2", en: "stares out", ru: "смотрит наружу, глядит в" },
        { id: "w251_3", en: "decision", ru: "решение" },
        { id: "w251_4", en: "orders", ru: "заказывает" },
        { id: "w251_5", en: "life", ru: "жизнь, жизненный" }
    ]
},
{
    id: 252,
    image: BASE3 + "sad/Smile through the pain.jpg",
    text: "Me: how are you?\nAlso me: *smiling*\nI haven't slept in 3 days\nbut I'm fine",
    translation: "Меня спрашивают: как дела?\nЯ: *улыбаюсь*\n(Я не спал 3 дня)",
    difficulty: "medium",
    words: [
        { id: "w252_1", en: "smiling", ru: "улыбаясь, улыбается" },
        { id: "w252_2", en: "haven't slept", ru: "не спал" },
        { id: "w252_3", en: "pain", ru: "боль, страдание" },
        { id: "w252_4", en: "through", ru: "сквозь, через" },
        { id: "w252_5", en: "fine", ru: "в порядке, нормально" }
    ]
},
{
    id: 253,
    image: BASE3 + "sad/Kermit holding his knees.jpg",
    text: "Me: I just need 5 minutes alone\nto recharge\nAlso me after 5 minutes:\nokay I need 5 more hours",
    translation: "Я: мне нужно всего 5 минут одному\nчтобы восстановиться\nЯ же через 5 минут:\nладно мне нужно ещё 5 часов",
    difficulty: "medium",
    words: [
        { id: "w253_1", en: "alone", ru: "один, в одиночестве" },
        { id: "w253_2", en: "recharge", ru: "восстановиться, перезарядиться" },
        { id: "w253_3", en: "5 more hours", ru: "ещё 5 часов" },
        { id: "w253_4", en: "need", ru: "нуждаться, нужно" },
        { id: "w253_5", en: "okay", ru: "ладно, окей" }
    ]
},
{
    id: 254,
    image: BASE3 + "sad/i_ve won, but at what cost.jpg",
    text: "Me: finally finished all my tasks\nAlso me: *too tired to enjoy it*\nI've won\nbut at what cost",
    translation: "Я: наконец закончил все дела\nЯ же: *слишком устал чтобы радоваться*\nЯ победил\nно какой ценой",
    difficulty: "hard",
    words: [
        { id: "w254_1", en: "finally", ru: "наконец" },
        { id: "w254_2", en: "finished", ru: "закончил, завершил" },
        { id: "w254_3", en: "too tired", ru: "слишком устал" },
        { id: "w254_4", en: "enjoy", ru: "наслаждаться, радоваться" },
        { id: "w254_5", en: "at what cost", ru: "какой ценой" }
    ]
},
{
    id: 255,
    image: BASE3 + "sad/cat in bed sad hugging toy.jpg",
    text: "Me after a long hard day:\n*hugs pillow*\n*watches comfort show*\n*orders comfort food*\nThis is self care",
    translation: "Я после долгого тяжёлого дня:\n*обнимает подушку*\n*смотрит любимый сериал*\n*заказывает любимую еду*\nЭто забота о себе",
    difficulty: "medium",
    words: [
        { id: "w255_1", en: "hugs", ru: "обнимает" },
        { id: "w255_2", en: "comfort", ru: "утешение, комфорт" },
        { id: "w255_3", en: "self care", ru: "забота о себе" },
        { id: "w255_4", en: "hard day", ru: "тяжёлый день" },
        { id: "w255_5", en: "pillow", ru: "подушка" }
    ]
},
{
    id: 256,
    image: BASE3 + "sad/Trauma intensifies.jpg",
    text: "Me: I'm totally over it\nOne random memory:\n*appears out of nowhere*\nTrauma intensifies",
    translation: "Я: я полностью пережил это\nОдно случайное воспоминание:\n*появляется ниоткуда*\nТравма усиливается",
    difficulty: "hard",
    words: [
        { id: "w256_1", en: "totally over it", ru: "полностью пережил, забыл об этом" },
        { id: "w256_2", en: "random", ru: "случайный, произвольный" },
        { id: "w256_3", en: "memory", ru: "воспоминание, память" },
        { id: "w256_4", en: "nowhere", ru: "ниоткуда, никуда" },
        { id: "w256_5", en: "intensifies", ru: "усиливается, нарастает" }
    ]
},
{
    id: 257,
    image: BASE3 + "sad/press f to pay respect.jpg",
    text: "My motivation on Monday:\n*has left the chat*\nPress F to pay respect",
    translation: "Моя мотивация в понедельник:\n*покинул чат*\nНажми F чтобы отдать дань уважения",
    difficulty: "medium",
    words: [
        { id: "w257_1", en: "motivation", ru: "мотивация" },
        { id: "w257_2", en: "has left the chat", ru: "покинул чат" },
        { id: "w257_3", en: "press", ru: "нажать, нажимать" },
        { id: "w257_4", en: "pay respect", ru: "отдать дань уважения" },
        { id: "w257_5", en: "Monday", ru: "понедельник" }
    ]
},
{
    id: 258,
    image: BASE3 + "sad/Pain 1.jpg",
    text: "Me trying to explain\nwhy I'm sad\nbut I don't even know why:\nIt's just the vibe",
    translation: "Я пытаюсь объяснить\nпочему мне грустно\nно сам не знаю почему:\nПросто такое настроение",
    difficulty: "hard",
    words: [
        { id: "w258_1", en: "explain", ru: "объяснять, объяснить" },
        { id: "w258_2", en: "sad", ru: "грустный, печальный" },
        { id: "w258_3", en: "even", ru: "даже" },
        { id: "w258_4", en: "vibe", ru: "настроение, атмосфера (сленг)" },
        { id: "w258_5", en: "just", ru: "просто, только" }
    ]
},
{
    id: 259,
    image: BASE3 + "sad/Pepe is hugging.jpg",
    text: "When you need a hug\nbut you don't want to ask for one:\n*hugs self*\nThis will have to do",
    translation: "Когда тебе нужны объятия\nно не хочешь просить об этом:\n*обнимает себя*\nПридётся довольствоваться этим",
    difficulty: "hard",
    words: [
        { id: "w259_1", en: "hug", ru: "обнимать, объятие" },
        { id: "w259_2", en: "ask for", ru: "просить о, попросить" },
        { id: "w259_3", en: "this will have to do", ru: "придётся довольствоваться этим" },
        { id: "w259_4", en: "need", ru: "нуждаться, нужно" },
        { id: "w259_5", en: "self", ru: "себя, себе" }
    ]
},
{
    id: 260,
    image: BASE3 + "sad/Sad gaming cat.jpg",
    text: "Me at 11pm: I should sleep\nMe at 4am: *still gaming*\nWell I've made my choices\nand I regret all of them",
    translation: "Я в 11 вечера: надо спать\nЯ в 4 утра: *всё ещё играю*\nЧто ж я сделал свой выбор\nи сожалею о каждом из них",
    difficulty: "hard",
    words: [
        { id: "w260_1", en: "still", ru: "всё ещё, до сих пор" },
        { id: "w260_2", en: "gaming", ru: "играть в игры, геймить" },
        { id: "w260_3", en: "choices", ru: "выборы, решения" },
        { id: "w260_4", en: "regret", ru: "сожалеть, сожаление" },
        { id: "w260_5", en: "made", ru: "сделал, принял" }
    ]
},
 {
    id: 261,
    image: BASE3 + "sad/cat is eating in tears.jpg",
    text: "Me eating my feelings\nafter a rough day:\nThis is fine\nEverything is fine\n*eats entire fridge*",
    translation: "Я заедаю свои чувства\nпосле тяжёлого дня:\nВсё нормально\nВсё хорошо\n*съедает весь холодильник*",
    difficulty: "medium",
    words: [
        { id: "w261_1", en: "eating my feelings", ru: "заедать чувства, есть из-за стресса" },
        { id: "w261_2", en: "rough day", ru: "тяжёлый день" },
        { id: "w261_3", en: "entire", ru: "весь, целый" },
        { id: "w261_4", en: "fridge", ru: "холодильник" },
        { id: "w261_5", en: "feelings", ru: "чувства, эмоции" }
    ]
},
{
    id: 262,
    image: BASE3 + "sad/Don_t give me hope.jpg",
    text: "Me on Friday night:\nmaybe this weekend\nI'll finally be productive\nDon't give me hope",
    translation: "Я в пятницу вечером:\nможет на этих выходных\nя наконец буду продуктивным\nНе давай мне надежду",
    difficulty: "medium",
    words: [
        { id: "w262_1", en: "Friday night", ru: "пятница вечером" },
        { id: "w262_2", en: "finally", ru: "наконец" },
        { id: "w262_3", en: "productive", ru: "продуктивный" },
        { id: "w262_4", en: "hope", ru: "надежда, надеяться" },
        { id: "w262_5", en: "don't give me", ru: "не давай мне" }
    ]
},
{
    id: 263,
    image: BASE3 + "sad/Homer.jpg",
    text: "When you realize\nit's Sunday night\nand you did absolutely nothing\nyou planned to do",
    translation: "Когда понимаешь\nчто уже воскресенье вечером\nи ты не сделал абсолютно ничего\nиз того что планировал",
    difficulty: "medium",
    words: [
        { id: "w263_1", en: "realize", ru: "осознавать, понимать" },
        { id: "w263_2", en: "absolutely nothing", ru: "абсолютно ничего" },
        { id: "w263_3", en: "planned", ru: "планировал, запланировал" },
        { id: "w263_4", en: "Sunday night", ru: "воскресенье вечером" },
        { id: "w263_5", en: "did", ru: "сделал, делал" }
    ]
},
{
    id: 264,
    image: BASE3 + "sad/black guy crying.jpg",
    text: "Me watching a movie\nI've already seen 10 times:\n*cries at the same part again*\nEvery single time",
    translation: "Я смотрю фильм\nкоторый уже видел 10 раз:\n*плачет на том же месте снова*\nКаждый раз без исключения",
    difficulty: "medium",
    words: [
        { id: "w264_1", en: "already seen", ru: "уже видел" },
        { id: "w264_2", en: "cries", ru: "плачет" },
        { id: "w264_3", en: "same part", ru: "то же место, тот же момент" },
        { id: "w264_4", en: "every single time", ru: "каждый раз без исключения" },
        { id: "w264_5", en: "again", ru: "снова, опять" }
    ]
},
{
    id: 265,
    image: BASE3 + "sad/Joker All I have are negative thoughts.jpg",
    text: "Me trying to think positive:\nAll I have are negative thoughts",
    translation: "Я пытаюсь думать позитивно:\nВсё что у меня есть это негативные мысли",
    difficulty: "hard",
    words: [
        { id: "w265_1", en: "trying", ru: "пытаясь, стараясь" },
        { id: "w265_2", en: "positive", ru: "позитивный, положительный" },
        { id: "w265_3", en: "negative thoughts", ru: "негативные мысли" },
        { id: "w265_4", en: "all I have", ru: "всё что у меня есть" }
    ]
},
{
    id: 266,
    image: BASE3 + "sad/cat on scales fat.jpg",
    text: "Me: I've been eating healthy\nand exercising all week\nThe scale:\nNo you haven't",
    translation: "Я: я питался здорово\nи занимался спортом всю неделю\nВесы:\nНет не занимался",
    difficulty: "medium",
    words: [
        { id: "w266_1", en: "scale", ru: "весы" },
        { id: "w266_2", en: "exercising", ru: "заниматься спортом" },
        { id: "w266_3", en: "all week", ru: "всю неделю" },
        { id: "w266_4", en: "haven't", ru: "не делал, не занимался" },
        { id: "w266_5", en: "healthy", ru: "здорово, полезно" }
    ]
},
{
    id: 267,
    image: BASE3 + "sad/Sad party emoji.jpg",
    text: "My birthday:\n*expects a huge celebration*\n*gets one message from mom*\nParty time I guess",
    translation: "Мой день рождения:\n*ожидает большой праздник*\n*получает одно сообщение от мамы*\nВремя праздника наверное",
    difficulty: "medium",
    words: [
        { id: "w267_1", en: "birthday", ru: "день рождения" },
        { id: "w267_2", en: "expects", ru: "ожидает, рассчитывает" },
        { id: "w267_3", en: "celebration", ru: "праздник, торжество" },
        { id: "w267_4", en: "message", ru: "сообщение" },
        { id: "w267_5", en: "I guess", ru: "наверное, полагаю" }
    ]
},
{
    id: 268,
    image: BASE3 + "sad/You ok no.jpg",
    text: "Friend: are you okay?\nMe: yeah totally fine\nInside: *no*",
    translation: "Друг: ты в порядке?\nЯ: да всё отлично\nВнутри: *нет*",
    difficulty: "easy",
    words: [
        { id: "w268_1", en: "okay", ru: "в порядке, окей" },
        { id: "w268_2", en: "totally fine", ru: "всё отлично, всё нормально" },
        { id: "w268_3", en: "inside", ru: "внутри,внутри себя" },
        { id: "w268_4", en: "yeah", ru: "да, ага" }
    ]
},
{
    id: 269,
    image: BASE3 + "sad/Give me a reason to live.jpg",
    text: "Me: I'm going to be so productive today\nNothing works as planned:\nGive me a reason to continue",
    translation: "Я: сегодня буду таким продуктивным\nНичего не идёт по плану:\nДайте мне причину продолжать",
    difficulty: "hard",
    words: [
        { id: "w269_1", en: "productive", ru: "продуктивный" },
        { id: "w269_2", en: "works as planned", ru: "идёт по плану" },
        { id: "w269_3", en: "reason", ru: "причина, повод" },
        { id: "w269_4", en: "continue", ru: "продолжать, продолжить" },
        { id: "w269_5", en: "nothing", ru: "ничего, ничто" }
    ]
},
{
    id: 270,
    image: BASE3 + "sad/Sad Spiderman.jpg",
    text: "Me and my motivation\nwalking in opposite directions:\nWe don't talk anymore",
    translation: "Я и моя мотивация\nидём в противоположных направлениях:\nМы больше не общаемся",
    difficulty: "hard",
    words: [
        { id: "w270_1", en: "motivation", ru: "мотивация" },
        { id: "w270_2", en: "opposite directions", ru: "противоположные направления" },
        { id: "w270_3", en: "anymore", ru: "больше, уже" },
        { id: "w270_4", en: "walking", ru: "идущий, идя" },
        { id: "w270_5", en: "we don't talk", ru: "мы не общаемся, мы не разговариваем" }
    ]
},
{
    id: 271,
    image: BASE3 + "sad/Doge triste.jpg",
    text: "When you make plans\nwith yourself\nand even you cancel on yourself:\nSuch empty\nMany alone",
    translation: "Когда строишь планы\nсам с собой\nи даже сам отменяешь их:\nТакая пустота\nМного одиночества",
    difficulty: "medium",
    words: [
        { id: "w271_1", en: "make plans", ru: "строить планы" },
        { id: "w271_2", en: "cancel", ru: "отменять" },
        { id: "w271_3", en: "empty", ru: "пустой, пустота" },
        { id: "w271_4", en: "alone", ru: "один, в одиночестве" },
        { id: "w271_5", en: "even", ru: "даже" }
    ]
},
{
    id: 272,
    image: BASE3 + "sad/cat is interviewed.jpg",
    text: "Reporter: how do you feel today?\nMe: well I woke up\nthat's about it",
    translation: "Репортёр: как вы себя чувствуете сегодня?\nЯ: ну я проснулся\nвот и всё пожалуй",
    difficulty: "medium",
    words: [
        { id: "w272_1", en: "reporter", ru: "репортёр, журналист" },
        { id: "w272_2", en: "feel", ru: "чувствовать, ощущать" },
        { id: "w272_3", en: "woke up", ru: "проснулся" },
        { id: "w272_4", en: "that's about it", ru: "вот и всё, на этом пожалуй всё" }
    ]
},
{
    id: 273,
    image: BASE3 + "sad/Okay but it_s not what I wanted.jpg",
    text: "Life giving me everything.\nMe anyways:\nOkay\nbut it's not what I wanted",
    translation: "Жизнь даёт мне всё\nЯ все равно:\nЛадно\nно это не то чего я хотел",
    difficulty: "hard",
    words: [
        { id: "w273_1", en: "giving", ru: "давая, давать" },
        { id: "w273_2", en: "except", ru: "кроме, за исключением" },
        { id: "w273_3", en: "actually", ru: "на самом деле, вообще-то" },
        { id: "w273_4", en: "wanted", ru: "хотел, желал" },
        { id: "w273_5", en: "life", ru: "жизнь" }
    ]
},
{
    id: 274,
    image: BASE3 + "sad/Pain horse.jpg",
    text: "Me: I can handle anything\nOne small inconvenience:\n*appears*\nI cannot handle anything",
    translation: "Я: я могу справиться с чем угодно\nОдна маленькая неприятность:\n*появляется*\nЯ не могу справиться ни с чем",
    difficulty: "hard",
    words: [
        { id: "w274_1", en: "handle", ru: "справляться, справиться" },
        { id: "w274_2", en: "anything", ru: "что угодно, ничего" },
        { id: "w274_3", en: "inconvenience", ru: "неудобство, неприятность" },
        { id: "w274_4", en: "appears", ru: "появляется" },
        { id: "w274_5", en: "cannot", ru: "не могу, не может" }
    ]
},
{
    id: 275,
    image: BASE3 + "sad/I_m gonna have a breakdown breakdown.jpg",
    text: "My plans for the week:be happy \nWhat actually happened:\nI'm gonna have a breakdown",
    translation: "Мои планы на неделю:быть счастливым\nЧто реально произошло:\nУ меня будет срыв",
    difficulty: "hard",
    words: [
        { id: "w275_1", en: "plans", ru: "планы" },
        { id: "w275_2", en: "actually happened", ru: "реально произошло, на самом деле случилось" },
        { id: "w275_3", en: "gonna have", ru: "будет, собираюсь иметь" },
        { id: "w275_4", en: "breakdown", ru: "срыв, нервный срыв" },
    ]
},
{
    id: 276,
    image: BASE3 + "offend/Mario working at pc and leaves.jpg",
    text: "Me: *sends risky text*\nAlso me: *immediately wants to move\nto another country and change my name*",
    translation: "Я: *отправляю рискованное сообщение*\nЯ же: *немедленно хочу переехать\nв другую страну и сменить имя*",
    difficulty: "medium",
    words: [
        { id: "w276_1", en: "risky", ru: "рискованный, смелый" },
        { id: "w276_2", en: "immediately", ru: "немедленно, сразу" },
        { id: "w276_3", en: "move", ru: "переехать, переезжать" },
        { id: "w276_4", en: "change", ru: "менять, изменить" },
        { id: "w276_5", en: "name", ru: "имя, название" }
    ]
},
{
    id: 277,
    image: BASE3 + "sad/Carlos loser.jpg",
    text: "Me losing at a board game\nagainst a 7 year old:\nI let you win\nobviously\nI totally let you win",
    translation: "Я проигрываю в настольную игру\n7-летнему ребёнку:\nЯ дал тебе выиграть\nочевидно\nЯ точно дал тебе выиграть",
    difficulty: "medium",
    words: [
        { id: "w277_1", en: "losing", ru: "проигрывая, проигрывает" },
        { id: "w277_2", en: "board game", ru: "настольная игра" },
        { id: "w277_3", en: "let you win", ru: "дал тебе выиграть" },
        { id: "w277_4", en: "obviously", ru: "очевидно, явно" },
        { id: "w277_5", en: "totally", ru: "точно, абсолютно" }
    ]
},
{
    id: 278,
    image: BASE3 + "sad/bob sitting in cafe sad.jpg",
    text: "Me sitting in a cafe\nordering the same coffee\nfor the 47th time this month:\nYes this time my life will change",
    translation: "Я сижу в кафе\nзаказываю тот же кофе\nв 47-й раз в этом месяце:\nДа на этот раз моя жизнь изменится",
    difficulty: "medium",
    words: [
        { id: "w278_1", en: "ordering", ru: "заказывая, заказывает" },
        { id: "w278_2", en: "same", ru: "тот же самый" },
        { id: "w278_3", en: "this month", ru: "в этом месяце" },
        { id: "w278_4", en: "this time", ru: "на этот раз" },
        { id: "w278_5", en: "change", ru: "меняться, изменится" }
    ]
},
{
    id: 279,
    image: BASE3 + "sad/Crying kid.jpg",
    text: "Me when the pizza delivery\ntakes more than 30 minutes:\nI ordered this\nin another life",
    translation: "Я когда доставка пиццы\nзанимает больше 30 минут:\nЯ заказал это\nв другой жизни",
    difficulty: "easy",
    words: [
        { id: "w279_1", en: "pizza delivery", ru: "доставка пиццы" },
        { id: "w279_2", en: "takes", ru: "занимает, требует" },
        { id: "w279_3", en: "more than", ru: "больше чем, более" },
        { id: "w279_4", en: "ordered", ru: "заказал, заказывал" },
        { id: "w279_5", en: "another life", ru: "другая жизнь" }
    ]
},
{
    id: 280,
    image: BASE3 + "sad/Not stonks.jpg",
    text: "Me: spends money on coffee every day\nMy savings account:\nNot stonks\nDefinitely not stonks",
    translation: "Я: трачу деньги на кофе каждый день\nМой сберегательный счёт:\nНе в гору\nОпределённо не в гору",
    difficulty: "medium",
    words: [
        { id: "w280_1", en: "spends", ru: "тратит, расходует" },
        { id: "w280_2", en: "savings account", ru: "сберегательный счёт" },
        { id: "w280_3", en: "definitely", ru: "определённо, точно" },
        { id: "w280_4", en: "every day", ru: "каждый день" },
        { id: "w280_5", en: "stonks", ru: "акции растут (финансовый мем)" }
    ]
},
{
    id: 281,
    image: BASE3 + "sad/Mama mia.jpg",
    text: "Me checking my weight\nafter the holiday season:\nMama mia\nWhat have I done",
    translation: "Я проверяю свой вес\nпосле праздничного сезона:\nМамия\nЧто я наделал",
    difficulty: "easy",
    words: [
        { id: "w281_1", en: "checking", ru: "проверяя, проверить" },
        { id: "w281_2", en: "weight", ru: "вес" },
        { id: "w281_3", en: "holiday season", ru: "праздничный сезон" },
        { id: "w281_4", en: "what have I done", ru: "что я наделал" }
    ]
},
{
    id: 282,
    image: BASE3 + "sad/idk dude, that was kinda offensive.jpg",
    text: "When your friend roasts you\nand everyone laughs\nbut it actually hit too close to home:\nIdk dude\nthat was kinda offensive",
    translation: "Когда друг подшучивает над тобой\nи все смеются\nно это реально задело:\nНе знаю чувак\nэто было немного обидно",
    difficulty: "hard",
    words: [
        { id: "w282_1", en: "roasts", ru: "подшучивает, троллит" },
        { id: "w282_2", en: "hit too close to home", ru: "задело за живое" },
        { id: "w282_3", en: "kinda", ru: "немного, как-то" },
        { id: "w282_4", en: "offensive", ru: "обидный, оскорбительный" },
        { id: "w282_5", en: "actually", ru: "реально, на самом деле" }
    ]
},
{
    id: 283,
    image: BASE3 + "sad/Oh no.jpg",
    text: "Me: sets 14 alarms for 7am\nMe at 7am: turns off all 14 alarms\nwithout waking up\nOh no",
    translation: "Я: ставлю 14 будильников на 7 утра\nЯ в 7 утра: выключает все 14 будильников\nне просыпаясь\nО нет",
    difficulty: "easy",
    words: [
        { id: "w283_1", en: "sets alarms", ru: "ставит будильники" },
        { id: "w283_2", en: "turns off", ru: "выключает" },
        { id: "w283_3", en: "without waking up", ru: "не просыпаясь" },
        { id: "w283_4", en: "oh no", ru: "о нет, ой нет" },
        { id: "w283_5", en: "without", ru: "без, не" }
    ]
},
{
    id: 284,
    image: BASE3 + "sad/what did i do.jpg",
    text: "Me after sending\na risky message\nand waiting for a reply:\nWhat did I do\nWhat did I just do",
    translation: "Я после того как отправил\nрискованное сообщение\nи жду ответа:\nЧто я сделал\nЧто я только что сделал",
    difficulty: "medium",
    words: [
        { id: "w284_1", en: "risky", ru: "рискованный, смелый" },
        { id: "w284_2", en: "waiting for", ru: "ожидая, жду" },
        { id: "w284_3", en: "reply", ru: "ответ, отвечать" },
        { id: "w284_4", en: "what did I do", ru: "что я сделал" },
        { id: "w284_5", en: "just", ru: "только что, просто" }
    ]
},
{
    id: 285,
    image: BASE3 + "sad/Oof 2.jpg",
    text: "Me eating hot soup:\n*my face at that moment*",
    translation: "Я ем горячий суп\n*мое лицо в тот момент*",
    difficulty: "easy",
    words: [
        { id: "w285_1", en: "hot", ru: "горячий" },
        { id: "w285_2", en: "face", ru: "лицо" },
        { id: "w285_3", en: "soup", ru: "суп" },
        { id: "w285_4", en: "at that moment", ru: "в тот момент" }
    ]
},
{
    id: 286,
    image: BASE3 + "sad/Family Guy 2.jpg",
    text: "Me explaining to my parents\nwhy I need more money:\n*sweating nervously*\nIt's for very important things\ntrust me",
    translation: "Я объясняю родителям\nпочему мне нужно больше денег:\n*нервно потею*\nЭто для очень важных вещей\nдоверьтесь мне",
    difficulty: "medium",
    words: [
        { id: "w286_1", en: "explaining", ru: "объясняя" },
        { id: "w286_2", en: "sweating", ru: "потею, потеть" },
        { id: "w286_3", en: "nervously", ru: "нервно" },
        { id: "w286_4", en: "trust me", ru: "доверьтесь мне, поверьте мне" },
        { id: "w286_5", en: "important", ru: "важный" }
    ]
},
{
    id: 287,
    image: BASE3 + "sad/Carlos money beggar.jpg",
    text: "Me at the end of the month:*can you spare some change*",
    translation: "Я в конце месяца:\n *у вас не найдётся мелочи*",
    difficulty: "hard",
    words: [
        { id: "w287_1", en: "end of the month", ru: "конец месяца" },
        { id: "w287_2", en: "spare", ru: "дать, уделить" },
        { id: "w287_3", en: "change", ru: "мелочь, сдача" },
        { id: "w287_4", en: "can you", ru: "можешь ли ты, не могли бы вы" }
    ]
},
{
    id: 288,
    image: BASE3 + "sad/Pepe 3.jpg",
    text: "Me: I'll text back later\nThat message sitting unread for 3 weeks:\nAre you even alive",
    translation: "Я: отвечу позже\nТо сообщение лежит непрочитанным 3 недели:\nТы вообще живой",
    difficulty: "medium",
    words: [
        { id: "w288_1", en: "text back", ru: "ответить на сообщение" },
        { id: "w288_2", en: "sitting unread", ru: "лежит непрочитанным" },
        { id: "w288_3", en: "even alive", ru: "вообще живой" },
        { id: "w288_4", en: "later", ru: "позже, потом" },
        { id: "w288_5", en: "weeks", ru: "недели" }
    ]
},
{
    id: 289,
    image: BASE3 + "sad/Ah ah yes.jpg",
    text: "Me: I don't need validation\nfrom social media\nAlso me: *refreshes page every 10 seconds\nwaiting for likes*",
    translation: "Я: мне не нужно одобрение\nсоцсетей\nЯ же: *обновляет страницу каждые 10 секунд\nждёт лайки*",
    difficulty: "hard",
    words: [
        { id: "w289_1", en: "validation", ru: "одобрение, подтверждение" },
        { id: "w289_2", en: "social media", ru: "социальные сети" },
        { id: "w289_3", en: "refreshes", ru: "обновляет" },
        { id: "w289_4", en: "waiting for", ru: "ожидая, жду" },
        { id: "w289_5", en: "likes", ru: "лайки" }
    ]
},
{
    id: 290,
    image: BASE3 + "sad/tom is exhausted in agony siting.jpg",
    text: "Me after doing\none productive thing today:\nI am exhausted\nI need a 3 day break\nI have given everything",
    translation: "Я после того как сделал\nодно продуктивное дело сегодня:\nЯ измотан\nМне нужен перерыв на 3 дня\nЯ отдал всё",
    difficulty: "medium",
    words: [
        { id: "w290_1", en: "exhausted", ru: "измотан, истощён" },
        { id: "w290_2", en: "productive", ru: "продуктивный" },
        { id: "w290_3", en: "break", ru: "перерыв, отдых" },
        { id: "w290_4", en: "given everything", ru: "отдал всё" },
        { id: "w290_5", en: "need", ru: "нуждаться, нужно" }
    ]
},
  {
    id: 291,
    image: BASE3 + "attack/Thank you for your opinion.jpg",
    text: "Someone: unsolicited advice\nMe: thank you for your opinion\n*immediately does the opposite*",
    translation: "Кто-то: непрошеный совет\nЯ: спасибо за твоё мнение\n*немедленно делает наоборот*",
    difficulty: "hard",
    words: [
        { id: "w291_1", en: "unsolicited", ru: "непрошеный, без запроса" },
        { id: "w291_2", en: "opinion", ru: "мнение, точка зрения" },
        { id: "w291_3", en: "immediately", ru: "немедленно, сразу" },
        { id: "w291_4", en: "opposite", ru: "противоположное, наоборот" },
        { id: "w291_5", en: "advice", ru: "совет, рекомендация" }
    ]
},
{
    id: 292,
    image: BASE3 + "attack/cringe button.jpg",
    text: "Someone: let me tell you\nmy hot take on pineapple pizza\nMe: *already reaching for the cringe button*",
    translation: "Кто-то: дай расскажу тебе\nсвоё горячее мнение о пицце с ананасом\nЯ: *уже тянусь к кнопке кринжа*",
    difficulty: "hard",
    words: [
        { id: "w292_1", en: "hot take", ru: "горячее мнение, спорная точка зрения" },
        { id: "w292_2", en: "pineapple", ru: "ананас" },
        { id: "w292_3", en: "reaching for", ru: "тянуться к, доставать" },
        { id: "w292_4", en: "cringe", ru: "кринж, неловкость" },
        { id: "w292_5", en: "already", ru: "уже" }
    ]
},
{
    id: 293,
    image: BASE3 + "attack/Slap.jpg",
    text: "Me when someone says\nthey don't like my favourite song:\nI took that personally",
    translation: "Я когда кто-то говорит\nчто не любит мою любимую песню:\nЯ принял это близко к сердцу",
    difficulty: "medium",
    words: [
        { id: "w293_1", en: "favourite song", ru: "любимая песня" },
        { id: "w293_2", en: "took personally", ru: "принял близко к сердцу" },
        { id: "w293_3", en: "don't like", ru: "не нравится, не любить" },
        { id: "w293_4", en: "someone", ru: "кто-то, кто-нибудь" }
    ]
},
{
    id: 294,
    image: BASE3 + "attack/Good dog.jpg",
    text: "Me after doing\nthe bare minimum today:\nGood boy\nVery good boy\nYou deserve a treat",
    translation: "Я после того как сделал\nсамый минимум сегодня:\nХороший мальчик\nОчень хороший мальчик\nТы заслуживаешь угощения",
    difficulty: "easy",
    words: [
        { id: "w294_1", en: "bare minimum", ru: "самый минимум, минимальные усилия" },
        { id: "w294_2", en: "deserve", ru: "заслуживать" },
        { id: "w294_3", en: "treat", ru: "угощение, награда" },
        { id: "w294_4", en: "good boy", ru: "хороший мальчик" },
        { id: "w294_5", en: "today", ru: "сегодня" }
    ]
},
{
    id: 295,
    image: BASE3 + "attack/Ecouter une poubelle.jpg",
    text: "Someone giving me advice\nabout my life choices",
    translation: "Кто-то даёт мне советы\nо моих жизненных выборах",
    difficulty: "hard",
    words: [
        { id: "w295_1", en: "giving advice", ru: "давать советы" },
        { id: "w295_2", en: "life choices", ru: "жизненные выборы, решения" },
        { id: "w295_3", en: "someone", ru: "кто-то" },
        { id: "w295_4", en: "about", ru: "про,насчет,об,обо" },
    ]
},
{
    id: 296,
    image: BASE3 + "funny/Clown university invitation.jpg",
    text: "Me: I'll wake up without an alarm tomorrow\nNext morning at 1pm:\nCongratulations\nyou are invited to clown university",
    translation: "Я: завтра проснусь без будильника.\nСледующее утро в час дня:\nПоздравляем\nвас приглашают в университет клоунов",
    difficulty: "medium",
    words: [
        { id: "w296_1", en: "without an alarm", ru: "без будильника" },
        { id: "w296_2", en: "congratulations", ru: "поздравляем, поздравления" },
        { id: "w296_3", en: "invited", ru: "приглашён, приглашают" },
        { id: "w296_4", en: "university", ru: "университет" },
        { id: "w296_5", en: "tomorrow", ru: "завтра" }
    ]
},
{
    id: 297,
    image: BASE3 + "dumb/Certified idiot.jpg",
    text: "Me: I am a very organised person\nAlso me: *has 47 unread emails\n2000 unread messages\nand a to-do list from 2019*",
    translation: "Я: я очень организованный человек\nЯ же: *47 непрочитанных писем\n2000 непрочитанных сообщений\nи список дел с 2019 года*",
    difficulty: "medium",
    words: [
        { id: "w297_1", en: "organised", ru: "организованный" },
        { id: "w297_2", en: "unread", ru: "непрочитанный" },
        { id: "w297_3", en: "emails", ru: "письма, имейлы" },
        { id: "w297_4", en: "to-do list", ru: "список дел" },
        { id: "w297_5", en: "messages", ru: "сообщения" }
    ]
},
{
    id: 298,
    image: BASE3 + "offend/Sans nom 37.jpg",
    text: "Me: *drops phone*\nPhone: *lands perfectly face down*\nI am closly looking if it's not damaged",
    translation: "Я: *роняю телефон*\nТелефон: *падает точно экраном вниз*\nЯ внимательно осматриваю не поврежден ли он",
    difficulty: "medium",
    words: [
        { id: "w298_1", en: "drops", ru: "роняет, уронить" },
        { id: "w298_2", en: "lands", ru: "приземляется, падает" },
        { id: "w298_3", en: "face down", ru: "экраном вниз, лицом вниз" },
        { id: "w298_4", en: "damaged", ru: "поврежден" },
        { id: "w298_5", en: "closly looking", ru: "внимательно осматриваю" }
    ]
},
{
    id: 299,
    image: BASE3 + "funny/I have achieved comedy.jpg",
    text: "Me after making\none person laugh today:\nI am the funniest person alive\nRetire the other comedians",
    translation: "Я после того как рассмешил\nодного человека сегодня:\nЯ самый смешной человек на земле\nОстальные комики могут уходить на пенсию",
    difficulty: "hard",
    words: [
        { id: "w299_1", en: "achieved", ru: "достиг, добился" },
        { id: "w299_2", en: "funniest", ru: "самый смешной" },
        { id: "w299_3", en: "alive", ru: "живой, на земле" },
        { id: "w299_4", en: "retire", ru: "уходить на пенсию" },
        { id: "w299_5", en: "comedians", ru: "комики, комедианты" }
    ]
},
{
    id: 300,
    image: BASE3 + "hmm/Feels good.jpg",
    text: "Me after i got meme number 300:\nI am great",
    translation: "Я после того как мне попался мем номер 300:\nЯ великолепен",
    difficulty: "easy",
    words: [
        { id: "w300_1", en: "got", ru: "попался" },
        { id: "w300_2", en: "after", ru: "после" },
        { id: "w300_3", en: "great", ru: "великолепен" },
        { id: "w300_4", en: "number", ru: "число,номер" },
    ]
}
];
