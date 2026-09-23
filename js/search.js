/* global CORPUS */

// A small TF-IDF search over the resume lines in corpus.js.
// It runs entirely in the browser: no server, no API calls.

const STOPWORDS = new Set(
  (
    "a about an and are as at be by can did do does for from has have how i " +
    "in into is it its me my of on or so than that the their them then this " +
    "to was were what with within you your"
  ).split(" "),
);

// Common abbreviations a recruiter might type, expanded to words the
// resume actually uses.
const ALIASES = {
  rag: ["retrieval", "augmented", "generation"],
  llm: ["llama", "gpt"],
  llms: ["llama", "gpt"],
  genai: ["gpt", "llama"],
  rl: ["reinforcement"],
  nlp: ["spacy", "nltk", "text"],
  ml: ["machine", "learning"],
  cv: ["image"],
  vision: ["image"],
  agentic: ["agent"],
  dpo: ["preference", "optimization"],
  peft: ["lora", "qlora", "parameter", "efficient"],
  finetuning: ["fine", "tuning"],
  sql: ["postgresql", "mysql"],
  aws: ["cloud"],
};

// Viridis stops, from deep purple to yellow.
const VIRIDIS = [
  [68, 1, 84],
  [59, 82, 139],
  [33, 145, 140],
  [94, 201, 98],
  [253, 231, 37],
];

function stem(word) {
  let w = word;
  if (w.length <= 3) {
    return w;
  }
  if (w.endsWith("ies") && w.length > 4) {
    w = `${w.slice(0, -3)}y`;
  } else if (/(ss|x|ch|sh)es$/.test(w)) {
    w = w.slice(0, -2);
  } else if (w.endsWith("s") && !/(ss|us|is)$/.test(w)) {
    w = w.slice(0, -1);
  }
  if (w.endsWith("ing") && w.length > 5) {
    w = w.slice(0, -3);
  } else if (w.endsWith("ed") && w.length > 4) {
    w = w.slice(0, -2);
  }
  return w;
}

function rawTokens(text) {
  return text.toLowerCase().match(/[a-z0-9]+/g) || [];
}

function tokenize(text) {
  return rawTokens(text)
    .filter((token) => !STOPWORDS.has(token))
    .map(stem);
}

function queryTerms(query) {
  const expanded = rawTokens(query).flatMap((token) => [
    token,
    ...(ALIASES[token] || []),
  ]);
  const terms = expanded.filter((token) => !STOPWORDS.has(token)).map(stem);
  return [...new Set(terms)];
}

function buildIndex(docs) {
  const docTerms = docs.map((doc) =>
    tokenize(`${doc.source} ${doc.text} ${doc.keywords || ""}`),
  );

  const docFrequency = new Map();
  docTerms.forEach((terms) => {
    new Set(terms).forEach((term) => {
      docFrequency.set(term, (docFrequency.get(term) || 0) + 1);
    });
  });

  const total = docs.length;
  const idf = new Map();
  docFrequency.forEach((count, term) => {
    idf.set(term, Math.log((total + 1) / (count + 1)) + 1);
  });

  const vectors = docTerms.map((terms) => {
    const termCounts = new Map();
    terms.forEach((term) => {
      termCounts.set(term, (termCounts.get(term) || 0) + 1);
    });

    const weights = new Map();
    let sumOfSquares = 0;
    termCounts.forEach((count, term) => {
      const weight = (1 + Math.log(count)) * idf.get(term);
      weights.set(term, weight);
      sumOfSquares += weight * weight;
    });

    return { weights, norm: Math.sqrt(sumOfSquares) };
  });

  return { docs, idf, vectors };
}

