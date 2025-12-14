async function loadComponent(link, containerId) {
    try {
        let res = await fetch('components/' + link + '.html');
        if (!res.ok) throw new Error('Failed to fetch header: ' + res.status);
        let text = await res.text();
        let container = document.querySelector(containerId);

        container.innerHTML = text;
    } catch (err) {
        console.error(err);
    }
}

loadComponent('headerPage', '.header-container');
loadComponent('footerPage', '#footer-container');
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('particles.js config loaded')
});

document.addEventListener('DOMContentLoaded', () => {
    let scrollToTopContainer = document.querySelector('.return-top-container');
    let scrollToTopButton = document.querySelector('.return-top-button');

    if (scrollToTopContainer && scrollToTopButton) {
        scrollToTopContainer.style.display = window.scrollY > 0 ? 'flex' : 'none';

        window.addEventListener("scroll", () => {
            scrollToTopContainer.style.display = window.scrollY > 0 ? 'flex' : 'none';
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

let projects = [{
        name: "CUBE website project",
        status: "In progress",
        date: "Oct. 2025 - March 2026",
        icon: 'fa-solid fa-code',
        mainPicture: 'assets/img/Projects/ProjectCube/CubeMain.jpg ',
        description: 'University team project: Complete Website Conception ,Development, and SQL Database Architecture with integratedGDPR Compliance.',
        details: [{
                image: "assets/img/Projects/ProjectCube/Part1.png",
                description: "UML Conception: The UML Conception phase began by creating a Use Case Diagram to model the website's functional requirements and actor interactions, followed by a Class Diagram to detail the static structure and relationships between core entities, and finally a BPMN Diagram to clearly map out the complex, sequential business processes.",
            },
            {
                image: "assets/img/Projects/ProjectCube/Part2.png",
                description: "Database Conception (Merise: MCD/MLD): We began the Conception phase by developing the Conceptual Data Model (MCD) to visually represent the system's entities and their relationships, followed by the derivation of the Relational Logical Data Model (MLD) to define the final database tables and primary/foreign keys, adhering to Merise principles.",
            },
            {
                image: "assets/img/Projects/ProjectCube/Part3.png",
                description: "SQL Implementation: The SQL implementation involved translating the model into the database structure, writing INSERT statements to populate the initial data, and integrating advanced integrity rules via CHECK constraints and powerful procedural logic using TRIGGERS to ensure data consistency and compliance.",
            },
            {
                image: "assets/img/Projects/ProjectCube/ComingSoon.jpg",
                description: "coming soon...",
            },
        ],
        tags: ["PHP/Laravel", "UML", "Merise", "PostgreSQL", "Web design / development", "Cryptography"],
        link: 'https://github.com/Coming_Soon'
    },
    {
        name: "Game realisation project",
        status: "Finished",
        date: "dec. 2024",
        icon: 'fa-solid fa-code',
        mainPicture: 'assets/img/Projects/ProjectGame/GameMain.png',
        description: 'University team project: Development of a C# video game focused on "Pancakes", including gameplay mechanics, character design, and interactive elements.',
        details: [{
                image: "assets/img/Projects/ProjectGame/Part1.jpg",
                description: "Brainstorming Phase: The Brainstorming Phase focused on defining the core concept of the 'Pancakes' game, outlining the primary gameplay mechanics, developing unique character designs, and specifying all necessary interactive elements before starting coding.",
            },
            {
                image: "assets/img/Projects/ProjectGame/Part2.png",
                description: "Development Phase (C# / WPF): The subsequent Development Phase involved implementing the defined mechanics and design, utilizing C# for the game logic and the WPF (Windows Presentation Foundation) framework to build the graphical interface and interactive elements of the video game.",
            },
        ],
        tags: ["C#", "UML", "Game design", "WPF"],
        link: 'https://github.com/Maelbs/StackNCrepe'
    },
    {
        name: "Database management and analysis project",
        status: "Finished",
        date: "Mar - April. 2025",
        icon: 'fa-solid fa-database',
        mainPicture: 'assets/img/Projects/ProjectData/DataMain.png',
        description: 'The project involved the full lifecycle of database development, from conceptual design and data insertion to advanced querying, statistical analysis, and dynamic data visualization for a research laboratory\'s management system.',
        details: [{
                image: "assets/img/Projects/ProjectData/Part1.png",
                description: "Conceptual Modeling and Creation : We began by designing the database structure, which involved creating the Conceptual Data Model (MCD) and the Relational Logical Data Model (MLD), followed by generating the SQL script for table creation with all necessary integrity constraints",
            },
            {
                image: "assets/img/Projects/ProjectData/Part2A.png",
                description: "Data Manipulation and Insertion : The data insertion phase required manipulating initial tables, loading data from existing files (SQL, Excel/CSV), and then generating and populating large main tables (Project, Personne, ContratRH) and five association tables using SQL cross-joins and random data generation techniques",
            },
            {
                image: "assets/img/Projects/ProjectData/Part2B.png",
                description: "SQL Queries : We then wrote and executed a series of SQL queries to address specific analytical needs related to people's room assignments, equipment exploitation, publication contributions, and human resources contracts",
            },
            {
                image: "assets/img/Projects/ProjectData/Part3.png",
                description: "Statistical Tests : Statistical analysis was performed by first creating a PostgreSQL SQL view of equipment utilization data, which was then exported to Excel to calculate various statistics, including mean, median, quartiles, and Z-scores, to verify the database's function",
            },
            {
                image: "assets/img/Projects/ProjectData/Part4.png",
                description: "DataViz with PowerBI : Finally, we created dynamic data visualization reports using PowerBI, based on the previously created SQL views, with the goal of presenting two distinct and pertinent analytical reports, including one entirely in English, to a team of professionals",
            },
        ],
        tags: ["Merise", "PostgreSQL", "Excel", "PowerBi"],
        link: 'assets/files/CompteRendu_LISTIC.pdf'
    },
    {
        name: "Porfolio website project",
        status: "Finished",
        date: "Oct. - Nov. 2025",
        icon: 'fa-solid fa-code',
        mainPicture: 'assets/img/Projects/ProjectPortfolio/PortfolioMain.png',
        description: 'This project is a personal portfolio built using HTML, CSS, JavaScript, and PHP. Its goal is to showcase my skills, projects, and experience through a clean and responsive interface. The website features dynamic sections, smooth interactions, and a simple backend structure, offering an efficient and modern way to present my work as a developer.',
        tags: ["Web design / development", "PHP/Laravel"],
        link: 'https://github.com/Maelbs/PortfolioUSMB'
    },
];

// ========== FONCTION DE CRÉATION DE LA LIGHTBOX ==========  Je met juste la lightbox en structure a la React-style pour plus de clarté
function createLightbox() {
    let lightbox = document.createElement('div');
    lightbox.id = 'project-lightbox';
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <button class="lightbox-nav lightbox-prev">‹</button>
                    <button class="lightbox-nav lightbox-next">›</button>
                    <div class="lightbox-body">
                        <img class="lightbox-image" src="" alt="Project detail">
                        <div class="lightbox-description"></div>
                        <div class="lightbox-counter"></div>
                    </div>
                </div>
            `;
    document.body.appendChild(lightbox);
    return lightbox;
}

function openLightbox(project, startIndex = 0) {
    let lightbox = document.querySelector('#project-lightbox') || createLightbox();
    let currentIndex = startIndex;

    function updateLightbox() {
        const detail = project.details[currentIndex];
        const image = lightbox.querySelector('.lightbox-image');
        const description = lightbox.querySelector('.lightbox-description');
        const counter = lightbox.querySelector('.lightbox-counter');

        image.src = detail.image;
        image.alt = `${project.name} - Step ${currentIndex + 1}`;
        description.textContent = detail.description;
        counter.textContent = `${currentIndex + 1} / ${project.details.length}`;

        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
        nextBtn.style.display = currentIndex === project.details.length - 1 ? 'none' : 'flex';
    }

    lightbox.querySelector('.lightbox-close').onclick = () => {
        lightbox.classList.remove('active');
    };

    lightbox.querySelector('.lightbox-prev').onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateLightbox();
        }
    };

    lightbox.querySelector('.lightbox-next').onclick = () => {
        if (currentIndex < project.details.length - 1) {
            currentIndex++;
            updateLightbox();
        }
    };

    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    };

    document.onkeydown = (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateLightbox();
        } else if (e.key === 'ArrowRight' && currentIndex < project.details.length - 1) {
            currentIndex++;
            updateLightbox();
        }
    };

    updateLightbox();
    lightbox.classList.add('active');
}

function createProjectCard(project) {
    let card = document.createElement('div');
    card.classList.add('project-card');
    card.dataset.tags = project.tags.join(',');

    let iconContainer = document.createElement('div');
    iconContainer.classList.add('card-icon');
    let icon = document.createElement('i');
    icon.className = project.icon;
    iconContainer.appendChild(icon);

    let statusBadge = document.createElement('div');
    statusBadge.classList.add('status-badge');
    if (project.status === "Finished") {
        statusBadge.classList.add('finished');
    } else {
        statusBadge.classList.add('in-progress');
    }

    let statusIcon = document.createElement('i');
    if (project.status === "Finished") {
        statusIcon.className = 'fa-solid fa-check-circle';
    } else {
        statusIcon.className = 'fa-solid fa-spinner';
    }

    let statusDate = document.createElement('span');
    statusDate.textContent = project.date;

    statusBadge.appendChild(statusIcon);
    statusBadge.appendChild(statusDate);

    let mainImageContainer = document.createElement('div');
    mainImageContainer.classList.add('card-main-image');
    let mainImage = document.createElement('img');
    mainImage.src = project.mainPicture;
    mainImage.alt = project.name;
    mainImage.onclick = () => openLightbox(project, 0);
    mainImageContainer.appendChild(mainImage);

    let title = document.createElement('h3');
    title.textContent = project.name;

    let description = document.createElement('p');
    description.classList.add('card-description');
    description.textContent = project.description;

    let tagsContainer = document.createElement('div');
    tagsContainer.classList.add('card-tags');
    project.tags.forEach(tag => {
        let tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    let actionsContainer = document.createElement('div');
    actionsContainer.classList.add('card-actions');

    let detailsBtn = document.createElement('button');
    detailsBtn.classList.add('btn', 'btn-details');
    detailsBtn.innerHTML = '<i class="fa-solid fa-images"></i> View Details';
    detailsBtn.onclick = () => openLightbox(project, 0);

    let link = document.createElement('a');
    link.href = project.link;
    link.target = "_blank";
    link.classList.add('btn', 'btn-link');
    link.innerHTML = '<i class="fa-solid fa-arrow-right"></i> Go to';

    if (project.details) {
        actionsContainer.appendChild(detailsBtn);
    }
    actionsContainer.appendChild(link);

    card.appendChild(iconContainer);
    card.appendChild(statusBadge);
    card.appendChild(mainImageContainer);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tagsContainer);
    card.appendChild(actionsContainer);

    return card;
}

function getAllUniqueTags() {
    let allTags = new Set();
    projects.forEach(project => {
        project.tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags).sort();
}

function createFilters() {
    const filtersContainer = document.querySelector('.filters-container');
    const allTags = getAllUniqueTags();

    allTags.forEach(tag => {
        let filterBtn = document.createElement('button');
        filterBtn.classList.add('filter-btn');
        filterBtn.textContent = tag;
        filterBtn.dataset.filter = tag;
        filterBtn.onclick = () => filterProjects(tag);
        filtersContainer.appendChild(filterBtn);
    });
}

function filterProjects(filterTag) {
    const allCards = document.querySelectorAll('.project-card');
    const allFilterBtns = document.querySelectorAll('.filter-btn');
    const container = document.querySelector('#projects-container');

    allFilterBtns.forEach(btn => btn.classList.remove('active'));
    if (filterTag === 'all') {
        document.querySelector('.filter-btn.all').classList.add('active');
    } else {
        const targetBtn = Array.from(allFilterBtns).find(btn => btn.dataset.filter === filterTag);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }

    const noResultsMsg = document.querySelector('.no-results');
    if (noResultsMsg) {
        noResultsMsg.remove();
    }

    let visibleCount = 0;

    allCards.forEach(card => {
        const cardTags = card.dataset.tags;

        if (filterTag === 'all') {
            card.style.display = 'block';
            visibleCount++;
        } else if (cardTags.includes(filterTag)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (visibleCount === 0) {
        const noResults = document.createElement('div');
        noResults.classList.add('no-results');
        noResults.innerHTML = `
                    <i class="fa-solid fa-folder-open"></i>
                    <p>No projects found for this filter</p>
                `;
        container.appendChild(noResults);
    }
}

function loadProjects() {
    let container = document.querySelector('#projects-container');

    if (container) {
        projects.forEach(project => {
            let cardElement = createProjectCard(project);
            container.appendChild(cardElement);
        });
    }

    createFilters();

    document.querySelector('.filter-btn.all').onclick = () => filterProjects('all');
}

document.addEventListener('DOMContentLoaded', loadProjects);

const experiencesData = [{
        title: "IUT Annecy",
        location: "Annecy-le-Vieux, France",
        date: "2025",
        description: "University team project: **Complete Website Conception, Development, and SQL Database Architecture** with integrated GDPR Compliance."
    },
    {
        title: "IUT Annecy",
        location: "Annecy-le-Vieux, France",
        date: "2025",
        description: "Support program: **Assistance for first-year students in C# development** (guidance, debugging, and project support)."
    }
];

const formationsData = [{
        title: "BUT Informatique (Technical Bachelor's Degree in computer science)",
        date: "2024 - PRESENT",
        details: "In progress – 2nd year",
        school: "University of Savoy / IUT Annecy – Annecy-le-Vieux, France",
        iconClass: "fas fa-graduation-cap"
    },
    {
        title: "French General Baccalaureate (High school diploma specialized in mathematics and physics-chemistry)",
        date: "2021 - 2024",
        details: "Graduated with **Honors**",
        school: "Roger Frison Roche High School – Chamonix Mont-Blanc, France",
        iconClass: "fas fa-graduation-cap"
    }
];

function createTimelineItem(data, isExperience) {
    const item = document.createElement('div');
    item.classList.add('timeline-item');

    const marker = document.createElement('div');
    marker.classList.add('timeline-marker');

    if (!isExperience) {
        const icon = document.createElement('i');
        icon.classList.add(...data.iconClass.split(' '));
        marker.appendChild(icon);
    } else {
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-briefcase');
        marker.appendChild(icon);
    }

    const content = document.createElement('div');
    content.classList.add('timeline-content');

    const title = document.createElement('h3');
    title.classList.add('timeline-title');
    title.textContent = data.title;

    const date = document.createElement('p');
    date.classList.add('timeline-date');
    date.textContent = data.date;

    let detailsElement;

    if (isExperience) {
        detailsElement = document.createElement('p');
        detailsElement.classList.add('timeline-description');
        detailsElement.innerHTML = data.description.replace(/\*\*(.*?)\*\*/g, '<span class="highlight-text-exp">$1</span>');

        const location = document.createElement('p');
        location.classList.add('timeline-location');
        location.textContent = data.location;
        content.appendChild(location);

    } else {
        detailsElement = document.createElement('p');
        detailsElement.classList.add('timeline-details');
        detailsElement.innerHTML = data.details.replace(/\*\*(.*?)\*\*/g, '<span class="highlight-text-exp">$1</span>');

        const school = document.createElement('p');
        school.classList.add('timeline-school');
        school.textContent = data.school;
        content.appendChild(school);
    }

    content.appendChild(title);
    content.appendChild(date);
    content.appendChild(detailsElement);

    item.appendChild(marker);
    item.appendChild(content);

    return item;
}

function renderTimeline() {
    const experiencesContainer = document.querySelector('.experiences-container');
    const formationsContainer = document.querySelector('.formations-container');

    const expTimelineWrapper = document.createElement('div');
    expTimelineWrapper.classList.add('timeline-wrapper');
    experiencesContainer.appendChild(expTimelineWrapper);

    const formTimelineWrapper = document.createElement('div');
    formTimelineWrapper.classList.add('timeline-wrapper');
    formationsContainer.appendChild(formTimelineWrapper);

    experiencesData.forEach(exp => {
        const item = createTimelineItem(exp, true);
        expTimelineWrapper.appendChild(item);
    });

    formationsData.forEach(form => {
        const item = createTimelineItem(form, false);
        formTimelineWrapper.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', renderTimeline);







const languagesData = [
    {
        name: "French",
        level: "Native speaker",
        percent: 100
    },
    {
        name: "English",
        level: "Intermediate / Upper",
        percent: 75
    },
    {
        name: "Spanish",
        level: "Intermediate",
        percent: 50
    }
];

function renderLanguages() {
    const container = document.querySelector('.languages-container');
    
    if (!container) return;

    const header = document.createElement('div');
    header.className = 'languages-header';
    
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Languages spoken';
    
    const title = document.createElement('h2');
    title.className = 'title';
    title.innerHTML = 'Here are my <span class="highlight">languages</span>';
    
    header.appendChild(subtitle);
    header.appendChild(title);
    container.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'languages-grid';

    languagesData.forEach(lang => {
        const card = document.createElement('div');
        card.className = 'language-card';

        const circleContainer = document.createElement('div');
        circleContainer.className = 'language-circle-container';

        const circle = document.createElement('div');
        circle.className = 'language-circle';
        circle.style.background = `conic-gradient(#8b5cf6 ${lang.percent}%, rgba(139, 92, 246, 0.1) ${lang.percent}%)`;

        const innerCircle = document.createElement('div');
        innerCircle.className = 'language-circle-inner';

        circleContainer.appendChild(circle);
        circleContainer.appendChild(innerCircle);

        const info = document.createElement('div');
        info.className = 'language-info';

        const name = document.createElement('h3');
        name.textContent = lang.name;

        const level = document.createElement('p');
        level.textContent = lang.level;

        info.appendChild(name);
        info.appendChild(level);

        card.appendChild(circleContainer);
        card.appendChild(info);

        grid.appendChild(card);
    });

    container.appendChild(grid);
}

document.addEventListener('DOMContentLoaded', renderLanguages);







const miscData = [
    {
        text: "I love mountain biking, especially climbing trails.",
        icon: "fa-solid fa-person-biking"
    },
    {
        text: "I like learning languages, especially sign language and Japanese.",
        icon: "fa-solid fa-language"
    },
    {
        text: "I like learning musical instruments such as guitar and piano.",
        icon: "fa-solid fa-music"
    }
];

function renderMisc() {
    const container = document.querySelector('.misc-container');
    
    if (!container) return;

    // Header
    const header = document.createElement('div');
    header.className = 'misc-header';
    
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Hobbies & Interests';
    
    const title = document.createElement('h2');
    title.className = 'title';
    title.innerHTML = 'And some <span class="highlight">miscellaneous</span>';
    
    header.appendChild(subtitle);
    header.appendChild(title);
    container.appendChild(header);

    //  grile
    const grid = document.createElement('div');
    grid.className = 'misc-grid';

    miscData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'misc-card';

        const iconContainer = document.createElement('div');
        iconContainer.className = 'misc-icon';
        
        const icon = document.createElement('i');
        icon.className = item.icon;
        
        iconContainer.appendChild(icon);

        const text = document.createElement('p');
        text.textContent = item.text;

        card.appendChild(iconContainer);
        card.appendChild(text);

        grid.appendChild(card);
    });

    container.appendChild(grid);
}

document.addEventListener('DOMContentLoaded', renderMisc);








let benefits = [{
        metric: "10x",
        name: "A Strong problem-solving skills",
        description: "Used to analyzing complex situations and proposing effective solutions tailored to the project’s needs. I can adapt quickly and find innovative ways to overcome technical challenges.",
    },
    {
        name: "A strong passion for continuous learning",
        description: "Curious and motivated to explore new tools and technologies to continuously improve my practices. I am always seeking new knowledge to stay at the forefront of technological trends.",
    },
    {
        name: "An Excellent communication",
        description: "Communication is essential and one of my core values. I believe in transparency and constructive exchange above all. This helps me build strong relationships and ensures my efficiency and productivity in any work environment and with any team.",
    },
];

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.benefits-container');

    if (container) {
        benefits.forEach((benefit, index) => {
            let mainDiv = document.createElement('div');
            mainDiv.className = 'benefit-item';

            let numberP = document.createElement('p');
            numberP.className = 'benefit-number';
            numberP.textContent = `0${index + 1}`;

            let contentDiv = document.createElement('div');
            contentDiv.className = 'benefit-content';

            let nameH3 = document.createElement('h3');
            nameH3.className = 'benefit-title';
            nameH3.textContent = benefit.name;

            let descriptionP = document.createElement('p');
            descriptionP.textContent = benefit.description;

            mainDiv.appendChild(numberP);

            contentDiv.appendChild(nameH3);
            contentDiv.appendChild(descriptionP);

            mainDiv.appendChild(contentDiv);

            container.appendChild(mainDiv);
        });
    } else {
        console.error(" 'benefits-container' not founded");
    }
});

