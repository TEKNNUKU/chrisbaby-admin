document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const adminWrapper = document.querySelector('.admin-wrapper');

    if (menuToggle && adminWrapper) {
        menuToggle.addEventListener('click', () => {
            adminWrapper.classList.toggle('collapsed');
        });
    }

    // --- Tab Switching (for payments-invoices.html) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and hide all contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.style.display = 'none');

                // Add active class to clicked button
                button.classList.add('active');

                // Show the corresponding content
                const targetTab = button.dataset.tab;
                document.getElementById(targetTab).style.display = 'block';
            });
        });
    }
});
