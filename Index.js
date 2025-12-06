/* Index.js — main app logic (uses Firebase compat / namespaced API)
   Make sure Index.html loads firebase-app-compat.js and firebase-firestore-compat.js before this script.
*/

// Default course data (duplicate entry removed)
let courses = [
    { id: 1, university: "Buckinghamshire New University", courseName: "BA (Hons) International Hospitality Management", level: "undergraduate", intake: "April 2026", fee: "£15,150 per year", duration: "3 Year", officialLink: "https://www.bucks.ac.uk/courses/undergraduate/ba-hons-international-hospitality-management", campus: "High Wycombe", academicReq: "A Levels or equivalent qualification", description: "This course prepares students for careers in the hospitality industry with comprehensive knowledge of management, operations, and customer service excellence.", englishReq: ["IELTS 6.0 or equivalent", "No component below 5.5"] },
    { id: 2, university: "Buckinghamshire New University", courseName: "BSc (Hons) International Business Studies", level: "undergraduate", intake: "April 2026", fee: "£15,150 per year", duration: "3 to 4 Year", officialLink: "https://www.bucks.ac.uk/courses/undergraduate/bsc-hons-international-business-studies", campus: "High Wycombe", academicReq: "A Levels or equivalent qualification", description: "Study international business with focus on global markets, cross-cultural management, and international trade.", englishReq: ["IELTS 6.0 or equivalent", "No component below 5.5"] },
    { id: 3, university: "Buckinghamshire New University", courseName: "MBA International Masters of Business Administration", level: "postgraduate", intake: "April 2026", fee: "£19,000 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/mba-international-masters-business-administration", campus: "High Wycombe", academicReq: "Bachelor's degree with 3+ years work experience", description: "Advanced business management program with focus on international business strategy, leadership, and organizational development.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 4, university: "Buckinghamshire New University", courseName: "BSc (Hons) Health and Social Science", level: "undergraduate", intake: "April 2026", fee: "£15,150 per year", duration: "3 to 4 Year", officialLink: "https://www.bucks.ac.uk/courses/undergraduate/bsc-hons-health-and-social-science", campus: "High Wycombe", academicReq: "A Levels or equivalent qualification", description: "Explore health science and social science with practical placements and clinical experience in healthcare settings.", englishReq: ["IELTS 6.0 or equivalent", "No component below 5.5"] },
    { id: 5, university: "Buckinghamshire New University", courseName: "MSc Artificial Intelligence", level: "postgraduate", intake: "April 2026", fee: "£15,150 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-artificial-intelligence", campus: "High Wycombe", academicReq: "Bachelor's degree in Computer Science or related field", description: "Advanced program covering machine learning, neural networks, and AI applications with hands-on projects.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 6, university: "Buckinghamshire New University", courseName: "MSc Computer Science", level: "postgraduate", intake: "April 2026", fee: "£15,150 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-computer-science", campus: "High Wycombe", academicReq: "Bachelor's degree in Computer Science or related field", description: "Comprehensive computer science program covering software engineering, data structures, algorithms, and advanced programming.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 7, university: "Buckinghamshire New University", courseName: "MSc Computer Science (Conversion)", level: "postgraduate", intake: "April 2026", fee: "£15,150 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-computer-science-conversion", campus: "High Wycombe", academicReq: "Bachelor's degree (any discipline) with strong analytical skills", description: "Conversion program designed for graduates from non-computing backgrounds to transition into computer science.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 8, university: "Buckinghamshire New University", courseName: "MSc Construction Project Management", level: "postgraduate", intake: "April 2026", fee: "£15,150 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-construction-project-management", campus: "High Wycombe", academicReq: "Bachelor's degree with construction or project management experience", description: "Develop expertise in construction project management, planning, budgeting, and stakeholder management.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 9, university: "Buckinghamshire New University", courseName: "MSc Cyber Security", level: "postgraduate", intake: "April 2026", fee: "£19,000 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-cyber-security", campus: "High Wycombe", academicReq: "Bachelor's degree in Computer Science or IT", description: "Advanced cybersecurity program covering threat analysis, network security, cryptography, and security management.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 10, university: "Buckinghamshire New University", courseName: "MSc Data Science", level: "postgraduate", intake: "April 2026", fee: "£15,550 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-data-science", campus: "High Wycombe", academicReq: "Bachelor's degree with strong mathematics or statistics", description: "Master data science with focus on machine learning, big data analytics, data visualization, and statistical modeling.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 11, university: "Buckinghamshire New University", courseName: "MSc Digital Marketing Leadership", level: "postgraduate", intake: "April 2026", fee: "£15,500 per year", duration: "1 or 2 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-digital-marketing-leadership", campus: "High Wycombe", academicReq: "Bachelor's degree with marketing or business background", description: "Develop leadership skills in digital marketing with focus on strategy, analytics, and digital channel management.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 12, university: "Buckinghamshire New University", courseName: "MSc Engineering Management", level: "postgraduate", intake: "April 2026", fee: "£15,500 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-engineering-management-ft", campus: "High Wycombe", academicReq: "Bachelor's degree in Engineering", description: "Combine engineering expertise with business and management skills for leadership in engineering projects.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 13, university: "Buckinghamshire New University", courseName: "MSc Finance and Investment", level: "postgraduate", intake: "April 2026", fee: "£15,500 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-finance-and-investment", campus: "High Wycombe", academicReq: "Bachelor's degree with quantitative skills", description: "Study finance and investment with focus on portfolio management, financial analysis, and investment strategies.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 14, university: "Buckinghamshire New University", courseName: "MSc Hospitality Leadership", level: "postgraduate", intake: "April 2026", fee: "£15,550 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-hospitality-leadership", campus: "High Wycombe", academicReq: "Bachelor's degree with hospitality or business experience", description: "Develop leadership skills for the hospitality industry with focus on operations, strategy, and customer experience.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 15, university: "Buckinghamshire New University", courseName: "MSc International Business Management", level: "postgraduate", intake: "April 2026", fee: "£15,550 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-international-business-management", campus: "High Wycombe", academicReq: "Bachelor's degree in business or related field", description: "Master international business management with focus on global markets, cross-cultural management, and international strategy.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 16, university: "Buckinghamshire New University", courseName: "MSc International Supply Chain Management", level: "postgraduate", intake: "April 2026", fee: "£15,550 per year", duration: "1 or 2 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/msc-international-supply-chain-management", campus: "High Wycombe", academicReq: "Bachelor's degree with supply chain or logistics interest", description: "Study international supply chain management with focus on logistics, operations optimization, and global sourcing.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] },
    { id: 17, university: "Buckinghamshire New University", courseName: "MSc Public Health", level: "postgraduate", intake: "April 2026", fee: "£15,550 per year", duration: "1 Year", officialLink: "https://www.bucks.ac.uk/courses/postgraduate/mph-public-health", campus: "High Wycombe", academicReq: "Bachelor's degree with health or science background", description: "Study public health with focus on disease prevention, health policy, epidemiology, and health management.", englishReq: ["IELTS 6.5 or equivalent", "No component below 6.0"] }
];

