const MOCK_YOUTH_DATA = [
  { id: "Y001", fullName: "Azimov Sardor", age: 22, mahalla: "Yangi hayot", status: "employed", gender: "male", occupation: "Frontend Dasturchi", education: "TATU", lastUpdated: "2026-08-14", needsSupport: false },
  { id: "Y002", fullName: "Nazarova Madina", age: 19, mahalla: "Bog'ishamol", status: "neet", gender: "female", occupation: "", education: "O'rta", needsSupport: true, supportTypes: ["employment"], history: [], lastUpdated: "2026-08-10" },
  { id: "Y003", fullName: "Tolipov Jasur", age: 24, mahalla: "Universitet", status: "entrepreneurship", gender: "male", occupation: "Tadbirkor", education: "O'rta maxsus", lastUpdated: "2026-08-12", needsSupport: false },
  { id: "Y004", fullName: "Rahimova Shahnoza", age: 21, mahalla: "Do'stlik", status: "education", gender: "female", occupation: "Talaba", education: "TDIU", lastUpdated: "2026-08-11", needsSupport: false },
  { id: "Y005", fullName: "Qosimov Alisher", age: 20, mahalla: "Zarnigor", status: "unemployed", gender: "male", occupation: "", education: "O'rta", needsSupport: true, supportTypes: ["vocational"], history: [], lastUpdated: "2026-08-09" },
  { id: "Y006", fullName: "Ahmedov Sanjar", age: 23, mahalla: "Qo'yliq", status: "employed", gender: "male", occupation: "Marketolog", education: "Oliy", lastUpdated: "2026-08-13", needsSupport: false },
  { id: "Y007", fullName: "Karimova Ziyoda", age: 18, mahalla: "Olmazar", status: "needs_clarification", gender: "female", occupation: "", education: "O'rta", needsSupport: true, supportTypes: ["clarification"], history: [], lastUpdated: "2026-08-08" },
  { id: "Y008", fullName: "Rustamov Doston", age: 25, mahalla: "Yangi hayot", status: "neet", gender: "male", occupation: "", education: "O'rta maxsus", needsSupport: true, supportTypes: ["psychological", "employment"], history: [], lastUpdated: "2026-08-07" },
  { id: "Y009", fullName: "Salimova Nargiza", age: 22, mahalla: "Bog'ishamol", status: "education", gender: "female", occupation: "Magistrant", education: "Oliy", lastUpdated: "2026-08-15", needsSupport: false },
  { id: "Y010", fullName: "Olimov Bekzod", age: 21, mahalla: "Universitet", status: "unemployed", gender: "male", occupation: "", education: "O'rta", needsSupport: true, supportTypes: ["vocational"], history: [], lastUpdated: "2026-08-05" },
  { id: "Y011", fullName: "Jalolova Malika", age: 24, mahalla: "Do'stlik", status: "employed", gender: "female", occupation: "O'qituvchi", education: "Oliy", lastUpdated: "2026-08-14", needsSupport: false },
  { id: "Y012", fullName: "Tursunov Akmal", age: 19, mahalla: "Zarnigor", status: "entrepreneurship", gender: "male", occupation: "Sartarosh", education: "O'rta", lastUpdated: "2026-08-12", needsSupport: false },
  { id: "Y013", fullName: "Ismoilova Sevara", age: 20, mahalla: "Qo'yliq", status: "education", gender: "female", occupation: "Talaba", education: "TTA", lastUpdated: "2026-08-11", needsSupport: false },
  { id: "Y014", fullName: "Shukurov Anvar", age: 23, mahalla: "Olmazar", status: "neet", gender: "male", occupation: "", education: "O'rta", needsSupport: true, supportTypes: ["employment"], history: [], lastUpdated: "2026-08-06" },
  { id: "Y015", fullName: "Xalilova Iroda", age: 25, mahalla: "Yangi hayot", status: "employed", gender: "female", occupation: "Hamshira", education: "O'rta maxsus", lastUpdated: "2026-08-13", needsSupport: false },
  { id: "Y016", fullName: "Bo'riyev Shohrux", age: 22, mahalla: "Bog'ishamol", status: "needs_clarification", gender: "male", occupation: "", education: "O'rta", needsSupport: true, supportTypes: ["clarification"], history: [], lastUpdated: "2026-08-09" },
  { id: "Y017", fullName: "Qudratova Nilufar", age: 21, mahalla: "Universitet", status: "education", gender: "female", occupation: "Talaba", education: "O'zMU", lastUpdated: "2026-08-15", needsSupport: false },
  { id: "Y018", fullName: "Murodov Ilhom", age: 24, mahalla: "Do'stlik", status: "unemployed", gender: "male", occupation: "", education: "Oliy", needsSupport: true, supportTypes: ["employment"], history: [], lastUpdated: "2026-08-10" },
  { id: "Y019", fullName: "Zokirova Asal", age: 18, mahalla: "Zarnigor", status: "neet", gender: "female", occupation: "", education: "O'rta", needsSupport: true, supportTypes: ["vocational"], history: [], lastUpdated: "2026-08-08" },
  { id: "Y020", fullName: "Umarov Farhod", age: 25, mahalla: "Qo'yliq", status: "entrepreneurship", gender: "male", occupation: "Savdo do'koni", education: "O'rta maxsus", lastUpdated: "2026-08-14", needsSupport: false },
  { id: "Y021", fullName: "Rasulova Gulnoza", age: 20, mahalla: "Olmazar", status: "education", gender: "female", occupation: "Talaba", education: "JIDU", lastUpdated: "2026-08-12", needsSupport: false },
  { id: "Y022", fullName: "Norov Temur", age: 23, mahalla: "Yangi hayot", status: "employed", gender: "male", occupation: "Muhandis", education: "Oliy", lastUpdated: "2026-08-11", needsSupport: false },
  { id: "Y023", fullName: "Ergasheva Laylo", age: 22, mahalla: "Bog'ishamol", status: "unemployed", gender: "female", occupation: "", education: "O'rta maxsus", needsSupport: true, supportTypes: ["vocational"], history: [], lastUpdated: "2026-08-07" },
  { id: "Y024", fullName: "Jo'rayev Aziz", age: 19, mahalla: "Universitet", status: "neet", gender: "male", occupation: "", education: "O'rta", needsSupport: true, supportTypes: ["psychological"], history: [], lastUpdated: "2026-08-06" },
  { id: "Y025", fullName: "Yo'ldosheva Kamola", age: 24, mahalla: "Do'stlik", status: "employed", gender: "female", occupation: "Hisobchi", education: "Oliy", lastUpdated: "2026-08-15", needsSupport: false }
];

