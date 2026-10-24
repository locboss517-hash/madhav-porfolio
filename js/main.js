/**
 * Personal Portfolio Website for Madhav Acharya (BBA Student)
 * Interactive Controller: Navigation, Theme Toggle, Modals, Skills Filtering & Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollSpy();
  initSkillFilters();
  initProjectModals();
  initContactForm();
  initCopyActions();
  initCurrentYear();
});

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('madhav_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('madhav_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }
}

/* ==========================================================================
   2. MOBILE NAVIGATION & SCROLL LISTENER
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      const isExpanded = mobileToggle.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

/* ==========================================================================
   3. SCROLL SPY (Active Link Highlighting)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. SKILLS FILTERING
   ========================================================================== */
function initSkillFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   5. PROJECT CASE STUDY MODALS DATA & BEHAVIOR
   ========================================================================== */
const projectData = {
  1: {
    title: "Market Research and Consumer Behaviour",
    category: "Market Research & Analytics",
    badge: "Sample Academic Project",
    summary: "Comprehensive market study examining shifting consumer purchasing habits, price sensitivities, and brand loyalty trends within the retail FMCG sector.",
    objective: "To investigate factors influencing Gen Z and Millennial consumer purchasing decisions and evaluate how sustainable packaging impacts brand perception.",
    methodology: [
      "Designed and distributed structured digital surveys to a sample pool of 180+ respondents.",
      "Conducted 10 qualitative in-depth consumer interviews to analyze emotional buying drivers.",
      "Performed cross-tabulation and sentiment analysis to identify statistically significant patterns."
    ],
    findings: [
      "74% of surveyed consumers indicated a willingness to pay a 5-10% premium for certified eco-friendly products.",
      "Social media recommendations directly influenced over 62% of impulse purchase occurrences.",
      "Identified critical gaps between brand eco-claims and consumer trust transparency."
    ],
    skills: ["Market Research", "Data Analysis", "Consumer Behaviour", "Survey Design", "Statistical Interpretation"],
    tools: ["Google Forms", "Microsoft Excel (Pivot Tables)", "SPSS / Descriptive Analytics", "PowerPoint"]
  },
  2: {
    title: "Business Plan for a Startup",
    category: "Entrepreneurship & Strategy",
    badge: "Sample Academic Project",
    summary: "End-to-end conceptualization and launch strategy for an innovative subscription-based eco-friendly student essentials platform.",
    objective: "To formulate a viable, scalable business model encompassing value proposition design, unit economics, market penetration strategy, and projected 3-year cash flow.",
    methodology: [
      "Formulated a complete Business Model Canvas (BMC) targeting university student demographics.",
      "Conducted competitor benchmarking analysis across direct and indirect market players.",
      "Engineered financial projections, break-even analysis, and estimated Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV)."
    ],
    findings: [
      "Achieved projected positive cash flow by Month 14 through tiered semester subscriptions.",
      "Established strategic partnerships with local campus suppliers to reduce initial inventory holding costs by 35%.",
      "Drafted an investor-ready 12-slide pitch deck highlighting scalable unit economics."
    ],
    skills: ["Entrepreneurship", "Business Planning", "Strategic Thinking", "Financial Modeling", "Pitch Deck Design"],
    tools: ["Business Model Canvas", "Microsoft Excel", "Canva / Presentation Tools", "SWOT Framework"]
  },
  3: {
    title: "Digital Marketing Strategy",
    category: "Marketing & Brand Growth",
    badge: "Sample Academic Project",
    summary: "Integrated multi-channel digital marketing blueprint crafted to boost brand awareness, engagement, and conversion for a regional retail brand.",
    objective: "To create an omnichannel digital acquisition and retention strategy leveraging targeted social media advertising, SEO content marketing, and email drip sequences.",
    methodology: [
      "Developed 3 detailed buyer personas representing core customer segments.",
      "Constructed a 90-day organic content calendar paired with targeted paid social media ad strategies.",
      "Built mock landing pages with conversion-focused A/B copy tests and clear call-to-actions (CTAs)."
    ],
    findings: [
      "Targeted micro-influencer collaborations projected a 40% higher engagement rate over macro campaigns.",
      "Content pillars centered on educational how-tos demonstrated potential to reduce cost-per-lead by 28%.",
      "Mapped an email nurture sequence designed to recover 18% of abandoned shopping carts."
    ],
    skills: ["Digital Marketing", "Branding", "Marketing Strategy", "Audience Segmentation", "Content Strategy"],
    tools: ["Meta Ads Manager Mockup", "Google Analytics Concept", "SEO Keyword Planner", "Canva"]
  },
  4: {
    title: "Financial Analysis of a Company",
    category: "Corporate Finance & Accounting",
    badge: "Sample Academic Project",
    summary: "In-depth financial health assessment of a leading consumer goods company, evaluating liquidity, solvency, operating efficiency, and long-term profitability.",
    objective: "To analyze balance sheets, income statements, and cash flow reports over a 3-year timeline using financial ratios and comparative trend analysis.",
    methodology: [
      "Collected and standardized 3 fiscal years of audited financial statements.",
      "Computed critical liquidity ratios (Current & Quick), profitability ratios (Net Margin, ROE, ROCE), and leverage ratios.",
      "Constructed common-size statements and DuPont 3-step analysis in Microsoft Excel."
    ],
    findings: [
      "Identified that inventory turnover improvements drove a 4.2% expansion in Return on Equity (ROE).",
      "Operating profit margins remained resilient despite a 12% rise in raw material procurement expenses.",
      "Formulated actionable working capital recommendations to accelerate cash conversion cycles."
    ],
    skills: ["Microsoft Excel", "Financial Analysis", "Data Interpretation", "Ratio Analysis", "Financial Reporting"],
    tools: ["Microsoft Excel (VLOOKUP, IF, Data Tables, Charts)", "Annual Reports", "DuPont Analysis Framework"]
  },
  5: {
    title: "SWOT Analysis of a Business",
    category: "Strategic Management",
    badge: "Sample Academic Project",
    summary: "Strategic environmental evaluation examining internal competencies and external market dynamics for a major commercial enterprise navigating market disruption.",
    objective: "To systematically identify operational strengths, structural weaknesses, untapped market opportunities, and competitive threats, translating insights into actionable strategies.",
    methodology: [
      "Utilized Porter's Five Forces framework alongside PESTEL macro-environmental analysis.",
      "Synthesized internal operational metrics and market competitor filings to build the SWOT matrix.",
      "Created a TOWS matrix to generate proactive defense and growth strategies."
    ],
    findings: [
      "Identified digital transformation as the paramount opportunity to offset declining foot traffic.",
      "Highlighted supply chain supplier concentration as an urgent operational vulnerability requiring diversification.",
      "Recommended a dual-track strategy combining niche market focus with automated customer service."
    ],
    skills: ["Business Strategy", "Critical Thinking", "Research", "Competitive Analysis", "Strategic Synthesis"],
    tools: ["SWOT & TOWS Frameworks", "Porter's 5 Forces", "PESTEL Analysis", "Executive Summary Brief"]
  }
};