let technologies = [
    { name: 'HTML5', category: 'developpement', color: '#E34F26', logo: { type: 'fa', value: 'fa-html5' } },
    { name: 'CSS3', category: 'developpement', color: '#1572B6', logo: { type: 'fa', value: 'fa-css3-alt' } },
    { name: 'JavaScript', category: 'developpement', color: '#F7DF1E', logo: { type: 'fa', value: 'fa-js' } },
    { name: 'Svelte', category: 'developpement', color: '#FF3E00', logo: { type: 'img', value: 'assets/img/SvelteIcon.png' } },
    { name: 'Python', category: 'developpement', color: '#3776AB', logo: { type: 'fa', value: 'fa-python' } },
    { name: 'PHP', category: 'developpement', color: '#777BB4', logo: { type: 'fa', value: 'fa-php' } },
    { name: 'Tailwind', category: 'developpement', color: '#06B6D4', logo: { type: 'fa', value: 'fa-css3-alt' } },
    { name: 'GitHub', category: 'developpement', color: '#181717', logo: { type: 'fa', value: 'fa-github' } },
    { name: 'Git', category: 'developpement', color: '#F05032', logo: { type: 'fa', value: 'fa-git-alt' } },
    { name: '.NET', category: 'developpement', color: '#512BD4', logo: { type: 'fa', value: 'fa-code' } },
    { name: 'Visual Studio', category: 'developpement', color: '#9b71d2', logo: { type: 'img', value: 'assets/img/VSIcon.png' } },
    { name: 'Visual Studio Code', category: 'developpement', color: '#007abc', logo: { type: 'img', value: 'assets/img/VSCIcon.png' } },
    { name: 'UML Modelling', category: 'developpement', color: '#6d9af0ff', logo: { type: 'img', value: 'assets/img/UMLIcon.png' } },
    { name: 'Visual Paradigm', category: 'developpement', color: '#c73030', logo: { type: 'img', value: 'assets/img/VPIcon.png' } },

    { name: 'Windows', category: 'systeme', color: '#1885dfff', logo: { type: 'fa', value: 'fa-windows' } },
    { name: 'Bash', category: 'systeme', color: '#4EAA25', logo: { type: 'fa', value: 'fa-terminal' } },
    { name: 'Linux', category: 'systeme', color: '#FCC624', logo: { type: 'fa', value: 'fa-linux' } },

    { name: 'SQL', category: 'bdd', color: '#cc9e00', logo: { type: 'fa', value: 'fa-database' } },
    { name: 'PostgreSQL', category: 'bdd', color: '#336791', logo: { type: 'img', value: 'assets/img/PostgresIcon.png' } },
    { name: 'Merise Modelling', category: 'bdd', color: '#30e0ffff', logo: { type: 'img', value: 'assets/img/MeriseIcon.png' } },
    { name: 'Power AMC', category: 'bdd', color: '#f75b5bff', logo: { type: 'img', value: 'assets/img/PAMCIcon.png' } }
];