const MOCK_MAHALLAS = [
  { name: "Yangi hayot", total: 45, neetCount: 5 },
  { name: "Bog'ishamol", total: 30, neetCount: 3 },
  { name: "Universitet", total: 25, neetCount: 2 },
  { name: "Do'stlik", total: 25, neetCount: 5 },
  { name: "Zarnigor", total: 40, neetCount: 15 },
  { name: "Qo'yliq", total: 35, neetCount: 1 },
  { name: "Olmazar", total: 50, neetCount: 8 }
];

const i18n = {
  uz: {
    nav_dashboard:       "Bosh sahifa",
    nav_youth:           "Yoshlar ro'yxati",
    nav_map:             "Xarita",
    nav_neet:            "Ishsiz / Diqqat",
    nav_referrals:       "Yo'naltirishlar",
    logout:              "Chiqish",
    district_name:       "Mirzo Ulug'bek tumani",
    stat_total:          "Jami yoshlar",
    stat_employed:       "Ishlamoqda",
    stat_unemployed:     "Ishsiz",
    stat_education:      "Ta'limda",
    stat_entrepreneurship: "Tadbirkor",
    mahalla_overview:    "Mahallalar bo'yicha ko'rinish",
    all_mahallas:        "Barcha mahallalar",
    all_statuses:        "Barcha holatlar",
    all_genders:         "Barcha",
    male:                "Erkak",
    female:              "Ayol",
    status_employed:     "Ishlamoqda",
    status_unemployed:   "Ishsiz",
    status_education:    "Ta'limda",
    status_entrepreneurship: "Tadbirkor",
    status_neet:         "Ishsiz",
    status_clarification:"Aniqlashtirish kerak",
    needs_support_filter:"Yordam kerak",
    reset_filters:       "Tozalash",
    total_results:       "Natija:",
    col_id:              "ID",
    col_name:            "F.I.Sh.",
    col_profession:      "Kasb / O'qish",
    col_age:             "Yosh",
    col_mahalla:         "Mahalla",
    col_status:          "Holat",
    col_updated:         "Yangilangan",
    col_actions:         "Amallar",
    btn_view:            "Ko'rish",
    btn_refer:           "Yo'naltirish",
    pagination_of:       "dan",
    pagination_page:     "Sahifa",
    neet_title:          "Ishsiz va Diqqat Talab Etuvchi Yoshlar",
    neet_subtitle:       "Aniqlashtirish va manzilli ishlash tavsiya qilinadi",
    referrals_title:     "Yo'naltirish Mexanizmi",
    ai_name:             "AI-Yordamchi",
    ai_status:           "Faol · Yoshlar bandligi bo'yicha maslahat",
    modal_history:       "Holat Tarixi",
    modal_support:       "Tavsiya Etiladigan Yordam",
    modal_close:         "Yopish",
    role_mahalla_label:  "Mahalla xodimi",
    role_district_label: "Tuman hokimiyati",
    support_employment:  "Mehnat birjasiga yo'naltirish",
    support_vocational:  "Kasb-hunar markaziga yo'naltirish",
    support_education:   "Ta'limga qaytish",
    support_entrepreneurship: "Tadbirkorlik dasturi",
    support_psychological: "Psixologik yordam",
    support_clarification: "Uy tashrifi / Aniqlashtirish",
    no_data:             "Ma'lumot topilmadi",
    loading_error:       "Ma'lumotlarni yuklab bo'lmadi. Backend serverini tekshiring.",
    needs_support_yes:   "Ha",
    needs_support_no:    "Yo'q",
    needs_support_badge: "Yordam",
    map_loading:         "Xarita yuklanmoqda...",
    search_placeholder:  "Qidirish...",
    govtech_title:       "GovTech Platformasi",
    govtech_desc:        "Barcha ma'lumotlar real vaqt rejimida yangilanadi va xavfsiz saqlanadi.",
    col_ai_risk:         "AI Xavf",
    risk_label:          "Xavf",
    ai_analysis_title:   "AI-Tahlil va Tavsiya",
    geo_grid_title:      "Hududlar bo'yicha tahlil",
    geo_grid_subtitle:   "Mahallalar kesimida ishsizlik va bandlik holati",
    filter_all_zones:    "Barchasi",
    filter_red_zone:     "Qizil hudud",
    filter_yellow_zone:  "Sariq hudud",
    filter_green_zone:   "Yashil hudud",
  },
  ru: {
    nav_dashboard:       "Главная",
    nav_youth:           "Список молодёжи",
    nav_map:             "Карта",
    nav_neet:            "Безработные / Внимание",
    nav_referrals:       "Направления",
    logout:              "Выйти",
    district_name:       "Район Мирзо Улугбека",
    stat_total:          "Всего молодёжи",
    stat_employed:       "Работает",
    stat_unemployed:     "Безработный",
    stat_education:      "Учится",
    stat_entrepreneurship: "Предприниматель",
    mahalla_overview:    "Показатели по махаллям",
    all_mahallas:        "Все махалли",
    all_statuses:        "Все статусы",
    all_genders:         "Все",
    male:                "Мужской",
    female:              "Женский",
    status_employed:     "Работает",
    status_unemployed:   "Безработный",
    status_education:    "Учится",
    status_entrepreneurship: "Предприниматель",
    status_neet:         "Безработный",
    status_clarification:"Требует уточнения",
    needs_support_filter:"Нужна поддержка",
    reset_filters:       "Сбросить",
    total_results:       "Результатов:",
    col_id:              "ID",
    col_name:            "ФИО",
    col_profession:      "Профессия / Учёба",
    col_age:             "Возраст",
    col_mahalla:         "Махалля",
    col_status:          "Статус",
    col_updated:         "Обновлено",
    col_actions:         "Действия",
    btn_view:            "Просмотр",
    btn_refer:           "Направить",
    pagination_of:       "из",
    pagination_page:     "Страница",
    neet_title:          "Безработные и молодёжь, требующая внимания",
    neet_subtitle:       "Рекомендуется уточнение и адресная работа",
    referrals_title:     "Механизм направления",
    ai_name:             "AI-Консультант",
    ai_status:           "Активен · Консультации по занятости",
    modal_history:       "История статусов",
    modal_support:       "Рекомендуемая поддержка",
    modal_close:         "Закрыть",
    role_mahalla_label:  "Сотрудник махалли",
    role_district_label: "Хокимият района",
    support_employment:  "Направление в центр занятости",
    support_vocational:  "Профессиональное обучение",
    support_education:   "Возврат к образованию",
    support_entrepreneurship: "Программа предпринимательства",
    support_psychological: "Психологическая помощь",
    support_clarification: "Визит / Уточнение данных",
    no_data:             "Данные не найдены",
    loading_error:       "Не удалось загрузить данные. Проверьте backend сервер.",
    needs_support_yes:   "Да",
    needs_support_no:    "Нет",
    needs_support_badge: "Помощь",
    map_loading:         "Загрузка карты...",
    search_placeholder:  "Поиск...",
    govtech_title:       "Платформа GovTech",
    govtech_desc:        "Все данные обновляются в реальном времени и надежно защищены.",
    col_ai_risk:         "Риск NEET",
    risk_label:          "Риск",
    ai_analysis_title:   "AI-Анализ и Рекомендация",
    geo_grid_title:      "Анализ по территориям",
    geo_grid_subtitle:   "Статус безработицы и занятости в разрезе махаллей",
    filter_all_zones:    "Все",
    filter_red_zone:     "Красная зона",
    filter_yellow_zone:  "Желтая зона",
    filter_green_zone:   "Зеленая зона",
  },
};

