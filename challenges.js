/* ========================================
   TechBridge Challenge Hub
   ======================================== */

const challenges = [
  // ── Data Analytics ──────────────────────
  {
    id: 1,
    name: "Sales Performance Dashboard",
    track: "data-analytics",
    trackLabel: "Data Analytics",
    difficulty: "Beginner",
    description:
      "Analyze a company's quarterly sales data to identify top-performing products, seasonal trends, and revenue patterns. Build a clear, visual dashboard that presents key metrics at a glance.",
    outcome:
      "A working dashboard that displays monthly revenue, top products, and sales trends using charts and summary cards.",
    objective:
      "Learn how to organize raw sales data, calculate important business metrics, and present findings in a visual format that stakeholders can easily understand.",
    skills: ["Spreadsheet formulas", "Data sorting & filtering", "Chart creation", "Basic data cleaning"],
    tools: ["Microsoft Excel or Google Sheets", "Chart tools (bar, line, pie)", "Sample sales CSV dataset"],
    time: "2 - 3 days",
    result:
      "A clean, interactive sales dashboard showing quarterly performance, product rankings, and month-over-month growth trends."
  },
  {
    id: 2,
    name: "Customer Churn Predictor",
    track: "data-analytics",
    trackLabel: "Data Analytics",
    difficulty: "Intermediate",
    description:
      "Examine customer behavior data to understand why customers stop using a service. Identify patterns that signal a customer is likely to leave and suggest retention strategies.",
    outcome:
      "A report with churn risk indicators, visual breakdowns of customer segments, and actionable recommendations to reduce churn.",
    objective:
      "Develop analytical thinking by investigating customer lifecycle data, identifying at-risk segments, and translating findings into business recommendations.",
    skills: ["Data analysis", "Pivot tables", "Conditional logic", "Trend identification", "Report writing"],
    tools: ["Excel or Google Sheets", "Basic SQL (optional)", "Sample customer dataset"],
    time: "3 - 4 days",
    result:
      "A churn analysis report with risk factors, segment breakdowns, and a summary of retention recommendations backed by data."
  },
  {
    id: 3,
    name: "Inventory Turnover Tracker",
    track: "data-analytics",
    trackLabel: "Data Analytics",
    difficulty: "Beginner",
    description:
      "Work with inventory and sales data to calculate how quickly products sell through stock. Highlight slow-moving items and recommend reorder quantities to optimize inventory levels.",
    outcome:
      "An inventory analysis sheet with turnover rates, slow-mover flags, and reorder suggestions for each product category.",
    objective:
      "Practice calculating business ratios, working with multi-source data, and presenting operational insights that support inventory management decisions.",
    skills: ["Ratio calculations", "Data merging", "Conditional formatting", "Basic forecasting"],
    tools: ["Microsoft Excel or Google Sheets", "Sample inventory and sales datasets"],
    time: "2 - 3 days",
    result:
      "A formatted inventory report with turnover rates per product, slow-mover highlights, and suggested reorder quantities."
  },
  {
    id: 4,
    name: "Marketing Campaign ROI Analyzer",
    track: "data-analytics",
    trackLabel: "Data Analytics",
    difficulty: "Intermediate",
    description:
      "Evaluate the performance of multiple marketing campaigns by comparing spend, reach, conversions, and revenue generated. Determine which channels deliver the best return on investment.",
    outcome:
      "A campaign performance comparison with ROI calculations, channel rankings, and budget allocation recommendations.",
    objective:
      "Learn to work with multi-channel marketing data, calculate ROI and cost-per-acquisition, and derive insights that guide future marketing spend.",
    skills: ["ROI calculation", "Multi-variable comparison", "Data visualization", "Statistical summaries"],
    tools: ["Excel or Google Sheets", "Sample marketing campaign dataset", "Chart tools"],
    time: "3 - 4 days",
    result:
      "A marketing ROI analysis with per-channel performance metrics, visual comparisons, and a recommended budget split for the next quarter."
  },
  {
    id: 5,
    name: "Website Traffic Funnel Analysis",
    track: "data-analytics",
    trackLabel: "Data Analytics",
    difficulty: "Advanced",
    description:
      "Analyze website traffic data across multiple stages of a conversion funnel — from page visits to sign-ups to purchases. Identify where users drop off and what factors correlate with completed conversions.",
    outcome:
      "A funnel visualization with drop-off rates at each stage, segment comparisons, and data-backed improvement suggestions.",
    objective:
      "Apply advanced analytical skills to real web analytics data, understand funnel logic, and produce insights that directly inform product and marketing decisions.",
    skills: ["Funnel analysis", "Cohort segmentation", "Conversion rate calculation", "SQL or Python basics", "Data storytelling"],
    tools: ["Excel, Google Sheets, or Jupyter Notebook", "Sample web analytics dataset", "Optional: basic SQL or Python"],
    time: "4 - 5 days",
    result:
      "A complete funnel report with stage-by-stage conversion rates, user segment breakdowns, and prioritized recommendations to improve conversion."
  },

  // ── Web Development ─────────────────────
  {
    id: 6,
    name: "Responsive Portfolio Site",
    track: "web-development",
    trackLabel: "Web Development",
    difficulty: "Beginner",
    description:
      "Design and build a personal portfolio website that showcases projects, skills, and a brief introduction. The site must look great on phones, tablets, and desktop screens.",
    outcome:
      "A fully responsive, multi-section portfolio site with a hero, about section, project gallery, and contact area.",
    objective:
      "Practice building with semantic HTML, styling with CSS (including media queries), and structuring a real-world multi-page layout from scratch.",
    skills: ["HTML5 semantics", "CSS Flexbox & Grid", "Media queries", "Responsive design principles", "Basic accessibility"],
    tools: ["VS Code or any text editor", "Web browser", "Git & GitHub (for deployment)"],
    time: "2 - 3 days",
    result:
      "A deployed portfolio website with smooth scrolling, mobile-friendly navigation, and a consistent visual design across all screen sizes."
  },
  {
    id: 7,
    name: "Interactive Product Page",
    track: "web-development",
    trackLabel: "Web Development",
    difficulty: "Intermediate",
    description:
      "Build a product listing page where users can filter items by category, sort by price, and view product details in a modal — all without reloading the page.",
    outcome:
      "A single-page product catalog with working filters, sort controls, and a detail overlay for each product.",
    objective:
      "Strengthen JavaScript skills by implementing DOM manipulation, event handling, and dynamic content rendering based on user interaction.",
    skills: ["JavaScript DOM manipulation", "Event listeners", "Array methods (filter, sort, map)", "HTML/CSS layout", "State management basics"],
    tools: ["VS Code", "Web browser developer tools", "Sample product data (JSON)"],
    time: "3 - 4 days",
    result:
      "An interactive product page with real-time filtering, sorting, and a detail modal — all functioning without page refreshes."
  },
  {
    id: 8,
    name: "Advanced Data Visualization Dashboard",
    track: "web-development",
    trackLabel: "Web Development",
    difficulty: "Advanced",
    description:
      "Build an interactive dashboard with multiple chart types — bar, line, pie, and scatter plots — featuring animated transitions, dynamic filters, and hover tooltips using a JavaScript charting library.",
    outcome:
      "A responsive dashboard with at least four chart types, interactive filters, smooth animations, and data-driven insights displayed visually.",
    objective:
      "Master frontend data visualization by binding data to visual elements, creating responsive chart layouts, and building interactive controls that update charts in real time.",
    skills: ["D3.js or Chart.js", "SVG or Canvas basics", "Data binding", "Responsive chart layout", "Animation & transitions"],
    tools: ["VS Code", "D3.js or Chart.js", "Sample JSON dataset", "Web browser"],
    time: "4 - 5 days",
    result:
      "A polished data visualization dashboard with multiple interactive charts, smooth animations, dynamic filtering, and a responsive layout that works across screen sizes."
  },
  {
    id: 9,
    name: "Progressive Web App",
    track: "web-development",
    trackLabel: "Web Development",
    difficulty: "Advanced",
    description:
      "Build a task manager or notes app that works offline, supports installation to the home screen, and uses service workers for caching with local storage for data persistence.",
    outcome:
      "A fully functional PWA that loads offline, stores data in the browser, and can be installed on a phone or desktop without an app store.",
    objective:
      "Learn modern web platform capabilities by implementing service workers, web app manifests, and client-side data storage to create an app-like experience entirely in the browser.",
    skills: ["Service workers", "Web App Manifest", "LocalStorage / IndexedDB", "JavaScript", "Responsive design"],
    tools: ["VS Code", "Web browser", "Lighthouse for PWA auditing"],
    time: "4 - 5 days",
    result:
      "A working progressive web app with offline support, home screen installation, data persistence, and a polished responsive interface."
  },
  {
    id: 10,
    name: "E-Commerce Checkout Flow",
    track: "web-development",
    trackLabel: "Web Development",
    difficulty: "Intermediate",
    description:
      "Design and implement a multi-step checkout process for an online store — from cart review to shipping details to payment confirmation — with form validation at each step.",
    outcome:
      "A three-step checkout flow with working form validation, step indicators, order summary, and a confirmation screen.",
    objective:
      "Practice building complex, multi-step user interfaces with JavaScript, implementing form validation logic, and managing application state across multiple views.",
    skills: ["Multi-step form logic", "JavaScript validation", "CSS transitions", "State management", "Accessible form design"],
    tools: ["VS Code", "Web browser", "Sample product/cart data"],
    time: "3 - 4 days",
    result:
      "A polished checkout flow with progress indicators, validated forms, a live order summary, and a confirmation page — all on a single page without reloads."
  }
];

