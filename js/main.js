document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const adminWrapper = document.querySelector('.admin-wrapper');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn');

    // Handle the main menu toggle button click (in the navbar)
    if (menuToggle && adminWrapper) { // Ensure elements exist
        menuToggle.addEventListener('click', () => {
            // Check screen width to determine behavior
            if (window.innerWidth > 768) {
                // On larger screens (desktop/tablet), toggle 'collapsed' state for sidebar
                adminWrapper.classList.toggle('collapsed');
                // Ensure sidebar-open is removed if present from prior mobile view
                adminWrapper.classList.remove('sidebar-open');
            } else {
                // On smaller screens (mobile), toggle 'sidebar-open' for overlay
                adminWrapper.classList.toggle('sidebar-open');
                // Ensure collapsed is removed if present from prior desktop view
                adminWrapper.classList.remove('collapsed');
            }
        });
    }

    // Handle the close button inside the sidebar (primarily for mobile overlay)
    if (closeSidebarBtn && adminWrapper) { // Ensure elements exist
        closeSidebarBtn.addEventListener('click', () => {
            adminWrapper.classList.remove('sidebar-open'); // Always close the mobile overlay
            // If you want clicking the close button on mobile to also revert desktop collapse:
            // adminWrapper.classList.remove('collapsed');
        });
    }

    // Optional: Close mobile sidebar when a navigation link is clicked
    const navLinks = document.querySelectorAll('.main-nav a');
    if (navLinks.length > 0 && adminWrapper) { // Ensure elements exist
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && adminWrapper.classList.contains('sidebar-open')) {
                    adminWrapper.classList.remove('sidebar-open'); // Close on mobile after link click
                }
            });
        });
    }

    // --- Tab Switching (for payments-invoices.html) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.style.display = 'none');

                button.classList.add('active');
                const targetTab = button.dataset.tab;
                const targetElement = document.getElementById(targetTab);
                if (targetElement) {
                    targetElement.style.display = 'block';
                }
            });
        });
        // Ensure the initial active tab content is displayed on page load
        const initialActiveTab = document.querySelector('.tab-btn.active');
        if (initialActiveTab) {
            const targetTab = initialActiveTab.dataset.tab;
            const targetElement = document.getElementById(targetTab);
            if (targetElement) {
                targetElement.style.display = 'block';
            }
        }
    }
});
