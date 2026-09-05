/* =====================================================
   AI APP BUILDER V1
   SCRIPT.JS
===================================================== */


/* =========================
   DEFAULT CODE
========================= */

const defaultCode = `<!-- AI App Builder V1 -->

<div class="app">

  <h1>
    My New App
  </h1>

  <p>
    Built with AI App Builder.
  </p>

</div>`;


/* =========================
   HISTORY
========================= */

let history = [];

let future = [];


/* =========================
   SWITCH VIEW
========================= */

function switchView(id) {

  document
    .querySelectorAll('.view')
    .forEach(view => {

      view.classList.toggle(
        'active',
        view.id === id
      );

    });

  document
    .querySelectorAll('.tab')
    .forEach(tab => {

      tab.classList.toggle(
        'active',
        tab.dataset.view === id
      );

    });

}


/* =========================
   HOME
========================= */

function goHome() {

  switchView('ai');

  toast('🏠 Home');

}


/* =========================
   SETTINGS
========================= */

function openSettings() {

  document
    .getElementById('modal')
    .classList.add('show');

}


function closeSettings() {

  document
    .getElementById('modal')
    .classList.remove('show');

}


/* =========================
   ADD MESSAGE
========================= */

function addMessage(text, type) {

  const message =
    document.createElement('div');

  message.className =
    'msg ' + type;

  message.textContent =
    text;

  document
    .getElementById('chat')
    .appendChild(message);

  const chat =
    document.getElementById('chat');

  chat.scrollTop =
    chat.scrollHeight;

}


/* =========================
   SEND MESSAGE
========================= */

function sendMessage() {

  const input =
    document.getElementById('chatInput');

  const text =
    input.value.trim();

  if (!text) {
    return;
  }

  /* User message */
  addMessage(
    text,
    'user'
  );

  input.value = '';

  /* Temporary AI response */
  setTimeout(() => {

    addMessage(
`ខ្ញុំទទួលបានសំណើរបស់អ្នក។

នៅជំហានបន្ទាប់
យើងនឹងភ្ជាប់ AI ពិត
ដើម្បីឱ្យ AI អាច៖

• អាន Project
• បង្កើត Code
• កែ Code
• លុបតែផ្នែកដែលអ្នកបញ្ជា
• Test Code
• រក Error
• Fix Error
• Update App Preview

ឧទាហរណ៍៖
"បង្កើត Login Page មួយ"
ឬ
"ប្តូរប៊ូតុងនេះទៅពណ៌ក្រហម"`,
      'ai'
    );

  }, 450);

}


/* =========================
   ENTER TO SEND
========================= */

document
  .getElementById('chatInput')
  .addEventListener(
    'keydown',
    function(e) {

      if (
        e.key === 'Enter' &&
        !e.shiftKey
      ) {

        e.preventDefault();

        sendMessage();

      }

    }
  );


/* =========================
   ATTACH FILE
========================= */

function attachFile() {

  document
    .getElementById('fileInput')
    .click();

}


document
  .getElementById('fileInput')
  .addEventListener(
    'change',
    function(e) {

      const file =
        e.target.files[0];

      if (!file) {
        return;
      }

      addMessage(
        '📎 បានភ្ជាប់៖ ' +
        file.name,
        'user'
      );

      toast(
        '📎 File attached'
      );

    }
  );


/* =========================
   VOICE
========================= */

function startVoice() {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {

    toast(
      'Browser នេះមិនទាន់គាំទ្រ Voice Recognition'
    );

    return;

  }

  const recognition =
    new SpeechRecognition();

  recognition.lang =
    'km-KH';

  recognition.interimResults =
    false;

  recognition.onstart =
    function() {

      toast(
        '🎤 កំពុងស្តាប់...'
      );

    };

  recognition.onresult =
    function(event) {

      const text =
        event
          .results[0][0]
          .transcript;

      document
        .getElementById('chatInput')
        .value = text;

    };

  recognition.onerror =
    function() {

      toast(
        'មិនអាចចាប់សំឡេងបាន'
      );

    };

  recognition.start();

}


/* =========================
   GET CODE
========================= */

function getCode() {

  return document
    .getElementById('editor')
    .textContent;

}


/* =========================
   COPY CODE
========================= */

async function copyCode() {

  try {

    await navigator.clipboard
      .writeText(
        getCode()
      );

    toast(
      '📎 Code បាន Copy'
    );

  }
  catch (error) {

    toast(
      'Copy មិនបាន'
    );

  }

}


/* =========================
   SAVE PROJECT
========================= */

function saveProject() {

  localStorage.setItem(
    'ai_builder_code',
    getCode()
  );

  toast(
    '💾 Project បានរក្សាទុក'
  );

}


/* =========================
   TEST
========================= */

function testProject() {

  switchView('app');

  toast(
    '🧪 Test Preview'
  );

}


/* =========================
   UNDO
========================= */

function undo() {

  toast(
    '↶ Undo — នឹងភ្ជាប់ Code History ក្នុង V2'
  );

}


/* =========================
   REDO
========================= */

function redo() {

  toast(
    '↷ Redo — នឹងភ្ជាប់ Code History ក្នុង V2'
  );

}


/* =========================
   DELETE CHAT
========================= */

function clearChat() {

  document
    .getElementById('chat')
    .innerHTML = `

      <div class="welcome">

        <div class="logo">
          🤖
        </div>

        <h2>
          AI App Builder
        </h2>

        <p>
          Chat ថ្មីបានចាប់ផ្ដើម។
        </p>

      </div>

  `;

  closeSettings();

  toast(
    '🗑️ Chat ត្រូវបានលុប'
  );

}


/* =========================
   TOAST
========================= */

function toast(text) {

  const element =
    document.getElementById('toast');

  element.textContent =
    text;

  element.style.display =
    'block';

  clearTimeout(
    window.toastTimer
  );

  window.toastTimer =
    setTimeout(
      function() {

        element.style.display =
          'none';

      },
      1800
    );

}


/* =========================
   LOAD SAVED CODE
========================= */

const savedCode =
  localStorage.getItem(
    'ai_builder_code'
  );

document
  .getElementById('editor')
  .textContent =
    savedCode ||
    defaultCode;


/* =====================================================
   END
===================================================== */
