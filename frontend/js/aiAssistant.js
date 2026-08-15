import { sendAiMessage } from './api.js';

const aiState = {
  isOpen: false,
  isLoading: false,
  messageHistory: [],
};

const fab          = document.getElementById('ai-fab');
const panel        = document.getElementById('ai-chat-panel');
const closeBtn     = document.getElementById('ai-close-btn');
const messagesEl   = document.getElementById('ai-messages');
const inputEl      = document.getElementById('ai-input');
const sendBtn      = document.getElementById('ai-send-btn');

const WELCOME_MESSAGES = {
  uz: `Assalomu alaykum! Men **AI-Yordamchi**man 🤖

Yoshlar bandligi monitoringi bo'yicha savollaringizga javob berishga tayyorman:

• 📊 Statistika va ko'rsatkichlar
• 👥 Ishsiz yoshlarni aniqlash va ularga yordam
• 📋 Yo'naltirish mexanizmlari
• 🏢 Mehnat birjasi va kasb-hunar markazlari

Savol bering!`,

  ru: `Здравствуйте! Я **AI-Консультант** 🤖

Готов помочь по вопросам мониторинга занятости молодёжи:

• 📊 Статистика и показатели
• 👥 Выявление безработных и работа с ними
• 📋 Механизмы направления
• 🏢 Центры занятости и профобучения

Задайте вопрос!`,
};

function getCurrentLang() {
  return localStorage.getItem('yp_lang') || 'uz';
}

function getCurrentRole() {
  try {
    const session = JSON.parse(localStorage.getItem('yp_session') || '{}');
    return session.role || 'mahalla_worker';
  } catch { return 'mahalla_worker'; }
}

function openPanel() {
  aiState.isOpen = true;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  fab.setAttribute('aria-expanded', 'true');
  inputEl?.focus();
  scrollToBottom();

  if (aiState.messageHistory.length === 0) {
    const lang = getCurrentLang();
    renderAiMessage(WELCOME_MESSAGES[lang] || WELCOME_MESSAGES.uz, true);
  }
}

function closePanel() {
  aiState.isOpen = false;
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  fab.setAttribute('aria-expanded', 'false');
}

function togglePanel() {
  if (aiState.isOpen) closePanel();
  else openPanel();
}

function renderMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:4px;font-size:12px;">$1</code>')
    .replace(/\n/g, '<br/>');
}

function getTimeStr() {
  return new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
}

function renderUserMessage(text) {
  if (!messagesEl) return;

  const div = document.createElement('div');
  div.className = 'msg msg-user';
  div.innerHTML = `
    <div>
      <div class="msg-bubble">${escapeHtml(text)}</div>
      <div class="msg-time text-right">${getTimeStr()}</div>
    </div>
    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0 self-end"
         aria-hidden="true">
      👤
    </div>
  `;
  messagesEl.appendChild(div);
  scrollToBottom();
}

function renderAiMessage(text, isWelcome = false) {
  if (!messagesEl) return;

  const div = document.createElement('div');
  div.className = 'msg msg-ai';
  div.innerHTML = `
    <div class="ai-avatar flex-shrink-0 self-end" aria-hidden="true" style="width:32px;height:32px;font-size:14px;">🤖</div>
    <div>
      <div class="msg-bubble">${renderMarkdown(text)}</div>
      ${!isWelcome ? `<div class="msg-time">${getTimeStr()}</div>` : ''}
    </div>
  `;
  messagesEl.appendChild(div);
  scrollToBottom();

  if (!isWelcome) {
    aiState.messageHistory.push({ role: 'ai', text, time: new Date().toISOString() });
  }
}

function renderErrorMessage(text) {
  if (!messagesEl) return;
  const div = document.createElement('div');
  div.className = 'msg msg-ai';
  div.innerHTML = `
    <div class="ai-avatar flex-shrink-0 self-end" style="width:32px;height:32px;font-size:14px;" aria-hidden="true">⚠️</div>
    <div>
      <div class="msg-bubble" style="background:rgba(239,68,68,0.1);border-color:rgba(239,68,68,0.2);color:#f87171;">
        ${escapeHtml(text)}
      </div>
    </div>
  `;
  messagesEl.appendChild(div);
  scrollToBottom();
}

let typingEl = null;

function showTyping() {
  if (!messagesEl || typingEl) return;
  typingEl = document.createElement('div');
  typingEl.className = 'typing-msg';
  typingEl.id = 'ai-typing-indicator';
  typingEl.innerHTML = `
    <div class="ai-avatar flex-shrink-0 self-end" style="width:32px;height:32px;font-size:14px;" aria-hidden="true">🤖</div>
    <div class="typing-bubble" aria-label="AI javob tayyorlamoqda">
      <div class="typing-dot" aria-hidden="true"></div>
      <div class="typing-dot" aria-hidden="true"></div>
      <div class="typing-dot" aria-hidden="true"></div>
    </div>
  `;
  messagesEl.appendChild(typingEl);
  scrollToBottom();
}

function hideTyping() {
  if (typingEl) { typingEl.remove(); typingEl = null; }
}

async function sendMessage() {
  if (aiState.isLoading) return;

  const text = inputEl?.value.trim() || '';
  if (!text) return;

  if (inputEl) { inputEl.value = ''; inputEl.style.height = 'auto'; }

  renderUserMessage(text);
  aiState.messageHistory.push({ role: 'user', text, time: new Date().toISOString() });

  aiState.isLoading = true;
  if (sendBtn) sendBtn.disabled = true;
  showTyping();

  try {
    const userRole = getCurrentRole();
    const contextData = {
      currentPage: window.location.pathname,
      lang: getCurrentLang(),
      sessionRole: userRole,
    };

    const response = await sendAiMessage(text, userRole, contextData);

    hideTyping();

    if (response.success && response.message) {
      renderAiMessage(response.message);
    } else {
      renderErrorMessage("Javob olishda xato yuz berdi. Qayta urinib ko'ring.");
    }
  } catch (err) {
    hideTyping();
    const lang = getCurrentLang();
    if (lang === 'ru') {
      renderErrorMessage(`Ошибка подключения: ${err.message}`);
    } else {
      renderErrorMessage(`Ulanish xatosi: ${err.message}`);
    }
  } finally {
    aiState.isLoading = false;
    if (sendBtn) sendBtn.disabled = false;
    inputEl?.focus();
  }
}

function scrollToBottom() {
  if (messagesEl) {
    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function autoResize() {
  if (!inputEl) return;
  inputEl.style.height = 'auto';
  inputEl.style.height = Math.min(inputEl.scrollHeight, 110) + 'px';
}

function handleKeydown(e) {

  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function handleEsc(e) {
  if (e.key === 'Escape' && aiState.isOpen) closePanel();
}

function init() {
  fab?.addEventListener('click', togglePanel);
  closeBtn?.addEventListener('click', closePanel);
  sendBtn?.addEventListener('click', sendMessage);
  inputEl?.addEventListener('keydown', handleKeydown);
  inputEl?.addEventListener('input', autoResize);
  document.addEventListener('keydown', handleEsc);

}

document.addEventListener('DOMContentLoaded', init);

export { openPanel, closePanel };

