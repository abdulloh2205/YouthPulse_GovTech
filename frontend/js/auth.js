const loginI18n = {
  uz: {
    title:           "YouthPulse",
    subtitle:        "Yoshlar Bandligi Monitoring Tizimi",
    gov_label:       "Nexus30 Hackathon 2026 - GovTech YouthPulse",
    tab_login:       "Kirish",
    tab_register:    "Ro'yxatdan o'tish",

    username_label:  "Foydalanuvchi nomi",
    username_ph:     "admin yoki istalgan login",
    password_label:  "Parol",
    password_ph:     "••••••",
    role_label:      "Lavozim",
    role_mahalla:    "Mahalla xodimi",
    role_district:   "Tuman hokimiyati xodimi",
    login_btn:       "Tizimga kirish",

    reg_contact_label: "Email yoki Telefon raqami",
    reg_contact_ph:    "+998 9X XXX XX XX yoki email",
    reg_password_label:"Parol o'rnatish",
    reg_password_ph:   "Kamida 6 belgi",
    reg_mahalla_label: "Mahalla / Tuman",
    reg_btn:           "Tasdiqlash kodi yuborish",

    err_username:    "Foydalanuvchi nomini kiriting.",
    err_password:    "Parol noto'g'ri. To'g'ri parol: 12345",
    err_contact:     "Email yoki telefon raqamini kiriting.",
    logging_in:      "Kirish...",
    sending_code:    "Yuborilmoqda...",
    code_sent:       "Tasdiqlash kodi yuborildi! (Demo rejim)",
  },
  ru: {
    title:           "YouthPulse",
    subtitle:        "Система Мониторинга Занятости Молодёжи",
    gov_label:       "Nexus30 Hackathon 2026 - GovTech YouthPulse",
    tab_login:       "Вход",
    tab_register:    "Регистрация",

    username_label:  "Имя пользователя",
    username_ph:     "admin или любой логин",
    password_label:  "Пароль",
    password_ph:     "••••••",
    role_label:      "Должность",
    role_mahalla:    "Сотрудник махалли",
    role_district:   "Сотрудник хокимията",
    login_btn:       "Войти в систему",

    reg_contact_label: "Email или номер телефона",
    reg_contact_ph:    "+998 9X XXX XX XX или email",
    reg_password_label:"Установить пароль",
    reg_password_ph:   "Минимум 6 символов",
    reg_mahalla_label: "Махалля / Район",
    reg_btn:           "Отправить код подтверждения",

    err_username:    "Введите имя пользователя.",
    err_password:    "Неверный пароль. Правильный пароль: 12345",
    err_contact:     "Введите email или номер телефона.",
    logging_in:      "Вход...",
    sending_code:    "Отправка...",
    code_sent:       "Код подтверждения отправлен! (Демо режим)",
  },
};

const MAHALLAS = [
  "Yangi hayot", "Bog'ishamol", "Universitet",
  "Do'stlik", "Zarnigor", "Qo'yliq", "Olmazar",
];

let currentLang = localStorage.getItem('yp_lang') || 'uz';

function t(key) {
  return (loginI18n[currentLang] || loginI18n.uz)[key] || key;
}

function applyLanguage() {

  setElText('brand-title',       t('title'));
  setElText('brand-subtitle',    t('subtitle'));
  setElText('gov-label',         t('gov_label'));
  setElText('tab-login-btn',     t('tab_login'));
  setElText('tab-register-btn',  t('tab_register'));

  setElText('lbl-username',      t('username_label'));
  setAttr('input-username', 'placeholder', t('username_ph'));
  setElText('lbl-password',      t('password_label'));
  setAttr('input-password', 'placeholder', t('password_ph'));
  setElText('lbl-role',          t('role_label'));
  setElText('login-submit-btn',  t('login_btn'));

  const roleEl = document.getElementById('input-role');
  if (roleEl && roleEl.options.length >= 2) {
    roleEl.options[0].text = t('role_mahalla');
    roleEl.options[1].text = t('role_district');
  }

  setElText('lbl-reg-contact',   t('reg_contact_label'));
  setAttr('input-reg-contact', 'placeholder', t('reg_contact_ph'));
  setElText('lbl-reg-password',  t('reg_password_label'));
  setAttr('input-reg-password', 'placeholder', t('reg_password_ph'));
  setElText('lbl-reg-mahalla',   t('reg_mahalla_label'));
  setElText('register-submit-btn', t('reg_btn'));

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('yp_lang', lang);
  applyLanguage();
}