const STATUS_CONFIG = {
  employed:          { uz: 'Ishlamoqda',         ru: 'Работает',         badge: 'badge-employed',         dot: '#10b981' },
  unemployed:        { uz: 'Ishsiz',              ru: 'Безработный',      badge: 'badge-unemployed',       dot: '#ef4444' },
  education:         { uz: "Ta'limda",            ru: 'Учится',           badge: 'badge-education',        dot: '#06b6d4' },
  entrepreneurship:  { uz: 'Tadbirkor',           ru: 'Предприниматель',  badge: 'badge-entrepreneurship', dot: '#f59e0b' },
  neet:              { uz: 'Ishsiz',              ru: 'Безработный',      badge: 'badge-neet',             dot: '#7c3aed' },
  needs_clarification: { uz: 'Aniqlashtirish',   ru: 'Уточнение',        badge: 'badge-needs_clarification', dot: '#64748b' },
};

const SUPPORT_LABELS = {
  employment:      { uz: 'Mehnat birjasi',          ru: 'Центр занятости' },
  vocational:      { uz: 'Kasb-hunar markazi',      ru: 'Профобучение' },
  education:       { uz: "Ta'limga qaytish",        ru: 'Возврат к образованию' },
  entrepreneurship:{ uz: 'Tadbirkorlik',             ru: 'Предпринимательство' },
  psychological:   { uz: 'Psixologik yordam',        ru: 'Психологическая помощь' },
  clarification:   { uz: "Uy tashrifi",              ru: 'Визит / Уточнение' },
};

const MAHALLA_RU = {
  "Yangi hayot": "Янги ҳаёт",
  "Bog'ishamol": "Боғишамол",
  "Universitet": "Университет",
  "Do'stlik": "Дўстлик",
  "Zarnigor": "Зарнигор",
  "Qo'yliq": "Қўйлиқ",
  "Olmazar": "Олмазор"
};

const OCCUPATION_RU = {
  "Frontend Dasturchi": "Frontend Разработчик",
  "Tadbirkor": "Предприниматель",
  "Talaba": "Студент",
  "Dasturchi — TechSoft MChJ": "Программист — ООО TechSoft",
  "Meva-sabzavot savdosi — shaxsiy tadbirkorlik": "Торговля овощами и фруктами — ИП",
  "Elektr ustasi — Qurilish+ AJ": "Электрик — АО Qurilish+",
  "Oshpaz — \"Milliy taomlar\" kafesi": "Повар — кафе \"Milliy taomlar\"",
  "Sartarosh — \"Beauty\" saloni": "Парикмахер — салон \"Beauty\"",
  "Avtomexanik — \"AvtoTez\" xizmati": "Автомеханик — сервис \"AvtoTez\"",
  "Bozor sotuvchisi — \"Chorsu\" bozori": "Продавец — рынок \"Чорсу\""
};

function transliterateUzToRu(text) {
  if (!text) return '';
  const map = {
    "sh": "ш", "ch": "ч", "o'": "ў", "g'": "ғ", "yo": "ё", "ya": "я", "yu": "ю", "ts": "ц", "yev": "ев", "yeva": "ева",
    "Sh": "Ш", "Ch": "Ч", "O'": "Ў", "G'": "Ғ", "Yo": "Ё", "Ya": "Я", "Yu": "Ю", "Ts": "Ц", "Yev": "Ев", "Yeva": "Ева",
    "a": "а", "b": "б", "d": "д", "e": "е", "f": "ф", "g": "г", "h": "ҳ", "x": "х", "i": "и", "j": "ж",
    "k": "к", "l": "л", "m": "м", "n": "н", "o": "о", "p": "п", "q": "қ", "r": "р", "s": "с", "t": "т",
    "u": "у", "v": "в", "y": "й", "z": "з",
    "A": "А", "B": "Б", "D": "Д", "E": "Е", "F": "Ф", "G": "Г", "H": "Ҳ", "X": "Х", "I": "И", "J": "Ж",
    "K": "К", "L": "Л", "M": "М", "N": "Н", "O": "О", "P": "П", "Q": "Қ", "R": "Р", "S": "С", "T": "Т",
    "U": "У", "V": "В", "Y": "Й", "Z": "З", "'": "ъ"
  };
  let res = text;
  ["yeva", "Yeva", "yev", "Yev", "sh", "ch", "o'", "g'", "yo", "ya", "yu", "ts", "Sh", "Ch", "O'", "G'", "Yo", "Ya", "Yu", "Ts"].forEach(k => {
    res = res.replaceAll(k, map[k]);
  });
  return res.split('').map(c => map[c] || c).join('');
}