/* ── State ── */
let activeTrack = "all";
let activeDifficulty = "all";

/* ── DOM References ── */
const grid = document.getElementById("challenge-grid");
const noResults = document.getElementById("no-results");
const trackButtons = document.querySelectorAll(".filter-track-btn");
const difficultyButtons = document.querySelectorAll(".filter-diff-btn");
const modal = document.getElementById("modal-backdrop");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");

/* ── Render Cards ── */
function renderChallenges() {
  const filtered = challenges.filter((c) => {
    const trackMatch = activeTrack === "all" || c.track === activeTrack;
    const diffMatch =
      activeDifficulty === "all" ||
      c.difficulty.toLowerCase() === activeDifficulty;
    return trackMatch && diffMatch;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  filtered.forEach((challenge, i) => {
    const card = document.createElement("div");
    card.className = "challenge-card";
    card.style.animationDelay = `${i * 60}ms`;

    const trackClass =
      challenge.track === "data-analytics" ? "track-analytics" : "track-dev";
    const diffClass = `diff-${challenge.difficulty.toLowerCase()}`;

    card.innerHTML = `
      <div class="doppel-card">
        <div class="doppel-card_inner challenge-card_inner">
          <div class="challenge-card_header">
            <span class="challenge-badge challenge-badge_track ${trackClass}">
              ${challenge.trackLabel}
            </span>
            <span class="challenge-badge challenge-badge_diff ${diffClass}">
              <span class="challenge-badge_dot"></span>
              ${challenge.difficulty}
            </span>
          </div>
          <h3 class="challenge-card_title">${challenge.name}</h3>
          <p class="challenge-card_desc">${challenge.description}</p>
          <div class="challenge-card_outcome">
            <span class="challenge-card_outcome-label">Expected Outcome</span>
            <p class="challenge-card_outcome-text">${challenge.outcome}</p>
          </div>
          <button class="btn btn-outline btn-sm challenge-card_btn" data-id="${challenge.id}">
            View Challenge
            <span class="btn_icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  const remainder = filtered.length % 3;
  const isSingleCol = window.innerWidth <= 768;
  if (remainder === 2 && !isSingleCol) {
    const cards = grid.querySelectorAll(".challenge-card");
    const lastTwo = [cards[cards.length - 2], cards[cards.length - 1]];
    const wrapper = document.createElement("div");
    wrapper.className = "challenge-grid_center";
    lastTwo.forEach((c) => {
      c.style.gridColumn = "";
      c.style.justifySelf = "";
      wrapper.appendChild(c);
    });
    grid.appendChild(wrapper);
  }

  document.querySelectorAll(".challenge-card_btn").forEach((btn) => {
    btn.addEventListener("click", () => openModal(Number(btn.dataset.id)));
  });
}

/* ── Filter: Track ── */
trackButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    trackButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeTrack = btn.dataset.track;
    renderChallenges();
  });
});

/* ── Filter: Difficulty ── */
difficultyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    difficultyButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeDifficulty = btn.dataset.difficulty;
    renderChallenges();
  });
});

/* ── Modal ── */
function openModal(id) {
  const c = challenges.find((ch) => ch.id === id);
  if (!c) return;

  const trackClass =
    c.track === "data-analytics" ? "track-analytics" : "track-dev";
  const diffClass = `diff-${c.difficulty.toLowerCase()}`;

  document.getElementById("modal-title").textContent = c.name;
  document.getElementById("modal-track").className = `challenge-badge challenge-badge_track ${trackClass}`;
  document.getElementById("modal-track").textContent = c.trackLabel;
  document.getElementById("modal-diff").className = `challenge-badge challenge-badge_diff ${diffClass}`;
  document.getElementById("modal-diff").innerHTML = `<span class="challenge-badge_dot"></span> ${c.difficulty}`;
  document.getElementById("modal-objective").textContent = c.objective;
  document.getElementById("modal-time").textContent = c.time;
  document.getElementById("modal-result").textContent = c.result;

  const skillsList = document.getElementById("modal-skills");
  skillsList.innerHTML = c.skills.map((s) => `<li>${s}</li>`).join("");

  const toolsList = document.getElementById("modal-tools");
  toolsList.innerHTML = c.tools.map((t) => `<li>${t}</li>`).join("");

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

/* ── Init ── */
renderChallenges();