function createTechCard(tech) {
    let card = document.createElement('div');
    card.className = 'tech-card';
    card.style.backgroundColor = tech.color;

    if (tech.logo.type === 'fa') {
        let icon = document.createElement('i');
        icon.className = `tech-icon ${tech.logo.value.includes('fa-code') || 
                                   tech.logo.value.includes('fa-terminal') || 
                                   tech.logo.value.includes('fa-database') 
                                   ? 'fa-solid' : 'fa-brands'} ${tech.logo.value}`;
        card.appendChild(icon);
    } else {
        let img = document.createElement('img');
        img.src = tech.logo.value;
        img.alt = `${tech.name} logo`;
        img.className = 'tech-logo';
        card.appendChild(img);
    }

    let name = document.createElement('span');
    name.className = 'tech-name';
    name.textContent = tech.name;
    card.appendChild(name);

    return card;
}

function loadTechCards() {
    ['developpement', 'systeme', 'bdd'].forEach(category => {
        let container = document.querySelector(`.tech-grid[data-category="${category}"]`);
        if (container) {
            let techsForCategory = technologies.filter(tech => tech.category === category);
            techsForCategory.forEach(tech => {
                container.appendChild(createTechCard(tech));
            });
        }
    });
}

function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active-tab');
    });

    document.querySelector('#' + tabId)?.classList.add('active');
    document.querySelector(`.tab[data-tab="${tabId}"]`)?.classList.add('active-tab');
}