const state = {
  lang: 'uz',
  session: null,
  stats: null,
  youthData: [],
  mahallas: [],
  filters: { mahalla: '', status: '', gender: '', needsSupport: false, search: '' },
  pagination: { page: 1, limit: 10, total: 0, totalPages: 1 },
  currentSection: 'dashboard',
  mapInstance: null,
  mapInitialized: false,
};

const UZ_TO_RU_WORDS = {
  "Oliy": "Высшее",
  "O'rta maxsus": "Среднее специальное",
  "O'rta": "Среднее",
  "kurs": "курс",
  "Jurnalistika": "Журналистика",
  "Filologiya": "Филология",
  "Iqtisodiyot": "Экономика",
  "Qurilish texnikumi": "Строительный техникум",
  "Elektrotexnika KHM": "ПТЦ Электротехники",
  "Umumta'lim maktabi": "Общеобразовательная школа",
  "NUUz": "НУУз",
  "TDIU": "ТГЭУ",
  "TATU": "ТУИТ",
  "bitiruvchi": "выпускник",
  "Universitetni tamomlab, media sohasida ish qidirmoqda": "Окончив университет, ищет работу в сфере медиа",
  "Universitetni tamomlab, ishsiz qoldi": "Окончив университет, остался безработным",
  "TechSoft MChJga dasturchi sifatida ishga kirdi": "Устроился разработчиком в ООО TechSoft",
  "NUUzga qabul qilindi": "Принят в НУУз",
  "Texnikumni tamomlab, qurilish sohasida ish qidirmoqda": "Окончив техникум, ищет работу в сфере строительства",
  "Mehnat birjasida ro'yxatdan o'tdi, hali joylashmadi": "Зарегистрирован на бирже труда, пока не трудоустроен",
  "Maktabni tamomlab ishsiz qoldi": "Окончив школу, остался безработным",
  "Tadbirkorlik grantini oldi, bozorda savdo boshladi": "Получил грант на предпринимательство, начал торговлю на рынке",
  "Maktabni tamomlab, ta'lim yoki ishga kirmadi": "Окончив школу, никуда не поступил и не работает",
  "Texnikumga kirdi": "Поступил в техникум",
  "Texnikumdan chiqdi, hech qanday faoliyat yo'q": "Отчислен из техникума, никакой деятельности",
  "TDIU iqtisodiyot fakultetiga qabul qilindi": "Принят на экономический факультет ТГЭУ",
  "KHM ni tamomlab elektr ustasi bo'lib ishga kirdi": "Окончив ПТЦ, устроился мастером-электриком",
  "Bir nechta murojaat qilindi, hali joylashmadi": "Было несколько обращений, пока не трудоустроен"
};

function translateUzToRuDict(text) {
  if (!text) return text;
  if (UZ_TO_RU_WORDS[text]) return UZ_TO_RU_WORDS[text];
  
  let result = text;
  for (const [uz, ru] of Object.entries(UZ_TO_RU_WORDS)) {
    result = result.replace(new RegExp(uz, 'g'), ru);
  }
  return result;
}

function t(key) {
  return (i18n[state.lang] || i18n.uz)[key] || key;
}

function statusLabel(status) {
  return STATUS_CONFIG[status]?.[state.lang] || status;
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  try {
    return new Date(dateStr).toLocaleDateString(state.lang === 'ru' ? 'ru-RU' : 'uz-UZ', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    });
  } catch { return dateStr; }
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[state.lang]?.[key];
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-opt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-opt');
    const val = i18n[state.lang]?.[key];
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = i18n[state.lang]?.[key];
    if (val) el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-mahalla]').forEach((el) => {
    const key = el.getAttribute('data-i18n-mahalla');
    if (state.lang === 'ru' && MAHALLA_RU[key]) {
      el.textContent = MAHALLA_RU[key];
    } else {
      el.textContent = key;
    }
  });

  document.documentElement.lang = state.lang === 'ru' ? 'ru' : 'uz';

  const titleEl = document.getElementById('page-title');
  if (titleEl) {
    const sectionKey = `nav_${state.currentSection}`;
    titleEl.textContent = t(sectionKey);
  }
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('yp_lang', lang);
  applyI18n();
  
  if (state.currentSection === 'youth') renderYouthTable();
  if (state.currentSection === 'map') renderGeoGrid();
  if (state.currentSection === 'neet') loadNeetSection();
  if (state.currentSection === 'referrals') renderReferralPrograms();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('yp_theme') === 'dark' ? 'dark' : 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('yp_theme', newTheme);
  applyTheme(newTheme);
}

window.setLang = setLang;
window.toggleTheme = toggleTheme;

function checkAuth() {
  try {
    state.session = JSON.parse(localStorage.getItem('yp_session') || 'null');
  } catch { state.session = null; }

  if (!state.session) {
    window.location.replace('login.html');
    return false;
  }
  return true;
}

