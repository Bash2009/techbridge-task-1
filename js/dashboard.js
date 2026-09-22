/* ========================================
   TechBridge - Intern Dashboard
   Interactive Task Tracker + Tech Explorer
   ======================================== */

/* ── Task Data ── */
const tasks = [
  {
    id: 1,
    number: 1,
    title: "Build the TechBridge Homepage",
    day: "Day 1",
    difficulty: "Beginner",
    description:
      "Create the first version of the TechBridge website using HTML and CSS.",
    status: "completed",
  },
  {
    id: 2,
    number: 2,
    title: "Build the TechBridge Programs Experience",
    day: "Day 4",
    difficulty: "Beginner",
    description:
      "Create a Programs experience presenting TechBridge's available learning programs.",
    status: "completed",
  },
  {
    id: 3,
    number: 3,
    title: "Build the Internship Tasks Experience",
    day: "Day 8",
    difficulty: "Beginner \u2192 Intermediate",
    description:
      "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.",
    status: "completed",
  },
  {
    id: 4,
    number: 4,
    title: "Build an Interactive Internship Roadmap",
    day: "Day 11",
    difficulty: "Beginner \u2192 Intermediate",
    description:
      "Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.",
    status: "completed",
  },
  {
    id: 5,
    number: 5,
    title: "Build the Intern Registration Experience",
    day: "Day 15",
    difficulty: "Intermediate",
    description:
      "Create a professional registration and onboarding interface for TechBridge interns.",
    status: "completed",
  },
  {
    id: 6,
    number: 6,
    title: "Build the Task Submission System",
    day: "Day 19",
    difficulty: "Intermediate",
    description:
      "Create an interface through which interns can prepare and submit their task work.",
    status: "in-progress",
  },
  {
    id: 7,
    number: 7,
    title: "Build the Intern Dashboard",
    day: "Day 22",
    difficulty: "Intermediate",
    description:
      "Create a dashboard where an intern can view their profile, progress, tasks and submissions.",
    status: "not-started",
  },
  {
    id: 8,
    number: 8,
    title: "Build the Complete TechBridge Platform",
    day: "Day 26",
    difficulty: "Intermediate",
    description:
      "Combine the different components created during the internship into a complete TechBridge platform.",
    status: "not-started",
  },
];

/* ── Technology Data ── */
const technologies = {
  "next.js": {
    name: "Next.js",
    description:
      "Next.js is a powerful React framework created by Vercel that enables developers to build full-stack web applications with server-side rendering, static site generation, and API routes all in one package.",
    features: [
      "Server-side rendering (SSR) for better SEO and performance",
      "Static site generation (SSG) for blazing-fast page loads",
      "API routes to build backend endpoints within the same project",
      "File-based routing that automatically creates pages from your file structure",
      "Built-in image optimization and font optimization",
      "React Server Components for improved performance",
    ],
    useCases: [
      "E-commerce websites requiring fast load times",
      "Marketing landing pages with strong SEO needs",
      "Content-heavy platforms like blogs and documentation sites",
      "Full-stack web applications with complex data requirements",
    ],
    url: "https://nextjs.org",
  },
  "vue.js": {
    name: "Vue.js",
    description:
      "Vue.js is a progressive JavaScript framework designed for building user interfaces. Unlike other monolithic frameworks, Vue is designed to be incrementally adoptable, making it easy to integrate with other libraries or existing projects.",
    features: [
      "Reactive data binding that automatically updates the UI when data changes",
      "Component-based architecture for building reusable UI elements",
      "Simple and intuitive template syntax that extends HTML",
      "Virtual DOM for efficient rendering and updates",
      "Composition API for better code organization in complex components",
      "Lightweight with a small bundle size and fast runtime",
    ],
    useCases: [
      "Single-page applications (SPAs) with rich interactivity",
      "Dynamic dashboards and admin panels",
      "Progressive web apps (PWAs)",
      "Prototyping and integrating into existing projects incrementally",
    ],
    url: "https://vuejs.org",
  },
  "angular": {
    name: "Angular",
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Maintained by Google, it provides a comprehensive solution for building complex, enterprise-scale web applications.",
    features: [
      "Two-way data binding that keeps the model and view in sync",
      "Dependency injection for modular and testable code architecture",
      "TypeScript-first development for strong typing and better tooling",
      "Built-in routing, forms handling, and HTTP client",
      "RxJS integration for handling asynchronous data streams",
      "Angular CLI for scaffolding, building, and deploying projects",
    ],
    useCases: [
      "Large-scale enterprise applications",
      "Complex business dashboards and admin panels",
      "Applications requiring strict architecture and consistency",
      "Long-term projects with large development teams",
    ],
    url: "https://angular.dev",
  },
  backend: {
    name: "Backend Development",
    description:
      "Backend development refers to server-side programming that powers the logic, database interactions, authentication, and API endpoints that frontend applications communicate with. While the frontend handles what users see, the backend handles everything behind the scenes.",
    features: [
      "Server-side logic and business rule processing",
      "Database design, management, and data persistence",
      "User authentication and authorization",
      "RESTful or GraphQL API creation for frontend communication",
      "File handling, caching, and background task processing",
      "Security, rate limiting, and data validation",
    ],
    technologies: [
      {
        name: "Node.js",
        desc: "JavaScript runtime that allows you to build server-side applications using the same language as the frontend.",
      },
      {
        name: "Express.js",
        desc: "Minimal and flexible Node.js web framework for building APIs and web applications.",
      },
      {
        name: "Django",
        desc: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
      },
      {
        name: "Flask",
        desc: "Lightweight Python micro-framework for building small to medium web applications and APIs.",
      },
      {
        name: "Laravel",
        desc: "PHP framework with elegant syntax for building web applications with robust features.",
      },
      {
        name: ".NET",
        desc: "Microsoft's framework for building enterprise-grade web applications using C#.",
      },
    ],
  },
};

