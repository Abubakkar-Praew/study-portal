// Enhanced course data
let courses = [
    {
        id: 1,
        university: "Buckinghamshire New University",
        courseName: "BA (Hons) International Hospitality Management",
        level: "undergraduate",
        intake: "April 2026",
        fee: "£15,150 per year",
        duration: "3 Year",
        officialLink: "https://www.bucks.ac.uk/courses/undergraduate/ba-hons-international-hospitality-management",
        campus: "High Wycombe",
        academicReq: "A Levels or equivalent qualification",
        description: "This course prepares students for careers in the hospitality industry with comprehensive knowledge of management, operations, and customer service excellence.",
        englishReq: ["IELTS 6.0 or equivalent", "No component below 5.5"]
    },
    {
        id: 1,
        university: "Buckinghamshire New University",
        courseName: "BA (Hons) International Hospitality Management",
        level: "undergraduate",
        intake: "April 2026",
        fee: "£15,150 per year",
        duration: "3 Year",
        officialLink: "https://www.bucks.ac.uk/courses/undergraduate/ba-hons-international-hospitality-management",
        campus: "High Wycombe",
        academicReq: "A Levels or equivalent qualification",
        description: "This course prepares students for careers in the hospitality industry with comprehensive knowledge of management, operations, and customer service excellence.",
        englishReq: ["IELTS 6.0 or equivalent", "No component below 5.5"]
    },
    {
        id: 2,
        university: "Buckinghamshire New University",
        courseName: "BSc (Hons) International Business Studies",
        level: "undergraduate",
        intake: "April 2026",
        fee: "£15,150 per year",
        duration: "3 to 4 Year",
        officialLink: "https://www.bucks.ac.uk/courses/undergraduate/bsc-hons-international-business-studies",
        campus: "High Wycombe",
        academicReq: "A Levels or equivalent qualification",
        description: "Study international business with focus on global markets, cross-cultural management, and international trade.",
        englishReq: ["IELTS 6.0 or equivalent", "No component below 5.5"]
    },
    {
        id: 3,
        university: "Buckinghamshire New University",
        courseName: "MBA International Masters of Business Administration",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£19,000 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/mba-international-masters-business-administration",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree with 3+ years work experience",
        description: "Advanced business management program with focus on international business strategy, leadership, and organizational development.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 4,
        university: "Buckinghamshire New University",
        courseName: "BSc (Hons) Health and Social Science",
        level: "undergraduate",
        intake: "April 2026",
        fee: "£15,150 per year",
        duration: "3 to 4 Year",
        officialLink: "https://www.bucks.ac.uk/courses/undergraduate/bsc-hons-health-and-social-science",
        campus: "High Wycombe",
        academicReq: "A Levels or equivalent qualification",
        description: "Explore health science and social science with practical placements and clinical experience in healthcare settings.",
        englishReq: ["IELTS 6.0 or equivalent", "No component below 5.5"]
    },
    {
        id: 5,
        university: "Buckinghamshire New University",
        courseName: "MSc Artificial Intelligence",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,150 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-artificial-intelligence",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree in Computer Science or related field",
        description: "Advanced program covering machine learning, neural networks, and AI applications with hands-on projects.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 6,
        university: "Buckinghamshire New University",
        courseName: "MSc Computer Science",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,150 per year",

        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-computer-science",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree in Computer Science or related field",
        description: "Comprehensive computer science program covering software engineering, data structures, algorithms, and advanced programming.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 7,
        university: "Buckinghamshire New University",
        courseName: "MSc Computer Science (Conversion)",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,150 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-computer-science-conversion",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree (any discipline) with strong analytical skills",
        description: "Conversion program designed for graduates from non-computing backgrounds to transition into computer science.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 8,
        university: "Buckinghamshire New University",
        courseName: "MSc Construction Project Management",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,150 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-construction-project-management",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree with construction or project management experience",
        description: "Develop expertise in construction project management, planning, budgeting, and stakeholder management.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 9,
        university: "Buckinghamshire New University",
        courseName: "MSc Cyber Security",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£19,000 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-cyber-security",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree in Computer Science or IT",
        description: "Advanced cybersecurity program covering threat analysis, network security, cryptography, and security management.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 10,
        university: "Buckinghamshire New University",
        courseName: "MSc Data Science",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,550 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-data-science",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree with strong mathematics or statistics",
        description: "Master data science with focus on machine learning, big data analytics, data visualization, and statistical modeling.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 11,
        university: "Buckinghamshire New University",
        courseName: "MSc Digital Marketing Leadership",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,500 per year",
        duration: "1 or 2 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-digital-marketing-leadership",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree with marketing or business background",
        description: "Develop leadership skills in digital marketing with focus on strategy, analytics, and digital channel management.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 12,
        university: "Buckinghamshire New University",
        courseName: "MSc Engineering Management",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,500 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-engineering-management-ft",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree in Engineering",
        description: "Combine engineering expertise with business and management skills for leadership in engineering projects.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 13,
        university: "Buckinghamshire New University",
        courseName: "MSc Finance and Investment",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,500 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-finance-and-investment",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree with quantitative skills",
        description: "Study finance and investment with focus on portfolio management, financial analysis, and investment strategies.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 14,
        university: "Buckinghamshire New University",
        courseName: "MSc Hospitality Leadership",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,550 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-hospitality-leadership",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree with hospitality or business experience",
        description: "Develop leadership skills for the hospitality industry with focus on operations, strategy, and customer experience.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 15,
        university: "Buckinghamshire New University",
        courseName: "MSc International Business Management",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,550 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-international-business-management",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree in business or related field",
        description: "Master international business management with focus on global markets, cross-cultural management, and international strategy.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 16,
        university: "Buckinghamshire New University",
        courseName: "MSc International Supply Chain Management",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,550 per year",
        duration: "1 or 2 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-international-supply-chain-management",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree with supply chain or logistics interest",
        description: "Study international supply chain management with focus on logistics, operations optimization, and global sourcing.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
    {
        id: 17,
        university: "Buckinghamshire New University",
        courseName: "MSc Public Health",
        level: "postgraduate",
        intake: "April 2026",
        fee: "£15,550 per year",
        duration: "1 Year",
        officialLink: "https://www.bucks.ac.uk/courses/postgraduate/mph-public-health",
        campus: "High Wycombe",
        academicReq: "Bachelor's degree with health or science background",
        description: "Study public health with focus on disease prevention, health policy, epidemiology, and health management.",
        englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"]
    },
];

// Current filtered courses
let filteredCourses = [...courses];

// Function to extract unique values from courses
function getUniqueValues(key) {
    const values = courses.map(course => course[key]);
    return [...new Set(values)].filter(v => v).sort();
}

// Function to populate filter dropdowns dynamically
function populateFilters() {
    // Populate Universities
    const universities = getUniqueValues('university');
    const universitySelect = document.getElementById('university');
    universities.forEach(university => {
        const option = document.createElement('option');
        option.value = university.toLowerCase().replace(/\s+/g, '-');
        option.textContent = university;
        universitySelect.appendChild(option);
    });

    // Populate Intakes
    const intakes = getUniqueValues('intake');
    const intakeSelect = document.getElementById('intake');
    intakes.forEach(intake => {
        const option = document.createElement('option');
        option.value = intake.toLowerCase().replace(/\s+/g, '-');
        option.textContent = intake;
        intakeSelect.appendChild(option);
    });

    // Populate Course Levels
    const levels = getUniqueValues('level');
    const levelSelect = document.getElementById('course-type');
    levels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.toLowerCase();
        option.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        levelSelect.appendChild(option);
    });

    // Populate Campus/City
    const campuses = getUniqueValues('campus');
    const campusSelect = document.getElementById('campus');
    campuses.forEach(campus => {
        const option = document.createElement('option');
        option.value = campus.toLowerCase().replace(/\s+/g, '-');
        option.textContent = campus;
        campusSelect.appendChild(option);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    populateFilters();
    renderCourses();
    setupEventListeners();
    setupQuickFilters();
    loadCoursesFromFirebase(); // Load Firebase courses after default courses
});