function renderUserInfo() {
  const { fullName, role, mahalla, district } = state.session;

  const nameEl = document.getElementById('user-name');
  const roleEl = document.getElementById('user-role-label');
  const avatarEl = document.getElementById('user-avatar');

  if (nameEl) nameEl.textContent = fullName || 'Foydalanuvchi';
  if (roleEl) roleEl.textContent = role === 'mahalla_worker' ? t('role_mahalla_label') : t('role_district_label');
  if (avatarEl) avatarEl.textContent = (fullName || 'U').charAt(0).toUpperCase();
}

async function loadStats() {
  state.stats = { total: 125, employedCount: 65, unemployedCount: 20, neetCount: 15, educationCount: 15, entrepreneurshipCount: 10 };
  renderStats();
}

function renderStats() {
  if (!state.stats) return;
  const { total, employedCount, unemployedCount, neetCount, educationCount, entrepreneurshipCount } = state.stats;

  document.getElementById('stat-total')?.           setText ? null : setStatEl('stat-total', total);
  document.getElementById('stat-employed')?.        setText ? null : setStatEl('stat-employed', employedCount);
  document.getElementById('stat-unemployed')?.      setText ? null : setStatEl('stat-unemployed', unemployedCount);
  document.getElementById('stat-neet')?.            setText ? null : setStatEl('stat-neet', neetCount);
  document.getElementById('stat-education')?.       setText ? null : setStatEl('stat-education', educationCount);
  document.getElementById('stat-entrepreneurship')?.setText ? null : setStatEl('stat-entrepreneurship', entrepreneurshipCount);
}

function setStatEl(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? '—';
}

async function loadMahallas() {
  state.mahallas = MOCK_MAHALLAS;
  renderMahallaBars();
}

function renderMahallaBars() {
  const container = document.getElementById('mahalla-bars');
  if (!container) return;

  if (!state.mahallas.length) {
    container.innerHTML = `<p class="text-sm text-slate-500 text-center py-4">${t('no_data')}</p>`;
    return;
  }

  const maxTotal = Math.max(...state.mahallas.map((m) => m.total), 1);

  container.innerHTML = state.mahallas.map((m) => {
    const width = Math.round((m.total / maxTotal) * 100);
    const neetPct = m.total > 0 ? Math.round((m.neetCount / m.total) * 100) : 0;
    const mahallaName = state.lang === 'ru' ? (MAHALLA_RU[m.name] || m.name) : m.name;
    return `
      <div class="flex items-center gap-3">
        <div class="w-28 text-xs text-slate-400 truncate flex-shrink-0">${mahallaName}</div>
        <div class="flex-1 bg-white/5 rounded-full h-2.5 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
               style="width: ${width}%"></div>
        </div>
        <div class="w-6 text-xs text-slate-300 text-right font-semibold">${m.total}</div>
        ${m.neetCount > 0 ? `<span class="badge badge-neet text-[10px]">⚠ ${m.neetCount} ${statusLabel('neet')}</span>` : ''}
      </div>`;
  }).join('');
}

async function loadYouth() {
  let fallback = MOCK_YOUTH_DATA;
  if (state.filters.mahalla) fallback = fallback.filter(y => y.mahalla === state.filters.mahalla);
  if (state.filters.status) fallback = fallback.filter(y => y.status === state.filters.status);
  if (state.filters.gender) fallback = fallback.filter(y => y.gender === state.filters.gender);
  if (state.filters.needsSupport) fallback = fallback.filter(y => y.needsSupport);
  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    fallback = fallback.filter(y => y.fullName.toLowerCase().includes(q) || y.id.toLowerCase().includes(q));
  }
  
  state.pagination.total = fallback.length;
  state.pagination.totalPages = Math.ceil(fallback.length / state.pagination.limit) || 1;
  
  const start = (state.pagination.page - 1) * state.pagination.limit;
  state.youthData = fallback.slice(start, start + state.pagination.limit);
  
  renderYouthTable();
  renderPagination();
  const countEl = document.getElementById('result-count');
  if (countEl) countEl.textContent = state.pagination.total;
}

function renderYouthTable() {
  const tbody = document.getElementById('youth-table-body');
  if (!tbody) return;

  if (!state.youthData.length) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><div class="text-3xl mb-3">🔍</div><p class="text-sm">${t('no_data')}</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = state.youthData.map((y) => {
    const cfg = STATUS_CONFIG[y.status] || {};
    const needsClass = y.needsSupport ? 'needs-support-row' : '';
    const mahallaName = state.lang === 'ru' ? (MAHALLA_RU[y.mahalla] || y.mahalla) : y.mahalla;
    const fullName = state.lang === 'ru' ? transliterateUzToRu(y.fullName) : y.fullName;
    const rawOccupation = y.occupation || (state.lang === 'ru' ? 'Не указано' : "Ko'rsatilmagan");
    const occupationStr = state.lang === 'ru' ? (OCCUPATION_RU[rawOccupation] || transliterateUzToRu(rawOccupation)) : rawOccupation;
    return `
      <tr class="${needsClass}" data-id="${y.id}" tabindex="0" role="row" aria-label="${fullName}">
        <td class="text-slate-500 font-mono text-xs">${y.id}</td>
        <td>
          <div class="font-medium text-slate-800">${fullName}</div>
        </td>
        <td class="text-xs text-slate-600">
          ${occupationStr}
        </td>
        <td class="text-slate-700">${y.age}</td>
        <td class="text-slate-600 text-sm">${mahallaName}</td>
        <td>
          <div class="flex flex-col gap-1.5 items-start">
            <span class="badge ${cfg.badge || ''} inline-flex items-center justify-center min-w-[120px]">
              <span style="width:6px;height:6px;border-radius:50%;background:${cfg.dot || '#64748b'};display:inline-block;margin-right:6px;"></span>
              ${statusLabel(y.status)}
            </span>
            ${y.needsSupport ? `<span class="badge badge-neet text-[10px] inline-flex items-center justify-center min-w-[120px]">⚠ ${t('needs_support_badge')}</span>` : ''}
          </div>
        </td>
        <td class="text-center">
          <span class="inline-flex items-center justify-center px-2 py-1 rounded-md text-[10px] font-bold border border-slate-200 bg-slate-50 text-slate-700 whitespace-nowrap">
            ${window.calculateNeetRisk ? window.calculateNeetRisk(y) : 0}% ${t('risk_label')}
          </span>
        </td>
        <td class="text-slate-500 text-xs">${formatDate(y.lastUpdated)}</td>
        <td>
          <div class="flex gap-1.5">
            <button class="btn-action btn-view" onclick="openYouthModal('${y.id}')" aria-label="${fullName} ko'rish">
              ${t('btn_view')}
            </button>
            <button class="btn-action btn-refer" onclick="referYouth('${y.id}')" aria-label="${fullName} yo'naltirish">
              ${t('btn_refer')}
            </button>
          </div>
        </td>
      </tr>`;
  }).join('');

  tbody.querySelectorAll('tr[data-id]').forEach((row) => {
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openYouthModal(row.dataset.id);
    });
  });
}

