document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar nav a');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const targetId = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.navbar nav a[href="#${targetId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = '↑ Top';
    scrollBtn.id = 'scroll-to-top';
    document.body.appendChild(scrollBtn);
    scrollBtn.style.display = 'none';
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px';
    scrollBtn.style.right = '20px';
    scrollBtn.style.backgroundColor = '#3498db';
    scrollBtn.style.color = 'white';
    scrollBtn.style.border = 'none';
    scrollBtn.style.padding = '10px 15px';
    scrollBtn.style.borderRadius = '5px';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.zIndex = '1000';
    scrollBtn.style.opacity = '0.7';
    scrollBtn.style.transition = 'opacity 0.3s';

    scrollBtn.addEventListener('mouseover', () => { scrollBtn.style.opacity = '1'; });
    scrollBtn.addEventListener('mouseout', () => { scrollBtn.style.opacity = '0.7'; });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { 
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});