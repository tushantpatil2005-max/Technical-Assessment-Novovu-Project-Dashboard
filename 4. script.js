document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('projectGrid');
    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-btn');

    let projects = [];

    // 1. Fetch data (Coordinating with Mock Backend)
    async function fetchProjects() {
        try {
            // In a real scenario, this would be: fetch('https://api.novovu.com/v1/projects')
            const response = await fetch('data.json'); 
            projects = await response.json();
            renderProjects(projects);
        } catch (error) {
            projectGrid.innerHTML = `<p class="error">Error loading projects. Please contact backend team.</p>`;
        }
    }

    // 2. Render Cards
    function renderProjects(data) {
        projectGrid.innerHTML = '';
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <span class="status-badge ${project.status}">${project.status}</span>
                <h3>${project.title}</h3>
                <p><strong>Lead:</strong> ${project.lead}</p>
                <p>Priority: <span class="priority">${project.priority}</span></p>
            `;
            card.onclick = () => showDetails(project);
            projectGrid.appendChild(card);
        });
    }

    // 3. Filter Logic
    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        const statusTerm = statusFilter.value;

        const filtered = projects.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(searchTerm);
            const matchesStatus = statusTerm === 'all' || p.status === statusTerm;
            return matchesSearch && matchesStatus;
        });

        renderProjects(filtered);
    }

    // 4. Modal Interaction
    function showDetails(project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <hr>
            <p><strong>Lead Engineer:</strong> ${project.lead}</p>
            <p><strong>Current Status:</strong> ${project.status}</p>
            <p><strong>Project ID:</strong> NVV-00${project.id}</p>
            <p>This is a high-level view fetched from the Novovu Backend API.</p>
        `;
        modal.style.display = 'flex';
    }

    // Event Listeners
    searchInput.addEventListener('input', filterProjects);
    statusFilter.addEventListener('change', filterProjects);
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };

    fetchProjects();
});