function renderPagination() {
  const info = document.getElementById('pagination-info');
  const controls = document.getElementById('pagination-controls');
  if (!info || !controls) return;

  const { page, totalPages, total, limit } = state.pagination;
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  info.textContent = `${start}–${end} / ${total}`;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(`<button class="page-btn ${i === page ? 'active' : ''}" onclick="gotoPage(${i})" aria-label="${t('pagination_page')} ${i}" ${i === page ? 'aria-current="page"' : ''}>${i}</button>`);
  }
  controls.innerHTML = `
    <button class="page-btn" onclick="gotoPage(${page - 1})" ${page <= 1 ? 'disabled' : ''} aria-label="Oldingi">‹</button>
    ${pages.join('')}
    <button class="page-btn" onclick="gotoPage(${page + 1})" ${page >= totalPages ? 'disabled' : ''} aria-label="Keyingi">›</button>
  `;
}

window.gotoPage = (page) => {
  if (page < 1 || page > state.pagination.totalPages) return;
  state.pagination.page = page;
  loadYouth();
};

function openYouthModal(id) {
  const modal = document.getElementById('youth-modal');
  const content = document.getElementById('youth-modal-content');
  if (!modal || !content) return;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  try {
    const y = MOCK_YOUTH_DATA.find((item) => item.id === id);
    if (!y) throw new Error('Not found');
    const cfg = STATUS_CONFIG[y.status] || {};
    const supports = (y.supportTypes || []).map((s) => SUPPORT_LABELS[s]?.[state.lang] || s);
    const mahallaName = state.lang === 'ru' ? (MAHALLA_RU[y.mahalla] || y.mahalla) : y.mahalla;
    const fullName = state.lang === 'ru' ? transliterateUzToRu(y.fullName) : y.fullName;
    const rawOccupation = y.occupation || (state.lang === 'ru' ? 'Не указано' : "Ko'rsatilmagan");
    const occupationStr = state.lang === 'ru' ? (OCCUPATION_RU[rawOccupation] || transliterateUzToRu(rawOccupation)) : rawOccupation;

    content.innerHTML = `
      <div class="flex items-start justify-between mb-5">
        <div>
          <h2 class="text-xl font-bold text-slate-900">${fullName}</h2>
          <p class="text-sm text-slate-500 mt-0.5">${y.id} &bull; ${y.age} ${state.lang === 'ru' ? 'лет' : 'yosh'} &bull; ${y.gender === 'male' ? t('male') : t('female')}</p>
        </div>
        <span class="badge ${cfg.badge || ''} text-sm px-3 py-1">${statusLabel(y.status)}</span>
      </div>

      <div class="grid grid-cols-2 gap-3 mb-5 text-sm">
        <div>
          <span class="text-slate-400 text-xs uppercase tracking-wider">${t('col_mahalla')}</span>
          <p class="text-slate-800 font-medium mt-1">${mahallaName}</p>
        </div>
        <div>
          <span class="text-slate-400 text-xs uppercase tracking-wider">${state.lang === 'ru' ? 'Образование' : "Ta'lim"}</span>
          <p class="text-slate-800 font-medium mt-1">${state.lang === 'ru' ? translateUzToRuDict(y.education || '—') : (y.education || '—')}</p>
        </div>
        <div class="col-span-2">
          <span class="text-slate-400 text-xs uppercase tracking-wider">${state.lang === 'ru' ? 'Занятость' : 'Faoliyat'}</span>
          <p class="text-slate-800 font-medium mt-1">${occupationStr}</p>
        </div>
      </div>

      ${supports.length ? `
        <div class="mb-5">
          <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${t('modal_support')}</h3>
          <div class="flex flex-wrap gap-2">
            ${supports.map((s) => `<span class="badge badge-neet">${s}</span>`).join('')}
          </div>
        </div>` : ''}

      <div class="mb-5 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
        <h3 class="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span>✨</span> ${t('ai_analysis_title')}
        </h3>
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-slate-700 font-medium">${t('risk_label')}:</span>
          <span class="badge bg-white text-indigo-700 font-bold border-indigo-200 shadow-sm">${window.calculateNeetRisk ? window.calculateNeetRisk(y) : 0}%</span>
        </div>
        <p class="text-sm text-indigo-900 leading-relaxed font-medium">
          ${window.generateAiRecommendation ? window.generateAiRecommendation(y, state.lang) : ''}
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">${t('modal_history')}</h3>
        <div class="space-y-2">
          ${(y.history || []).map((h) => `
            <div class="history-item">
              <div class="history-dot" style="background:${STATUS_CONFIG[h.status]?.dot || '#94A3B8'}"></div>
              <div>
                <div class="text-xs text-slate-400">${formatDate(h.date)}</div>
                <div class="text-sm text-slate-700 font-semibold">${statusLabel(h.status)}</div>
                <div class="text-xs text-slate-500 mt-0.5">${state.lang === 'ru' ? translateUzToRuDict(h.note) : h.note}</div>
              </div>
            </div>`).join('') || '<p class="text-sm text-slate-400">Tarix yo\'q</p>'}
        </div>
      </div>

      <div class="flex gap-3 justify-end">
        <button class="btn-action btn-refer px-5 py-2" onclick="referYouth('${y.id}')">${t('btn_refer')}</button>
        <button class="btn-action btn-view px-5 py-2" onclick="closeModal()" >${t('modal_close')}</button>
      </div>
    `;
  } catch (err) {
    content.innerHTML = `<p class="text-red-400 text-sm">Xato: ${err.message}</p><button class="btn-action btn-view mt-4" onclick="closeModal()">${t('modal_close')}</button>`;
  }
}

