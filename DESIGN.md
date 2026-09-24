# Design Document: Sharthi Abhinay Personal Homepage

## Project Description

This is my personal homepage for CS 5610 Web Development at Northeastern University. It serves two purposes: it meets the requirements of Project 1, a multi-page static front-end site, and it works as a real portfolio for the data science and AI roles I'm applying to as I finish my MS in Computer Science in May 2027.

The site has three pages:

- **Home** opens with "Hello, I'm Sharthi," my photo, a Search my resume tool, and three pieces of selected work.
- **About** tells how I moved from chemical engineering at IIT Patna into AI, what I care about, and a timeline of my path.
- **Resume** lists my education, experience, projects, publication, skills, and accomplishments, and prints as a clean PDF.

Each page ends with its own footer: a simple bar on Home, a "Let's work together" band on About with my email, LinkedIn, GitHub, and a button that copies my email address, and a "More coming soon" band on Resume that links to my GitHub.

It's built with vanilla HTML5, CSS3, and JavaScript ES6 modules, with Bootstrap 5 for the grid and navigation. There is no backend, no framework, and no jQuery.

The creative feature is the resume search. Most portfolios list skills and ask visitors to trust them. Mine lets visitors check for themselves: they type a skill such as "RAG" or "PyTorch," and the page ranks every line of my resume using TF-IDF and cosine similarity, highlights the matching words, and links to the exact line on the resume page. It's a small version of the retrieval step in the RAG systems I built as an Associate Software Engineer at Carelon.

---

## User Personas

### Persona 1: Maya Thompson, the technical recruiter

**Age:** 31
**Role:** Technical recruiter at a health-tech AI company
**Device:** Laptop, and her phone between calls or at career fairs
**Tech literacy:** Moderate. She knows the vocabulary but isn't an engineer.

**Goals:**

- Confirm quickly that a candidate matches a role, for example RAG and LLM experience
- Get a clean resume to forward to the hiring manager
- Contact the candidate in one step

**Frustrations:**

- Portfolios with animation but little substance
- Skills buried deep in long pages
- Resumes that don't open well on a phone

**How she uses the site:**
Maya screens more than 60 candidates a week and has about a minute for each. She needs to know three things fast: what does this person do, can they do what my role needs, and how do I reach them.

---

### Persona 2: David Park, the engineering manager

**Age:** 39
**Role:** Engineering manager on an applied machine learning team
**Device:** Laptop, mostly with the keyboard because of a wrist injury
**Tech literacy:** High. He ships LLM features in production.

**Goals:**

- Judge technical depth: evaluation, latency, and production concerns
- See how the candidate thinks, not just which tools they've touched
- Read real code on GitHub

**Frustrations:**

- Buzzword lists with no evidence
- Inflated or unmeasured claims
- Sites that can't be used without a mouse

**How he uses the site:**
David reads candidate sites carefully in the evening. He looks for numbers first, then opens the repository to see whether the code matches the claims.

---

### Persona 3: Dr. Elena Ruiz, the professor

**Age:** 52
**Role:** Associate professor in public health informatics
**Device:** Laptop, with browser zoom at 150% because of low vision
**Tech literacy:** High in her field, and she reads research closely

**Goals:**

- Understand a student's motivation and research background
- Find and read their published work
- Judge whether their interests fit her lab

**Frustrations:**

- Small, low-contrast text
- Layouts that break when zoomed
- No evidence of research experience

**How she uses the site:**
Elena runs a lab applying machine learning to disease surveillance and is looking for a graduate research assistant. She reads the About page first and follows links to papers.

---

## User Stories

### Story 1: Maya checks for a skill

Maya has an open role for an engineer with retrieval-augmented generation experience. She opens Sharthi's site from his LinkedIn profile and types "RAG" into the search box. Five lines of his resume appear, ranked, with "RAG" and "retrieval" highlighted. The top result mentions an accuracy gain from 66% to 78% for more than 200 users. She clicks "See this line on my resume," and the resume opens with that exact line highlighted. She's convinced in under a minute.

_As a recruiter, I want to search a candidate's resume for a skill so that I can confirm their experience without reading every page._

- 1.1 Typing a query and pressing Enter, or clicking a suggestion chip, shows up to five ranked results.
- 1.2 Matching words are highlighted, and abbreviations like RAG also match "retrieval."
- 1.3 Each result links to its exact line on the resume, which is highlighted on arrival.
- 1.4 An empty or unmatched query shows a helpful message instead of a blank area.

### Story 2: Maya follows up after a career fair

After a career fair, Maya has twenty links and twenty half-remembered conversations. On the train home she opens Sharthi's site on her phone. His photo appears first, above "Hello, I'm Sharthi," and she recognizes him. She opens the About page, scrolls to the "Let's work together" footer, taps Copy next to his email, and pastes the address into her notes to follow up tomorrow.

