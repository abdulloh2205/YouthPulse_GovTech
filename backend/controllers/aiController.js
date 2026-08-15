require('dotenv').config();

const SYSTEM_PROMPT = `
Sen O'zbekiston Toshkent shahri Mirzo Ulug'bek tumani yoshlar bandligi
bo'yicha malakali AI-konsultantsan (AI-Yordamchi).

Vazifang:
- Mahalla xodimlari va tuman hokimiyati mutaxassislariga yoshlar bandligini
  monitoring qilishda, hisobot tayyorlashda, NEET yoshlarni aniqlashda
  va tegishli qo'llab-quvvatlash choralarini rejalashtishda yordam berish.
- Yoshlarning bandlik holati, yo'naltirish dasturlari, kasb-hunar markazlari,
  mehnat qonunchiligiga oid savollarni professional darajada javoblash.
- Foydalanuvchi o'zbek tilida murojaat qilsa — o'zbek tilida javob ber.
  Rus tilida murojaat qilsa — rus tilida javob ber.

Muhim cheklovlar:
- Hech qachon real shaxsiy ma'lumotlarni so'rama yoki saqlama.
- Tizim tomonidan "NEET" yoki "xavf guruhi" belgilashlar faqat
  tavsiya sifatida qabul qilinadi, yakuniy qaror faqat mas'ul xodim tomonidan.
- Javoblarni qisqa, aniq va amaliy qil. Keraksiz uzun tushuntirishlardan qoch.
- Foydalanuvchi roli (mahalla_worker yoki district_admin) asosida
  javob chuqurligini moslashtir.
`.trim();