// Render course cards
function renderCourses(searchTerm = '') {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';

    if (filteredCourses.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: white; border-radius: var(--radius); box-shadow: var(--shadow);">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--primary); margin-bottom: 0.5rem;">No courses found</h3>
                <p style="color: var(--gray);">Try adjusting your search criteria or filters</p>
            </div>
        `;
        document.getElementById('resultsCount').textContent = '0 courses found';
        return;
    }

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.setAttribute('data-id', course.id);

        card.innerHTML = `
            <div class="course-header" style="display: flex; flex-direction: column;">
                <div class="university-name" style="flex: 1; display: flex; align-items: center;">${course.university}</div>
                <h3 class="course-title" style="flex: 1; display: flex; align-items: center;">${course.courseName}</h3>
                <div class="course-badges" style="flex: 1; display: flex; align-items: center; gap: 8px;">
                    <span class="badge">${course.level}</span>
                    <span class="badge">${course.campus}</span>
                </div>
            </div>
            <div class="course-body">
                <div class="course-details">
                    <div class="detail-item">
                        <span class="detail-label">Intake</span>
                        <span class="detail-value">${course.intake}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Duration</span>
                        <span class="detail-value">${course.duration}</span>
                    </div>
                </div>
                <div class="detail-item" style="text-align: center; margin: 15px 0;">
                    <span class="detail-label" style="display: block;">Course Fee</span>
                    <span class="detail-value" style="font-size: 1.2rem; font-weight: 600; color: var(--primary);">${course.fee}</span>
                </div>
                <div class="course-actions">
                    <button class="btn-primary view-details-btn">
                        <i class="fas fa-info-circle"></i> View Details
                    </button>
                    <button class="btn-secondary save-btn">
                        <i class="far fa-bookmark"></i> Save
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);

        // Add event listeners
        const viewBtn = card.querySelector('.view-details-btn');
        viewBtn.addEventListener('click', () => openModal(course.id));

        const saveBtn = card.querySelector('.save-btn');
        saveBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            saveCourse(course.id);
        });

        // Make card clickable
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-primary') &&
                !e.target.classList.contains('btn-secondary') &&
                !e.target.closest('.btn-primary') &&
                !e.target.closest('.btn-secondary')) {
                openModal(course.id);
            }
        });
    });

    // Update results count
    const countText = filteredCourses.length === 1 ?
        '1 course found' :
        `${filteredCourses.length} courses found`;
    document.getElementById('resultsCount').textContent = countText;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('mainSearch');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Filter change listeners
    document.getElementById('university').addEventListener('change', performSearch);
    document.getElementById('intake').addEventListener('change', performSearch);
    document.getElementById('course-type').addEventListener('change', performSearch);
    document.getElementById('campus').addEventListener('change', performSearch);

    // Modal close button
    document.getElementById('closeModal').addEventListener('click', closeModal);

    // Close modal when clicking outside
    document.getElementById('courseModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Modal action buttons
    document.getElementById('saveCourse').addEventListener('click', function () {
        const courseId = parseInt(this.closest('.modal-overlay').getAttribute('data-course-id'));
        saveCourse(courseId);
    });

    document.getElementById('shareCourse').addEventListener('click', function () {
        alert('Share functionality would open sharing dialog in a real application');
    });

    // --- Login modal & authentication handlers ---
    // Demo credentials (for local testing)
    const demoLogin = { email: 'demo@demo.com', password: 'Password123' };

    function setAuth(email) {
        const token = 'demo-token-' + Date.now();
        const payload = { token, email, issuedAt: Date.now() };
        try { sessionStorage.setItem('auth', JSON.stringify(payload)); } catch (e) { }
    }

    // Account button - open login modal
    const accountBtn = document.getElementById('accountBtn');
    if (accountBtn) {
        accountBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.style.display = 'flex';
                loginModal.setAttribute('aria-hidden', 'false');
                document.body.classList.add('modal-open');
                document.getElementById('loginEmail').focus();
            }
        });
    }

    // Close login modal
    const closeLoginBtn = document.getElementById('closeLoginModal');
    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', function () {
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.style.display = 'none';
                loginModal.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('modal-open');
            }
        });
    }

    // Close login modal when clicking outside
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.addEventListener('click', function (e) {
            if (e.target === loginModal) {
                this.style.display = 'none';
                this.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('modal-open');
            }
        });
    }

    // Update login form submission to redirect to add-course.html on success
    const loginForm = document.getElementById('loginModalForm');
    if (loginForm) {
        const originalSubmit = loginForm.onsubmit;
        loginForm.addEventListener('submit', function (ev) {
            ev.preventDefault();
            const email = (document.getElementById('loginEmail').value || '').trim();
            const password = (document.getElementById('loginPassword').value || '').trim();
            const emailErr = document.getElementById('loginEmailError');
            const passErr = document.getElementById('loginPassError');
            const authErr = document.getElementById('loginAuthError');

            // Reset errors
            [emailErr, passErr, authErr].forEach(x => { if (x) x.style.display = 'none'; });

            let ok = true;
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) { if (emailErr) emailErr.style.display = 'block'; ok = false; }
            if (!password || password.length < 6) { if (passErr) passErr.style.display = 'block'; ok = false; }
            if (!ok) return;

            // Demo credentials
            if (email.toLowerCase() === demoLogin.email && password === demoLogin.password) {
                const token = 'demo-token-' + Date.now();
                const payload = { token, email, issuedAt: Date.now() };
                try { sessionStorage.setItem('auth', JSON.stringify(payload)); } catch (e) { }
                window.location.href = 'add-course.html';
                return;
            }

            if (authErr) {
                authErr.textContent = 'Invalid email or password.';
                authErr.style.display = 'block';
            }
        });
    }

    // Call this from setupEventListeners (or place inside it)
    (function attachLoginHandlers() {
        // Click outside modal to close
        loginModal.addEventListener('click', function (e) {
            if (e.target === loginModal) hideLogin();
        });

        // Form validation + submit
        loginForm.addEventListener('submit', function (ev) {
            ev.preventDefault();
            const email = (document.getElementById('loginEmail').value || '').trim();
            const password = (document.getElementById('loginPassword').value || '').trim();
            const emailErr = document.getElementById('loginEmailError');
            const passErr = document.getElementById('loginPassError');
            const authErr = document.getElementById('loginAuthError');

            // reset
            [emailErr, passErr, authErr].forEach(x => { if (x) x.style.display = 'none'; });

            let ok = true;
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) { if (emailErr) emailErr.style.display = 'block'; ok = false; }
            if (!password || password.length < 6) { if (passErr) passErr.style.display = 'block'; ok = false; }
            if (!ok) return;

            // Try users saved in localStorage (optional)
            try {
                const raw = localStorage.getItem('users');
                const users = raw ? JSON.parse(raw) : [];
                const found = Array.isArray(users) && users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase() && u.password === password);
                if (found) {
                    setAuth(found.email);
                    // redirect to add-course
                    window.location.href = 'add-course.html';
                    return;
                }
            } catch (e) { /* ignore parse errors */ }

            // fallback demo credentials
            if (email.toLowerCase() === demoLogin.email && password === demoLogin.password) {
                setAuth(demoLogin.email);
                window.location.href = 'add-course.html';
                return;
            }

            if (authErr) {
                authErr.textContent = 'Invalid email or password.';
                authErr.style.display = 'block';
            }
        });

        // allow Enter to submit from inputs
        ['loginEmail', 'loginPassword'].forEach(id => {
            const inp = document.getElementById(id);
            if (inp) inp.addEventListener('keyup', function (e) {
                if (e.key === 'Enter') loginForm.requestSubmit();
            });
        });
    })();
}

