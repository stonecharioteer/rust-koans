// Avatar paths
const AVATAR_MASTER = "avatar-master.webp";
const AVATARS_STUDENT = {
  neutral:   "avatar-student.webp",
  dejected:  "avatar-student-dejected.webp",
  perplexed: "avatar-student-perplexed.webp",
  shocked:   "avatar-student-shocked.webp",
  proud:     "avatar-student-proud.webp",
  happy:     "avatar-student-happy.webp",
};

// ──────────────────────────────────────────────
// Koans 1–4: THE LIVE SET (read these on stage)
// ──────────────────────────────────────────────

const koans = [
  {
    title: "Koan 1 — Iterators",
    studentMood: "perplexed",
    dialogue: [
      { speaker: "novice",    text: "I will use a `while` loop. Iterators are unnecessary.", mood: "proud" },
      { speaker: "master",    text: "Very well." },
      { speaker: "novice",    action: "Writes a loop", mood: "proud" },
      { speaker: "master",    text: "You have written an iterator. Poorly." },
    ],
  },
  {
    title: "Koan 2 — Unsafe",
    studentMood: "neutral",
    dialogue: [
      { speaker: "novice", text: "I used `unsafe` and now it compiles.", mood: "proud" },
      { speaker: "master", text: "The compiler has not agreed. It has merely stepped aside." },
      { speaker: "novice", text: "Then who will catch my mistakes?", mood: "perplexed" },
      { speaker: "master", action: "dots" },
    ],
  },
  {
    title: "Koan 3 — Error types",
    studentMood: "perplexed",
    dialogue: [
      { speaker: "novice", text: "My function can fail in six different ways. What do I do?", mood: "dejected" },
      { speaker: "master", text: "anyhow." },
      { speaker: "novice", text: "Master, please. I am serious." },
      { speaker: "master", text: "`anyhow`." },
    ],
  },
  {
    title: "Koan 4 — Async",
    studentMood: "dejected",
    dialogue: [
      { speaker: "novice", text: "My async code compiles.", mood: "proud" },
      { speaker: "novice", text: "...but `tokio::spawn` says it is not `Send`." },
      { speaker: "master", text: "Which value cannot be sent?" },
      { speaker: "novice", text: "The error does not say." },
      { speaker: "master", text: "It never does." },
    ],
  },

  // ──────────────────────────────────────────────
  // Koans 5+: THE SCROLL (browse at your leisure)
  // ──────────────────────────────────────────────

  {
    title: "Koan 5 — Ownership",
    studentMood: "shocked",
    dialogue: [
      { speaker: "novice",    text: "I assigned `s` to `t`, and now `s` is gone." },
      { speaker: "master",    text: "Yes." },
      { speaker: "novice",    action: "dots" },
      { speaker: "master",    text: "That is all." },
    ],
  },
  {
    title: "Koan 6 — Borrowing",
    studentMood: "perplexed",
    dialogue: [
      { speaker: "novice", text: "I borrowed a value, and Rust will not let me change it." },
      { speaker: "master", text: "Correct." },
      { speaker: "novice", text: "But I need to change it." },
      { speaker: "master", text: "Then do not borrow it." },
    ],
  },
  {
    title: "Koan 7 — Move semantics",
    studentMood: "perplexed",
    dialogue: [
      { speaker: "novice", text: "An integer stays after I pass it. A `String` vanishes. Why are they different?" },
      { speaker: "master", text: "Should the compiler silently copy a megabyte behind your back?" },
      { speaker: "novice", action: "dots" },
      { speaker: "master", text: "Rust will not spend what you have not offered." },
    ],
  },
  {
    title: "Koan 8 — Mutable references",
    studentMood: "shocked",
    dialogue: [
      { speaker: "novice",    text: "I created two mutable references.", mood: "proud" },
      { speaker: "master",    text: "No." },
      { speaker: "novice",    action: "Checks the compiler" },
      { speaker: "master",    action: "dots" },
    ],
  },
  {
    title: "Koan 9 — Lifetimes",
    studentMood: "dejected",
    dialogue: [
      { speaker: "novice", text: "I added lifetimes, and it compiles.", mood: "happy" },
      { speaker: "master", text: "Do you understand them?" },
      { speaker: "novice", text: "No." },
      { speaker: "master", text: "Then nothing has changed." },
    ],
  },
  {
    title: "Koan 10 — Clone",
    studentMood: "perplexed",
    dialogue: [
      { speaker: "novice", text: "I called `.clone()` and the borrow checker stopped complaining.", mood: "happy" },
      { speaker: "master", text: "Of course. The value is yours now." },
      { speaker: "novice", text: "So `.clone()` is the answer?" },
      { speaker: "master", text: "It is always an answer. Seldom the best one." },
    ],
  },
  {
    title: "Koan 11 — The Compiler",
    studentMood: "dejected",
    dialogue: [
      { speaker: "novice", text: "The compiler is too strict." },
      { speaker: "master", text: "And yet, it is not strict enough to write your program for you." },
    ],
  },
  {
    title: "Koan 12 — Error handling",
    studentMood: "shocked",
    dialogue: [
      { speaker: "novice", text: "I used `.unwrap()` everywhere. The value is always there.", mood: "proud" },
      { speaker: "master", text: "`.unwrap()` does not mean the value is always there. It means you have no plan for when it is not." },
      { speaker: "novice", action: "dots" },
    ],
  },
  {
    title: "Koan 13 — The Linked List",
    studentMood: "dejected",
    dialogue: [
      { speaker: "novice", text: "I will implement a linked list to practice ownership.", mood: "proud" },
      { speaker: "master", text: "Very well." },
      { speaker: "novice", action: "Writes a linked list", mood: "happy" },
      { speaker: "novice", text: "The borrow checker will not allow it." },
      { speaker: "master", text: "Now you understand why the standard library uses `unsafe`." },
    ],
  },
  {
    title: "Koan 14 — Interior Mutability",
    studentMood: "perplexed",
    dialogue: [
      { speaker: "novice", text: "I wrapped everything in `Rc<RefCell<T>>` and the borrow checker stopped fighting me.", mood: "proud" },
      { speaker: "master", text: "You have not appeased the borrow checker. You have replaced it." },
      { speaker: "novice", text: "Is that not the same?" },
      { speaker: "master", text: "Your program will tell you. At runtime." },
    ],
  },
  {
    title: "Koan 15 — Null",
    studentMood: "perplexed",
    dialogue: [
      { speaker: "novice", text: "How do I check for null?" },
      { speaker: "master", text: "There is no null." },
      { speaker: "novice", text: "Then how do I represent absence?" },
      { speaker: "master", text: "`Option` does not hide absence. It demands you acknowledge it." },
    ],
  },
  {
    title: "Koan 16 — todo!()",
    studentMood: "dejected",
    dialogue: [
      { speaker: "novice", text: "I use `todo!()` instead of `unimplemented!()`. It means I will finish it later.", mood: "proud" },
      { speaker: "master", text: "So does a future that is never awaited." },
      { speaker: "novice", action: "dots" },
    ],
  },
  {
    title: "Koan 17 — Serde",
    studentMood: "shocked",
    dialogue: [
      { speaker: "novice", text: "`#[derive(Deserialize)]` is beautiful. One line and it works.", mood: "happy" },
      { speaker: "master", text: "Now write a custom deserializer." },
      { speaker: "novice", text: "Ah yes, just need to implement `Visitor`, let me see...", mood: "proud" },
      { speaker: "novice", action: "dots" },
    ],
  },
  {
    title: "Koan 18 — Macros",
    studentMood: "dejected",
    dialogue: [
      { speaker: "novice", text: "Last week I wrote a macro to replace a ten-line block that repeated five times.", mood: "proud" },
      { speaker: "master", text: "And how long is the macro?" },
      { speaker: "novice", text: "...one hundred lines." },
      { speaker: "master", text: "Explain it." },
      { speaker: "novice", action: "dots" },
    ],
  },
];

