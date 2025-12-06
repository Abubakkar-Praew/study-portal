// Enhanced course data
        const courses = [
            {
                id: 1,
                university: "University of Oxford",
                courseName: "Computer Science MSc",
                level: "Postgraduate",
                intake: "September 2024",
                deadline: "15 January 2024",
                fee: "£28,560",
                duration: "12 months",
                academicReq: "Upper second-class undergraduate degree (2:1) in Computer Science or related field",
                englishReq: [
                    "IELTS: 7.5 overall with 7.0 in each component",
                    "TOEFL iBT: 110 overall with 25 in each component",
                    "Oxford Test of English: 135 overall",
                    "Medium of Instruction (MOI): Acceptable if previous degree was taught in English"
                ],
                description: "This advanced programme provides in-depth knowledge of computer science principles and applications. Students will engage with cutting-edge research and develop practical skills in software development, machine learning, and data science.",
                officialLink: "https://www.ox.ac.uk/courses/computer-science-msc",
                tags: ["Computer Science", "AI", "Machine Learning", "Data Science"],
                subject: "computer-science",
                campus: "Oxford",
                scholarship: "Available"
            },
            {
                id: 2,
                university: "Imperial College London",
                courseName: "Mechanical Engineering MEng",
                level: "Undergraduate",
                intake: "September 2024",
                deadline: "29 January 2024",
                fee: "£35,100",
                duration: "4 years",
                academicReq: "A*AA including Mathematics and Physics",
                englishReq: [
                    "IELTS: 7.0 overall with 6.5 in each component",
                    "TOEFL iBT: 100 overall with 22 in each component",
                    "LanguageCert International ESOL: C1 Expert Pass",
                    "Medium of Instruction (MOI): Acceptable with official letter from institution"
                ],
                description: "This integrated Master's programme provides a comprehensive education in mechanical engineering principles, with opportunities for specialization in areas such as aerospace, automotive, and robotics.",
                officialLink: "https://www.imperial.ac.uk/mechanical-engineering-meng",
                tags: ["Engineering", "Mechanical", "Aerospace", "Robotics"],
                subject: "engineering",
                campus: "London",
                scholarship: "Merit-based"
            },
            {
                id: 3,
                university: "University College London",
                courseName: "Business Analytics MSc",
                level: "Postgraduate",
                intake: "January 2025",
                deadline: "1 June 2024",
                fee: "£32,100",
                duration: "12 months",
                academicReq: "Upper second-class Bachelor's degree in a relevant discipline",
                englishReq: [
                    "IELTS: 7.0 overall with 6.5 in each component",
                    "TOEFL iBT: 100 overall with 20 in each component",
                    "LanguageCert International ESOL: C1 Expert Pass",
                    "Medium of Instruction (MOI): Acceptable if previous degree was taught in English"
                ],
                description: "This programme equips students with the skills to analyse complex business data and make strategic decisions. It covers data mining, predictive modelling, and business intelligence tools.",
                officialLink: "https://www.ucl.ac.uk/business-analytics-msc",
                tags: ["Business", "Analytics", "Data Science", "Management"],
                subject: "business",
                campus: "London",
                scholarship: "Limited"
            },
            {
                id: 4,
                university: "University of Cambridge",
                courseName: "Medicine MB BChir",
                level: "Undergraduate",
                intake: "September 2024",
                deadline: "15 October 2023",
                fee: "£37,510",
                duration: "6 years",
                academicReq: "A*A*A including Chemistry and one of Biology, Physics, Mathematics",
                englishReq: [
                    "IELTS: 7.5 overall with 7.0 in each component",
                    "TOEFL iBT: 110 overall with 25 in each component",
                    "Cambridge English: C2 Proficiency, Grade A",
                    "Medium of Instruction (MOI): Acceptable with official confirmation"
                ],
                description: "This programme provides comprehensive medical education with early clinical exposure and research opportunities. Graduates are prepared for careers in clinical practice, research, and medical leadership.",
                officialLink: "https://www.cam.ac.uk/medicine-mb-bchir",
                tags: ["Medicine", "Health", "Clinical", "Surgery"],
                subject: "medicine",
                campus: "Cambridge",
                scholarship: "Available"
            },
            {
                id: 5,
                university: "London School of Economics",
                courseName: "Economics MSc",
                level: "Postgraduate",
                intake: "September 2024",
                deadline: "30 April 2024",
                fee: "£31,008",
                duration: "12 months",
                academicReq: "Upper second-class honours degree in Economics or related discipline",
                englishReq: [
                    "IELTS: 7.0 overall with 6.5 in reading and writing",
                    "TOEFL iBT: 100 overall with 23 in reading and 24 in writing",
                    "LanguageCert International ESOL: C1 Expert Pass",
                    "Medium of Instruction (MOI): Acceptable if previous degree was taught in English"
                ],
                description: "This programme provides rigorous training in economic theory and econometrics, preparing students for careers in economic research, policy analysis, and financial services.",
                officialLink: "https://www.lse.ac.uk/economics-msc",
                tags: ["Economics", "Finance", "Policy", "Quantitative"],
                subject: "business",
                campus: "London",
                scholarship: "Available"
            },
            {
                id: 6,
                university: "University of Edinburgh",
                courseName: "Artificial Intelligence PhD",
                level: "PhD/Research",
                intake: "April 2025",
                deadline: "15 November 2024",
                fee: "£24,700",
                duration: "3-4 years",
                academicReq: "First-class or upper second-class Master's degree in a relevant subject",
                englishReq: [
                    "IELTS: 7.0 overall with 6.5 in each component",
                    "TOEFL iBT: 100 overall with 23 in each component",
                    "LanguageCert International ESOL: C1 Expert Pass",
                    "Medium of Instruction (MOI): Acceptable with official confirmation"
                ],
                description: "This research programme allows students to work on cutting-edge AI projects under the supervision of world-leading experts. Research areas include machine learning, natural language processing, and computer vision.",
                officialLink: "https://www.ed.ac.uk/artificial-intelligence-phd",
                tags: ["AI", "Machine Learning", "Research", "Computer Science"],
                subject: "computer-science",
                campus: "Edinburgh",
                scholarship: "Fully-funded available"
            },
            {
                id: 7,
                university: "University of Manchester",
                courseName: "Law LLB",
                level: "Undergraduate",
                intake: "September 2024",
                deadline: "29 January 2024",
                fee: "£25,000",
                duration: "3 years",
                academicReq: "AAA including an essay-based subject",
                englishReq: [
                    "IELTS: 6.5 overall with 6.5 in each component",
                    "TOEFL iBT: 90 overall with 22 in each component",
                    "LanguageCert International ESOL: B2 Communicator High Pass",
                    "Medium of Instruction (MOI): Not accepted"
                ],
                description: "This programme provides a comprehensive understanding of legal principles and systems, with opportunities to specialize in areas such as international law, human rights, or commercial law.",
                officialLink: "https://www.manchester.ac.uk/law-llb",
                tags: ["Law", "Legal Studies", "Human Rights", "Commercial"],
                subject: "law",
                campus: "Manchester",
                scholarship: "Available"
            }
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
                    <div class="course-header">
                        <div class="university-name">${course.university}</div>
                        <h3 class="course-title">${course.courseName}</h3>
                        <div class="course-badges">
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
                            <div class="detail-item">
                                <span class="detail-label">Course Fee</span>
                                <span class="detail-value">${course.fee}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Deadline</span>
                                <span class="detail-value deadline">${course.deadline}</span>
                            </div>
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
            document.getElementById('modalDeadline').textContent = course.deadline;
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
            // Hide fields per user request: Course Level, Duration, and Course Overview
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