/* ── State ── */
let activeFilter = "all";
let activeTech = "next.js";

/* ── DOM Elements ── */
const taskGrid = document.getElementById("task-grid");
const noResults = document.getElementById("no-results");
const filterButtons = document.querySelectorAll(".filter-btn");
const techTabs = document.querySelectorAll(".tech-tab");
const techContent = document.getElementById("tech-content");
const modalBackdrop = document.getElementById("task-modal-backdrop");
const modalClose = document.getElementById("task-modal-close");
const celebrationOverlay = document.getElementById("celebration-overlay");
const celebrationClose = document.getElementById("celebration-close");

/* ── localStorage ── */
const STORAGE_KEY = "techbridge-task-progress";

function saveProgress() {
  const data = tasks.map(function (t) {
    return { id: t.id, status: t.status };
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    data.forEach(function (item) {
      const task = tasks.find(function (t) {
        return t.id === item.id;
      });
      if (task) task.status = item.status;
    });
  } catch (e) {
    // ignore
  }
}

/* ── Progress Updates ── */
function updateProgress() {
  var completedCount = 0;
  tasks.forEach(function (t) {
    if (t.status === "completed") completedCount++;
  });
  var remaining = tasks.length - completedCount;
  var percent = Math.round((completedCount / tasks.length) * 100);

  document.getElementById("stat-completed").textContent = completedCount;
  document.getElementById("stat-remaining").textContent = remaining;
  document.getElementById("stat-percent").textContent = percent + "%";
  document.getElementById("progress-text").textContent =
    completedCount + " / " + tasks.length + " Tasks Completed";
  document.getElementById("progress-percent-label").textContent = percent + "%";
  document.getElementById("progress-remaining-text").textContent =
    remaining + " Task" + (remaining !== 1 ? "s" : "") + " Remaining";
  document.getElementById("progress-fill").style.width = percent + "%";
}

/* ── Task Rendering ── */
function renderTasks() {
  var filtered = tasks.filter(function (t) {
    if (activeFilter === "all") return true;
    return t.status === activeFilter;
  });

  taskGrid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  filtered.forEach(function (task) {
    var card = document.createElement("div");
    card.className = "task-card";

    var statusClass = "task-card_status--" + task.status;
    var statusLabel =
      task.status === "completed"
        ? "Completed"
        : task.status === "in-progress"
          ? "In Progress"
          : "Not Started";

    var numStr = task.number < 10 ? "0" + task.number : String(task.number);

    var completeBtnClass = "btn btn-sm btn-outline task-card_btn task-card_btn--complete";
    var completeBtnText = "Mark as Completed";
    if (task.status === "completed") {
      completeBtnClass += " is-completed";
      completeBtnText = "Completed";
    }

    card.innerHTML =
      '<div class="doppel-card">' +
      '<div class="doppel-card_inner">' +
      '<div class="task-card_header">' +
      '<span class="task-card_number">' + numStr + "</span>" +
      '<span class="task-card_status ' + statusClass + '">' + statusLabel + "</span>" +
      "</div>" +
      '<h3 class="task-card_title">' + task.title + "</h3>" +
      '<p class="task-card_desc">' + task.description + "</p>" +
      '<div class="task-card_buttons">' +
      '<button class="' + completeBtnClass + '" data-id="' + task.id + '">' +
      completeBtnText +
      "</button>" +
      '<button class="btn btn-sm btn-outline task-card_btn task-card_btn--view" data-id="' + task.id + '">' +
      "View Task" +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>";

    taskGrid.appendChild(card);
  });

  // Attach event listeners
  taskGrid.querySelectorAll(".task-card_btn--complete").forEach(function (btn) {
    btn.addEventListener("click", function () {
      markCompleted(Number(btn.dataset.id));
    });
  });

  taskGrid.querySelectorAll(".task-card_btn--view").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openTaskModal(Number(btn.dataset.id));
    });
  });
}

