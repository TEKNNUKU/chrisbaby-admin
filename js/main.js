document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const adminWrapper = document.querySelector('.admin-wrapper');
    const sidebar = document.querySelector('.sidebar'); // Get the sidebar element

    if (menuToggle && adminWrapper && sidebar) { // Check for sidebar element as well
        menuToggle.addEventListener('click', () => {
            adminWrapper.classList.toggle('collapsed'); // For desktop/tablet (icon-only sidebar)
            adminWrapper.classList.toggle('sidebar-open'); // For mobile (slide-out sidebar)
        });
        // Optional: Close sidebar if clicked outside (for mobile overlay)
        // You might need a transparent overlay div for better UX
        // sidebar.addEventListener('click', (event) => {
        //     if (event.target === sidebar && adminWrapper.classList.contains('sidebar-open')) {
        //         adminWrapper.classList.remove('sidebar-open');
        //     }
        // });
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
