# Madhav Acharya - Personal Portfolio Website

A modern, professional, and fully responsive personal portfolio website designed for **Madhav Acharya**, a Bachelor of Business Administration (BBA) student. The portfolio showcases business acumen, management competencies, academic projects, coursework, achievements, and career aspirations.

---

## 🌟 Key Features & Design Highlights

- **Executive Aesthetic**: Tailored corporate palette consisting of deep Navy Blue (`#0A192F`), crisp White (`#FFFFFF`), and regal Warm Gold accents (`#D4AF37`).
- **Dark & Light Mode Switcher**: Seamless theme toggle with automatic system preference detection and `localStorage` persistence.
- **Hero / Home Section**: 
  - Dynamic headline: *BBA Student | Aspiring Business Professional*
  - Engaging executive summary
  - "View My Work" and "Contact Me" call-to-action buttons
  - Interactive profile avatar placeholder with floating business badges
  - Quick metrics banner (5+ Projects, 12+ Skills, 100% Commitment)
- **About Me**:
  - Highlights Madhav's passion for business strategy, entrepreneurship, marketing, finance, and leadership
  - Emphasizes communication skills, problem-solving, and continuous learning
  - 4 Strategic Pillars: *Strategic Vision*, *Analytical Mindset*, *Collaborative Leadership*, and *Growth Orientation*
  - Professional snapshot sidebar with key career targets and availability
- **Skills Showcase (12 Core Skills)**:
  - Business Management
  - Marketing Fundamentals
  - Financial Analysis Basics
  - Market Research
  - Business Communication
  - Leadership and Teamwork
  - Problem-Solving
  - Microsoft Excel
  - PowerPoint Presentations
  - Data Analysis Basics
  - Digital Marketing
  - Strategic Planning
  - Interactive category filters: *All Skills*, *Management & Strategy*, *Marketing & Research*, *Finance & Analytics*, *Software & Soft Skills*
- **Featured Projects (5 Sample Academic Case Studies)**:
  1. **Market Research and Consumer Behaviour**
  2. **Business Plan for a Startup**
  3. **Digital Marketing Strategy**
  4. **Financial Analysis of a Company**
  5. **SWOT Analysis of a Business**
  - Interactive **"View Full Case Study"** modal detailing background objectives, methodology, findings, and tools applied
  - Explicit badges marking sample content ready to be updated with actual coursework
- **Education Section**:
  - Bachelor of Business Administration (BBA)
  - Editable College/University name and expected graduation year placeholders
  - Comprehensive 8-course curriculum grid (Marketing, Financial Management, Organizational Behaviour, Managerial Economics, etc.)
  - Academic achievements and campus leadership placeholders
- **Achievements & Certifications**:
  - Structured cards for Business & Management certifications, Digital Marketing courses, Case Competitions, and Analytics Workshops
- **Contact Section**:
  - Direct contact cards (Email, Phone, LinkedIn, Location)
  - Interactive **1-click "Copy to Clipboard"** with toast notifications
  - Fully validated contact form with real-time feedback, submission spinner, and success toast
- **Performance & Usability**:
  - Zero heavy dependencies; lightning-fast load times
  - Mobile responsive drawer navigation with smooth hamburger animation
  - Accessible semantic HTML5 and ARIA labels

---

## 📁 File Structure

```
project/
├── index.html          # Main HTML structure with semantic sections and clear edit comments
├── css/
│   └── styles.css      # CSS system (Light/Dark themes, responsive layout, navy/gold styling)
├── js/
│   └── main.js         # Interactive logic (Theme toggle, Modals, Filters, Form validation, Toasts)
└── README.md           # Documentation and personalization guide
```

---

## ✏️ How to Personalize Your Information

All personal details have clearly marked placeholders in `index.html` and `js/main.js`. You can edit them using any code editor (such as VS Code, Sublime Text, or Notepad).

### 1. Replacing the Profile Image
1. Create an `assets` folder inside your project directory: `project/assets/`.
2. Add your formal portrait photo, e.g., `project/assets/madhav-photo.jpg`.
3. Open `index.html` around line 180 and replace the SVG container with:
   ```html
   <img src="assets/madhav-photo.jpg" alt="Madhav Acharya - BBA Student" class="profile-avatar-img" />
   ```

### 2. Updating College & Graduation Year
1. Open `index.html` and search for the `<!-- 5. EDUCATION SECTION -->` (around line 520).
2. Change `[Add College / University Name]` to your institution's name (e.g., *Symbiosis Centre for Management Studies*, *Christ University*, *Delhi University*).
3. Change `[Expected Graduation: 2026]` to your actual graduation year.

### 3. Adding Your Real Projects & Case Studies
- Card summaries can be updated directly in `index.html` under `#projects`.
- Deep-dive modal details (methodology, key findings, and tools) can be updated in `js/main.js` inside the `projectData` object (lines 130–235).

### 4. Updating Certifications & Achievements
Open `index.html` and search for `#achievements` (around line 620). Update:
- Issuing authority (e.g., Coursera, Google Digital Garage, HubSpot, Harvard Online)
- Course name and year of completion
- Competition rankings or club roles

### 5. Updating Contact Information
Open `index.html` and search for `#contact`:
- Update `madhav.acharya@example.com` to your active email.
- Update `+91 [Add Phone Number]` to your phone number.
- Update `https://linkedin.com/in/madhav-acharya` to your actual LinkedIn URL.

---

## 🚀 How to Run Locally

You do not need to install Node.js, npm, or any server. 
Simply **double-click `index.html`** to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

If you use VS Code:
1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Click **"Go Live"** in the bottom status bar to view it with live reloading.

---

## 🌐 Free Hosting & Deployment Options

You can host this website online for free with a custom link to put on your resume and LinkedIn:

### Option A: GitHub Pages (Recommended)
1. Create a free account on [GitHub](https://github.com).
2. Create a new repository named `madhav-portfolio`.
3. Upload all the files (`index.html`, `css/`, `js/`, `assets/`, `README.md`).
4. Go to **Repository Settings** > **Pages**.
5. Under **Branch**, select `main` (or `master`) and folder `/ (root)`. Click **Save**.
6. Your portfolio will be live at `https://<your-username>.github.io/madhav-portfolio/`.

### Option B: Netlify
1. Go to [Netlify](https://www.netlify.com) and sign in.
2. Drag and drop your project folder directly into the Netlify dashboard.
3. Your site will be live instantly with a free `.netlify.app` domain.

### Option C: Vercel
1. Go to [Vercel](https://vercel.com).
2. Import your GitHub repository or use `vercel deploy`.

---

## 📄 License
Created for **Madhav Acharya**. Free to customize and distribute for academic and professional portfolio use.