_As a recruiter on my phone, I want to recognize the candidate and save their contact details quickly so that I can follow up while the conversation is fresh._

- 2.1 At phone widths, the photo appears above the headline and the layout stacks into one column.
- 2.2 The navigation collapses into a menu button that works by touch and keyboard.
- 2.3 The Copy button copies the email address and confirms with "Copied."

### Story 3: Maya forwards the resume

The hiring manager asks Maya for a PDF. She opens the Resume page and clicks "Print or save as PDF." The printout drops the navigation, footer, and colors, leaving a clean black-and-white document with proper margins. She saves it and attaches it to her email.

_As a recruiter, I want a clean PDF of the resume so that I can share it inside my company's hiring system._

- 3.1 The button opens the browser's print dialog.
- 3.2 The print view hides the navigation, the footer, and the button itself, and uses black text with page margins.

### Story 4: David checks whether results were measured

David reads the Selected work section first, looking for numbers. He finds before-and-after figures: retrieval latency cut from 1.8s to 0.9s at P95, and an 85% straight-through rate for the multi-agent system. He searches "latency," then reads the note explaining that the search uses TF-IDF and cosine similarity. Curious, he opens the repository on GitHub and reads `search.js`.

_As a hiring manager, I want to see measured results and the candidate's own code so that I can judge real technical depth._

- 4.1 Each selected work item states at least one measured result and links to its source.
- 4.2 The search panel explains its method in one or two plain sentences.
- 4.3 The About and Resume footers link to GitHub.

### Story 5: David uses the site from the keyboard

David avoids the mouse. He presses Tab once and a "Skip to content" link appears. He tabs to the search box, types "agents," and presses Enter. Every control he reaches shows a clear focus outline, and he opens a resume line without touching the mouse.

_As a keyboard user, I want every feature to work without a mouse so that I can review the site comfortably._

- 5.1 A skip link is the first focusable element on every page.
- 5.2 Every interactive element is a real button, link, or form control with a visible focus style.
- 5.3 Search results and the Copy confirmation are announced to screen readers.

### Story 6: Elena judges research fit

Elena opens the About page with her browser zoomed to 150%. The text reflows into one readable column. She reads how Sharthi moved from chemical engineering into AI, and that the problems he cares about most are public health tools for underserved communities. The timeline shows his first paper accepted in June 2023. She follows the DOI link from the resume, reads the abstract, and adds him to her list of students to contact.

_As a professor, I want to understand a student's motivation and read their research so that I can decide whether they fit my lab._

- 6.1 At 200% zoom, text reflows with no horizontal scrolling.
- 6.2 Body text contrast is at least 4.5:1 (WCAG AA).
- 6.3 The publication links to its DOI and opens in a new tab.

---

## Design Mockups

Figure 1: Home page, desktop
![Home page, desktop](res/mockups/1-home-desktop.jpg)

Figure 2: Search results
![Search results](res/mockups/2-search-results.jpg)

Figure 3: Home page, mobile
![Home page, mobile](res/mockups/3-home-mobile.jpg)

Figure 4: About page
![About page](res/mockups/4-about.jpg)

Figure 5: Resume page
![Resume page](res/mockups/5-resume.jpg)

---

## Design Decisions

### Color palette

The colors come from viridis, the default colormap in matplotlib, a quiet nod to data science. Deep purple (`#440154`) is used for headings and the search panel, blue-teal (`#2A788E`) for links, and yellow (`#FDE725`) for search highlights. The same color ramp also carries information: it colors the relevance bars on Home and the timeline dots on About. All text meets WCAG AA contrast.

### Typography

One family throughout: Atkinson Hyperlegible Next, designed by the Braille Institute for readability. I chose it with low-vision readers like Elena in mind. The home headline scales with the screen width using CSS `clamp()`.

### Layout approach

Bootstrap 5's grid places the text and photo side by side on the home page and the story and timeline side by side on About. Flexbox handles smaller layouts such as the navigation, the footers, and the search form. Below Bootstrap's large breakpoint (992px), everything stacks into one column, and the photo moves above the headline.

### Interaction philosophy

Every interaction answers a visitor's action and leads somewhere useful. Search results link to the exact resume line, which is highlighted on arrival. The Copy button confirms with "Copied" and resets after two seconds. The resume prints cleanly without extra steps. Motion is kept small, and it's turned off for visitors who prefer reduced motion.

### Accessibility

All interactive elements use standard HTML (`<button>`, `<a>`, `<form>`, `<nav>`). Every page has a skip link and visible keyboard focus. The search input has a label, and search results and the Copy confirmation use `aria-live` so screen readers announce them. Images have `alt` text, and decorative icons use `aria-hidden="true"`.

---

## How this document was made

The text was drafted with Claude (Anthropic, Claude Opus 5.5) from my resume notes, my statement of purpose, and the finished site. The personas are fictional composites of the site's intended audience. The mockups are my own hand-drawn sketches.
