document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    
    if (query) {

        window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');

    }
});

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.round-image');

    icons.forEach(icon => {

        icon.addEventListener('mouseenter', () => {
            icons.forEach(other => {
                if (other === icon) {

                    other.style.transform = 'scale(1.35)';
                    other.style.zIndex = '20';
                } else {

                    other.style.transform = 'scale(0.82) translateY(-12px)';
                }
            });
        });

        icon.addEventListener('mouseleave', () => {
            icons.forEach(other => {
                other.style.transform = 'scale(1)';
                other.style.zIndex = '1';
            });
        });
    });
});