document.addEventListener('DOMContentLoaded', () => {
    loadTechCards();

    document.querySelectorAll('.tab').forEach(button => {
        button.addEventListener('click', () => {
            openTab(button.getAttribute('data-tab'));
        });
    });

    openTab('developpement');
});

let References = [{
        "nom": "DAMAS",
        "prenom": "Luc",
        "titre": "Programming Associate Professor / IUT Annecy",
        "email": "luc.damas@univ-smb.fr",
    },
    {
        "nom": "COLIN",
        "prenom": "Pascal",
        "titre": "Software architechture and database professor / IUT Annecy",
        "email": "pascal.colin@univ-smb.fr",
    },
];

function renderReferences() {
    const referencesContainer = document.querySelector('#References > div:last-child');

    if (referencesContainer) {
        referencesContainer.classList.add('references-grid');
    } else {
        console.error("Le conteneur de références n'a pas été trouvé.");
        return;
    }

    References.forEach(reference => {
        const card = document.createElement('div');
        card.classList.add('reference-card');

        const iconWrapper = document.createElement('div');
        iconWrapper.classList.add('card-icon-wrapper');
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-user-tie');
        iconWrapper.appendChild(icon);

        const name = document.createElement('h3');
        name.classList.add('reference-name');
        name.textContent = `${reference.prenom} ${reference.nom}`;

        const title = document.createElement('p');
        title.classList.add('reference-title');
        title.textContent = reference.titre;

        const emailLink = document.createElement('a');
        emailLink.classList.add('reference-email-link');
        emailLink.href = `mailto:${reference.email}`;
        emailLink.target = "_blank";

        const emailText = document.createElement('p');
        emailText.classList.add('reference-email');
        emailText.innerHTML = `<i class="fas fa-envelope"></i> ${reference.email}`;

        emailLink.appendChild(emailText);

        card.appendChild(iconWrapper);
        card.appendChild(name);
        card.appendChild(title);
        card.appendChild(emailLink);

        referencesContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderReferences);

document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('success') === '1') {
        Swal.fire({
            title: "Succès !",
            text: "Votre message a été envoyé avec succès.",
            icon: "success",
            confirmButtonText: "Super"
        });

        if (history.replaceState) {
            const cleanUrl = window.location.pathname;
            history.replaceState(null, null, cleanUrl);
        }
    }
});