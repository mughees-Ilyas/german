/* ===================== APP STATE & ROUTING ===================== */

const app = document.getElementById("app");
const tabs = document.querySelectorAll(".tab-btn");

const store = {
  get(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; }
    catch { return fallback; }
  },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); },
};

const PROGRESS_KEY = "deutsch_a1_progress"; // { deckId: { knownIndices: [...] } }

function getProgress() { return store.get(PROGRESS_KEY, {}); }
function setProgress(p) { store.set(PROGRESS_KEY, p); }

tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabs.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.view);
  });
});

function setActiveTab(view) {
  tabs.forEach((b) => b.classList.toggle("active", b.dataset.view === view));
}

function render(view) {
  setActiveTab(view);
  window.scrollTo(0, 0);
  if (view === "home") return renderHome();
  if (view === "flashcards") return renderDeckList();
  if (view === "grammar") return renderGrammar();
  if (view === "games") return renderGamesMenu();
  if (view === "quiz") return renderQuizIntro();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ===================== HOME ===================== */

function renderHome() {
  const progress = getProgress();
  const totalCards = DECKS.reduce((s, d) => s + d.cards.length, 0);
  const totalKnown = DECKS.reduce((s, d) => s + (progress[d.id]?.knownIndices?.length || 0), 0);
  const pct = totalCards ? Math.round((totalKnown / totalCards) * 100) : 0;

  app.innerHTML = `
    <h1 class="page-title">Willkommen! 👋</h1>
    <p class="page-sub">Your personal A1 German trainer — built from your class notes (lessons 1–12).
    Overall progress: <strong>${totalKnown}/${totalCards} words known (${pct}%)</strong></p>
    <div class="progress-bar"><div style="width:${pct}%"></div></div>
    <br>
    <h3>Quick start</h3>
    <div class="grid">
      <div class="card-tile" data-go="flashcards"><div class="icon">🗂️</div><div class="title">Flashcards</div><div class="meta">${DECKS.length} decks · ${totalCards} words</div></div>
      <div class="card-tile" data-go="grammar"><div class="icon">📘</div><div class="title">Grammar</div><div class="meta">${GRAMMAR.length} topics explained in English</div></div>
      <div class="card-tile" data-go="games"><div class="icon">🎮</div><div class="title">Games</div><div class="meta">Der/Die/Das sort, Clock, Plurals</div></div>
      <div class="card-tile" data-go="quiz"><div class="icon">📝</div><div class="title">Quiz</div><div class="meta">Mixed multiple-choice test</div></div>
    </div>
    <h3 style="margin-top:32px;">Deck overview</h3>
    <div class="grid">
      ${DECKS.map((d) => {
        const known = progress[d.id]?.knownIndices?.length || 0;
        const p = Math.round((known / d.cards.length) * 100);
        return `<div class="card-tile" data-deck="${d.id}">
          <div class="icon">${d.icon}</div>
          <div class="title">${d.title}</div>
          <div class="meta">${known}/${d.cards.length} known</div>
          <div class="progress-bar"><div style="width:${p}%"></div></div>
        </div>`;
      }).join("")}
    </div>
  `;

  app.querySelectorAll("[data-go]").forEach((el) =>
    el.addEventListener("click", () => {
      const view = el.dataset.go;
      setActiveTab(view);
      render(view);
    })
  );
  app.querySelectorAll("[data-deck]").forEach((el) =>
    el.addEventListener("click", () => {
      setActiveTab("flashcards");
      renderFlashcards(el.dataset.deck);
    })
  );
}

/* ===================== FLASHCARDS ===================== */

function renderDeckList() {
  const progress = getProgress();
  app.innerHTML = `
    <h1 class="page-title">Flashcards</h1>
    <p class="page-sub">Pick a deck. Flip each card, then mark whether you knew it — your progress is saved automatically.</p>
    <div class="grid">
      ${DECKS.map((d) => {
        const known = progress[d.id]?.knownIndices?.length || 0;
        const p = Math.round((known / d.cards.length) * 100);
        return `<div class="card-tile" data-deck="${d.id}">
          <div class="icon">${d.icon}</div>
          <div class="title">${d.title}</div>
          <div class="meta">${known}/${d.cards.length} known</div>
          <div class="progress-bar"><div style="width:${p}%"></div></div>
        </div>`;
      }).join("")}
    </div>
  `;
  app.querySelectorAll("[data-deck]").forEach((el) =>
    el.addEventListener("click", () => renderFlashcards(el.dataset.deck))
  );
}

function renderFlashcards(deckId) {
  const deck = DECKS.find((d) => d.id === deckId);
  const order = shuffle(deck.cards.map((_, i) => i));
  let pos = 0;
  let flipped = false;

  function currentCard() { return deck.cards[order[pos]]; }

  function markKnown(known) {
    const progress = getProgress();
    progress[deckId] = progress[deckId] || { knownIndices: [] };
    const idx = order[pos];
    const set = new Set(progress[deckId].knownIndices);
    if (known) set.add(idx); else set.delete(idx);
    progress[deckId].knownIndices = [...set];
    setProgress(progress);
    next();
  }

  function next() {
    flipped = false;
    if (pos < order.length - 1) { pos++; draw(); }
    else draw(true);
  }

  function draw(done) {
    const progress = getProgress();
    const knownCount = progress[deckId]?.knownIndices?.length || 0;
    if (done) {
      app.innerHTML = `
        <div class="deck-header">
          <span class="back-link" id="back">← All decks</span>
          <span class="flash-progress">${knownCount}/${deck.cards.length} known</span>
        </div>
        <div class="flash-stage">
          <h2>🎉 Deck complete!</h2>
          <p>You've gone through all ${deck.cards.length} cards in "${deck.title}".</p>
          <div class="flash-controls">
            <button class="btn primary" id="restart">Shuffle & Restart</button>
            <button class="btn" id="toDecks">Back to decks</button>
          </div>
        </div>
      `;
      document.getElementById("back").onclick = renderDeckList;
      document.getElementById("toDecks").onclick = renderDeckList;
      document.getElementById("restart").onclick = () => renderFlashcards(deckId);
      return;
    }

    const card = currentCard();
    app.innerHTML = `
      <div class="deck-header">
        <span class="back-link" id="back">← All decks</span>
        <span class="flash-progress">Card ${pos + 1}/${order.length} · ${deck.title} · ${knownCount} known</span>
      </div>
      <div class="flash-stage">
        <div class="flashcard ${flipped ? "flipped" : ""}" id="card">
          <div class="flashcard-inner">
            <div class="flash-face front">${card.de}</div>
            <div class="flash-face back">${card.en}</div>
          </div>
        </div>
        <p class="flash-progress">Tap the card to flip it</p>
        <div class="flash-controls">
          <button class="btn dontknow" id="no">✗ Didn't know</button>
          <button class="btn know" id="yes">✓ Knew it</button>
        </div>
      </div>
    `;
    document.getElementById("back").onclick = renderDeckList;
    document.getElementById("card").onclick = () => {
      flipped = !flipped;
      document.getElementById("card").classList.toggle("flipped", flipped);
    };
    document.getElementById("yes").onclick = () => markKnown(true);
    document.getElementById("no").onclick = () => markKnown(false);
  }

  draw();
}

/* ===================== GRAMMAR ===================== */

function renderGrammar() {
  app.innerHTML = `
    <h1 class="page-title">Grammar Explained</h1>
    <p class="page-sub">Plain-English explanations of the grammar rules from your lessons. Click a topic to expand it.</p>
    <div class="grammar-list">
      ${GRAMMAR.map((g, i) => `
        <div class="grammar-item" data-i="${i}">
          <h3>${g.title}</h3>
          <div class="grammar-body">${g.body}</div>
        </div>
      `).join("")}
    </div>
  `;
  app.querySelectorAll(".grammar-item").forEach((el) =>
    el.addEventListener("click", (e) => {
      // avoid toggle-close when selecting text
      el.classList.toggle("open");
    })
  );
}

/* ===================== GAMES MENU ===================== */

function renderGamesMenu() {
  app.innerHTML = `
    <h1 class="page-title">Games</h1>
    <p class="page-sub">Practice grammar rules in a more playful way.</p>
    <div class="grid">
      <div class="card-tile" id="g-gender"><div class="icon">🟦🟥🟩</div><div class="title">Der/Die/Das Sort</div><div class="meta">Sort nouns into the correct gender bin</div></div>
      <div class="card-tile" id="g-clock"><div class="icon">🕒</div><div class="title">Clock Time</div><div class="meta">Pick the correct German time phrase</div></div>
      <div class="card-tile" id="g-plural"><div class="icon">🔗</div><div class="title">Plural Match</div><div class="meta">Match singular nouns to their plurals</div></div>
      <div class="card-tile" id="g-conj"><div class="icon">✍️</div><div class="title">Conjugation Builder</div><div class="meta">Fill in the correct verb ending</div></div>
    </div>
  `;
  document.getElementById("g-gender").onclick = renderGenderGame;
  document.getElementById("g-clock").onclick = renderClockGame;
  document.getElementById("g-plural").onclick = renderPluralGame;
  document.getElementById("g-conj").onclick = renderConjugationGame;
}

function gameHeader(title) {
  return `<div class="deck-header">
    <span class="back-link" id="back-games">← Games</span>
    <h2 class="page-title" style="margin:0;">${title}</h2>
  </div>`;
}

function bindBackGames() {
  document.getElementById("back-games").onclick = renderGamesMenu;
}

/* --- Der/Die/Das sort game (drag + click-to-place fallback) --- */
function renderGenderGame() {
  const words = shuffle(GENDER_GAME_WORDS).slice(0, 12);
  let placed = {};
  let score = 0, attempted = 0;
  let selectedWord = null;

  function draw() {
    app.innerHTML = `
      ${gameHeader("Der / Die / Das Sort")}
      <p class="page-sub">Tap a word, then tap the bin where it belongs. (Or drag it on desktop.)</p>
      <span class="score-pill">Score: ${score}/${attempted}</span>
      <div class="game-area">
        <div class="word-pool" id="pool">
          ${words.map((w, i) => placed[i] ? "" : `<span class="word-chip" draggable="true" data-i="${i}">${w.word}</span>`).join("")}
        </div>
        <div class="bins">
          <div class="bin" data-bin="der"><h4 class="m">der</h4><div class="bin-items"></div></div>
          <div class="bin" data-bin="die"><h4 class="f">die</h4><div class="bin-items"></div></div>
          <div class="bin" data-bin="das"><h4 class="n">das</h4><div class="bin-items"></div></div>
        </div>
      </div>
      ${Object.keys(placed).length === words.length ? `<p style="margin-top:16px;"><button class="btn primary" id="again">Play again</button></p>` : ""}
    `;
    bindBackGames();

    // render placed chips inside bins
    Object.entries(placed).forEach(([i, g]) => {
      const bin = app.querySelector(`.bin[data-bin="${g}"] .bin-items`);
      const w = words[i];
      const correct = w.g === g;
      const chip = document.createElement("span");
      chip.className = `word-chip placed-${g}`;
      chip.textContent = w.word + (correct ? " ✓" : ` ✗(${w.g})`);
      bin.appendChild(chip);
    });

    document.getElementById("again")?.addEventListener("click", renderGenderGame);

    const chips = app.querySelectorAll(".word-chip[data-i]");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.style.outline = "");
        selectedWord = chip.dataset.i;
        chip.style.outline = "2px solid var(--accent)";
      });
      chip.addEventListener("dragstart", (e) => e.dataTransfer.setData("text/plain", chip.dataset.i));
    });

    app.querySelectorAll(".bin").forEach((bin) => {
      bin.addEventListener("dragover", (e) => { e.preventDefault(); bin.classList.add("over"); });
      bin.addEventListener("dragleave", () => bin.classList.remove("over"));
      bin.addEventListener("drop", (e) => {
        e.preventDefault();
        bin.classList.remove("over");
        const i = e.dataTransfer.getData("text/plain");
        place(i, bin.dataset.bin);
      });
      bin.addEventListener("click", () => {
        if (selectedWord !== null) { place(selectedWord, bin.dataset.bin); selectedWord = null; }
      });
    });
  }

  function place(i, bin) {
    if (placed[i] !== undefined) return;
    placed[i] = bin;
    attempted++;
    if (words[i].g === bin) score++;
    draw();
  }

  draw();
}

