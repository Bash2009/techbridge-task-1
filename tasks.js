// ========================================
// TechBridge - Interactive Internship Roadmap
// ========================================

// --- Track Data (Arrays of Objects) ---

var dataAnalyticsTasks = [
	{
		number: 1,
		title: "Data Cleaning Basics",
		day: "Day 1",
		description:
			"Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.",
		difficulty: "Beginner",
	},
	{
		number: 2,
		title: "Formulas & Pivot Tables",
		day: "Day 4",
		description:
			"Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.",
		difficulty: "Beginner",
	},
	{
		number: 3,
		title: "Data Visualization",
		day: "Day 8",
		description:
			"Create charts and a simple dashboard that communicate useful insights from a dataset.",
		difficulty: "Beginner \u2192 Intermediate",
	},
	{
		number: 4,
		title: "Introduction to SQL",
		day: "Day 11",
		description:
			"Practice basic SQL queries and use them to answer real-world questions about data.",
		difficulty: "Beginner \u2192 Intermediate",
	},
	{
		number: 5,
		title: "SQL Joins & Aggregations",
		day: "Day 15",
		description:
			"Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.",
		difficulty: "Intermediate",
	},
	{
		number: 6,
		title: "Lookup Functions & Data Wrangling",
		day: "Day 19",
		description:
			"Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.",
		difficulty: "Intermediate",
	},
	{
		number: 7,
		title: "Mini Analysis Project",
		day: "Day 22",
		description:
			"Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.",
		difficulty: "Intermediate",
	},
	{
		number: 8,
		title: "Capstone Project",
		day: "Day 26",
		description:
			"Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.",
		difficulty: "Intermediate",
	},
];

var webDevTasks = [
	{
		number: 1,
		title: "Build the TechBridge Homepage",
		day: "Day 1",
		description:
			"Create the first version of the TechBridge website using HTML and CSS.",
		difficulty: "Beginner",
	},
	{
		number: 2,
		title: "Build the TechBridge Programs Experience",
		day: "Day 4",
		description:
			"Create a Programs experience presenting TechBridge\u2019s available learning programs.",
		difficulty: "Beginner",
	},
	{
		number: 3,
		title: "Build the Internship Tasks Experience",
		day: "Day 8",
		description:
			"Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.",
		difficulty: "Beginner \u2192 Intermediate",
	},
	{
		number: 4,
		title: "Build an Interactive Internship Roadmap",
		day: "Day 11",
		description:
			"Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.",
		difficulty: "Beginner \u2192 Intermediate",
	},
	{
		number: 5,
		title: "Build the Intern Registration Experience",
		day: "Day 15",
		description:
			"Create a professional registration and onboarding interface for TechBridge interns.",
		difficulty: "Intermediate",
	},
	{
		number: 6,
		title: "Build the Task Submission System",
		day: "Day 19",
		description:
			"Create an interface through which interns can prepare and submit their task work.",
		difficulty: "Intermediate",
	},
	{
		number: 7,
		title: "Build the Intern Dashboard",
		day: "Day 22",
		description:
			"Create a dashboard where an intern can view their profile, progress, tasks and submissions.",
		difficulty: "Intermediate",
	},
	{
		number: 8,
		title: "Build the Complete TechBridge Internship Platform",
		day: "Day 26",
		description:
			"Combine the different components created during the internship into a complete TechBridge platform.",
		difficulty: "Intermediate",
	},
];

// --- Variables ---

var selectedTrack = "web-development";
var motionReduced = window.matchMedia(
	"(prefers-reduced-motion: reduce)"
).matches;

// --- DOM Elements ---

var roadmap = document.querySelector(".roadmap");
var trackBtns = document.querySelectorAll(".track-btn");
var viewingName = document.querySelector(".currently-viewing_name");
var viewingSection = document.querySelector(".currently-viewing");

// --- Helper Functions ---

function getDifficultyClass(difficulty) {
	switch (difficulty) {
		case "Beginner":
			return "diff-beginner";
		case "Beginner \u2192 Intermediate":
			return "diff-beginner-int";
		case "Intermediate":
			return "diff-intermediate";
		default:
			return "diff-beginner";
	}
}

function getDifficultyAttr(difficulty) {
	switch (difficulty) {
		case "Beginner":
			return "beginner";
		case "Beginner \u2192 Intermediate":
			return "beginner-intermediate";
		case "Intermediate":
			return "intermediate";
		default:
			return "beginner";
	}
}

