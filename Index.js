// Enhanced course data
        const courses = [
            {
                id: 1,
                university: "Buckinghamshire New University",
                courseName: "BA (Hons)International Hospitality Management",
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
                courseName: "Bsc (Hons) International Business Studies",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
                intake: "April 2026",
                fee: "£15,150 per year",
                duration: "1 Year",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
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
                level: "Postgraduate",
                intake: "April 2026",
                fee: "£15,500 per year",
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
                level: "Postgraduate",
                intake: "April 2026",
                fee: "£15,500 per year",
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
                level: "Postgraduate",
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
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderCourses();
            setupEventListeners();
            setupQuickFilters();
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
                            ${course.scholarship === 'Available' || course.scholarship === 'Fully-funded available' ? 
                                '<span class="badge" style="background: rgba(16, 185, 129, 0.3);">Scholarship</span>' : ''}
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
                
                // Add event listeners to buttons
                const viewBtn = card.querySelector('.view-details-btn');
                viewBtn.addEventListener('click', () => openModal(course.id));
                
                const saveBtn = card.querySelector('.save-btn');
                saveBtn.addEventListener('click', function(e) {
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
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
            
            // Filter change listeners
            document.getElementById('university').addEventListener('change', performSearch);
            document.getElementById('intake').addEventListener('change', performSearch);
            document.getElementById('course-type').addEventListener('change', performSearch);
            document.getElementById('subject').addEventListener('change', performSearch);
            
            // Modal close button
            document.getElementById('closeModal').addEventListener('click', closeModal);
            
            // Close modal when clicking outside
            document.getElementById('courseModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
            
            // Modal action buttons
            document.getElementById('saveCourse').addEventListener('click', function() {
                const courseId = parseInt(this.closest('.modal-overlay').getAttribute('data-course-id'));
                saveCourse(courseId);
            });
            
            document.getElementById('shareCourse').addEventListener('click', function() {
                alert('Share functionality would open sharing dialog in a real application');
            });
        }
        
        // Setup quick filters
        function setupQuickFilters() {
            const quickFilters = document.querySelectorAll('.filter-chip');
            quickFilters.forEach(filter => {
                filter.addEventListener('click', function() {
                    // Remove active class from all filters
                    quickFilters.forEach(f => f.classList.remove('active'));
                    
                    // Add active class to clicked filter
                    this.classList.add('active');
                    
                    // Apply filter based on text
                    const filterText = this.textContent.trim();
                    
                    if (filterText === 'All Courses') {
                        filteredCourses = [...courses];
                    } else if (filterText === 'September 2024') {
                        filteredCourses = courses.filter(course => course.intake.includes('September 2024'));
                    } else if (filterText === 'Postgraduate') {
                        filteredCourses = courses.filter(course => course.level === 'Postgraduate');
                    } else if (filterText === 'Business') {
                        filteredCourses = courses.filter(course => course.subject === 'business');
                    } else if (filterText === 'Engineering') {
                        filteredCourses = courses.filter(course => course.subject === 'engineering');
                    }
                    
                    renderCourses();
                });
            });
        }
        
        // Perform search
        function performSearch() {
            const searchTerm = document.getElementById('mainSearch').value.toLowerCase().trim();
            const universityFilter = document.getElementById('university').value;
            const intakeFilter = document.getElementById('intake').value;
            const levelFilter = document.getElementById('course-type').value;
            const subjectFilter = document.getElementById('subject').value;
            
            filteredCourses = courses.filter(course => {
                // Apply search term filter
                let matchesSearch = true;
                if (searchTerm) {
                    matchesSearch = 
                        course.courseName.toLowerCase().includes(searchTerm) ||
                        course.university.toLowerCase().includes(searchTerm) ||
                        course.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                        course.description.toLowerCase().includes(searchTerm);
                }
                
                // Apply university filter
                let matchesUniversity = true;
                if (universityFilter !== 'all') {
                    if (universityFilter === 'oxford') {
                        matchesUniversity = course.university.includes('Oxford');
                    } else if (universityFilter === 'cambridge') {
                        matchesUniversity = course.university.includes('Cambridge');
                    } else if (universityFilter === 'imperial') {
                        matchesUniversity = course.university.includes('Imperial');
                    } else if (universityFilter === 'ucl') {
                        matchesUniversity = course.university.includes('University College London');
                    } else if (universityFilter === 'lse') {
                        matchesUniversity = course.university.includes('London School of Economics');
                    } else if (universityFilter === 'manchester') {
                        matchesUniversity = course.university.includes('Manchester');
                    } else if (universityFilter === 'edinburgh') {
                        matchesUniversity = course.university.includes('Edinburgh');
                    }
                }
                
                // Apply intake filter
                let matchesIntake = true;
                if (intakeFilter !== 'all') {
                    if (intakeFilter === 'sept') {
                        matchesIntake = course.intake.includes('September 2024');
                    } else if (intakeFilter === 'jan') {
                        matchesIntake = course.intake.includes('January');
                    } else if (intakeFilter === 'april') {
                        matchesIntake = course.intake.includes('April');
                    } else if (intakeFilter === 'sept-2025') {
                        matchesIntake = course.intake.includes('September 2025');
                    }
                }
                
                // Apply level filter
                let matchesLevel = true;
                if (levelFilter !== 'all') {
                    if (levelFilter === 'undergraduate') {
                        matchesLevel = course.level === 'Undergraduate';
                    } else if (levelFilter === 'postgraduate') {
                        matchesLevel = course.level === 'Postgraduate';
                    } else if (levelFilter === 'phd') {
                        matchesLevel = course.level === 'PhD/Research';
                    } else if (levelFilter === 'foundation') {
                        matchesLevel = course.level === 'Foundation';
                    }
                }
                
                // Apply subject filter
                let matchesSubject = true;
                if (subjectFilter !== 'all') {
                    matchesSubject = course.subject === subjectFilter;
                }
                
                return matchesSearch && matchesUniversity && matchesIntake && matchesLevel && matchesSubject;
            });
            
            renderCourses(searchTerm);
        }
        
        // Open modal with course details
        function openModal(courseId) {
            const course = courses.find(c => c.id === courseId);
            if (!course) return;
            
            // Set course ID on modal for save functionality
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
            
            // Show modal
            // Hide fields per user request: Course Level, Duration, Course Overview, English Requirements, and Entry Requirements
            try {
                const levelVal = document.getElementById('modalCourseLevel');
                if (levelVal && levelVal.parentElement) levelVal.parentElement.style.display = 'none';

                const durationVal = document.getElementById('modalDuration');
                if (durationVal && durationVal.parentElement) durationVal.parentElement.style.display = 'none';

                const overviewP = document.getElementById('modalDescription');
                if (overviewP) {
                    const overviewSection = overviewP.closest('.modal-section');
                    if (overviewSection) overviewSection.style.display = 'none';
                }

                // Hide Entry Requirements section (contains academicReq)
                const academicReq = document.getElementById('modalAcademicReq');
                if (academicReq) {
                    const entryReqSection = academicReq.closest('.modal-section');
                    if (entryReqSection) entryReqSection.style.display = 'none';
                }

                // Hide English Language Requirements section
                const englishReqList = document.getElementById('modalEnglishReq');
                if (englishReqList) {
                    const englishSection = englishReqList.closest('.modal-section');
                    if (englishSection) englishSection.style.display = 'none';
                }
            } catch (err) {
                console.warn('Error hiding modal fields:', err);
            }

            document.getElementById('courseModal').style.display = 'flex';
        }
        
        // Close modal
        function closeModal() {
            // Restore any hidden fields so next open shows normal content
            try {
                const levelVal = document.getElementById('modalCourseLevel');
                if (levelVal && levelVal.parentElement) levelVal.parentElement.style.display = '';

                const durationVal = document.getElementById('modalDuration');
                if (durationVal && durationVal.parentElement) durationVal.parentElement.style.display = '';

                const overviewP = document.getElementById('modalDescription');
                if (overviewP) {
                    const overviewSection = overviewP.closest('.modal-section');
                    if (overviewSection) overviewSection.style.display = '';
                }

                const academicReq = document.getElementById('modalAcademicReq');
                if (academicReq) {
                    const entryReqSection = academicReq.closest('.modal-section');
                    if (entryReqSection) entryReqSection.style.display = '';
                }

                const englishReqList = document.getElementById('modalEnglishReq');
                if (englishReqList) {
                    const englishSection = englishReqList.closest('.modal-section');
                    if (englishSection) englishSection.style.display = '';
                }
            } catch (err) {
                console.warn('Error restoring modal fields:', err);
            }

            document.getElementById('courseModal').style.display = 'none';
        }
        
        // Save course functionality
        function saveCourse(courseId) {
            const course = courses.find(c => c.id === courseId);
            if (!course) return;
            
            // In a real app, this would save to backend/local storage
            alert(`Course "${course.courseName}" saved to your list!`);
            
            // Update button in modal if open
            const saveBtn = document.getElementById('saveCourse');
            if (saveBtn) {
                saveBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
                saveBtn.style.background = 'var(--success)';
                saveBtn.style.color = 'white';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    saveBtn.innerHTML = '<i class="far fa-bookmark"></i> Save Course';
                    saveBtn.style.background = '';
                    saveBtn.style.color = '';
                }, 2000);
            }
        }