window.setLang = setLang;

function setElText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setAttr(id, attr, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}

let activeTab = 'login';

function switchTab(tab) {
  activeTab = tab;

  const loginTab    = document.getElementById('tab-login-btn');
  const registerTab = document.getElementById('tab-register-btn');
  const loginForm   = document.getElementById('form-login');
  const regForm     = document.getElementById('form-register');

  loginTab?.classList.toggle('active',   tab === 'login');
  registerTab?.classList.toggle('active', tab === 'register');
  loginForm?.classList.toggle('hidden',  tab !== 'login');
  regForm?.classList.toggle('hidden',    tab !== 'register');

  hideAlert('login-alert');
  hideAlert('reg-alert');
}

window.switchTab = switchTab;

function showAlert(id, message, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message;
  el.className = `alert alert-${type} mb-4`;
  el.classList.remove('hidden');
  el.parentElement?.classList.add('error-shake');
  setTimeout(() => el.parentElement?.classList.remove('error-shake'), 400);
}

function hideAlert(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function isAuthenticated() {
  try {
    return !!JSON.parse(localStorage.getItem('yp_session') || 'null');
  } catch { return false; }
}

function saveSession(data) {
  localStorage.setItem('yp_session', JSON.stringify({
    ...data,
    loginAt: new Date().toISOString(),
  }));
}

function logout() {
  localStorage.removeItem('yp_session');
  window.location.href = 'login.html';
}
window.logout = logout;

async function handleLogin(e) {
  e.preventDefault();
  hideAlert('login-alert');

  const username = document.getElementById('input-username')?.value.trim() || '';
  const password = document.getElementById('input-password')?.value || '';
  const role     = document.getElementById('input-role')?.value || 'mahalla_worker';
  const btn      = document.getElementById('login-submit-btn');

  if (!username) { showAlert('login-alert', t('err_username')); return; }
  if (password !== '12345') { showAlert('login-alert', t('err_password')); return; }

  if (btn) { btn.disabled = true; btn.textContent = t('logging_in'); }

  await new Promise((r) => setTimeout(r, 600));

  saveSession({
    username,
    role,
    fullName: username,
    mahalla: role === 'mahalla_worker' ? MAHALLAS[0] : null,
    district: "Mirzo Ulug'bek tumani",
  });

  window.location.href = 'dashboard.html';
}

async function handleRegister(e) {
  e.preventDefault();
  hideAlert('reg-alert');

  const contact = document.getElementById('input-reg-contact')?.value.trim() || '';
  const btn = document.getElementById('register-submit-btn');

  if (!contact) { showAlert('reg-alert', t('err_contact')); return; }

  if (btn) { btn.disabled = true; btn.textContent = t('sending_code'); }

  await new Promise((r) => setTimeout(r, 800));

  showAlert('reg-alert', t('code_sent'), 'success');
  if (btn) { btn.disabled = false; btn.textContent = t('reg_btn'); }
}

function populateMahallaOptions() {
  const sel = document.getElementById('input-reg-mahalla');
  if (!sel) return;
  sel.innerHTML = '';
  MAHALLAS.forEach((m) => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    sel.appendChild(opt);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  if (isAuthenticated()) { window.location.replace('dashboard.html'); return; }

  applyLanguage();
  populateMahallaOptions();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  document.getElementById('login-form')?.addEventListener('submit', handleLogin);
  document.getElementById('register-form')?.addEventListener('submit', handleRegister);

  document.querySelectorAll('.login-input').forEach((el) => {
    el.addEventListener('input', () => {
      hideAlert('login-alert');
      hideAlert('reg-alert');
    });
  });

  switchTab('login');
});