function closeModal() {
  const modal = document.getElementById('youth-modal');
  if (modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
}

function referYouth(id) {
  const profile = state.youthData.find((y) => y.id === id);
  const name = profile?.fullName || id;
  alert(`${name} — yo'naltirish funksiyasi (keyingi versiyada)`);
}

window.openYouthModal = openYouthModal;
window.closeModal = closeModal;
window.closeYouthModal = closeModal;
window.referYouth = referYouth;

window.fetchYouthById = function(id) {
  openYouthModal(id);
};
window.viewYouth = window.fetchYouthById;

function loadNeetSection() {
  const container = document.getElementById('neet-list');
  if (!container) return;

  const neets = MOCK_YOUTH_DATA.filter(y => y.status === 'neet');
  const clarif = MOCK_YOUTH_DATA.filter(y => y.status === 'needs_clarification');
  const combined = [...neets, ...clarif];

  if (!combined.length) {
    container.innerHTML = `<div class="empty-state"><div class="text-3xl mb-3">✅</div><p class="text-sm text-slate-400">${t('no_data')}</p></div>`;
    return;
  }

  container.innerHTML = combined.map((y) => {
    const cfg = STATUS_CONFIG[y.status] || {};
    const supports = (y.supportTypes || []).map((s) => SUPPORT_LABELS[s]?.[state.lang] || s);
    const mahallaName = state.lang === 'ru' ? (MAHALLA_RU[y.mahalla] || y.mahalla) : y.mahalla;
    const fullName = state.lang === 'ru' ? transliterateUzToRu(y.fullName) : y.fullName;
    return `
      <div class="bg-white border border-slate-200 rounded-xl p-4 border-l-4 shadow-sm" style="border-left-color: ${cfg.dot || '#94A3B8'}">
        <div class="flex items-start justify-between">
          <div>
            <div class="font-semibold text-slate-800">${fullName}</div>
            <div class="text-xs text-slate-500 mt-0.5">${mahallaName} &bull; ${y.age} ${state.lang === 'ru' ? 'лет' : 'yosh'}</div>
          </div>
          <div class="flex gap-2 flex-shrink-0">
            <span class="badge ${cfg.badge}">${statusLabel(y.status)}</span>
            <button class="btn-action btn-view text-xs" onclick="openYouthModal('${y.id}')">
              ${t('btn_view')}
            </button>
          </div>
        </div>
        ${supports.length ? `<div class="flex flex-wrap gap-1.5 mt-3">${supports.map((s) => `<span class="badge badge-neet text-[10px]">${s}</span>`).join('')}</div>` : ''}
        <div class="text-xs text-slate-400 mt-2">${state.lang === 'ru' ? 'Последнее обновление:' : 'Oxirgi yangilanish:'} ${formatDate(y.lastUpdated)}</div>
      </div>`;
  }).join('');
}

function renderReferralPrograms() {
  const container = document.getElementById('referral-programs');
  if (!container) return;

  const programs = [
    { icon: '🏢', key: 'support_employment',       color: '#10b981' },
    { icon: '📚', key: 'support_vocational',        color: '#06b6d4' },
    { icon: '🎓', key: 'support_education',         color: '#4f46e5' },
    { icon: '💼', key: 'support_entrepreneurship',  color: '#f59e0b' },
    { icon: '🧠', key: 'support_psychological',     color: '#7c3aed' },
    { icon: '🔍', key: 'support_clarification',     color: '#64748b' },
  ];

  container.innerHTML = programs.map((p) => `
    <div class="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-sky-300 hover:shadow-md transition-all shadow-sm">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
           style="background: ${p.color}18; border: 1px solid ${p.color}35;">
        ${p.icon}
      </div>
      <div>
        <div class="font-semibold text-slate-800 text-sm">${t(p.key)}</div>
        <div class="text-xs text-slate-500 mt-0.5">${state.lang === 'ru' ? 'Нажмите для деталей' : 'Tafsilot uchun bosing'}</div>
      </div>
      <span class="ml-auto text-slate-400">›</span>
    </div>`).join('');
}

function renderGeoGrid(filterType = 'all') {
  const container = document.getElementById('geo-grid-container');
  if (!container) return;

  const getZone = (m) => {
    const neetPct = m.total > 0 ? (m.neetCount / m.total) * 100 : 0;
    if (neetPct >= 15) return 'red';
    if (neetPct >= 5) return 'yellow';
    return 'green';
  };

  const filtered = state.mahallas.filter(m => {
    if (filterType === 'all') return true;
    const zone = getZone(m);
    if (filterType === 'red') return zone === 'red';
    if (filterType === 'yellow') return zone === 'yellow';
    if (filterType === 'green') return zone === 'green';
    return true;
  });

  if (!filtered.length) {
    container.innerHTML = `<div class="col-span-full py-12 text-center text-slate-500">${t('no_data')}</div>`;
    return;
  }

  container.innerHTML = filtered.map(m => {
    const mahallaName = state.lang === 'ru' ? (MAHALLA_RU[m.name] || m.name) : m.name;
    const zone = getZone(m);
    
    let badgeHtml = '';
    let barColor = '';
    
    if (zone === 'red') {
      badgeHtml = `<span class="badge badge-unemployed">${state.lang === 'ru' ? 'Красная зона' : 'Qizil hudud'}</span>`;
      barColor = 'bg-rose-500';
    } else if (zone === 'yellow') {
      badgeHtml = `<span class="badge badge-entrepreneurship">${state.lang === 'ru' ? 'Желтая зона' : 'Sariq hudud'}</span>`;
      barColor = 'bg-amber-500';
    } else {
      badgeHtml = `<span class="badge badge-employed">${state.lang === 'ru' ? 'Зеленая зона' : 'Yashil hudud'}</span>`;
      barColor = 'bg-emerald-500';
    }

    const empCount = Math.max(0, m.total - m.neetCount - Math.floor(m.total * 0.1));
    const empPct = m.total > 0 ? Math.round((empCount / m.total) * 100) : 0;

    return `
      <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
        <div class="flex justify-between items-start mb-4">
          <h4 class="font-bold text-slate-800 text-lg">${mahallaName}</h4>
          ${badgeHtml}
        </div>
        
        <div class="mb-4">
          <div class="flex justify-between text-xs text-slate-500 mb-1.5 font-medium">
            <span>${state.lang === 'ru' ? 'Занятость' : 'Bandlik'}</span>
            <span>${empPct}%</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2">
            <div class="${barColor} h-2 rounded-full" style="width: ${empPct}%"></div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 mb-6">
          <div class="bg-slate-50 rounded-lg p-2 text-center border border-slate-100">
            <div class="text-xs text-slate-400 mb-0.5">${state.lang === 'ru' ? 'Всего' : 'Jami'}</div>
            <div class="font-bold text-slate-700">${m.total}</div>
          </div>
          <div class="bg-emerald-50 rounded-lg p-2 text-center border border-emerald-100">
            <div class="text-xs text-emerald-600/70 mb-0.5">${state.lang === 'ru' ? 'Работают' : 'Band'}</div>
            <div class="font-bold text-emerald-700">${empCount}</div>
          </div>
          <div class="bg-rose-50 rounded-lg p-2 text-center border border-rose-100">
            <div class="text-[11px] text-rose-600/70 mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">${state.lang === 'ru' ? 'Без работы' : 'Ishsiz'}</div>
            <div class="font-bold text-rose-700">${m.neetCount}</div>
          </div>
        </div>
        
        <button onclick="goToMahallaYouth('${m.name}')" class="mt-auto w-full py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-lg transition-colors border border-indigo-100">
          ${state.lang === 'ru' ? 'Показать молодежь' : "Yoshlarni ko'rish"}
        </button>
      </div>
    `;
  }).join('');
}

window.goToMahallaYouth = function(mahallaName) {
  state.filters.mahalla = mahallaName;
  const select = document.getElementById('filter-mahalla');
  if (select) select.value = mahallaName;
  state.pagination.page = 1;
  loadYouth();
  showSection('youth');
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.geo-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.geo-filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-slate-800', 'text-white', 'border-transparent');
        b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
      });
      e.target.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
      e.target.classList.add('active', 'bg-slate-800', 'text-white', 'border-transparent');
      renderGeoGrid(e.target.dataset.filter);
    });
  });
});