/* ── Mark Completed ── */
function markCompleted(id) {
  var task = tasks.find(function (t) {
    return t.id === id;
  });
  if (!task || task.status === "completed") return;

  task.status = "completed";
  saveProgress();
  updateProgress();
  renderTasks();

  // Check if all completed
  var allDone = tasks.every(function (t) {
    return t.status === "completed";
  });
  if (allDone) {
    showCelebration();
  }
}

/* ── Celebration ── */
function showCelebration() {
  celebrationOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function hideCelebration() {
  celebrationOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

celebrationClose.addEventListener("click", hideCelebration);
celebrationOverlay.addEventListener("click", function (e) {
  if (e.target === celebrationOverlay) hideCelebration();
});

/* ── Task Modal ── */
function openTaskModal(id) {
  var task = tasks.find(function (t) {
    return t.id === id;
  });
  if (!task) return;

  var statusLabel =
    task.status === "completed"
      ? "Completed"
      : task.status === "in-progress"
        ? "In Progress"
        : "Not Started";

  var numStr = task.number < 10 ? "0" + task.number : String(task.number);

  document.getElementById("task-modal-num").textContent = "Task " + numStr;
  document.getElementById("task-modal-status").textContent = statusLabel;
  document.getElementById("task-modal-title").textContent = task.title;
  document.getElementById("task-modal-desc").textContent = task.description;
  document.getElementById("task-modal-day").textContent = task.day;
  document.getElementById("task-modal-diff").textContent = task.difficulty;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeTaskModal() {
  modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeTaskModal);
modalBackdrop.addEventListener("click", function (e) {
  if (e.target === modalBackdrop) closeTaskModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (modalBackdrop.classList.contains("open")) closeTaskModal();
    if (celebrationOverlay.classList.contains("show")) hideCelebration();
  }
});

/* ── Filters ── */
filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderTasks();
  });
});

/* ── Technology Explorer ── */
function renderTechContent(key) {
  var tech = technologies[key];
  if (!tech) return;

  var html = '<h2 class="tech-content_name">' + tech.name + "</h2>";
  html += '<p class="tech-content_desc">' + tech.description + "</p>";

  html += '<h3 class="tech-content_section-title">Key Features</h3>';
  html += '<ul class="tech-content_list">';
  tech.features.forEach(function (f) {
    html += "<li>" + f + "</li>";
  });
  html += "</ul>";

  if (tech.useCases) {
    html += '<h3 class="tech-content_section-title">Common Use Cases</h3>';
    html += '<ul class="tech-content_list">';
    tech.useCases.forEach(function (u) {
      html += "<li>" + u + "</li>";
    });
    html += "</ul>";
  }

  if (tech.technologies) {
    html += '<h3 class="tech-content_section-title">Popular Backend Technologies</h3>';
    html += '<div class="tech-backend-grid">';
    tech.technologies.forEach(function (t) {
      html +=
        '<div class="tech-backend-item">' +
        '<span class="tech-backend-name">' + t.name + "</span>" +
        '<span class="tech-backend-desc">' + t.desc + "</span>" +
        "</div>";
    });
    html += "</div>";
  }

  if (tech.url) {
    html +=
      '<a class="tech-content_url" href="' +
      tech.url +
      '" target="_blank" rel="noopener noreferrer">' +
      "Visit " +
      tech.name +
      ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg></a>';
  }

  techContent.innerHTML = html;
}

techTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    techTabs.forEach(function (t) {
      t.classList.remove("active");
    });
    tab.classList.add("active");
    activeTech = tab.dataset.tech;
    renderTechContent(activeTech);
  });
});

/* ── Initialize ── */
loadProgress();
updateProgress();
renderTasks();
renderTechContent(activeTech);
