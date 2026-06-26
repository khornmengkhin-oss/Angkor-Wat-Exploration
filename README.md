# Exploring Angkor Wat: A Digital Discovery Guide

A responsive, multi-page digital guide about Angkor Wat, Khmer heritage, temple history, architecture, gallery visuals, and visitor planning.

This project is mainly built with HTML and CSS. A JavaScript folder is also prepared with one empty file for each page, because using JavaScript can give extra points if the team has time to add it later.

## Table of Contents

- [Project Overview](#project-overview)
- [Course Information](#course-information)
- [Team Members](#team-members)
- [Team Task Division](#team-task-division)
- [Shared File Rules](#shared-file-rules)
- [GitHub Team Workflow](#github-team-workflow)
- [Page Requirements](#page-requirements)
- [Technical Requirements](#technical-requirements)
- [Folder Structure](#folder-structure)
- [How to Run the Project](#how-to-run-the-project)
- [Final Team Checklist](#final-team-checklist)

## Project Overview

Exploring Angkor Wat: A Digital Discovery Guide is a static website that introduces users to Cambodia's most famous temple complex. The website includes five connected pages:

1. Home
2. History
3. Architecture
4. Gallery
5. Visit

The goal is to create a clean educational website with consistent navigation, responsive design, useful content, and organized files. Each team member owns one main page so the work is balanced and easy to manage.

This project uses beginner HTML and CSS ideas from class, including headings, paragraphs, lists, links, images, semantic sections, external CSS, colors, margins, padding, Flexbox, Grid, and media queries.

## Course Information

- Course: INFO 250 - Web Development I
- Semester: Summer 2026
- Institution: American University of Phnom Penh
- Instructor: Ms. Buntoun Monyrath
- Submission Date: June 6, 2026

## Team Members

1. Lo Sovannara
2. Heng Munireach
3. Khorn Mengkhin
4. Ratha Raksmey
5. Por Pichpichet

## Team Task Division

Each member is responsible for one page, one page-specific CSS file, and one optional JavaScript file. The JavaScript files are empty for now, so each member can add small extra features later if needed.

| Team Member | Page Responsibility | Main Files |
| --- | --- | --- |
| Khorn Mengkhin | Home page and shared website structure | `index.html`, `css/pages/home.css`, `js/home.js`, `css/global.css`, `css/layout.css`, `css/components.css` |
| Ratha Raksmey | History page | `pages/history.html`, `css/pages/history.css`, `js/history.js` |
| Lo Sovannara | Architecture page | `pages/architecture.html`, `css/pages/architecture.css`, `js/architecture.js` |
| Heng Munireach | Gallery page | `pages/gallery.html`, `css/pages/gallery.css`, `js/gallery.js` |
| Por Pichpichet | Visit planning page | `pages/visit.html`, `css/pages/visit.css`, `js/visit.js` |

## Shared File Rules

Shared files affect every page, so they should be edited carefully.

| File | Purpose | Owner |
| --- | --- | --- |
| `css/global.css` | Colors, fonts, base styles, body styles, headings, links, images | Khorn Mengkhin |
| `css/layout.css` | Header, navigation, page width, spacing, responsive layout structure | Khorn Mengkhin |
| `css/components.css` | Reusable buttons, cards, labels, grids, and repeated design styles | Khorn Mengkhin |

Team rules:

- Edit only your assigned HTML page and assigned CSS file unless the team agrees first.
- Ask Khorn Mengkhin before changing shared CSS files.
- Use your assigned JavaScript file if you want to add an extra-point feature.
- Keep JavaScript small and easy to explain.
- Add only one `<script>` tag for your own page when your JavaScript is ready.
- Use clear class names that match the page or section purpose.
- Keep navigation links consistent on all pages.
- Use descriptive image `alt` text for accessibility.
- Save images inside the `images/` folder with clear filenames.
- Write comments in simple English when the section may be confusing.
- It is okay if two pages repeat some Angkor Wat facts because the topics connect together.
- Try to write the final paragraph text in your own words.

## GitHub Team Workflow

This project can be handled by five members on GitHub.

Simple workflow:

1. Pull the latest code before starting.
2. Create your own branch, for example `history-page` or `gallery-page`.
3. Work mostly inside your assigned HTML file and CSS file.
4. Test by opening `index.html` or using Live Server.
5. Commit with a simple message, for example `finish history page content`.
6. Push your branch.
7. Make a pull request so the team can review before merging.

Suggested branch names:

- `home-page`
- `history-page`
- `architecture-page`
- `gallery-page`
- `visit-page`

Do not push broken links or missing images if possible. If you add images from the internet, write down the source or credit.

## Page Requirements

### Home Page

Owner: Khorn Mengkhin  
Files: `index.html`, `css/pages/home.css`

Optional JavaScript file: `js/home.js`

The home page should introduce the whole website and guide users to the other sections.

Required content:

- Main hero section introducing Angkor Wat
- Short project introduction
- Cards or sections linking to History, Architecture, Gallery, and Visit pages
- Cambodia or Angkor Wat visual identity
- UNESCO or cultural heritage highlight
- Shared header and navigation

### History Page

Owner: Ratha Raksmey  
Files: `pages/history.html`, `css/pages/history.css`

Optional JavaScript file: `js/history.js`

The history page should explain Angkor Wat's background and cultural importance.

Required content:

- Introduction to Angkor Wat's history
- Construction during the Khmer Empire
- King Suryavarman II and the original Hindu purpose
- Later Buddhist use
- UNESCO World Heritage importance
- Timeline, article sections, or history cards using HTML and CSS only

### Architecture Page

Owner: Lo Sovannara  
Files: `pages/architecture.html`, `css/pages/architecture.css`

Optional JavaScript file: `js/architecture.js`

The architecture page should explain the design and structure of Angkor Wat.

Required content:

- Overview of temple layout
- Central towers and Mount Meru symbolism
- Moat, causeway, galleries, and courtyards
- Bas-reliefs and carved details
- Building materials and design style
- Diagram-style layout, feature cards, or image sections using HTML and CSS only

### Gallery Page

Owner: Heng Munireach  
Files: `pages/gallery.html`, `css/pages/gallery.css`

Optional JavaScript file: `js/gallery.js`

The gallery page should visually present Angkor Wat through images and captions.

Required content:

- Image gallery grid
- Captions for each image
- Categories such as temple exterior, carvings, sunrise, landscape, or visitor views
- Consistent image sizing and spacing
- Image credits if outside sources are used
- Responsive gallery layout using CSS Grid or Flexbox

### Visit Page

Owner: Por Pichpichet  
Files: `pages/visit.html`, `css/pages/visit.css`

Optional JavaScript file: `js/visit.js`

The visit page should help users understand how to plan a visit.

Required content:

- Opening hours or best visiting time
- Location and travel tips
- Ticket or pass information
- Suggested route or visitor plan
- Temple etiquette and respectful behavior
- Practical tips such as clothing, water, weather, and photography
- Contact or information section if needed, using HTML form elements only

## Technical Requirements

The website should use:

- HTML5 document structure
- Semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`
- External CSS files only
- Responsive layouts for phone, tablet, and desktop screens
- Consistent navigation on every page
- Descriptive `alt` text for all meaningful images
- Clear headings in logical order
- Organized class names
- Optional JavaScript for extra features
- No broken file links

JavaScript rules:

- Keep one JavaScript file per page.
- Do not edit another member's JavaScript file without asking.
- Do not write complicated JavaScript if you cannot explain it.
- If a page uses JavaScript, link the file before the closing `</body>` tag.

## Folder Structure

```text
angkor-wat-digital-guide/
|-- css/
|   |-- components.css
|   |-- global.css
|   |-- layout.css
|   `-- pages/
|       |-- architecture.css
|       |-- gallery.css
|       |-- history.css
|       |-- home.css
|       `-- visit.css
|-- docs/
|   `-- course-html-css-notes.md
|-- fonts/
|-- images/
|   |-- Cambodge.png
|   |-- angkor-wat-greenery.jpg
|   `-- unesco-seeklogo.png
|-- js/
|   |-- architecture.js
|   |-- gallery.js
|   |-- history.js
|   |-- home.js
|   `-- visit.js
|-- pages/
|   |-- architecture.html
|   |-- gallery.html
|   |-- history.html
|   `-- visit.html
|-- videos/
|-- .gitignore
|-- index.html
`-- README.md
```

## How to Run the Project

No installation is required.

1. Open the project folder.
2. Open `index.html` in a web browser.
3. Use the navigation menu to visit each page.

Recommended development setup:

- Open the folder in Visual Studio Code.
- Use the Live Server extension to preview changes.
- Refresh the browser after editing HTML or CSS.

## Final Team Checklist

Before submission, the team should confirm:

- Every page has complete content.
- Every page is linked correctly in the navigation.
- Every page uses the shared header style.
- Every page has its own page-specific CSS file.
- Every member has one JavaScript file ready.
- Any JavaScript that gets added is tested and easy to explain.
- There are no missing image paths.
- All images have useful `alt` text.
- Outside image sources are credited if needed.
- Text is readable on mobile and desktop.
- CSS is organized and not repeated too much.
- Spelling and grammar have been checked.
- The final website opens correctly from `index.html`.

## Notes for Teamwork

To avoid confusion, each person should finish their own page first. After that, the team can review all pages together and adjust spacing, colors, fonts, and navigation so the website feels consistent.

If someone needs to change a shared style, they should tell the team first because that change may affect all five pages.
