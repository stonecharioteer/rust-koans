const koans = [
  {
    title: "Koan 1 — Ownership",
    question: `The novice said:\n“I assigned \`s\` to \`t\`, and now \`s\` is gone.”\n\nThe master said:\n“Yes.”\n\nThe novice waited.\n\nThe master said:\n“That is all.”`,
  },
  {
    title: "Koan 2 — Move semantics",
    question: `The novice said:\n“But I only wanted a copy.”\n\nThe master replied:\n“Then you should have asked for one.”`,
  },
  {
    title: "Koan 3 — Borrowing",
    question: `The novice said:\n“I borrowed a value, and Rust will not let me change it.”\n\nThe master said:\n“Correct.”\n\nThe novice said:\n“But I need to change it.”\n\nThe master said:\n“Then do not borrow it.”`,
  },
  {
    title: "Koan 4 — Mutable references",
    question: `The novice said:\n“I created two mutable references.”\n\nThe master said:\n“No.”\n\nThe novice checked the compiler.\n\nThe master said nothing.`,
  },
  {
    title: "Koan 5 — Lifetimes",
    question: `The novice said:\n“I added lifetimes, and it compiles.”\n\nThe master said:\n“Do you understand them?”\n\nThe novice said:\n“No.”\n\nThe master said:\n“Then nothing has changed.”`,
  },
  {
    title: "Koan 6 — Clone",
    question: `The novice said:\n“I fixed the error by cloning.”\n\nThe master said:\n“Yes.”\n\nThe novice said:\n“Is this good?”\n\nThe master said:\n“It compiles.”`,
  },
  {
    title: "Koan 7 — Compiler",
    question: `The novice said:\n“The compiler is too strict.”\n\nThe master said:\n“And yet, it is not strict enough to write your program for you.”`,
  },
  {
    title: "Koan 8 — Unsafe",
    question: `The novice said:\n“I used \`unsafe\` and now it works.”\n\nThe master said:\n“It always works… until it doesn’t.”`,
  },
  {
    title: "Koan 9 — Iterators",
    question: `The novice said:\n“I don’t understand iterators.”\n\nThe master said:\n“Then write a loop.”\n\nThe novice did.\n\nThe master said:\n“Now you understand why iterators exist.”`,
  },
  {
    title: "Koan 10 — Error handling",
    question: `The novice said:\n“I used \`unwrap()\` everywhere.”\n\nThe master said:\n“Then you have decided where your program will panic.”\n\nThe novice said:\n“Yes.”\n\nThe master said:\n“Not where.”`,
  },
];

const titleEl = document.getElementById("koan-title");
const questionEl = document.getElementById("koan-question");
const codeEl = document.getElementById("koan-code");
const reflectionEl = document.getElementById("koan-reflection");
const slideNumberEl = document.getElementById("slide-number");
const progressEl = document.getElementById("progress-bar");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const slideEl = document.getElementById("slide");

let index = getInitialIndex();
render();

prevBtn.addEventListener("click", () => goTo(index - 1));
nextBtn.addEventListener("click", () => goTo(index + 1));

fullscreenBtn.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen?.();
    fullscreenBtn.textContent = "⤡ Exit Fullscreen";
  } else {
    await document.exitFullscreen?.();
    fullscreenBtn.textContent = "⤢ Fullscreen";
  }
});

document.addEventListener("fullscreenchange", () => {
  fullscreenBtn.textContent = document.fullscreenElement
    ? "⤡ Exit Fullscreen"
    : "⤢ Fullscreen";
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (["ArrowRight", "PageDown", " ", "Enter"].includes(key)) {
    event.preventDefault();
    goTo(index + 1);
  }

  if (["ArrowLeft", "PageUp", "Backspace"].includes(key)) {
    event.preventDefault();
    goTo(index - 1);
  }

  if (key === "Home") {
    event.preventDefault();
    goTo(0);
  }

  if (key === "End") {
    event.preventDefault();
    goTo(koans.length - 1);
  }
});

window.addEventListener("hashchange", () => {
  const next = getInitialIndex();
  if (next !== index) {
    index = next;
    render();
  }
});

function goTo(nextIndex) {
  const bounded = Math.max(0, Math.min(koans.length - 1, nextIndex));
  if (bounded === index) return;
  index = bounded;
  location.hash = `${index + 1}`;
  render();
}

function render() {
  const koan = koans[index];

  titleEl.textContent = koan.title;
  questionEl.textContent = koan.question;
  codeEl.textContent = koan.code || "";
  reflectionEl.textContent = koan.reflection || "";

  codeEl.style.display = koan.code ? "block" : "none";
  reflectionEl.style.display = koan.reflection ? "block" : "none";

  slideNumberEl.textContent = `Koan ${index + 1} / ${koans.length}`;
  progressEl.style.width = `${((index + 1) / koans.length) * 100}%`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === koans.length - 1;

  slideEl.focus({ preventScroll: true });
}

function getInitialIndex() {
  const parsed = Number.parseInt(location.hash.replace("#", ""), 10);
  if (Number.isNaN(parsed)) return 0;
  return Math.max(0, Math.min(koans.length - 1, parsed - 1));
}