function initProjectModals() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');
  const viewDetailBtns = document.querySelectorAll('.project-btn-details');

  if (!modalBackdrop || !modalCloseBtn || !modalBody) return;

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];

      if (data) {
        modalBody.innerHTML = `
          <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
              <span class="project-sample-tag" style="background: var(--gold-subtle); color: var(--gold-hover); border-color: var(--gold-border);">
                ${data.badge}
              </span>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">
                ${data.category}
              </span>
            </div>
            <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-top: 0.5rem; line-height: 1.3;">
              ${data.title}
            </h2>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.75rem; line-height: 1.6;">
              ${data.summary}
            </p>
          </div>

          <div style="background: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--navy-primary); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--gold-primary);"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 12 8"></polygon></svg>
              Core Objective
            </h4>
            <p style="font-size: 0.885rem; color: var(--text-secondary); line-height: 1.6;">
              ${data.objective}
            </p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
              Key Methodology & Approach
            </h4>
            <ul style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${data.methodology.map(item => `
                <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.875rem; color: var(--text-secondary);">
                  <span style="color: var(--gold-primary); font-weight: bold; margin-top: 0.1rem;">•</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
              Key Findings & Strategic Outcomes
            </h4>
            <ul style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${data.findings.map(item => `
                <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.875rem; color: var(--text-secondary);">
                  <span style="color: #10B981; font-weight: bold; margin-top: 0.1rem;">✓</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
              Skills Applied
            </h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
              ${data.skills.map(s => `
                <span class="project-skill-tag" style="background: var(--gold-subtle); color: var(--gold-hover); border-color: var(--gold-border);">
                  ${s}
                </span>
              `).join('')}
            </div>
          </div>

          <div style="padding-top: 1rem; border-top: 1px dashed var(--border-color); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
            <span style="font-size: 0.785rem; color: var(--text-muted); font-style: italic;">
              💡 Madhav: Replace this case study sample with your actual course deliverables or project reports.
            </span>
            <button class="btn btn-sm btn-outline" id="modalDismissBtn" style="border-radius: var(--radius-sm);">
              Close Window
            </button>
          </div>
        `;

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';

        const dismissBtn = document.getElementById('modalDismissBtn');
        if (dismissBtn) {
          dismissBtn.addEventListener('click', closeModal);
        }
      }
    });
  });

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('contactSubmitBtn');

    let isValid = true;

    // Reset errors
    clearFieldError(nameInput);
    clearFieldError(emailInput);
    clearFieldError(subjectInput);
    clearFieldError(messageInput);

    if (!nameInput.value.trim()) {
      showFieldError(nameInput, 'Please provide your full name.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError(emailInput, 'Please provide a valid email address.');
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      showFieldError(subjectInput, 'Please enter a message subject.');
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showFieldError(messageInput, 'Please enter a message of at least 10 characters.');
      isValid = false;
    }

    if (!isValid) return;

    // Button loading state
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      Sending Message...
    `;

    // Simulate reliable dispatch
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
      form.reset();
      showToast('Thank you! Your message has been sent to Madhav Acharya.');
    }, 1200);
  });

  function showFieldError(input, message) {
    input.classList.add('is-invalid');
    const errorElem = input.parentElement.querySelector('.form-feedback');
    if (errorElem) {
      errorElem.textContent = message;
      errorElem.classList.add('error');
    }
  }

  function clearFieldError(input) {
    input.classList.remove('is-invalid');
    const errorElem = input.parentElement.querySelector('.form-feedback');
    if (errorElem) {
      errorElem.textContent = '';
      errorElem.classList.remove('error');
    }
  }
}

/* ==========================================================================
   7. COPY TO CLIPBOARD ACTIONS
   ========================================================================== */
function initCopyActions() {
  const copyBtns = document.querySelectorAll('[data-copy]');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(() => {
          showToast('Failed to copy to clipboard.');
        });
      }
    });
  });

  // Mock Resume Download
  const downloadResumeBtns = document.querySelectorAll('.action-download-resume');
  downloadResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Resume placeholder: Replace with Madhav_Acharya_Resume.pdf in the root directory.');
    });
  });
}

/* ==========================================================================
   8. TOAST NOTIFICATIONS
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById('portfolioToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolioToast';
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span id="toastMessage"></span>
    `;
    document.body.appendChild(toast);
  }

  const toastMessage = document.getElementById('toastMessage');
  if (toastMessage) {
    toastMessage.textContent = message;
  }

  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3600);
}

/* ==========================================================================
   9. DYNAMIC FOOTER YEAR
   ========================================================================== */
function initCurrentYear() {
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