// Filter and search courses
function performSearch() {
    const searchTerm = (document.getElementById('mainSearch').value || '').trim().toLowerCase();
    const universityFilter = document.getElementById('university').value;
    const intakeFilter = document.getElementById('intake').value;
    const levelFilter = document.getElementById('course-type').value;
    const campusFilter = document.getElementById('campus').value;

    filteredCourses = courses.filter(course => {
        // Apply search term filter
        let matchesSearch = true;
        if (searchTerm) {
            matchesSearch =
                course.courseName.toLowerCase().includes(searchTerm) ||
                course.university.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm) ||
                course.campus.toLowerCase().includes(searchTerm);
        }

        // Apply university filter
        let matchesUniversity = true;
        if (universityFilter !== 'all') {
            matchesUniversity = course.university.toLowerCase().includes(universityFilter.toLowerCase().replace(/-/g, ' '));
        }

        // Apply intake filter
        let matchesIntake = true;
        if (intakeFilter !== 'all') {
            matchesIntake = course.intake.toLowerCase().includes(intakeFilter.toLowerCase().replace(/-/g, ' '));
        }

        // Apply level filter
        let matchesLevel = true;
        if (levelFilter !== 'all') {
            matchesLevel = course.level.toLowerCase() === levelFilter.toLowerCase();
        }

        // Apply campus filter
        let matchesCampus = true;
        if (campusFilter !== 'all') {
            matchesCampus = course.campus.toLowerCase().includes(campusFilter.toLowerCase().replace(/-/g, ' '));
        }

        return matchesSearch && matchesUniversity && matchesIntake && matchesLevel && matchesCampus;
    });

    renderCourses(searchTerm);
}

