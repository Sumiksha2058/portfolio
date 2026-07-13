document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});


// Fetch and display GitHub projects
async function loadGitHubProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    try {
        const response = await fetch('https://api.github.com/users/Sumiksha2058/repos?sort=updated&per_page=100');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        
        const repos = await response.json();
        
        // Filter out forks and the portfolio repo itself, then get top 12
        const filteredRepos = repos
            .filter(repo => !repo.fork && repo.name.toLowerCase() !== 'portfolio')
            .slice(0, 12);
        
        if (filteredRepos.length === 0) {
            projectsGrid.innerHTML = '<div class="no-projects">No projects found. Check back soon!</div>';
            return;
        }
        
        projectsGrid.innerHTML = filteredRepos.map(repo => {
            const language = repo.language || 'Unknown';
            const description = repo.description || 'No description available';
            const stars = repo.stargazers_count;
            
            // Get appropriate icon based on language
            const languageIcon = getLanguageIcon(language);
            
            return `
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">${languageIcon}</div>
                        ${stars > 0 ? `<div class="project-stars"><i class="fas fa-star"></i> ${stars}</div>` : ''}
                    </div>
                    <h3 class="project-name">${repo.name}</h3>
                    <p class="project-description">${description}</p>
                    <div class="project-footer">
                        <span class="project-language">${language}</span>
                        <a href="${repo.html_url}" target="_blank" class="project-link">
                            View <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsGrid.innerHTML = '<div class="no-projects">Unable to load projects. Please try again later.</div>';
    }
}

// Get icon based on programming language
function getLanguageIcon(language) {
    const icons = {
        'JavaScript': '<i class="fab fa-js-square"></i>',
        'Python': '<i class="fab fa-python"></i>',
        'HTML': '<i class="fab fa-html5"></i>',
        'CSS': '<i class="fab fa-css3-alt"></i>',
        'PHP': '<i class="fab fa-php"></i>',
        'TypeScript': '<i class="fab fa-js-square"></i>',
        'Java': '<i class="fab fa-java"></i>',
        'C++': '<i class="fas fa-code"></i>',
        'C#': '<i class="fas fa-code"></i>',
        'Ruby': '<i class="fas fa-gem"></i>',
        'Go': '<i class="fas fa-code"></i>',
        'Rust': '<i class="fas fa-code"></i>',
        'Unknown': '<i class="fas fa-folder"></i>'
    };
    
    return icons[language] || icons['Unknown'];
}

// Load projects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadGitHubProjects();
});