/* --- Clock game --- */
function renderClockGame() {
  const rounds = shuffle(CLOCK_GAME).slice(0, 8);
  let idx = 0, score = 0;

  function draw() {
    if (idx >= rounds.length) {
      app.innerHTML = `${gameHeader("Clock Time")}
        <div class="quiz-result"><div class="big">${score}/${rounds.length}</div><p>correct</p>
        <button class="btn primary" id="again">Play again</button></div>`;
      bindBackGames();
      document.getElementById("again").onclick = renderClockGame;
      return;
    }
    const round = rounds[idx];
    const distractors = shuffle(CLOCK_GAME.filter((c) => c.phrase !== round.phrase)).slice(0, 3).map((c) => c.phrase);
    const options = shuffle([round.phrase, ...distractors]);

    app.innerHTML = `
      ${gameHeader("Clock Time")}
      <p class="page-sub">Round ${idx + 1}/${rounds.length} · Score: ${score}</p>
      <div class="game-area clock-card">
        <div class="clock-display">${round.time}</div>
        <div class="choice-list">
          ${options.map((o) => `<button class="choice-btn" data-o="${o}">${o}</button>`).join("")}
        </div>
      </div>
    `;
    bindBackGames();
    app.querySelectorAll(".choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const correct = btn.dataset.o === round.phrase;
        app.querySelectorAll(".choice-btn").forEach((b) => {
          b.disabled = true;
          if (b.dataset.o === round.phrase) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
        });
        if (correct) score++;
        setTimeout(() => { idx++; draw(); }, 900);
      });
    });
  }
  draw();
}