// Open modal with course details
function openModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    document.getElementById('courseModal').setAttribute('data-course-id', courseId);

    // Populate modal
    document.getElementById('modalCourseTitle').textContent = course.courseName;
    document.getElementById('modalUniversity').textContent = course.university;
    document.getElementById('modalCourseLevel').textContent = `${course.level} (${course.courseName.split(' ').pop()})`;
    document.getElementById('modalIntake').textContent = course.intake;
    document.getElementById('modalDuration').textContent = course.duration;
    document.getElementById('modalFee').textContent = course.fee;
    document.getElementById('modalAcademicReq').textContent = course.academicReq;
    document.getElementById('modalDescription').textContent = course.description;
    document.getElementById('modalOfficialLink').href = course.officialLink;

    // Populate English requirements
    const englishReqList = document.getElementById('modalEnglishReq');
    englishReqList.innerHTML = '';
    course.englishReq.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        englishReqList.appendChild(li);
    });

    // Hide the three sections
    // Hide Entry Requirements section
    const academicReq = document.getElementById('modalAcademicReq');
    if (academicReq) {
        const entryReqSection = academicReq.closest('.modal-section');
        if (entryReqSection) entryReqSection.style.display = 'none';
    }

    // Hide English Language Requirements section
    const englishReqSection = document.getElementById('modalEnglishReq');
    if (englishReqSection) {
        const section = englishReqSection.closest('.modal-section');
        if (section) section.style.display = 'none';
    }

    // Hide Course Overview section
    const description = document.getElementById('modalDescription');
    if (description) {
        const overviewSection = description.closest('.modal-section');
        if (overviewSection) overviewSection.style.display = 'none';
    }

    // Prevent background scroll
    document.body.classList.add('modal-open');
    document.getElementById('courseModal').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
    // Allow background scroll
    document.body.classList.remove('modal-open');
}

