// Interactive functionality for Iconic Hub 90-Day Tech Internship Landing Page

document.addEventListener('DOMContentLoaded', () => {

    // 1. Updated 6 Specialized Role Tracks Data
    const tracksData = {
        frontend: {
            title: "Frontend Developer",
            subtitle: "Architect blazing-fast, responsive & aesthetic web interfaces",
            icon: "fa-code",
            colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
            tags: ["HTML5 & CSS3", "Tailwind CSS", "JavaScript (ES6+)", "React.js", "Next.js", "Git & GitHub PRs"],
            modules: [
                {
                    week: "Week 01",
                    title: "Modern Semantic UI & Responsive Tailwind Systems",
                    desc: "Mobile-first layouts, Flexbox & CSS Grid, responsive design tokens, and clean Tailwind CSS setups."
                },
                {
                    week: "Week 02",
                    title: "Modern JavaScript ES6+, DOM & Async REST Integration",
                    desc: "Async/await patterns, Axios/Fetch, error states, localStorage caching, and API consumption."
                },
                {
                    week: "Week 03",
                    title: "React.js & Next.js Architecture",
                    desc: "Component lifecycle, useState/useEffect, custom hooks, dynamic routing, and global state management."
                },
                {
                    week: "Week 04",
                    title: "Production Dashboard & Day-30 Skill Gate",
                    desc: "Build an interactive analytics web app with live APIs, CI/CD linting, and GitHub Pull Request review."
                }
            ],
            squadRole: "Lead user interface development, craft reusable components, and integrate backend endpoints in Phase 2 squads."
        },
        backend: {
            title: "Backend Developer",
            subtitle: "Design scalable REST & GraphQL APIs, secure auth & databases",
            icon: "fa-server",
            colorClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
            tags: ["Node.js / Express", "PostgreSQL / MongoDB", "Prisma ORM", "JWT Authentication", "REST APIs", "Docker Basics"],
            modules: [
                {
                    week: "Week 01",
                    title: "Node.js Architecture & REST Principles",
                    desc: "Server structure, Express middleware pipelines, request validation, CORS, and environment configs."
                },
                {
                    week: "Week 02",
                    title: "Databases & Schema Engineering (PostgreSQL & Mongo)",
                    desc: "Relational indexing, transactions, CRUD operations, aggregation pipelines, and Prisma/Mongoose ORM."
                },
                {
                    week: "Week 03",
                    title: "Authentication, JWT Tokens & Security",
                    desc: "Password encryption (bcrypt), JWT refresh token rotation, rate limiting, and RBAC authorization."
                },
                {
                    week: "Week 04",
                    title: "Microservice / API Capstone & Evaluation Gate",
                    desc: "Deploy a production-ready API with Swagger documentation, automated integration tests, and database seeding."
                }
            ],
            squadRole: "Design database schemas, write secure API endpoints, ensure sub-100ms response times, and provide robust auth."
        },
        fullstack: {
            title: "Fullstack Developer",
            subtitle: "Bridge client and server to build complete end-to-end applications",
            icon: "fa-layer-group",
            colorClass: "text-teal-400 bg-teal-500/10 border-teal-500/30",
            tags: ["React & Next.js", "Node.js / Express", "PostgreSQL / Prisma", "Server Actions", "Full Auth Flow", "Vercel / Cloud"],
            modules: [
                {
                    week: "Week 01",
                    title: "Fullstack Architecture & Modern Monorepos",
                    desc: "Fullstack patterns, Next.js App Router, server-side rendering vs client rendering, and shared TypeScript types."
                },
                {
                    week: "Week 02",
                    title: "Database Modeling & API Endpoints",
                    desc: "Connecting frontend forms to PostgreSQL/Prisma backends with server actions and RESTful API routes."
                },
                {
                    week: "Week 03",
                    title: "End-to-End Authentication & State Flow",
                    desc: "NextAuth / JWT session handling, protected routes, payment gateway integration (Razorpay/Stripe sandbox)."
                },
                {
                    week: "Week 04",
                    title: "Complete SaaS Capstone & Evaluation Gate",
                    desc: "Deliver a full-fledged SaaS MVP with user onboarding, database persistence, and production deployment on Vercel."
                }
            ],
            squadRole: "Connect frontend components with backend database models, build end-to-end user workflows, and deploy live apps."
        },
        uiux: {
            title: "UI / UX Designer",
            subtitle: "Craft intuitive user journeys, wireframes & interactive Figma design systems",
            icon: "fa-pen-ruler",
            colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/30",
            tags: ["Figma Design Systems", "Wireframing", "User Research", "Auto-Layout", "Interactive Prototypes", "Dev Handoff"],
            modules: [
                {
                    week: "Week 01",
                    title: "Visual Design Foundations & Figma Mastery",
                    desc: "Auto-layout, responsive constraints, typography scales, spacing tokens, and accessible WCAG color contrast."
                },
                {
                    week: "Week 02",
                    title: "User Empathy, Problem Discovery & Wireframes",
                    desc: "User interviews, persona creation, information architecture, user flows, and low-fidelity rapid wireframes."
                },
                {
                    week: "Week 03",
                    title: "Design Systems & High-Fidelity Interactive Prototypes",
                    desc: "Component variants, interactive states, micro-animations, design tokens, and developer handoff documentation."
                },
                {
                    week: "Week 04",
                    title: "End-to-End Product Case Study Presentation",
                    desc: "Create and present a complete product redesign case study with user testing data and interactive Figma preview."
                }
            ],
            squadRole: "Drive product visual design, create Figma kits for developers, review UI implementations, and conduct usability tests."
        },
        testing: {
            title: "Testing & QA Engineer",
            subtitle: "Guarantee rock-solid reliability through manual & automated testing pipelines",
            icon: "fa-bug-slash",
            colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/30",
            tags: ["Manual Testing", "Test Case Matrices", "Postman API Testing", "Bug Tracking (Jira)", "Cypress / Playwright Basics"],
            modules: [
                {
                    week: "Week 01",
                    title: "Testing Foundations, SDLC & STLC Workflows",
                    desc: "Boundary value analysis, equivalence partitioning, test scenario writing, and smoke/regression test plans."
                },
                {
                    week: "Week 02",
                    title: "Functional & Usability Testing + Jira Bug Reporting",
                    desc: "Manual test execution, writing reproducible bug reports with steps, severity, logs, and video captures."
                },
                {
                    week: "Week 03",
                    title: "Automated REST API Testing with Postman & Newman",
                    desc: "Writing assertions in JavaScript, status code validation, auth token automation, and CI/CD CLI test runs."
                },
                {
                    week: "Week 04",
                    title: "Comprehensive Test Strategy & Gate Deliverable",
                    desc: "Deliver a complete QA Test Plan, regression test suite, and automated end-to-end sanity smoke scripts."
                }
            ],
            squadRole: "Act as quality gatekeeper, verify every squad Pull Request before production release, and maintain zero-defect standards."
        },
        ai: {
            title: "AI-Related Role (AI Engineer / Builder)",
            subtitle: "Integrate LLMs, AI agents, RAG pipelines & smart automations into web apps",
            icon: "fa-brain",
            colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
            tags: ["LLM Integration", "OpenAI & Gemini APIs", "Prompt Engineering", "RAG Pipelines", "Vector Databases", "LangChain / AI Agents"],
            modules: [
                {
                    week: "Week 01",
                    title: "Foundations of Generative AI & Prompt Engineering",
                    desc: "LLM concepts, tokens, system prompting, few-shot prompting, structured JSON outputs, and OpenAI/Gemini API calls."
                },
                {
                    week: "Week 02",
                    title: "Embeddings, Vector Databases & RAG Pipelines",
                    desc: "Text embeddings, semantic vector search (Pinecone/ChromaDB), document chunking, and Retrieval-Augmented Generation."
                },
                {
                    week: "Week 03",
                    title: "AI Agents, Tool Calling & Function Calling",
                    desc: "Building autonomous agents that use APIs, search tools, calculate results, and perform multi-step workflows."
                },
                {
                    week: "Week 04",
                    title: "Production AI Web App Capstone & Gate Evaluation",
                    desc: "Build an AI-powered copilot or smart document analyzer with streaming UI, vector database, and deployment."
                }
            ],
            squadRole: "Empower squad products with AI features, smart search, automated workflows, and conversational assistant capabilities."
        }
    };

    // 2. Render Track Function
    function renderTrack(trackKey) {
        const track = tracksData[trackKey] || tracksData.frontend;
        const container = document.getElementById('trackContent');
        if (!container) return;

        const tagsHtml = track.tags.map(tag => 
            `<span class="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-slate-300">${tag}</span>`
        ).join('');

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
                    <span class="text-xs text-slate-400 mr-1 font-mono uppercase">Key Tools & Skills:</span>
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

    // 3. 2-Step Registration System (Google Form -> Unlocks WhatsApp Group)
    const step1Btn = document.getElementById('step1Btn');
    const formCheckbox = document.getElementById('formCompletedCheckbox');
    const step2Btn = document.getElementById('step2Btn');
    const step2Container = document.getElementById('step2Container');
    const stepStatusBadge = document.getElementById('stepStatusBadge');

    function unlockStep2() {
        if (!step2Btn) return;
        step2Btn.removeAttribute('disabled');
        step2Btn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        step2Btn.classList.add('animate-pulse', 'bg-gradient-to-r', 'from-emerald-500', 'to-teal-400', 'shadow-emerald-500/30');
        
        if (stepStatusBadge) {
            stepStatusBadge.innerHTML = `<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full"><i class="fa-solid fa-circle-check"></i> Step 1 Complete • Step 2 Unlocked!</span>`;
        }

        const lockIcon = document.getElementById('step2LockIcon');
        if (lockIcon) {
            lockIcon.className = "fab fa-whatsapp text-2xl text-slate-950";
        }

        const step2Title = document.getElementById('step2Title');
        if (step2Title) {
            step2Title.textContent = "Connect on Official WhatsApp Group";
        }
    }

    if (step1Btn) {
        step1Btn.addEventListener('click', () => {
            // Check the confirmation checkbox automatically once clicked
            if (formCheckbox) {
                formCheckbox.checked = true;
            }
            unlockStep2();
        });
    }

    if (formCheckbox) {
        formCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                unlockStep2();
            }
        });
    }

    // Modal Trigger Buttons (All "Register / Apply Now" buttons open or scroll to the 2-step onboarding section)
    const registerTriggers = document.querySelectorAll('.open-register-modal');
    registerTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById('apply-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                targetSection.classList.add('ring-2', 'ring-emerald-500/50');
                setTimeout(() => targetSection.classList.remove('ring-2', 'ring-emerald-500/50'), 2000);
            }
        });
    });

    // 4. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const answer = item.querySelector('.faq-answer');
        const icon = btn.querySelector('i');

        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            faqItems.forEach(i => {
                i.classList.remove('active');
                const a = i.querySelector('.faq-answer');
                const ic = i.querySelector('.faq-btn i');
                if (a) a.style.maxHeight = null;
                if (ic) ic.style.transform = 'rotate(0deg)';
                i.querySelector('.faq-btn')?.setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 5. Mobile Menu Toggle
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

        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }

    // 6. Dynamic Countdown Timer (8 days)
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

    // 7. Scroll to Top Button & Header Shadow
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const mainHeader = document.getElementById('mainHeader');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (mainHeader) {
            if (scrollY > 40) {
                mainHeader.classList.add('border-b', 'border-white/10', 'shadow-2xl');
            } else {
                mainHeader.classList.remove('shadow-2xl');
            }
        }

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