/* --- Plural matching game --- */
function renderPluralGame() {
  const pairs = shuffle(PLURAL_GAME).slice(0, 8);
  const lefts = shuffle(pairs.map((p, i) => ({ ...p, key: i })));
  const rights = shuffle(pairs.map((p, i) => ({ ...p, key: i })));
  let selectedLeft = null;
  let matched = new Set();

  function draw() {
    app.innerHTML = `
      ${gameHeader("Plural Match")}
      <p class="page-sub">Match each singular noun with its correct plural form.</p>
      <span class="score-pill">${matched.size}/${pairs.length} matched</span>
      <div class="match-grid">
        <div class="match-col">
          ${lefts.map((l) => `<div class="match-item ${matched.has(l.key) ? "matched" : ""}" data-key="${l.key}" data-side="left">${l.s}</div>`).join("")}
        </div>
        <div class="match-col">
          ${rights.map((r) => `<div class="match-item ${matched.has(r.key) ? "matched" : ""}" data-key="${r.key}" data-side="right">${r.p}</div>`).join("")}
        </div>
      </div>
      ${matched.size === pairs.length ? `<p style="margin-top:16px;"><button class="btn primary" id="again">Play again</button></p>` : ""}
    `;
    bindBackGames();
    document.getElementById("again")?.addEventListener("click", renderPluralGame);

    app.querySelectorAll(".match-item").forEach((el) => {
      if (matched.has(Number(el.dataset.key))) return;
      el.addEventListener("click", () => {
        const side = el.dataset.side;
        const key = Number(el.dataset.key);
        if (side === "left") {
          app.querySelectorAll('.match-item[data-side="left"]').forEach((x) => x.classList.remove("selected"));
          el.classList.add("selected");
          selectedLeft = key;
        } else if (selectedLeft !== null) {
          if (key === selectedLeft) {
            matched.add(key);
            selectedLeft = null;
            draw();
          } else {
            el.classList.add("wrong-flash");
            setTimeout(() => el.classList.remove("wrong-flash"), 400);
          }
        }
      });
    });
  }
  draw();
}