// Save course functionality
function saveCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    alert(`Course "${course.courseName}" saved to your list!`);

    const saveBtn = document.getElementById('saveCourse');
    if (saveBtn) {
        saveBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
        saveBtn.style.background = 'var(--success)';
        saveBtn.style.color = 'white';

        setTimeout(() => {
            saveBtn.innerHTML = '<i class="far fa-bookmark"></i> Save Course';
            saveBtn.style.background = '';
            saveBtn.style.color = '';
        }, 2000);
    }
}

// Mobile toggle: show/hide logo, nav, search and filters in-place on small screens
(function setupMobileToggle() {
    const mobileToggle = document.getElementById('mobileToggle');
    const logoEl = document.querySelector('.header-content .logo');
    const navEl = document.querySelector('.header-content .nav-links');
    const searchBarEl = document.querySelector('.search-section .search-bar');
    const filterGridEl = document.querySelector('.search-section .filter-grid');

    const elems = [logoEl, navEl, searchBarEl, filterGridEl].filter(Boolean);
    if (!mobileToggle || elems.length === 0) return;

    // Save original display values for restore, but avoid saving "none" (mobile CSS)
    elems.forEach(el => {
        const comp = window.getComputedStyle(el).display || '';
        el.dataset.origDisplay = (comp && comp !== 'none') ? comp : '';
    });

    let isOpen = false;

    function openMobile() {
        isOpen = true;
        elems.forEach(el => {
            // nav-links should use 'flex' on mobile (it's a UL), others default to 'block'
            const fallback = el === navEl ? 'flex' : 'block';
            const saved = el.dataset.origDisplay || '';
            el.style.display = saved || fallback;
        });
        mobileToggle.setAttribute('aria-expanded', 'true');
        const icon = mobileToggle.querySelector('i');
        if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-times'); }
    }

    function closeMobile() {
        isOpen = false;
        elems.forEach(el => el.style.display = 'none');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
    }

    function initState() {
        if (window.innerWidth <= 768) {
            elems.forEach(el => el.style.display = 'none');
            mobileToggle.setAttribute('aria-expanded', 'false');
        } else {
            // restore for desktop
            elems.forEach(el => el.style.display = '');
            mobileToggle.setAttribute('aria-expanded', 'true');
        }
        const icon = mobileToggle.querySelector('i');
        if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
    }

    // Toggle handler
    mobileToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        if (window.innerWidth <= 768) {
            isOpen ? closeMobile() : openMobile();
        } else {
            // On desktop, ensure nav is visible
            elems.forEach(el => el.style.display = '');
            mobileToggle.setAttribute('aria-expanded', 'true');
        }
    });

    // Clicking outside closes the mobile menu (only on small screens)
    document.addEventListener('click', function (e) {
        if (!isOpen) return;
        if (mobileToggle.contains(e.target)) return;
        if (elems.some(el => el.contains(e.target))) return;
        if (window.innerWidth <= 768) closeMobile();
    });

    // Keep layout consistent on resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            elems.forEach(el => el.style.display = '');
            isOpen = false;
            mobileToggle.setAttribute('aria-expanded', 'true');
            const icon = mobileToggle.querySelector('i');
            if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
        } else {
            if (!isOpen) elems.forEach(el => el.style.display = 'none');
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
        }
    });

    // Initialize
    initState();



    // ===== FIREBASE INTEGRATION =====
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCGQKCkBDhozfG8bqYObKSCS2sxdZQEJm4",
        authDomain: "ukvi-info.firebaseapp.com",
        projectId: "ukvi-info",
        storageBucket: "ukvi-info.firebasestorage.app",
        messagingSenderId: "40936408296",
        appId: "1:40936408296:web:661bb619ed6bc75437355d",
        measurementId: "G-N021HN10HT"
    };

    // Initialize Firebase
    if (!window.firebase) {
        console.error('Firebase SDK not loaded');
    } else {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const db = firebase.firestore();

        // Load courses from Firestore and merge with defaults
        async function loadCoursesFromFirebase() {
            try {
                const querySnapshot = await db.collection('courses').get();
                const firebaseCourses = [];
                querySnapshot.forEach((doc) => {
                    firebaseCourses.push(doc.data());
                });
                // Add Firebase courses to the existing courses array
                if (firebaseCourses.length > 0) {
                    courses = [...courses, ...firebaseCourses];
                    filteredCourses = [...courses];
                    populateFilters();
                    renderCourses();
                    console.log('✅ Firebase courses loaded:', firebaseCourses.length);
                }
            } catch (err) {
                console.warn('Firebase courses not loaded:', err.message);
            }
        }

        // Save new course to Firebase
        window.saveCourseToCFirebase = async function (courseData) {
            try {
                const docId = String(courseData.id);
                await db.collection('courses').doc(docId).set(courseData);
                console.log('✅ Course saved to Firebase');
                return true;
            } catch (err) {
                console.error('Error saving course:', err);
                return false;
            }
        };
    }

})();