const mockResponses = {
  uz: {
    greeting: [
      "Assalomu alaykum! Men YouthPulse AI-Yordamchiman. Yoshlar bandligi bo'yicha savollaringizga javob berishga tayyorman. Nima yordam qila olaman?",
      "Salom! Mahalla va tuman darajasidagi yoshlar bandligini monitoring qilishda yordam berishga tayyorman. Savol bering.",
    ],
    neet: [
      `NEET (Not in Education, Employment, or Training) yoshlarni aniqlash uchun quyidagi belgilarga e'tibor bering:\n\n` +
      `• 3 oydan ortiq ta'lim, ish yoki o'qishdan tashqarida qolgan yoshlar\n` +
      `• Oxirgi holat yangilanishi 6 oydan eski bo'lganlar\n` +
      `• Mehnat birjasida ro'yxatdan o'tmagan 16-30 yosh oralig'idagi yoshlar\n\n` +
      `Tizimda bunday yoshlar avtomatik "NEET" toifasiga o'tkaziladi va ular bilan manzilli ishlash tavsiya qilinadi. Siz qo'shimcha ma'lumot olishni xohlaysizmi?`,

      `Aniqlashtirish kerak bo'lgan NEET yoshlar uchun tashrif jadvalini tuzib, mahalla vakili bilan birgalikda uy tashrifi o'tkazish samarali usul hisoblanadi. Tashrifdan so'ng holat yangilanadi va tegishli yo'naltirish tavsiyasi beriladi.`,
    ],
    employment: [
      `Yoshlarni ish bilan ta'minlash uchun quyidagi yo'nalishlar mavjud:\n\n` +
      `🏢 **Mehnat birjasi** — Mirzo Ulug'bek tuman mehnat va aholi band qilish markazi\n` +
      `📚 **Kasb-hunar markazlari** — 3-6 oylik kasbiy ta'lim kurslari\n` +
      `💼 **Tadbirkorlik dasturlari** — Yosh tadbirkor granti (5-50 mln so'm)\n` +
      `🎓 **Kadrlar qayta tayyorlash** — IT, tibbiyot, qurilish sohalari\n\n` +
      `Qaysi yo'nalish bo'yicha batafsil ma'lumot kerak?`,
    ],
    stats: [
      `Joriy ko'rsatkichlar bo'yicha: tizimda 25 ta yosh ro'yxatdan o'tgan. Shundan:\n` +
      `• Ishlamoqda: 9 ta (36%)\n• Ishsiz: 4 ta (16%)\n• Ta'limda: 5 ta (20%)\n` +
      `• Tadbirkor: 4 ta (16%)\n• NEET: 3 ta (12%)\n` +
      `\nE'tibor talab qiluvchi: 3 ta NEET yosh va 3 ta aniqlashtirish kerak bo'lgan holat mavjud.`,
    ],
    support: [
      `Yo'naltirish mexanizmi quyidagicha ishlaydi:\n\n` +
      `1️⃣ Yoshning joriy holatini tanlang (ishsiz, NEET va h.k.)\n` +
      `2️⃣ Tizim avtomatik mos dasturlarni tavsiya qiladi\n` +
      `3️⃣ Mas'ul xodim tavsiyani ko'rib chiqadi va tasdiqlaydi\n` +
      `4️⃣ Yo'naltirish amalga oshirilgach, holat yangilanadi va tarixga qo'shiladi\n\n` +
      `Har bir yosh faqat uning holatiga mos dasturga yo'naltirilishi kerak.`,
    ],
    mahalla: [
      `Mahalla darajasida monitoring uchun:\n\n` +
      `• Har oyda kamida bir marta ma'lumotlarni yangilang\n` +
      `• "Aniqlashtirish kerak" toifasidagi yoshlarga 2 hafta ichida murojaat qiling\n` +
      `• NEET yoshlar bilan shaxsiy suhbat o'tkazing va psixologik yordam tavsiya qiling\n` +
      `• Har chorakda tuman hokimiyatiga hisobot taqdim eting\n\n` +
      `Yordam kerakmi?`,
    ],
    default: [
      `Savolingizni tushundim. Yoshlar bandligi monitoringi tizimi bo'yicha quyidagi mavzularda yordam bera olaman:\n\n` +
      `• NEET yoshlarni aniqlash va ularga yordam\n` +
      `• Bandlik holati bo'yicha statistika\n` +
      `• Yo'naltirish mexanizmlari\n` +
      `• Mehnat birjasi va kasb-hunar markazlari\n` +
      `• Hisobot tayyorlash\n\n` +
      `Qaysi mavzu bo'yicha batafsil ma'lumot kerak?`,
    ],
  },
  ru: {
    greeting: [
      "Здравствуйте! Я AI-помощник системы YouthPulse. Готов отвечать на вопросы по мониторингу занятости молодёжи. Чем могу помочь?",
    ],
    neet: [
      `Молодёжь NEET (не занятая ни работой, ни учёбой) выявляется по следующим критериям:\n\n` +
      `• Более 3 месяцев вне образования, работы или обучения\n` +
      `• Дата последнего обновления статуса — более 6 месяцев назад\n` +
      `• Не зарегистрированы в службе занятости (возраст 16–30 лет)\n\n` +
      `Система автоматически присваивает статус "NEET" и рекомендует адресную работу с такими лицами.`,
    ],
    employment: [
      `Для трудоустройства молодёжи доступны следующие направления:\n\n` +
      `🏢 **Центр занятости** — районный центр труда и содействия занятости\n` +
      `📚 **Центры профобучения** — курсы длительностью 3–6 месяцев\n` +
      `💼 **Программы предпринимательства** — грант для молодых предпринимателей\n` +
      `🎓 **Переподготовка** — IT, медицина, строительство\n\n` +
      `По какому направлению нужна подробная информация?`,
    ],
    stats: [
      `Текущие показатели: в системе зарегистрировано 25 молодых людей. Из них:\n` +
      `• Трудоустроены: 9 (36%)\n• Безработные: 4 (16%)\n• Учатся: 5 (20%)\n` +
      `• Предприниматели: 4 (16%)\n• NEET: 3 (12%)\n` +
      `\nТребуют внимания: 3 NEET и 3 случая, требующих уточнения.`,
    ],
    support: [
      `Механизм направления работает следующим образом:\n\n` +
      `1️⃣ Выберите текущий статус молодого человека\n` +
      `2️⃣ Система предложит подходящие программы поддержки\n` +
      `3️⃣ Ответственный сотрудник рассматривает и подтверждает направление\n` +
      `4️⃣ После направления статус обновляется и фиксируется в истории`,
    ],
    default: [
      `Понял ваш вопрос. Могу помочь по следующим темам:\n\n` +
      `• Выявление и работа с молодёжью NEET\n` +
      `• Статистика занятости\n` +
      `• Механизмы направления на поддержку\n` +
      `• Центры занятости и профобучения\n` +
      `• Подготовка отчётов\n\n` +
      `По какой теме нужна подробная информация?`,
    ],
  },
};

