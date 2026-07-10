document.addEventListener('DOMContentLoaded', async () => {
    // 1. Charger les projets depuis le backend
    const projectsGrid = document.querySelector('.projects-grid');
    
    try {
        const response = await fetch('/api/projects');
        const projects = await response.json();

        projectsGrid.innerHTML = projects.map(proj => `
            <div class="project-card">
                <div class="project-img"><img src="${proj.image}" alt="${proj.title}"></div>
                <div class="project-info">
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                    <a href="${proj.link}" class="read-more">Voir plus <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error("Erreur de chargement des projets", err);
    }

    // 2. Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                message: contactForm.querySelector('textarea').value
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if(response.ok) {
                alert("Merci Julio Edwin, votre message a été enregistré !");
                contactForm.reset();
            }
        });
    }
});