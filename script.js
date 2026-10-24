// Interactive functionality for Santhosh M Internship Landing Page

document.addEventListener('DOMContentLoaded', () => {

    // 1. Role Tracks Data
    const tracksData = {
        frontend: {
            title: "Frontend Engineering Track",
            subtitle: "Build modern, responsive, and blazing-fast web interfaces",
            icon: "fa-code",
            colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
            tags: ["HTML5 & CSS3", "Tailwind CSS", "JavaScript (ES6+)", "React.js", "Next.js", "Git & GitHub"],
            modules: [
                {
                    week: "Week 01",
                    title: "Modern Semantic HTML & Advanced CSS Architecture",
                    desc: "Responsive layout design with Flexbox, CSS Grid, mobile-first workflows, and Tailwind CSS masterclass."
                },
                {
                    week: "Week 02",
                    title: "JavaScript ES6+, DOM Manipulation & Async APIs",
                    desc: "Event handling, promises, async/await, fetching REST APIs, error states, and local storage state persistence."
                },
                {
                    week: "Week 03",
                    title: "React Fundamentals: Components, Props & Hooks",
                    desc: "State management with useState/useEffect, custom hooks, component composition, and client-side routing."
                },
                {
                    week: "Week 04",
                    title: "Real-World Dashboard Project & Day-30 Skill Gate",
                    desc: "Build an interactive analytics web app with live API integration, unit tests, and GitHub PR review."
                }
            ],
            squadRole: "You will architect client-facing features, build sleek responsive UI components, and integrate backend REST/GraphQL APIs."
        },
        backend: {
            title: "Backend Engineering Track",
            subtitle: "Design scalable REST APIs, secure authentication & databases",
            icon: "fa-server",
            colorClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
            tags: ["Node.js / Express", "PostgreSQL / MongoDB", "REST APIs", "JWT Auth", "Prisma ORM", "Docker Basics"],
            modules: [
                {
                    week: "Week 01",
                    title: "Server Architecture & RESTful API Foundations",
                    desc: "Node.js runtime, Express routing, middleware pipelines, request validation, and environment configuration."
                },
                {
                    week: "Week 02",
                    title: "Relational & Document Databases (PostgreSQL / Mongo)",
                    desc: "Schema design, relational indexing, CRUD operations, transactions, and Prisma/Mongoose query optimizations."
                },
                {
                    week: "Week 03",
                    title: "Authentication, Authorization & Security Hardening",
                    desc: "JWT tokens, refresh token rotation, password hashing (bcrypt), CORS, rate limiting, and security best practices."
                },
                {
                    week: "Week 04",
                    title: "Secure E-Commerce / SaaS Backend Assessment",
                    desc: "Deploy a production-ready API with Swagger documentation, integration test suite, and clean architecture."
                }
            ],
            squadRole: "You will manage server business logic, craft database models, ensure sub-100ms response times, and provide secure API endpoints."
        },
        uiux: {
            title: "UI / UX Design Track",
            subtitle: "Create high-converting design systems, wireframes & interactive Figma prototypes",
            icon: "fa-pen-ruler",
            colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/30",
            tags: ["Figma Systems", "Wireframing", "User Research", "Typography & Color", "Interactive Prototyping"],
            modules: [
                {
                    week: "Week 01",
                    title: "Design Principles, Visual Hierarchy & Figma Mastery",
                    desc: "Auto-layout, responsive constraints, design tokens, typography scales, and accessible color systems (WCAG)."
                },
                {
                    week: "Week 02",
                    title: "User Empathy, Problem Discovery & Low-Fi Wireframing",
                    desc: "User interviews, persona building, information architecture, user flows, and low-fidelity rapid sketches."
                },
                {
                    week: "Week 03",
                    title: "Component Libraries & High-Fidelity Interactive Prototypes",
                    desc: "Creating reusable Figma component kits with variants, states, micro-interactions, and developer handoff specs."
                },
                {
                    week: "Week 04",
                    title: "End-to-End Product Case Study & Evaluation Gate",
                    desc: "Complete a real-world redesign case study with user testing feedback, prototype links, and presentation slides."
                }
            ],
            squadRole: "You will lead product UI design, define design tokens in Figma, test flows with target users, and guide developers during implementation."
        },
        qa: {
            title: "QA & Testing Track",
            subtitle: "Guarantee rock-solid software quality through manual & automated testing",
            icon: "fa-bug-slash",
            colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/30",
            tags: ["Manual Testing", "Test Cases", "Postman API Testing", "Bug Reporting", "Cypress / Playwright Basics"],
            modules: [
                {
                    week: "Week 01",
                    title: "Software Testing Foundations & Test Case Design",
                    desc: "SDLC & STLC lifecycles, boundary value analysis, equivalence partitioning, and writing exhaustive test scenarios."
                },
                {
                    week: "Week 02",
                    title: "Functional & Usability Testing + Jira Bug Tracking",
                    desc: "Execution of manual test suites, logging reproducible bug reports with steps, severity, and screen recordings."
                },
                {
                    week: "Week 03",
                    title: "REST API Testing with Postman & Newman Automation",
                    desc: "Writing automated assertion scripts in Postman, testing status codes, payload validations, and auth headers."
                },
                {
                    week: "Week 04",
                    title: "End-to-End Test Plan & Day-30 Skill Gate Submission",
                    desc: "Deliver a comprehensive Test Strategy document, test matrices, and automated sanity smoke test suites."
                }
            ],
            squadRole: "You will act as the quality guardian of your squad, testing every PR before merge, maintaining regression checklists, and certifying releases."
        },
        product: {
            title: "Product & Business Analyst Track",
            subtitle: "Define product strategy, user stories, PRDs, and Agile sprint backlogs",
            icon: "fa-chart-pie",
            colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
            tags: ["PRD Writing", "User Stories", "Jira & Trello", "Market Research", "Product Metrics", "Sprint Planning"],
            modules: [
                {
                    week: "Week 01",
                    title: "Product Thinking & Market Opportunity Assessment",
                    desc: "Identifying customer pain points, competitor analysis, value proposition canvas, and defining product vision."
                },
                {
                    week: "Week 02",
                    title: "Writing Crystal-Clear PRDs & User Stories",
                    desc: "Drafting Product Requirement Documents (PRDs), acceptance criteria (Given/When/Then), and scope boundary definitions."
                },
                {
                    week: "Week 03",
                    title: "Agile Backlog Grooming, Sprint Cadence & Metrics",
                    desc: "Story estimation (Story points), sprint planning, tracking velocity, burndown charts, and product KPIs (DAU/MAU)."
                },
                {
                    week: "Week 04",
                    title: "Comprehensive Launch Plan Deliverable & Skill Gate",
                    desc: "Complete launch PRD with wireframe flows, roadmap milestones, and go-to-market strategy presentation."
                }
            ],
            squadRole: "You will steer the squad's product direction, facilitate Wednesday Agile scrums, unblock teammates, and ensure deliverables meet user needs."
        }
    };

    // 2. Render Track Function
    function renderTrack(trackKey) {
        const track = tracksData[trackKey] || tracksData.frontend;
        const container = document.getElementById('trackContent');
        if (!container) return;

        // Generate tags HTML
        const tagsHtml = track.tags.map(tag => 
            `<span class="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-slate-300">${tag}</span>`
        ).join('');

        // Generate modules HTML
        const modulesHtml = track.modules.map(mod => `
            <div class="bg-slate-900/80 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition">
                <div class="flex items-center justify-between mb-1.5">
                    <span class="text-xs font-mono font-bold text-emerald-400 uppercase">${mod.week}</span>
                    <i class="fa-solid fa-circle-check text-slate-600 text-xs"></i>
                </div>
                <h4 class="text-white font-semibold text-sm mb-1">${mod.title}</h4>
                <p class="text-slate-400 text-xs leading-relaxed">${mod.desc}</p>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="animate-fadeIn">
                <!-- Track Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 rounded-2xl ${track.colorClass} border flex items-center justify-center text-2xl font-bold shrink-0">
                            <i class="fa-solid ${track.icon}"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-extrabold text-white">${track.title}</h3>
                            <p class="text-slate-400 text-sm mt-0.5">${track.subtitle}</p>
                        </div>
                    </div>
                </div>

                <!-- Skill Stack Badges -->
                <div class="flex flex-wrap items-center gap-2 mb-8">
                    <span class="text-xs text-slate-400 mr-1 font-mono uppercase">Key Tools:</span>
                    ${tagsHtml}
                </div>

                <!-- Weekly Modules Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    ${modulesHtml}
                </div>

                <!-- Squad Responsibility -->
                <div class="bg-slate-900/60 p-4 rounded-xl border border-white/5 text-xs text-slate-300">
                    <span class="text-emerald-400 font-bold uppercase font-mono">Squad Responsibilities (Phase 2):</span>
                    <p class="mt-1 text-slate-300">${track.squadRole}</p>
                </div>
            </div>
        `;
    }

    // Initialize with Frontend
    renderTrack('frontend');

    // Tab button click listeners
    const tabButtons = document.querySelectorAll('.role-tab');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const trackKey = btn.getAttribute('data-track');
            renderTrack(trackKey);
        });
    });

    // 3. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const answer = item.querySelector('.faq-answer');
        const icon = btn.querySelector('i');

        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('active');
                const a = i.querySelector('.faq-answer');
                const ic = i.querySelector('.faq-btn i');
                if (a) a.style.maxHeight = null;
                if (ic) ic.style.transform = 'rotate(0deg)';
                i.querySelector('.faq-btn')?.setAttribute('aria-expanded', 'false');
            });

            // If not previously open, open it
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 4. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Close menu when clicking nav links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }

    // 5. Dynamic Countdown Timer (e.g. 8 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 8);
    targetDate.setHours(23, 59, 59, 0);

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if (difference <= 0) {
            document.getElementById('timerDays').textContent = "00";
            document.getElementById('timerHours').textContent = "00";
            document.getElementById('timerMins').textContent = "00";
            document.getElementById('timerSecs').textContent = "00";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const format = (n) => String(n).padStart(2, '0');

        const elDays = document.getElementById('timerDays');
        const elHours = document.getElementById('timerHours');
        const elMins = document.getElementById('timerMins');
        const elSecs = document.getElementById('timerSecs');

        if (elDays) elDays.textContent = format(days);
        if (elHours) elHours.textContent = format(hours);
        if (elMins) elMins.textContent = format(minutes);
        if (elSecs) elSecs.textContent = format(seconds);
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 6. Scroll to Top Button & Header Shadow
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const mainHeader = document.getElementById('mainHeader');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header shadow
        if (mainHeader) {
            if (scrollY > 40) {
                mainHeader.classList.add('border-b', 'border-white/10', 'shadow-2xl');
            } else {
                mainHeader.classList.remove('shadow-2xl');
            }
        }

        // Scroll to top visibility
        if (scrollTopBtn) {
            if (scrollY > 500) {
                scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                scrollTopBtn.classList.add('opacity-100');
            } else {
                scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
                scrollTopBtn.classList.remove('opacity-100');
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