function detectLanguage(text) {
  const ruPattern = /[а-яё]/i;
  return ruPattern.test(text) ? 'ru' : 'uz';
}

function selectMockResponse(message, lang) {
  const lower = message.toLowerCase();
  const pool = mockResponses[lang] || mockResponses.uz;

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  if (/salom|assalomu|hello|hi|здравствуй|привет/i.test(lower)) return pick(pool.greeting || pool.default);
  if (/neet|ta'lim.*tashqari|ishsiz.*yosh|безработн|не занят/i.test(lower)) return pick(pool.neet || pool.default);
  if (/ish.*joyla|bandlik|trudo|занятост|mehnat birja|ishsiz|безработ/i.test(lower)) return pick(pool.employment || pool.default);
  if (/statistik|ko'rsatk|stat|hisobot|отчёт|показател/i.test(lower)) return pick(pool.stats || pool.default);
  if (/yo'naltir|yordam|dastur|qo'llab|поддержк|направлен/i.test(lower)) return pick(pool.support || pool.default);
  if (/mahalla|tuman|hudud|район|территор/i.test(lower)) return pick(pool.mahalla || pool.default);

  return pick(pool.default);
}

async function getMockResponse(message, userRole, contextData) {
  const lang = detectLanguage(message);

  await new Promise((r) => setTimeout(r, 500 + Math.random() * 1000));

  const responseText = selectMockResponse(message, lang);

  return {
    success: true,
    mode: 'mock',
    message: responseText,
    lang,
    metadata: {
      userRole,
      timestamp: new Date().toISOString(),
      contextDataReceived: !!contextData,
    },
  };
}

async function getGeminiResponse(message, userRole, contextData) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    throw new Error('GEMINI_API_KEY .env faylida to\'g\'ri sozlanmagan');
  }

  const contextStr = contextData
    ? `\n\nTizim kontekst ma'lumotlari:\n${JSON.stringify(contextData, null, 2)}`
    : '';

  const payload = {
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: `${SYSTEM_PROMPT}\n\nFoydalanuvchi roli: ${userRole}${contextStr}\n\nFoydalanuvchi savoli: ${message}`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
    },
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`Gemini API xatosi: ${response.status} — ${errBody}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

  return {
    success: true,
    mode: 'gemini',
    message: text,
    metadata: { userRole, timestamp: new Date().toISOString() },
  };
}

async function getOllamaResponse(message, userRole, contextData) {
  const baseUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
  const model = process.env.OLLAMA_MODEL || 'llama3.2';

  const contextStr = contextData
    ? `\nContext: ${JSON.stringify(contextData)}`
    : '';

  const payload = {
    model,
    prompt: `${SYSTEM_PROMPT}\n\nUser role: ${userRole}${contextStr}\n\nUser: ${message}\n\nAssistant:`,
    stream: false,
  };

  const response = await fetch(`${baseUrl}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Ollama xatosi: ${response.status}`);
  }

  const data = await response.json();

  return {
    success: true,
    mode: 'ollama',
    message: data.response || '',
    metadata: { userRole, model, timestamp: new Date().toISOString() },
  };
}

async function handleAiChat(req, res) {
  try {
    const { message, userRole = 'mahalla_worker', contextData = null } = req.body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ success: false, error: 'message maydoni bo\'sh bo\'lmasligi kerak' });
    }

    if (message.trim().length > 2000) {
      return res.status(400).json({ success: false, error: 'Xabar 2000 belgidan oshmasligi kerak' });
    }

    const aiMode = (process.env.AI_MODE || 'mock').toLowerCase();
    let result;

    switch (aiMode) {
      case 'gemini':
        result = await getGeminiResponse(message, userRole, contextData);
        break;
      case 'ollama':
        result = await getOllamaResponse(message, userRole, contextData);
        break;
      case 'mock':
      default:
        result = await getMockResponse(message, userRole, contextData);
        break;
    }

    return res.json(result);
  } catch (error) {
    console.error('[AI Controller Error]', error.message);
    return res.status(500).json({
      success: false,
      error: 'AI xizmati vaqtincha ishlamayapti. Keyinroq urinib ko\'ring.',
      detail: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

module.exports = { handleAiChat, SYSTEM_PROMPT };

