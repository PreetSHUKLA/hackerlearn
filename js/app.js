/**
 * HACKER LEARN - Interactive Platform Application Logic
 * Powered by HackerTube Dataset (hackertube.org)
 */

(function () {
  'use strict';

  // =========================================================================
  // State Management
  // =========================================================================
  const state = {
    courses: window.HACKER_COURSES || (typeof COURSES_DATA !== 'undefined' ? COURSES_DATA : (window.COURSES_DATA || [])),
    videos: window.HACKER_VIDEOS || [],
    videoMap: {},
    activeView: 'courses',
    activeCourse: null,
    activeLesson: null,
    activeDomainFilter: 'all',
    searchQuery: '',
    
    // User persistence via localStorage
    completedLessons: new Set(JSON.parse(localStorage.getItem('hl_completed_lessons') || '[]')),
    notes: JSON.parse(localStorage.getItem('hl_notes') || '{}'),
    customCourses: JSON.parse(localStorage.getItem('hl_custom_courses') || '[]'),
    theme: localStorage.getItem('hl_theme') || 'dark',

    // Archive Explorer State
    archivePage: 1,
    archivePageSize: 36,
    archiveArea: 'all',
    archiveLevel: 'all',
    archiveSort: 'score',
    archiveQuery: '',
    
    // Builder State
    builderSelectedVideos: []
  };

  // Build index lookup map for quick access
  function buildVideoMap() {
    state.videos.forEach(v => {
      state.videoMap[v.vid] = v;
    });
  }

  // Merge built-in and user-created custom courses
  function getAllCourses() {
    return [...state.courses, ...state.customCourses];
  }

  function getCourseById(id) {
    return getAllCourses().find(c => c.id === id);
  }

  // =========================================================================
  // DOM Elements Selection
  // =========================================================================
  const DOM = {
    // Nav & Theme
    themeToggle: document.getElementById('theme-toggle'),
    auditBtn: document.getElementById('audit-btn'),
    auditModal: document.getElementById('audit-modal'),
    closeAuditModal: document.getElementById('close-audit-modal'),
    footerAuditLink: document.getElementById('footer-audit-link'),
    navLinks: document.querySelectorAll('.nav-link'),
    globalSearchInput: document.getElementById('global-search-input'),
    logoLink: document.getElementById('logo-link'),

    // Views
    views: {
      courses: document.getElementById('view-courses'),
      'course-detail': document.getElementById('view-course-detail'),
      classroom: document.getElementById('view-classroom'),
      builder: document.getElementById('view-builder'),
      archive: document.getElementById('view-archive')
    },

    // Courses View
    courseDomainFilters: document.getElementById('course-domain-filters'),
    coursesGrid: document.getElementById('courses-grid'),
    coursesCountLabel: document.getElementById('courses-count-label'),

    // Course Detail View
    backToCoursesBtn: document.getElementById('back-to-courses-btn'),
    breadcrumbCourseTitle: document.getElementById('breadcrumb-course-title'),
    cdDomain: document.getElementById('cd-domain'),
    cdDifficulty: document.getElementById('cd-difficulty'),
    cdProgressBadge: document.getElementById('cd-progress-badge'),
    cdTitle: document.getElementById('cd-title'),
    cdDesc: document.getElementById('cd-desc'),
    cdPrereqs: document.getElementById('cd-prereqs'),
    cdRuntime: document.getElementById('cd-runtime'),
    cdModulesCount: document.getElementById('cd-modules-count'),
    cdLessonsCount: document.getElementById('cd-lessons-count'),
    roadmapTimeline: document.getElementById('roadmap-timeline-container'),
    roadmapProgressText: document.getElementById('roadmap-progress-text'),
    roadmapProgressFill: document.getElementById('roadmap-progress-fill'),

    // Classroom View
    classroomIframe: document.getElementById('classroom-iframe'),
    playerVideoTitle: document.getElementById('player-video-title'),
    playerVideoChannel: document.getElementById('player-video-channel'),
    playerVideoScore: document.getElementById('player-video-score'),
    playerVideoRecs: document.getElementById('player-video-recs'),
    playerVideoLevel: document.getElementById('player-video-level'),
    playerPrevBtn: document.getElementById('player-prev-btn'),
    playerNextBtn: document.getElementById('player-next-btn'),
    playerToggleCompleteBtn: document.getElementById('player-toggle-complete-btn'),
    playerWhyHn: document.getElementById('player-why-hn'),
    playerHnQuote: document.getElementById('player-hn-quote'),
    playerVideoSummary: document.getElementById('player-video-summary'),
    playerOutcomesList: document.getElementById('player-outcomes-list'),
    playerHackertubeLink: document.getElementById('player-hackertube-link'),
    playerYoutubeLink: document.getElementById('player-youtube-link'),
    classroomSidebarTitle: document.getElementById('classroom-sidebar-course-title'),
    classroomSidebarProgress: document.getElementById('classroom-sidebar-progress'),
    classroomLessonList: document.getElementById('classroom-lesson-list'),
    notesInput: document.getElementById('notes-input'),
    notesSaveStatus: document.getElementById('notes-save-status'),
    notesExportBtn: document.getElementById('notes-export-btn'),
    notesClearBtn: document.getElementById('notes-clear-btn'),

    // Builder View
    builderTitle: document.getElementById('builder-title'),
    builderDomain: document.getElementById('builder-domain'),
    builderDesc: document.getElementById('builder-desc'),
    builderSelectedLessons: document.getElementById('builder-selected-lessons'),
    builderSelectedCount: document.getElementById('builder-selected-count'),
    builderClearLessonsBtn: document.getElementById('builder-clear-lessons-btn'),
    builderSaveBtn: document.getElementById('builder-save-btn'),
    builderSearchInput: document.getElementById('builder-search-input'),
    builderSearchResults: document.getElementById('builder-search-results'),

    // Archive View
    archiveSearchInput: document.getElementById('archive-search-input'),
    archiveFilterArea: document.getElementById('archive-filter-area'),
    archiveFilterLevel: document.getElementById('archive-filter-level'),
    archiveSort: document.getElementById('archive-sort'),
    archiveCountLabel: document.getElementById('archive-count-label'),
    archiveGrid: document.getElementById('archive-grid'),
    archivePrevPage: document.getElementById('archive-prev-page'),
    archiveNextPage: document.getElementById('archive-next-page'),
    archivePageNum: document.getElementById('archive-page-num')
  };

  // =========================================================================
  // Theme Toggle (Dark / Light / Terminal)
  // =========================================================================
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hl_theme', theme);
    state.theme = theme;
  }

  function cycleTheme() {
    const themes = ['dark', 'light', 'terminal'];
    const nextIdx = (themes.indexOf(state.theme) + 1) % themes.length;
    applyTheme(themes[nextIdx]);
  }

  // =========================================================================
  // Router & View Switching
  // =========================================================================
  function navigateTo(viewName, params = {}) {
    state.activeView = viewName;
    
    // Update nav links
    DOM.navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.view === viewName);
    });

    // Toggle view containers
    Object.keys(DOM.views).forEach(key => {
      DOM.views[key].classList.toggle('active', key === viewName);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle view-specific initializations
    if (viewName === 'courses') {
      renderCoursesGrid();
    } else if (viewName === 'course-detail' && params.courseId) {
      loadCourseDetail(params.courseId);
    } else if (viewName === 'classroom') {
      if (params.courseId && params.vid) {
        loadLessonInClassroom(params.courseId, params.vid);
      } else if (!state.activeLesson && state.courses.length > 0) {
        // Default to first lesson of first course
        const firstCourse = state.courses[0];
        const firstLesson = firstCourse.modules[0].lessons[0];
        loadLessonInClassroom(firstCourse.id, firstLesson.vid);
      }
    } else if (viewName === 'builder') {
      renderBuilderSearchResults('');
    } else if (viewName === 'archive') {
      renderArchive();
    }
  }

  // =========================================================================
  // Thumbnail Helper
  // =========================================================================
  function getThumbUrl(vid) {
    // HackerTube uses hq2.jpg (midpoint frame) with fallback
    return `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;
  }

  // =========================================================================
  // View 1: Courses Catalog
  // =========================================================================
  function calculateCourseProgress(course) {
    let total = 0;
    let completed = 0;
    course.modules.forEach(m => {
      m.lessons.forEach(l => {
        total++;
        if (state.completedLessons.has(l.vid)) {
          completed++;
        }
      });
    });
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percent };
  }

  function renderCoursesGrid() {
    const allCourses = getAllCourses();
    const filter = state.activeDomainFilter;
    const query = state.searchQuery.toLowerCase().trim();

    const filtered = allCourses.filter(course => {
      const matchDomain = filter === 'all' || course.domain === filter;
      const matchQuery = !query || 
        course.title.toLowerCase().includes(query) ||
        course.tagline.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query);
      return matchDomain && matchQuery;
    });

    DOM.coursesCountLabel.textContent = `Showing ${filtered.length} of ${allCourses.length} courses`;
    DOM.coursesGrid.innerHTML = '';

    if (filtered.length === 0) {
      DOM.coursesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <h3>No courses found matching "${escapeHtml(query)}"</h3>
          <p style="margin-top:0.5rem;">Try choosing another domain filter or clearing your search.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(course => {
      const progress = calculateCourseProgress(course);
      const card = document.createElement('div');
      card.className = 'course-card';
      
      card.innerHTML = `
        <div>
          <div class="card-top-meta">
            <span class="card-domain">${escapeHtml(course.domain)}</span>
            <span class="card-badge">${escapeHtml(course.difficulty)}</span>
          </div>
          <h2 class="card-title">${escapeHtml(course.title)}</h2>
          <p class="card-tagline">${escapeHtml(course.tagline)}</p>
        </div>

        <div>
          <div class="card-details-row">
            <div class="card-detail-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${escapeHtml(course.estimatedHours)}</span>
            </div>
            <div class="card-detail-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <span>${progress.total} lessons</span>
            </div>
            <div class="card-detail-item" style="margin-left:auto;">
              <span class="progress-pill">${progress.percent}% Completed</span>
            </div>
          </div>

          <div class="card-footer">
            <button class="btn-primary view-roadmap-btn" data-course-id="${course.id}">
              <span>View Roadmap</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button class="btn-secondary start-first-lesson-btn" data-course-id="${course.id}">
              <span>Start Learning</span>
            </button>
          </div>
        </div>
      `;

      card.querySelector('.view-roadmap-btn').addEventListener('click', () => {
        navigateTo('course-detail', { courseId: course.id });
      });

      card.querySelector('.start-first-lesson-btn').addEventListener('click', () => {
        const firstLesson = course.modules[0]?.lessons[0];
        if (firstLesson) {
          navigateTo('classroom', { courseId: course.id, vid: firstLesson.vid });
        }
      });

      DOM.coursesGrid.appendChild(card);
    });
  }

  // =========================================================================
  // View 2: Course Detail & Interactive Sequential Roadmap
  // =========================================================================
  function loadCourseDetail(courseId) {
    const course = getCourseById(courseId);
    if (!course) {
      navigateTo('courses');
      return;
    }

    state.activeCourse = course;
    const progress = calculateCourseProgress(course);

    DOM.breadcrumbCourseTitle.textContent = course.title;
    DOM.cdDomain.textContent = course.domain;
    DOM.cdDifficulty.textContent = course.difficulty;
    DOM.cdProgressBadge.textContent = `${progress.percent}% Completed (${progress.completed}/${progress.total})`;
    DOM.cdTitle.textContent = course.title;
    DOM.cdDesc.textContent = course.description;
    DOM.cdPrereqs.textContent = course.prerequisites || 'None';
    DOM.cdRuntime.textContent = course.estimatedHours;
    DOM.cdModulesCount.textContent = `${course.modules.length} modules`;
    DOM.cdLessonsCount.textContent = `${progress.total} lessons`;

    DOM.roadmapProgressText.textContent = `${progress.completed} of ${progress.total} completed`;
    DOM.roadmapProgressFill.style.width = `${progress.percent}%`;

    // Render Timeline Modules
    DOM.roadmapTimeline.innerHTML = '';

    course.modules.forEach((mod, modIdx) => {
      const isModCompleted = mod.lessons.every(l => state.completedLessons.has(l.vid));
      
      const modBlock = document.createElement('div');
      modBlock.className = 'module-step-block';

      modBlock.innerHTML = `
        <div class="module-step-indicator ${isModCompleted ? 'done' : ''}">
          ${isModCompleted ? '✓' : modIdx + 1}
        </div>
        <div class="module-title-wrap">
          <h3 class="module-step-title">${escapeHtml(mod.title)}</h3>
          <p class="module-step-desc">${escapeHtml(mod.description)}</p>
        </div>
        <div class="lesson-card-list"></div>
      `;

      const listContainer = modBlock.querySelector('.lesson-card-list');

      mod.lessons.forEach(lesson => {
        const isDone = state.completedLessons.has(lesson.vid);
        const lCard = document.createElement('div');
        lCard.className = `lesson-card ${isDone ? 'completed' : ''}`;

        lCard.innerHTML = `
          <div class="lesson-thumb-wrap">
            <img class="lesson-thumb" src="${getThumbUrl(lesson.vid)}" loading="lazy" alt="${escapeHtml(lesson.title)}">
            <div class="play-overlay">
              <div class="play-icon-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </div>
          </div>

          <div class="lesson-content">
            <div class="lesson-channel-row">
              <span>Step ${lesson.order}</span>
              <span>•</span>
              <strong style="color:var(--text-primary);">${escapeHtml(lesson.channel)}</strong>
              <span>•</span>
              <span>HN Score: ${lesson.score}</span>
              <span>•</span>
              <span class="card-domain">${escapeHtml(lesson.level || 'Intro')}</span>
            </div>

            <h4 class="lesson-title">${escapeHtml(lesson.title)}</h4>
            <p class="lesson-summary">${escapeHtml(lesson.summary)}</p>

            ${lesson.quote ? `
              <div class="lesson-hn-quote">
                <span>“</span><span>${escapeHtml(lesson.quote)}</span><span>”</span>
              </div>
            ` : ''}
          </div>

          <div class="lesson-actions">
            <button class="btn-primary launch-lesson-btn" style="padding:0.45rem 0.9rem; font-size:0.8rem;">
              <span>Watch Lesson</span>
            </button>
            <label class="check-toggle">
              <input type="checkbox" class="toggle-done-checkbox" ${isDone ? 'checked' : ''}>
              <span>${isDone ? 'Done' : 'Mark Done'}</span>
            </label>
          </div>
        `;

        // Click on thumbnail or watch button jumps to classroom
        const launchAction = () => {
          navigateTo('classroom', { courseId: course.id, vid: lesson.vid });
        };

        lCard.querySelector('.lesson-thumb-wrap').addEventListener('click', launchAction);
        lCard.querySelector('.launch-lesson-btn').addEventListener('click', launchAction);

        // Completion checkbox toggle
        const checkbox = lCard.querySelector('.toggle-done-checkbox');
        checkbox.addEventListener('change', (e) => {
          e.stopPropagation();
          toggleLessonCompletion(lesson.vid);
          loadCourseDetail(course.id); // Re-render to update percentages
        });

        listContainer.appendChild(lCard);
      });

      DOM.roadmapTimeline.appendChild(modBlock);
    });
  }

  // =========================================================================
  // View 3: Classroom & Embedded Video Player
  // =========================================================================
  function loadLessonInClassroom(courseId, vid) {
    const course = getCourseById(courseId);
    if (!course) return;

    state.activeCourse = course;
    
    // Find lesson in course
    let targetLesson = null;
    let flatLessons = [];
    course.modules.forEach(m => {
      m.lessons.forEach(l => {
        flatLessons.push(l);
        if (l.vid === vid) targetLesson = l;
      });
    });

    if (!targetLesson && flatLessons.length > 0) {
      targetLesson = flatLessons[0];
    }
    if (!targetLesson) return;

    state.activeLesson = targetLesson;

    // Load iframe
    DOM.classroomIframe.src = `https://www.youtube-nocookie.com/embed/${targetLesson.vid}?autoplay=1&rel=0`;

    // Populate details
    DOM.playerVideoTitle.textContent = targetLesson.title;
    DOM.playerVideoChannel.textContent = targetLesson.channel;
    DOM.playerVideoScore.textContent = `HN Score: ${targetLesson.score}`;
    DOM.playerVideoRecs.textContent = `${targetLesson.recommenders} Recommenders`;
    DOM.playerVideoLevel.textContent = targetLesson.level || 'Intro';

    DOM.playerWhyHn.textContent = targetLesson.why_hn || "Consistently cited on Hacker News discussions for clarity, technical depth, and timeless intuition.";
    DOM.playerHnQuote.textContent = targetLesson.quote ? `“${targetLesson.quote}”` : '';
    DOM.playerVideoSummary.textContent = targetLesson.summary || "In-depth lecture and technical presentation.";

    // Render Learning Outcomes
    DOM.playerOutcomesList.innerHTML = '';
    (targetLesson.learningOutcomes || [
      `Understand foundational mechanics of ${targetLesson.topic || 'the subject'}`,
      "Evaluate algorithmic and architecture trade-offs from first principles",
      "Connect theoretical concepts with practical code implementations"
    ]).forEach(outcome => {
      const li = document.createElement('li');
      li.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${escapeHtml(outcome)}</span>
      `;
      DOM.playerOutcomesList.appendChild(li);
    });

    // HackerTube & YouTube external links
    DOM.playerHackertubeLink.href = `https://hacker-tube.org/watch/${targetLesson.vid}`;
    DOM.playerYoutubeLink.href = `https://www.youtube.com/watch?v=`;

    // Update complete button status
    updateClassroomCompleteButton();

    // Render Curriculum Sidebar
    renderClassroomSidebar(course, flatLessons, targetLesson);

    // Load Notes
    loadLessonNotes(targetLesson.vid);

    // Setup Prev / Next buttons
    const curIdx = flatLessons.findIndex(l => l.vid === targetLesson.vid);
    DOM.playerPrevBtn.disabled = curIdx <= 0;
    DOM.playerNextBtn.disabled = curIdx >= flatLessons.length - 1;

    DOM.playerPrevBtn.onclick = () => {
      if (curIdx > 0) {
        loadLessonInClassroom(course.id, flatLessons[curIdx - 1].vid);
      }
    };

    DOM.playerNextBtn.onclick = () => {
      if (curIdx < flatLessons.length - 1) {
        loadLessonInClassroom(course.id, flatLessons[curIdx + 1].vid);
      }
    };
  }

  function updateClassroomCompleteButton() {
    if (!state.activeLesson) return;
    const isDone = state.completedLessons.has(state.activeLesson.vid);
    if (isDone) {
      DOM.playerToggleCompleteBtn.textContent = '✓ Completed';
      DOM.playerToggleCompleteBtn.style.backgroundColor = 'var(--accent-green)';
    } else {
      DOM.playerToggleCompleteBtn.textContent = 'Mark Completed';
      DOM.playerToggleCompleteBtn.style.backgroundColor = 'var(--hn-orange)';
    }
  }

  function renderClassroomSidebar(course, flatLessons, currentLesson) {
    DOM.classroomSidebarTitle.textContent = course.title;
    const progress = calculateCourseProgress(course);
    DOM.classroomSidebarProgress.textContent = `${progress.percent}%`;

    DOM.classroomLessonList.innerHTML = '';

    flatLessons.forEach((lesson, idx) => {
      const isDone = state.completedLessons.has(lesson.vid);
      const isActive = lesson.vid === currentLesson.vid;

      const item = document.createElement('div');
      item.className = `side-lesson-item ${isActive ? 'active' : ''}`;
      item.innerHTML = `
        <span class="side-lesson-num">${isDone ? '✓' : idx + 1}</span>
        <span class="side-lesson-title" title="${escapeHtml(lesson.title)}">${escapeHtml(lesson.title)}</span>
      `;

      item.addEventListener('click', () => {
        loadLessonInClassroom(course.id, lesson.vid);
      });

      DOM.classroomLessonList.appendChild(item);
    });
  }

  // =========================================================================
  // Notes System (Local Persistence & Markdown Export)
  // =========================================================================
  function loadLessonNotes(vid) {
    DOM.notesInput.value = state.notes[vid] || '';
    DOM.notesSaveStatus.textContent = 'Saved';
  }

  let noteDebounceTimer = null;
  DOM.notesInput.addEventListener('input', () => {
    DOM.notesSaveStatus.textContent = 'Saving...';
    clearTimeout(noteDebounceTimer);
    noteDebounceTimer = setTimeout(() => {
      if (state.activeLesson) {
        state.notes[state.activeLesson.vid] = DOM.notesInput.value;
        localStorage.setItem('hl_notes', JSON.stringify(state.notes));
        DOM.notesSaveStatus.textContent = 'Saved';
      }
    }, 400);
  });

  DOM.notesExportBtn.addEventListener('click', () => {
    if (!state.activeLesson) return;
    const noteText = DOM.notesInput.value.trim();
    if (!noteText) {
      alert("No notes written yet for this lecture.");
      return;
    }
    const mdContent = `# Study Notes: ${state.activeLesson.title}\n**Channel:** ${state.activeLesson.channel}\n**HackerTube ID:** ${state.activeLesson.vid}\n\n---\n\n${noteText}\n`;
    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Notes_${state.activeLesson.vid}.md`;
    a.click();
    URL.revokeObjectURL(url);
  });

  DOM.notesClearBtn.addEventListener('click', () => {
    if (confirm("Clear notes for this lecture?")) {
      DOM.notesInput.value = '';
      if (state.activeLesson) {
        delete state.notes[state.activeLesson.vid];
        localStorage.setItem('hl_notes', JSON.stringify(state.notes));
      }
      DOM.notesSaveStatus.textContent = 'Cleared';
    }
  });

  // =========================================================================
  // Completion Toggle
  // =========================================================================
  function toggleLessonCompletion(vid) {
    if (state.completedLessons.has(vid)) {
      state.completedLessons.delete(vid);
    } else {
      state.completedLessons.add(vid);
    }
    localStorage.setItem('hl_completed_lessons', JSON.stringify([...state.completedLessons]));
    updateClassroomCompleteButton();
  }

  DOM.playerToggleCompleteBtn.addEventListener('click', () => {
    if (state.activeLesson) {
      toggleLessonCompletion(state.activeLesson.vid);
      if (state.activeCourse) {
        let flat = [];
        state.activeCourse.modules.forEach(m => m.lessons.forEach(l => flat.push(l)));
        renderClassroomSidebar(state.activeCourse, flat, state.activeLesson);
      }
    }
  });

  // =========================================================================
  // View 4: Custom Course Builder
  // =========================================================================
  function renderBuilderSearchResults(query) {
    const q = query.toLowerCase().trim();
    const results = state.videos.filter(v => {
      if (!q) return v.score >= 12; // Show top recommended by default
      return v.title.toLowerCase().includes(q) ||
        v.channel.toLowerCase().includes(q) ||
        v.topic.toLowerCase().includes(q) ||
        (v.tags && v.tags.some(t => t.toLowerCase().includes(q)));
    }).slice(0, 40);

    DOM.builderSearchResults.innerHTML = '';

    if (results.length === 0) {
      DOM.builderSearchResults.innerHTML = `
        <div style="text-align:center; padding:2rem; color:var(--text-muted);">
          No videos found for "${escapeHtml(q)}". Try searching for another topic or author.
        </div>
      `;
      return;
    }

    results.forEach(v => {
      const isAlreadyAdded = state.builderSelectedVideos.some(item => item.vid === v.vid);
      const card = document.createElement('div');
      card.className = 'builder-slot-item';
      card.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.6rem; overflow:hidden;">
          <img src="${getThumbUrl(v.vid)}" style="width:48px; height:27px; object-fit:cover; border-radius:3px; flex-shrink:0;">
          <div style="overflow:hidden;">
            <div style="font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(v.title)}</div>
            <div style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">${escapeHtml(v.channel)} • Score: ${v.score}</div>
          </div>
        </div>
        <button class="btn-secondary add-to-builder-btn" style="padding:0.35rem 0.65rem; font-size:0.75rem; flex-shrink:0;" ${isAlreadyAdded ? 'disabled' : ''}>
          ${isAlreadyAdded ? 'Added' : '+ Add'}
        </button>
      `;

      card.querySelector('.add-to-builder-btn').addEventListener('click', () => {
        addVideoToBuilder(v);
        renderBuilderSearchResults(DOM.builderSearchInput.value);
      });

      DOM.builderSearchResults.appendChild(card);
    });
  }

  function addVideoToBuilder(video) {
    if (state.builderSelectedVideos.some(v => v.vid === video.vid)) return;
    state.builderSelectedVideos.push(video);
    renderBuilderSelectedList();
  }

  function removeVideoFromBuilder(index) {
    state.builderSelectedVideos.splice(index, 1);
    renderBuilderSelectedList();
    renderBuilderSearchResults(DOM.builderSearchInput.value);
  }

  function renderBuilderSelectedList() {
    DOM.builderSelectedCount.textContent = state.builderSelectedVideos.length;
    DOM.builderSelectedLessons.innerHTML = '';

    if (state.builderSelectedVideos.length === 0) {
      DOM.builderSelectedLessons.innerHTML = `
        <div style="text-align:center; color:var(--text-muted); font-size:0.85rem; padding:2rem 1rem;">
          No lessons added yet.<br>Search and click "Add to Course" on the right panel.
        </div>
      `;
      return;
    }

    state.builderSelectedVideos.forEach((v, idx) => {
      const item = document.createElement('div');
      item.className = 'builder-slot-item';
      item.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.5rem; overflow:hidden;">
          <span style="font-family:var(--font-mono); font-weight:700; color:var(--hn-orange);">${idx + 1}.</span>
          <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(v.title)}</span>
        </div>
        <button class="btn-icon remove-slot-btn" style="width:28px; height:28px; flex-shrink:0;" title="Remove">✕</button>
      `;

      item.querySelector('.remove-slot-btn').addEventListener('click', () => {
        removeVideoFromBuilder(idx);
      });

      DOM.builderSelectedLessons.appendChild(item);
    });
  }

  DOM.builderClearLessonsBtn.addEventListener('click', () => {
    state.builderSelectedVideos = [];
    renderBuilderSelectedList();
    renderBuilderSearchResults(DOM.builderSearchInput.value);
  });

  DOM.builderSearchInput.addEventListener('input', (e) => {
    renderBuilderSearchResults(e.target.value);
  });

  DOM.builderSaveBtn.addEventListener('click', () => {
    const title = DOM.builderTitle.value.trim();
    const domain = DOM.builderDomain.value;
    const desc = DOM.builderDesc.value.trim();

    if (!title) {
      alert("Please provide a title for your custom course.");
      DOM.builderTitle.focus();
      return;
    }

    if (state.builderSelectedVideos.length === 0) {
      alert("Please add at least one video to your custom course roadmap.");
      return;
    }

    const courseId = 'custom-' + Date.now();
    const newCourse = {
      id: courseId,
      title: title,
      tagline: desc.slice(0, 90) || `Custom roadmap with ${state.builderSelectedVideos.length} lectures`,
      domain: domain,
      difficulty: "Custom Curated",
      estimatedHours: `${Math.max(1, Math.round(state.builderSelectedVideos.length * 1.5))} hours`,
      badge: "User Created",
      description: desc || "A personalized curriculum created with Hacker Learn Course Builder.",
      prerequisites: "Determined by creator",
      modules: [
        {
          id: `${courseId}-m1`,
          title: "Sequenced Lessons",
          description: "Curated videos in deliberate learning order",
          lessons: state.builderSelectedVideos.map((v, i) => ({
            order: i + 1,
            vid: v.vid,
            title: v.title,
            channel: v.channel,
            topic: v.topic || "Core Concept",
            level: v.level || "general",
            score: v.score || 0,
            recommenders: v.recommenders || 0,
            summary: v.summary || "",
            why_hn: v.why_hn || "Community recommended on HackerTube.",
            quote: v.quote || "",
            learningOutcomes: [
              `Master ${v.title}`,
              "Apply concepts to personal projects"
            ],
            hackerTubeUrl: `https://hacker-tube.org/watch/${v.vid}`
          }))
        }
      ]
    };

    state.customCourses.unshift(newCourse);
    localStorage.setItem('hl_custom_courses', JSON.stringify(state.customCourses));

    alert(`Course "${title}" created successfully! Launching roadmap...`);
    
    // Reset builder form
    DOM.builderTitle.value = '';
    DOM.builderDesc.value = '';
    state.builderSelectedVideos = [];
    renderBuilderSelectedList();

    // Navigate to new course
    navigateTo('course-detail', { courseId: courseId });
  });

  // =========================================================================
  // View 5: Full HackerTube Archive Explorer (6,454 Videos)
  // =========================================================================
  function renderArchive() {
    const area = state.archiveArea;
    const level = state.archiveLevel;
    const sort = state.archiveSort;
    const q = state.archiveQuery.toLowerCase().trim();

    // Filter
    let filtered = state.videos.filter(v => {
      const matchArea = area === 'all' || (v.areas && v.areas.includes(area));
      const matchLevel = level === 'all' || v.level === level;
      const matchQuery = !q ||
        v.title.toLowerCase().includes(q) ||
        v.channel.toLowerCase().includes(q) ||
        v.topic.toLowerCase().includes(q) ||
        (v.summary && v.summary.toLowerCase().includes(q)) ||
        (v.why_hn && v.why_hn.toLowerCase().includes(q));
      return matchArea && matchLevel && matchQuery;
    });

    // Sort
    if (sort === 'score') {
      filtered.sort((a, b) => (b.score || 0) - (a.score || 0));
    } else if (sort === 'recs') {
      filtered.sort((a, b) => (b.recommenders || 0) - (a.recommenders || 0));
    } else if (sort === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / state.archivePageSize));
    state.archivePage = Math.min(state.archivePage, totalPages);

    const startIdx = (state.archivePage - 1) * state.archivePageSize;
    const pageItems = filtered.slice(startIdx, startIdx + state.archivePageSize);

    DOM.archiveCountLabel.textContent = `Showing ${total > 0 ? startIdx + 1 : 0} - ${Math.min(startIdx + state.archivePageSize, total)} of ${total.toLocaleString()} videos`;
    DOM.archivePageNum.textContent = `Page ${state.archivePage} of ${totalPages}`;

    DOM.archivePrevPage.disabled = state.archivePage <= 1;
    DOM.archiveNextPage.disabled = state.archivePage >= totalPages;

    DOM.archiveGrid.innerHTML = '';

    if (pageItems.length === 0) {
      DOM.archiveGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <h3>No videos match your filters</h3>
          <p style="margin-top:0.5rem;">Try resetting your search query or area filters.</p>
        </div>
      `;
      return;
    }

    pageItems.forEach(v => {
      const card = document.createElement('div');
      card.className = 'archive-card';

      card.innerHTML = `
        <div class="archive-thumb-wrap">
          <img class="archive-thumb-img" src="${getThumbUrl(v.vid)}" loading="lazy" alt="${escapeHtml(v.title)}">
        </div>
        <div class="archive-card-body">
          <div class="archive-card-meta">
            <span style="color:var(--hn-orange);">${escapeHtml(v.channel)}</span>
            <span>HN Score: ${v.score}</span>
          </div>
          <h4 class="archive-card-title">${escapeHtml(v.title)}</h4>
          <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
            ${escapeHtml(v.summary || v.why_hn)}
          </p>
          <div style="margin-top:auto; padding-top:0.5rem; display:flex; gap:0.5rem;">
            <button class="btn-primary watch-archive-btn" style="flex:1; padding:0.4rem; font-size:0.75rem;">
              Classroom
            </button>
            <button class="btn-secondary add-archive-btn" style="padding:0.4rem 0.6rem; font-size:0.75rem;" title="Add to Course Builder">
              + Builder
            </button>
          </div>
        </div>
      `;

      card.querySelector('.watch-archive-btn').addEventListener('click', () => {
        // Find existing course containing this video or generate a standalone view
        let foundCourse = null;
        for (const c of getAllCourses()) {
          for (const m of c.modules) {
            if (m.lessons.some(l => l.vid === v.vid)) {
              foundCourse = c;
              break;
            }
          }
          if (foundCourse) break;
        }

        if (foundCourse) {
          navigateTo('classroom', { courseId: foundCourse.id, vid: v.vid });
        } else {
          // Create a temporary single-lesson container so user can watch directly
          const tempCourse = {
            id: 'temp-' + v.vid,
            title: `Lecture: ${v.title}`,
            domain: (v.areas && v.areas[0]) || 'Computer Science',
            modules: [
              {
                id: 'm1',
                title: 'Selected Lecture',
                lessons: [
                  {
                    vid: v.vid,
                    title: v.title,
                    channel: v.channel,
                    score: v.score,
                    recommenders: v.recommenders,
                    level: v.level,
                    summary: v.summary,
                    why_hn: v.why_hn,
                    quote: v.quote,
                    learningOutcomes: [
                      `Study ${v.title}`,
                      "Analyze arguments presented by the speaker"
                    ]
                  }
                ]
              }
            ]
          };
          state.courses.push(tempCourse);
          navigateTo('classroom', { courseId: tempCourse.id, vid: v.vid });
        }
      });

      card.querySelector('.add-archive-btn').addEventListener('click', () => {
        addVideoToBuilder(v);
        alert(`Added "${v.title}" to Course Builder!`);
      });

      DOM.archiveGrid.appendChild(card);
    });
  }

  // Archive Filter Listeners
  DOM.archiveSearchInput.addEventListener('input', (e) => {
    state.archiveQuery = e.target.value;
    state.archivePage = 1;
    renderArchive();
  });

  DOM.archiveFilterArea.addEventListener('change', (e) => {
    state.archiveArea = e.target.value;
    state.archivePage = 1;
    renderArchive();
  });

  DOM.archiveFilterLevel.addEventListener('change', (e) => {
    state.archiveLevel = e.target.value;
    state.archivePage = 1;
    renderArchive();
  });

  DOM.archiveSort.addEventListener('change', (e) => {
    state.archiveSort = e.target.value;
    state.archivePage = 1;
    renderArchive();
  });

  DOM.archivePrevPage.addEventListener('click', () => {
    if (state.archivePage > 1) {
      state.archivePage--;
      renderArchive();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  DOM.archiveNextPage.addEventListener('click', () => {
    state.archivePage++;
    renderArchive();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =========================================================================
  // Global Search & Keyboard Shortcuts
  // =========================================================================
  DOM.globalSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.activeView !== 'courses') {
      navigateTo('courses');
    }
    renderCoursesGrid();
  });

  document.addEventListener('keydown', (e) => {
    // Ignore when typing in text inputs
    const el = document.activeElement;
    const typing = el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

    if (e.key === '/' && !typing) {
      e.preventDefault();
      DOM.globalSearchInput.focus();
      DOM.globalSearchInput.select();
      return;
    }

    if (e.key === 'Escape') {
      if (typing) el.blur();
      closeAuditModal();
      return;
    }

    // Classroom shortcuts
    if (state.activeView === 'classroom' && !typing) {
      if (e.key === 'j') {
        DOM.playerNextBtn.click();
      } else if (e.key === 'k') {
        DOM.playerPrevBtn.click();
      } else if (e.key === 'm') {
        DOM.playerToggleCompleteBtn.click();
      }
    }
  });

  // =========================================================================
  // Modals & Navigation Wiring
  // =========================================================================
  function openAuditModal() {
    DOM.auditModal.classList.add('active');
  }

  function closeAuditModal() {
    DOM.auditModal.classList.remove('active');
  }

  DOM.auditBtn.addEventListener('click', openAuditModal);
  DOM.footerAuditLink.addEventListener('click', (e) => {
    e.preventDefault();
    openAuditModal();
  });
  DOM.closeAuditModal.addEventListener('click', closeAuditModal);
  DOM.auditModal.addEventListener('click', (e) => {
    if (e.target === DOM.auditModal) closeAuditModal();
  });

  DOM.themeToggle.addEventListener('click', cycleTheme);

  DOM.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navigateTo(link.dataset.view);
    });
  });

  DOM.logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('courses');
  });

  DOM.backToCoursesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('courses');
  });

  document.getElementById('footer-courses-link').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('courses');
  });

  document.getElementById('footer-builder-link').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('builder');
  });

  // Domain Filter Buttons
  DOM.courseDomainFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    DOM.courseDomainFilters.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeDomainFilter = btn.dataset.domain;
    renderCoursesGrid();
  });

  // =========================================================================
  // HTML Escaping Utility
  // =========================================================================
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // =========================================================================
  // Application Startup
  // =========================================================================
  async function init() {
    // Resilient fallback: ensure courses data is loaded whether served via http:// or file://
    if (!state.courses || state.courses.length === 0) {
      if (typeof window.HACKER_COURSES !== 'undefined' && window.HACKER_COURSES.length > 0) {
        state.courses = window.HACKER_COURSES;
      } else if (typeof COURSES_DATA !== 'undefined' && COURSES_DATA.length > 0) {
        state.courses = COURSES_DATA;
      } else if (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http')) {
        try {
          const res = await fetch('data/courses.json');
          if (res.ok) {
            state.courses = await res.json();
            window.HACKER_COURSES = state.courses;
          }
        } catch (e) {
          console.warn('Fallback fetch data/courses.json failed:', e);
        }
      }
    }

    buildVideoMap();
    applyTheme(state.theme);
    renderCoursesGrid();
    console.log(`Hacker Learn initialized with ${state.courses.length} courses and ${state.videos.length} verified HackerTube videos.`);
  }

  // Kickoff
  init();

})();