// CJK numeral labels for the koan counter
const cjkNumerals = [
  "一", "二", "三", "四", "五", "六", "七", "八", "九", "十",
  "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八",
];

const titleEl = document.getElementById("koan-title");
const dialogueEl = document.getElementById("koan-question");
const codeEl = document.getElementById("koan-code");
const reflectionEl = document.getElementById("koan-reflection");
const slideNumberEl = document.getElementById("slide-number");
const progressEl = document.getElementById("progress-bar");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const slideEl = document.getElementById("slide");
const pipsEl = document.getElementById("nav-pips");

const frame = document.querySelector(".scroll-frame");
let isIntro = !location.hash;
let index = getInitialIndex();

buildPips();

if (isIntro) {
  frame.classList.add("intro");
} else {
  frame.classList.remove("intro");
  render();
}

// Click on intro overlay dismisses it
document.querySelector(".intro-overlay").addEventListener("click", () => leaveIntro());

// Click hero image to return to intro
document.querySelector(".painting-inner").addEventListener("click", () => {
  if (!isIntro) enterIntro();
});

prevBtn.addEventListener("click", () => {
  if (index === 0) {
    enterIntro();
  } else {
    goTo(index - 1);
  }
});
nextBtn.addEventListener("click", () => goTo(index + 1));

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (isIntro) {
    if (["ArrowRight", "PageDown", " ", "Enter", "ArrowLeft"].includes(key)) {
      event.preventDefault();
      leaveIntro();
      return;
    }
  }

  if (["ArrowRight", "PageDown", " ", "Enter"].includes(key)) {
    event.preventDefault();
    goTo(index + 1);
  }

  if (["ArrowLeft", "PageUp", "Backspace"].includes(key)) {
    event.preventDefault();
    if (index === 0) {
      enterIntro();
    } else {
      goTo(index - 1);
    }
  }

  if (key === "Home") {
    event.preventDefault();
    goTo(0);
  }

  if (key === "End") {
    event.preventDefault();
    goTo(koans.length - 1);
  }

  if (key === "f" || key === "F") {
    event.preventDefault();
    toggleFullscreen();
  }
});

