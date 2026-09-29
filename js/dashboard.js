/* ========================================
   TechBridge - Intern Dashboard
   Interactive Task Tracker + Tech Explorer
   Tasks are loaded from the backend REST API
   ======================================== */

/* ── API Config ── */
const API_BASE = "http://localhost:3000/api";

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
      "Vue.js is a progressive JavaScript framework designed for building user interfaces. Unlike other monolithic frameworks, Vue is designed to be incrementally adoptable, making it easy to integrate with libraries and existing projects.",
    features: [
      "Reactive data binding that automatically updates the UI when data changes",
      "Component-based architecture for building reusable UI elements",
      "Simple and intuitive template syntax that extends HTML",
      "Virtual DOM that efficiently updates and renders collections",
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
  angular: {
    name: "Angular",
    description:
      "Angular is a platform and framework for building single-page client applications with HTML and TypeScript. Maintained by Google, it provides a complete solution for application development with built-in tools for routing, forms, HTTP communication, and testing.",
    features: [
      "Two-way data binding that keeps the model and view in sync",
      "Dependency injection for modular and testable code architecture",
      "TypeScript-first approach for strong typing and better tooling",
      "Integrated routing, forms handling, and HTTP client",
      "RxJS for handling asynchronous data streams",
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
        desc: "Lightweight Python micro web framework for building web applications and APIs.",
      },
      {
        name: "Laravel",
        desc: "PHP framework with elegant syntax for building web applications.",
      },
      {
        name: ".NET",
        desc: "Microsoft's framework for building enterprise-grade web applications using C#.",
      },
    ],
  },
};

/* ── State ── */
let tasks = [];
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
const loadingState = document.getElementById("tasks-loading");
const errorState = document.getElementById("tasks-error");
const retryButton = document.getElementById("tasks-retry");
const backendStatus = document.getElementById("backend-status");

/* ── Backend Status Indicator ── */
function setBackendStatus(connected) {
  if (!backendStatus) return;
  backendStatus.textContent = connected
    ? "Backend Status: Connected"
    : "Backend Status: Offline";
  backendStatus.classList.toggle("is-connected", connected);
  backendStatus.classList.toggle("is-offline", !connected);
}

/* ── Progress Updates ── */
function updateProgress() {
  if (tasks.length === 0) return;

  var completedCount = 0;
  tasks.forEach(function (t) {
    if (t.status === "completed") completedCount++;
  });
  var remaining = tasks.length - completedCount;
  var percent = Math.round((completedCount / tasks.length) * 100);

  document.getElementById("stat-total").textContent = tasks.length;
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

/* ── UI States ── */
function showLoading() {
  loadingState.style.display = "block";
  errorState.style.display = "none";
  noResults.style.display = "none";
  taskGrid.innerHTML = "";
}

function showError() {
  loadingState.style.display = "none";
  errorState.style.display = "block";
  noResults.style.display = "none";
  taskGrid.innerHTML = "";
  setBackendStatus(false);
}

function hideStates() {
  loadingState.style.display = "none";
  errorState.style.display = "none";
}

/* ── Load Tasks From API ── */
async function loadTasks() {
  showLoading();

  try {
    var response = await fetch(API_BASE + "/tasks");
    if (!response.ok) {
      throw new Error("API returned " + response.status);
    }

    tasks = await response.json();
    setBackendStatus(true);
    hideStates();
    updateProgress();
    renderTasks();
  } catch (err) {
    tasks = [];
    showError();
  }
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

    var completeBtnClass =
      "btn btn-sm btn-outline task-card_btn task-card_btn--complete";
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

/* ── Mark Completed (PUT to API) ── */
async function markCompleted(id) {
  var task = tasks.find(function (t) {
    return t.id === id;
  });
  if (!task || task.status === "completed") return;

  try {
    var response = await fetch(API_BASE + "/tasks/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "completed" }),
    });

    if (!response.ok) {
      throw new Error("API returned " + response.status);
    }

    var updated = await response.json();
    task.status = updated.status;
    setBackendStatus(true);
    updateProgress();
    renderTasks();

    var allDone = tasks.every(function (t) {
      return t.status === "completed";
    });
    if (allDone) {
      showCelebration();
    }
  } catch (err) {
    setBackendStatus(false);
    alert("Unable to update task. Please check your connection and try again.");
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

/* ── Task Modal (GET single task from API) ── */
async function openTaskModal(id) {
  document.getElementById("task-modal-num").textContent = "Loading...";
  document.getElementById("task-modal-status").textContent = "";
  document.getElementById("task-modal-title").textContent = "";
  document.getElementById("task-modal-desc").textContent = "Loading task details...";
  document.getElementById("task-modal-day").textContent = "";
  document.getElementById("task-modal-diff").textContent = "";

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();

  try {
    var response = await fetch(API_BASE + "/tasks/" + id);
    if (!response.ok) {
      throw new Error("API returned " + response.status);
    }

    var task = await response.json();
    setBackendStatus(true);

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
  } catch (err) {
    setBackendStatus(false);
    document.getElementById("task-modal-num").textContent = "Error";
    document.getElementById("task-modal-title").textContent = "Unable to load task";
    document.getElementById("task-modal-desc").textContent =
      "Please check your connection or try again.";
    document.getElementById("task-modal-day").textContent = "-";
    document.getElementById("task-modal-diff").textContent = "-";
  }
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

/* ── Retry Button ── */
retryButton.addEventListener("click", loadTasks);

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
renderTechContent(activeTech);
loadTasks();
