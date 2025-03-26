document.querySelector(".btn-box").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.home, .about, .skills, .projects, .contact');
    
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    
    const handleScroll = () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
});
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the heading element
    const heading = document.querySelector('.home h1');

    // Add the 'visible' class after a short delay to trigger the transition
    setTimeout(function() {
        heading.classList.add('visible');
    }, 500); // Delay for 500ms before triggering the animation
});