function search(index, query, limit = 5) {
  const terms = queryTerms(query).filter((term) => index.idf.has(term));
  if (terms.length === 0) {
    return [];
  }

  let querySumOfSquares = 0;
  terms.forEach((term) => {
    querySumOfSquares += index.idf.get(term) ** 2;
  });
  const queryNorm = Math.sqrt(querySumOfSquares);

  return index.vectors
    .map((vector, i) => {
      let dot = 0;
      terms.forEach((term) => {
        if (vector.weights.has(term)) {
          dot += index.idf.get(term) * vector.weights.get(term);
        }
      });
      return { doc: index.docs[i], score: dot / (queryNorm * vector.norm) };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function viridis(t) {
  const clamped = Math.min(Math.max(t, 0), 1);
  const position = clamped * (VIRIDIS.length - 1);
  const i = Math.min(Math.floor(position), VIRIDIS.length - 2);
  const fraction = position - i;
  const [r, g, b] = VIRIDIS[i].map((channel, k) =>
    Math.round(channel + (VIRIDIS[i + 1][k] - channel) * fraction),
  );
  return `rgb(${r}, ${g}, ${b})`;
}

// Builds text nodes instead of using innerHTML, so nothing in the corpus
// or the query is ever parsed as HTML.
function appendHighlighted(parent, text, terms) {
  text.split(/([A-Za-z0-9]+)/).forEach((part, i) => {
    if (!part) {
      return;
    }
    const lower = part.toLowerCase();
    const isWord = i % 2 === 1;
    if (isWord && !STOPWORDS.has(lower) && terms.has(stem(lower))) {
      const mark = document.createElement("mark");
      mark.textContent = part;
      parent.appendChild(mark);
    } else {
      parent.appendChild(document.createTextNode(part));
    }
  });
}

function renderResult(result, topScore, terms) {
  const relative = result.score / topScore;

  const item = document.createElement("li");
  item.className = "result";

  const scoreBox = document.createElement("div");
  scoreBox.className = "result-score";
  const track = document.createElement("span");
  track.className = "score-track";
  track.setAttribute("aria-hidden", "true");
  const fill = document.createElement("span");
  fill.className = "score-fill";
  fill.style.backgroundColor = viridis(0.4 + 0.6 * relative);
  fill.dataset.width = `${Math.max(relative * 100, 6)}%`;
  track.appendChild(fill);
  const value = document.createElement("span");
  value.className = "score-value";
  value.textContent = `Score ${result.score.toFixed(2)}`;
  scoreBox.append(track, value);

  const body = document.createElement("div");
  const source = document.createElement("p");
  source.className = "result-source";
  appendHighlighted(source, result.doc.source, terms);
  const text = document.createElement("p");
  text.className = "result-text";
  appendHighlighted(text, result.doc.text, terms);
  const link = document.createElement("a");
  link.className = "result-link";
  link.href = `./resume.html#${result.doc.id}`;
  link.textContent = "See this line on my resume";
  body.append(source, text, link);

  item.append(scoreBox, body);
  return item;
}

function initSearch() {
  const form = document.getElementById("search-form");
  if (!form) {
    return;
  }
  const input = document.getElementById("search-input");
  const status = document.getElementById("search-status");
  const list = document.getElementById("search-results");
  const index = buildIndex(CORPUS);

  function run(query) {
    const trimmed = query.trim();
    list.replaceChildren();

    if (!trimmed) {
      status.textContent = "Type a topic first, or pick one of the suggestions.";
      input.focus();
      return;
    }

    const results = search(index, trimmed);
    if (results.length === 0) {
      status.textContent = `Nothing on my resume matches "${trimmed}". Try a broader word, like retrieval, classification, or agents.`;
      return;
    }

    const label = results.length === 1 ? "line matches" : "lines match";
    status.textContent = `${results.length} ${label} "${trimmed}", best match first.`;

    const terms = new Set(queryTerms(trimmed));
    const topScore = results[0].score;
    results.forEach((result) => {
      list.appendChild(renderResult(result, topScore, terms));
    });

    // Let the bars start at zero, then grow to their score.
    requestAnimationFrame(() => {
      list.querySelectorAll(".score-fill").forEach((fill) => {
        fill.style.width = fill.dataset.width;
      });
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    run(input.value);
  });

  document.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.query;
      run(button.dataset.query);
    });
  });
}

if (typeof document !== "undefined") {
  initSearch();
}