function showSection(section) {
  state.currentSection = section;

  ['dashboard', 'youth', 'map', 'neet', 'referrals'].forEach((s) => {
    const el = document.getElementById(`section-${s}`);
    if (el) el.classList.toggle('hidden', s !== section);
    const navEl = document.getElementById(`nav-${s}`);
    if (navEl) navEl.classList.toggle('active', s === section);
  });

  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = t(`nav_${section}`);

  if (section === 'map') renderGeoGrid();
  if (section === 'youth' && !state.youthData.length) loadYouth();
  if (section === 'neet') loadNeetSection();
  if (section === 'referrals') renderReferralPrograms();
}

function bindFilters() {
  const applyFilters = () => {
    state.filters.mahalla = document.getElementById('filter-mahalla')?.value || '';
    state.filters.status  = document.getElementById('filter-status')?.value || '';
    state.filters.gender  = document.getElementById('filter-gender')?.value || '';
    state.filters.needsSupport = document.getElementById('filter-needs-support')?.checked || false;
    state.pagination.page = 1;
    loadYouth();
  };

  ['filter-mahalla', 'filter-status', 'filter-gender'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', applyFilters);
  });

  const nsEl = document.getElementById('filter-needs-support');
  if (nsEl) nsEl.addEventListener('change', applyFilters);

  const resetEl = document.getElementById('filter-reset');
  if (resetEl) {
    resetEl.addEventListener('click', () => {
      ['filter-mahalla', 'filter-status', 'filter-gender'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      if (nsEl) nsEl.checked = false;
      state.filters = { mahalla: '', status: '', gender: '', needsSupport: false, search: '' };
      state.pagination.page = 1;
      loadYouth();
    });
  }

  let searchTimer;
  const searchEl = document.getElementById('global-search');
  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        state.filters.search = e.target.value.trim();
        state.pagination.page = 1;
        if (state.currentSection !== 'youth') showSection('youth');
        loadYouth();
      }, 350);
    });
  }
}

function renderAll() {
  renderUserInfo();
  renderStats();
  renderMahallaBars();
  if (state.currentSection === 'youth') renderYouthTable();
  if (state.currentSection === 'neet') loadNeetSection();
  if (state.currentSection === 'referrals') renderReferralPrograms();
}

document.addEventListener('DOMContentLoaded', async () => {
  if (!checkAuth()) return;

  state.lang = localStorage.getItem('yp_lang') || 'uz';
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  const savedTheme = localStorage.getItem('yp_theme') || 'light';
  applyTheme(savedTheme);

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  applyI18n();
  renderUserInfo();

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('yp_session');
      window.location.replace('index.html');
    });
  }

  const youthModal = document.getElementById('youth-modal');
  if (youthModal) {
    youthModal.addEventListener('click', (e) => {
      if (e.target.id === 'youth-modal') closeModal();
    });
  }

  ['dashboard', 'youth', 'map', 'neet', 'referrals'].forEach((section) => {
    const navBtn = document.getElementById(`nav-${section}`);
    if (navBtn) {
      navBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(section);
      });
    }
  });

  bindFilters();

  await Promise.all([loadStats(), loadMahallas()]);

  showSection('dashboard');
});