// filtered view
let filteredCourses = [...courses];

// Helper: unique values
function getUniqueValues(key) {
    const values = courses.map(c => c[key]).filter(Boolean);
    return [...new Set(values)].sort();
}

// Populate filter dropdowns
function populateFilters() {
    const universities = getUniqueValues('university');
    const universitySelect = document.getElementById('university');
    if (universitySelect) {
        // Keep first "all" option, then add others
        universities.forEach(u => {
            const option = document.createElement('option');
            option.value = u.toLowerCase().replace(/\s+/g, '-');
            option.textContent = u;
            universitySelect.appendChild(option);
        });
    }

    const intakes = getUniqueValues('intake');
    const intakeSelect = document.getElementById('intake');
    if (intakeSelect) {
        intakes.forEach(i => {
            const option = document.createElement('option');
            option.value = i.toLowerCase().replace(/\s+/g, '-');
            option.textContent = i;
            intakeSelect.appendChild(option);
        });
    }

    const levels = getUniqueValues('level');
    const levelSelect = document.getElementById('course-type');
    if (levelSelect) {
        levels.forEach(l => {
            const option = document.createElement('option');
            option.value = l.toLowerCase();
            option.textContent = l.charAt(0).toUpperCase() + l.slice(1);
            levelSelect.appendChild(option);
        });
    }

    const campuses = getUniqueValues('campus');
    const campusSelect = document.getElementById('campus');
    if (campusSelect) {
        campuses.forEach(c => {
            const option = document.createElement('option');
            option.value = c.toLowerCase().replace(/\s+/g, '-');
            option.textContent = c;
            campusSelect.appendChild(option);
        });
    }
}