// --- Render Function ---

function renderTasks(track) {
	var tasks = track === "data-analytics" ? dataAnalyticsTasks : webDevTasks;

	var html =
		'<div class="roadmap-start">' +
		'<span class="roadmap-start_label">' +
		'<span class="roadmap-start_dot"></span>' +
		"Internship Begins" +
		"</span>" +
		"</div>";

	for (var index = 0; index < tasks.length; index++) {
		var task = tasks[index];
		var isEvenChild = index % 2 === 0;
		var diffClass = getDifficultyClass(task.difficulty);
		var diffAttr = getDifficultyAttr(task.difficulty);
		var isCapstone = task.number === 8;
		var taskNum = task.number < 10 ? "0" + task.number : String(task.number);

		var capstoneClass = isCapstone ? " roadmap-step--capstone" : "";

		var cardHtml =
			'<div class="roadmap-card">' +
			'<div class="roadmap-card_inner">' +
			'<div class="roadmap-card_header">' +
			'<span class="roadmap-card_day">' +
			task.day +
			"</span>" +
			'<span class="roadmap-card_badge ' +
			diffClass +
			'">' +
			'<span class="roadmap-card_badge-dot"></span>' +
			task.difficulty +
			"</span>" +
			"</div>" +
			'<h3 class="roadmap-card_title">' +
			task.title +
			"</h3>" +
			'<p class="roadmap-card_desc">' +
			task.description +
			"</p>" +
			"</div>" +
			"</div>";

		var nodeHtml =
			'<div class="roadmap-step_node">' +
			'<div class="roadmap-step_arm"></div>' +
			'<div class="roadmap-step_dot">' +
			taskNum +
			"</div>" +
			'<div class="roadmap-step_arm"></div>' +
			"</div>";

		if (isEvenChild) {
			html +=
				'<div class="roadmap-step' +
				capstoneClass +
				'" data-difficulty="' +
				diffAttr +
				'">' +
				'<div class="roadmap-step_spacer"></div>' +
				nodeHtml +
				'<div class="roadmap-step_content">' +
				cardHtml +
				"</div>" +
				"</div>";
		} else {
			html +=
				'<div class="roadmap-step' +
				capstoneClass +
				'" data-difficulty="' +
				diffAttr +
				'">' +
				'<div class="roadmap-step_content">' +
				cardHtml +
				"</div>" +
				nodeHtml +
				'<div class="roadmap-step_spacer"></div>' +
				"</div>";
		}
	}

	html +=
		'<div class="roadmap-end">' +
		'<span class="roadmap-end_label">' +
		'<span class="roadmap-end_dot"></span>' +
		"Platform Complete" +
		"</span>" +
		"</div>";

	roadmap.innerHTML = html;
}

// --- Track Switching ---

function updateTrackButtons(track) {
	for (var i = 0; i < trackBtns.length; i++) {
		var btn = trackBtns[i];
		if (btn.getAttribute("data-track") === track) {
			btn.classList.add("active");
			btn.setAttribute("aria-pressed", "true");
		} else {
			btn.classList.remove("active");
			btn.setAttribute("aria-pressed", "false");
		}
	}
}

function updateCurrentlyViewing(track) {
	if (viewingName) {
		viewingName.textContent =
			track === "data-analytics" ? "DATA ANALYTICS" : "WEB DEVELOPMENT";
	}
	if (viewingSection) {
		viewingSection.classList.remove("track-analytics", "track-dev");
		viewingSection.classList.add(
			track === "data-analytics" ? "track-analytics" : "track-dev"
		);
	}
}

function switchTrack(track) {
	if (track === selectedTrack) return;
	selectedTrack = track;

	updateTrackButtons(track);
	updateCurrentlyViewing(track);

	if (motionReduced) {
		renderTasks(track);
	} else {
		roadmap.classList.add("switching");
		setTimeout(function () {
			renderTasks(track);
			roadmap.classList.remove("switching");
		}, 300);
	}
}

// --- Event Listeners ---

for (var i = 0; i < trackBtns.length; i++) {
	trackBtns[i].addEventListener("click", function () {
		switchTrack(this.getAttribute("data-track"));
	});
}

// --- Initialize ---

renderTasks(selectedTrack);