// Touch swipe support
let touchStartX = 0;
let touchStartY = 0;
const scrollText = document.querySelector(".scroll-text");

document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchmove", (e) => {
  const dx = e.touches[0].clientX - touchStartX;
  const dy = e.touches[0].clientY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 20) {
    scrollText.classList.toggle("swiping-left", dx < 0);
    scrollText.classList.toggle("swiping-right", dx > 0);
  }
}, { passive: true });

document.addEventListener("touchend", (e) => {
  scrollText.classList.remove("swiping-left", "swiping-right");
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  if (isIntro) {
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      leaveIntro();
    } else if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      leaveIntro();
    }
    return;
  }

  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) goTo(index + 1);
    else if (index === 0) enterIntro();
    else goTo(index - 1);
  }
});

// Hash navigation
window.addEventListener("hashchange", () => {
  const next = getInitialIndex();
  if (next !== index) {
    index = next;
    render();
  }
});

function leaveIntro() {
  if (!isIntro) return;
  isIntro = false;
  frame.classList.remove("intro");
  index = 0;
  location.hash = "1";
  render();
}

function enterIntro() {
  if (isIntro) return;
  isIntro = true;
  history.replaceState(null, "", location.pathname);
  frame.classList.add("intro");
  prevBtn.disabled = true;
}

function goTo(nextIndex) {
  if (isIntro) {
    leaveIntro();
    return;
  }

  const bounded = Math.max(0, Math.min(koans.length - 1, nextIndex));
  if (bounded === index) return;

  slideEl.classList.add("fade-out");
  setTimeout(() => {
    index = bounded;
    location.hash = `${index + 1}`;
    render();
    slideEl.classList.remove("fade-out");
  }, 160);
}

function render() {
  const koan = koans[index];

  titleEl.textContent = koan.title;
  renderDialogue(koan);
  codeEl.textContent = koan.code || "";
  reflectionEl.textContent = koan.reflection || "";

  codeEl.style.display = koan.code ? "block" : "none";
  reflectionEl.style.display = koan.reflection ? "block" : "none";

  const cjk = cjkNumerals[index] || index + 1;
  slideNumberEl.textContent = `${cjk}  Koan ${index + 1} of ${koans.length}`;
  progressEl.style.width = `${((index + 1) / koans.length) * 100}%`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === koans.length - 1;

  const pips = pipsEl.querySelectorAll(".pip");
  pips.forEach((pip, i) => pip.classList.toggle("active", i === index));

  slideEl.focus({ preventScroll: true });
}

function renderDialogue(koan) {
  // Clear previous dialogue
  while (dialogueEl.firstChild) dialogueEl.removeChild(dialogueEl.firstChild);

  const defaultStudentAvatar = AVATARS_STUDENT[koan.studentMood] || AVATARS_STUDENT.neutral;

  for (const line of koan.dialogue) {
    const isMaster = line.speaker === "master";
    const row = document.createElement("div");
    row.className = `dialogue-row dialogue-${line.speaker}`;

    // Per-line mood override for the student
    const studentSrc = line.mood
      ? (AVATARS_STUDENT[line.mood] || defaultStudentAvatar)
      : defaultStudentAvatar;

    const avatar = document.createElement("img");
    avatar.className = "dialogue-avatar";
    avatar.alt = isMaster ? "Master" : "Novice";
    avatar.src = isMaster ? AVATAR_MASTER : studentSrc;

    const bubble = document.createElement("div");

    if (line.action === "dots") {
      // Silence / waiting: animated dots
      bubble.className = "dialogue-bubble dialogue-action";
      for (let d = 0; d < 3; d++) {
        const dot = document.createElement("span");
        dot.className = "action-dot";
        bubble.appendChild(dot);
      }
    } else if (line.action) {
      // Descriptive action: italic stage direction
      bubble.className = "dialogue-bubble dialogue-stage-direction";
      bubble.textContent = line.action;
    } else {
      bubble.className = "dialogue-bubble";
      appendInlineCode(bubble, line.text);
    }

    row.appendChild(avatar);
    row.appendChild(bubble);
    dialogueEl.appendChild(row);
  }
}

function buildPips() {
  while (pipsEl.firstChild) {
    pipsEl.removeChild(pipsEl.firstChild);
  }
  for (let i = 0; i < koans.length; i++) {
    const pip = document.createElement("button");
    pip.className = "pip";
    pip.textContent = i + 1;
    pip.setAttribute("aria-label", `Go to Koan ${i + 1}`);
    pip.addEventListener("click", () => goTo(i));
    pipsEl.appendChild(pip);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

// Parse backtick-delimited segments into text nodes and <code> elements
function appendInlineCode(el, text) {
  const parts = text.split(/`([^`]+)`/);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      el.appendChild(document.createTextNode(parts[i]));
    } else {
      const code = document.createElement("code");
      code.textContent = parts[i];
      el.appendChild(code);
    }
  }
}

function getInitialIndex() {
  const parsed = Number.parseInt(location.hash.replace("#", ""), 10);
  if (Number.isNaN(parsed)) return 0;
  return Math.max(0, Math.min(koans.length - 1, parsed - 1));
}