// Render cards
function renderCourses(searchTerm = '') {
    const container = document.getElementById('coursesContainer');
    if (!container) return;
    container.innerHTML = '';

    if (filteredCourses.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: white; border-radius: 8px; box-shadow: 0 6px 18px rgba(0,0,0,.06);">
                <i class="fas fa-search" style="font-size: 3rem; color: #94a3b8; margin-bottom: 1rem;"></i>
                <h3 style="color:#1a365d; margin-bottom: 0.5rem;">No courses found</h3>
                <p style="color:#64748b;">Try adjusting your search criteria or filters</p>
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
            <div class="course-header" style="display:flex;flex-direction:column;">
                <div class="university-name">${course.university}</div>
                <h3 class="course-title">${course.courseName}</h3>
                <div class="course-badges" style="display:flex;gap:8px;">
                    <span class="badge">${course.level}</span>
                    <span class="badge">${course.campus}</span>
                </div>
            </div>
            <div class="course-body">
                <div class="course-details">
                    <div class="detail-item"><span class="detail-label">Intake</span><span class="detail-value">${course.intake}</span></div>
                    <div class="detail-item"><span class="detail-label">Duration</span><span class="detail-value">${course.duration}</span></div>
                </div>
                <div class="detail-item" style="text-align:center;margin:15px 0;">
                    <span class="detail-label" style="display:block;">Course Fee</span>
                    <span class="detail-value" style="font-size:1.1rem;font-weight:600;color:#1a365d;">${course.fee}</span>
                </div>
                <div class="course-actions">
                    <button class="btn-primary view-details-btn"><i class="fas fa-info-circle"></i> View Details</button>
                    <button class="btn-secondary save-btn"><i class="far fa-bookmark"></i> Save</button>
                </div>
            </div>
        `;

        container.appendChild(card);

        const viewBtn = card.querySelector('.view-details-btn');
        if (viewBtn) viewBtn.addEventListener('click', () => openModal(course.id));

        const saveBtn = card.querySelector('.save-btn');
        if (saveBtn) saveBtn.addEventListener('click', (e) => { e.stopPropagation(); saveCourse(course.id); });

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.view-details-btn') && !e.target.closest('.save-btn')) {
                openModal(course.id);
            }
        });
    });

    const countText = filteredCourses.length === 1 ? '1 course found' : `${filteredCourses.length} courses found`;
    const rc = document.getElementById('resultsCount');
    if (rc) rc.textContent = countText;
}

// Quick filters (simple behavior: clicking chips sets search/filters)
function setupQuickFilters() {
    const chips = document.querySelectorAll('.filter-chip');
    if (!chips) return;
    chips.forEach(chip => {
        chip.addEventListener('click', function () {
            chips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const txt = this.textContent.trim().toLowerCase();
            const searchInput = document.getElementById('mainSearch');
            if (searchInput) searchInput.value = (txt === 'all courses') ? '' : txt;
            performSearch();
        });
    });
}

// Event listeners & login modal logic
function setupEventListeners() {
    const searchInput = document.getElementById('mainSearch');
    const searchButton = document.getElementById('searchButton');
    if (searchButton) searchButton.addEventListener('click', performSearch);
    if (searchInput) searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') performSearch(); });

    const uni = document.getElementById('university');
    const intake = document.getElementById('intake');
    const level = document.getElementById('course-type');
    const campus = document.getElementById('campus');

    if (uni) uni.addEventListener('change', performSearch);
    if (intake) intake.addEventListener('change', performSearch);
    if (level) level.addEventListener('change', performSearch);
    if (campus) campus.addEventListener('change', performSearch);

    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    const modalOverlay = document.getElementById('courseModal');
    if (modalOverlay) modalOverlay.addEventListener('click', function (e) { if (e.target === modalOverlay) closeModal(); });

    const saveCourseBtn = document.getElementById('saveCourse');
    if (saveCourseBtn) saveCourseBtn.addEventListener('click', function () {
        const courseId = parseInt(this.closest('.modal-overlay')?.getAttribute('data-course-id'));
        if (courseId) saveCourse(courseId);
    });

    const shareBtn = document.getElementById('shareCourse');
    if (shareBtn) shareBtn.addEventListener('click', () => alert('Share functionality would open sharing dialog in a real application'));

    // Login modal handlers (open/close)
    const accountBtn = document.getElementById('accountBtn');
    if (accountBtn) accountBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.style.display = 'flex';
            loginModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            const em = document.getElementById('loginEmail');
            if (em) em.focus();
        }
    });

    const closeLoginBtn = document.getElementById('closeLoginModal');
    if (closeLoginBtn) closeLoginBtn.addEventListener('click', () => {
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.style.display = 'none';
            loginModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        }
    });

    // Login form submit -> demo behavior
    const loginForm = document.getElementById('loginModalForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (ev) {
            ev.preventDefault();
            const email = (document.getElementById('loginEmail').value || '').trim();
            const password = (document.getElementById('loginPassword').value || '').trim();
            const demoLogin = { email: 'demo@demo.com', password: 'Password123' };
            if (email.toLowerCase() === demoLogin.email && password === demoLogin.password) {
                const payload = { token: 'demo-token-' + Date.now(), email, issuedAt: Date.now() };
                try { sessionStorage.setItem('auth', JSON.stringify(payload)); } catch (e) { }
                window.location.href = 'add-course.html';
            } else {
                const authErr = document.getElementById('loginAuthError');
                if (authErr) { authErr.style.display = 'block'; authErr.textContent = 'Invalid email or password.'; }
            }
        });
    }
}

// Search & filter
function performSearch() {
    const searchTerm = (document.getElementById('mainSearch')?.value || '').trim().toLowerCase();
    const universityFilter = (document.getElementById('university')?.value || 'all');
    const intakeFilter = (document.getElementById('intake')?.value || 'all');
    const levelFilter = (document.getElementById('course-type')?.value || 'all');
    const campusFilter = (document.getElementById('campus')?.value || 'all');

    filteredCourses = courses.filter(course => {
        let matchesSearch = true;
        if (searchTerm) {
            matchesSearch = (
                (course.courseName || '').toLowerCase().includes(searchTerm) ||
                (course.university || '').toLowerCase().includes(searchTerm) ||
                (course.description || '').toLowerCase().includes(searchTerm) ||
                (course.campus || '').toLowerCase().includes(searchTerm)
            );
        }

        let matchesUniversity = true;
        if (universityFilter !== 'all') {
            matchesUniversity = (course.university || '').toLowerCase().includes(universityFilter.replace(/-/g, ' '));
        }

        let matchesIntake = true;
        if (intakeFilter !== 'all') {
            matchesIntake = (course.intake || '').toLowerCase().includes(intakeFilter.replace(/-/g, ' '));
        }

        let matchesLevel = true;
        if (levelFilter !== 'all') {
            matchesLevel = (course.level || '').toLowerCase() === levelFilter.toLowerCase();
        }

        let matchesCampus = true;
        if (campusFilter !== 'all') {
            matchesCampus = (course.campus || '').toLowerCase().includes(campusFilter.replace(/-/g, ' '));
        }

        return matchesSearch && matchesUniversity && matchesIntake && matchesLevel && matchesCampus;
    });

    renderCourses(searchTerm);
}

// Modal details
function openModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    const overlay = document.getElementById('courseModal');
    if (!overlay) return;
    overlay.setAttribute('data-course-id', courseId);
    document.getElementById('modalCourseTitle').textContent = course.courseName || '';
    document.getElementById('modalUniversity').textContent = course.university || '';
    document.getElementById('modalCourseLevel').textContent = course.level || '';
    document.getElementById('modalIntake').textContent = course.intake || '';
    document.getElementById('modalDuration').textContent = course.duration || '';
    document.getElementById('modalFee').textContent = course.fee || '';
    document.getElementById('modalAcademicReq').textContent = course.academicReq || '';
    document.getElementById('modalDescription').textContent = course.description || '';
    const link = document.getElementById('modalOfficialLink');
    if (link) { link.href = course.officialLink || '#'; }

    const englishReqList = document.getElementById('modalEnglishReq');
    if (englishReqList) {
        englishReqList.innerHTML = '';
        (course.englishReq || []).forEach(req => {
            const li = document.createElement('li');
            li.textContent = req;
            englishReqList.appendChild(li);
        });
    }

    document.body.classList.add('modal-open');
    overlay.style.display = 'flex';
}

function closeModal() {
    const overlay = document.getElementById('courseModal');
    if (overlay) overlay.style.display = 'none';
    document.body.classList.remove('modal-open');
}

// "Save" action (client-side save / bookmark)
function saveCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    alert(`Course "${course.courseName}" saved to your list!`);
}

// Load custom courses saved locally (fallback)
function loadLocalCustomCourses() {
    try {
        const raw = localStorage.getItem('customCourses');
        if (!raw) return;
        const arr = JSON.parse(raw);
        if (Array.isArray(arr) && arr.length) {
            // avoid ID collisions with existing courses
            const existingIds = new Set(courses.map(c => c.id));
            const filtered = arr.filter(a => !existingIds.has(a.id));
            if (filtered.length) {
                courses = [...courses, ...filtered];
                filteredCourses = [...courses];
            }
        }
    } catch (err) {
        console.warn('Error loading local custom courses', err);
    }
}

/* ===== FIREBASE INTEGRATION (compat) =====
   Uses the same firebaseConfig provided by you.
   Ensure the compat SDKs are loaded before this script (Index.html does this).
*/
const firebaseConfig = {
    apiKey: "AIzaSyCGQKCkBDhozfG8bqYObKSCS2sxdZQEJm4",
    authDomain: "ukvi-info.firebaseapp.com",
    projectId: "ukvi-info",
    storageBucket: "ukvi-info.firebasestorage.app",
    messagingSenderId: "40936408296",
    appId: "1:40936408296:web:661bb619ed6bc75437355d",
    measurementId: "G-N021HN10HT"
};

let db = null;
if (window.firebase) {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();

    // Load courses from Firestore and merge (exposed to window)
    async function loadCoursesFromFirebase() {
        if (!db) return;
        try {
            const snapshot = await db.collection('courses').get();
            const firebaseCourses = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                // ensure id property numeric if stored as string
                if (data && data.id) {
                    data.id = Number(data.id) || data.id;
                }
                firebaseCourses.push(data);
            });

            if (firebaseCourses.length) {
                // merge without duplicates by id
                const existingIds = new Set(courses.map(c => String(c.id)));
                const newOnes = firebaseCourses.filter(fc => !existingIds.has(String(fc.id)));
                if (newOnes.length) {
                    courses = [...courses, ...newOnes];
                    filteredCourses = [...courses];
                    populateFilters();
                    renderCourses();
                }
            }
            console.log('✅ Firebase courses loaded:', firebaseCourses.length);
        } catch (err) {
            console.warn('Firebase courses not loaded:', err && err.message ? err.message : err);
        }
    }

    // Expose load/save for other pages
    window.loadCoursesFromFirebase = loadCoursesFromFirebase;
    window.saveCourseToCFirebase = async function (courseData) {
        if (!db) return false;
        try {
            await db.collection('courses').doc(String(courseData.id)).set(courseData);
            console.log('✅ Course saved to Firebase:', courseData.id);
            return true;
        } catch (err) {
            console.error('Error saving course:', err);
            return false;
        }
    };
} else {
    console.warn('Firebase SDK not detected on Index page. Firestore features disabled.');
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    populateFilters();
    loadLocalCustomCourses();
    renderCourses();
    setupEventListeners();
    setupQuickFilters();

    // call firebase loader if available
    if (typeof window.loadCoursesFromFirebase === 'function') {
        window.loadCoursesFromFirebase();
    }
});