/* --- Conjugation builder --- */
function renderConjugationGame() {
  const pronouns = Object.keys(CONJ_ENDINGS);
  let rounds = [];
  CONJUGATION_VERBS.forEach((v) => pronouns.forEach((p) => rounds.push({ verb: v, pronoun: p })));
  rounds = shuffle(rounds).slice(0, 10);
  let idx = 0, score = 0;

  function draw() {
    if (idx >= rounds.length) {
      app.innerHTML = `${gameHeader("Conjugation Builder")}
        <div class="quiz-result"><div class="big">${score}/${rounds.length}</div><p>correct</p>
        <button class="btn primary" id="again">Play again</button></div>`;
      bindBackGames();
      document.getElementById("again").onclick = renderConjugationGame;
      return;
    }
    const r = rounds[idx];
    const stem = r.verb.endsWith("en") ? r.verb.slice(0, -2) : r.verb.slice(0, -1);
    const correctEnding = CONJ_ENDINGS[r.pronoun];
    const allEndings = [...new Set(Object.values(CONJ_ENDINGS))];
    const options = shuffle(allEndings);

    app.innerHTML = `
      ${gameHeader("Conjugation Builder")}
      <p class="page-sub">Round ${idx + 1}/${rounds.length} · Score: ${score}</p>
      <div class="game-area clock-card">
        <p style="font-size:1.1rem;">Conjugate <strong>${r.verb}</strong> for <strong>${r.pronoun}</strong>:</p>
        <div class="clock-display" style="font-size:2.2rem;">${r.pronoun} ${stem}<span id="blank">___</span></div>
        <div class="choice-list">
          ${options.map((o) => `<button class="choice-btn" data-o="${o}">${stem}${o}</button>`).join("")}
        </div>
      </div>
    `;
    bindBackGames();
    app.querySelectorAll(".choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = btn.dataset.o;
        const correct = chosen === correctEnding;
        app.querySelectorAll(".choice-btn").forEach((b) => {
          b.disabled = true;
          if (b.dataset.o === correctEnding) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
        });
        if (correct) score++;
        setTimeout(() => { idx++; draw(); }, 900);
      });
    });
  }
  draw();
}

/* ===================== QUIZ ===================== */

function buildQuizPool() {
  const pool = [];
  DECKS.forEach((d) => d.cards.forEach((c) => pool.push({ ...c, deck: d.title })));
  return pool;
}

function renderQuizIntro() {
  app.innerHTML = `
    <h1 class="page-title">Quiz</h1>
    <p class="page-sub">A randomized multiple-choice test pulling from all vocabulary decks. Translate German → English.</p>
    <div class="game-area" style="text-align:center;">
      <p>Choose quiz length:</p>
      <div class="flash-controls" style="justify-content:center;">
        <button class="btn" data-n="10">10 questions</button>
        <button class="btn" data-n="20">20 questions</button>
        <button class="btn primary" data-n="40">40 questions</button>
      </div>
    </div>
  `;
  app.querySelectorAll("[data-n]").forEach((btn) =>
    btn.addEventListener("click", () => runQuiz(Number(btn.dataset.n)))
  );
}

function runQuiz(n) {
  const pool = buildQuizPool();
  const questions = shuffle(pool).slice(0, Math.min(n, pool.length));
  let idx = 0, score = 0;

  function draw() {
    if (idx >= questions.length) {
      const pct = Math.round((score / questions.length) * 100);
      app.innerHTML = `
        <h1 class="page-title">Quiz Result</h1>
        <div class="quiz-result">
          <div class="big">${score}/${questions.length}</div>
          <p>${pct}% correct</p>
          <button class="btn primary" id="retry">Try again</button>
        </div>
      `;
      document.getElementById("retry").onclick = renderQuizIntro;
      return;
    }
    const q = questions[idx];
    const distractors = shuffle(pool.filter((p) => p.en !== q.en)).slice(0, 3).map((p) => p.en);
    const options = shuffle([q.en, ...distractors]);

    app.innerHTML = `
      <p class="quiz-progress">Question ${idx + 1}/${questions.length} · Score: ${score}</p>
      <div class="quiz-q">${q.de}</div>
      <div class="choice-list">
        ${options.map((o) => `<button class="choice-btn" data-o="${o}">${o}</button>`).join("")}
      </div>
    `;
    app.querySelectorAll(".choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const correct = btn.dataset.o === q.en;
        app.querySelectorAll(".choice-btn").forEach((b) => {
          b.disabled = true;
          if (b.dataset.o === q.en) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
        });
        if (correct) score++;
        setTimeout(() => { idx++; draw(); }, 850);
      });
    });
  }
  draw();
}

/* ===================== INIT ===================== */
render("home");
