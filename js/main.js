document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const adminWrapper = document.querySelector('.admin-wrapper');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn');

    // Logic for the main menu toggle button (in the navbar)
    if (menuToggle && adminWrapper && sidebar) {
        menuToggle.addEventListener('click', () => {
            // For desktop/tablet (icon-only sidebar toggle)
            // This is primarily for larger screens where sidebar collapses/expands
            if (window.innerWidth > 768) { // Only toggle 'collapsed' on larger screens
                adminWrapper.classList.toggle('collapsed');
            } else { // On smaller screens, toggle 'sidebar-open' for the overlay
                adminWrapper.classList.toggle('sidebar-open');
            }
        });
    }

    // Logic for the close button inside the sidebar (primarily for mobile)
    if (closeSidebarBtn && adminWrapper) {
        closeSidebarBtn.addEventListener('click', () => {
            adminWrapper.classList.remove('sidebar-open'); // Close the mobile sidebar overlay
            // If you want it to also 'un-collapse' if it was collapsed on desktop and then closed on mobile, uncomment:
            // adminWrapper.classList.remove('collapsed');
        });
    }

    // Optional: Close sidebar if a navigation item is clicked (good for mobile UX)
    const navLinks = document.querySelectorAll('.main-nav a');
    if (navLinks.length > 0 && adminWrapper) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // If the mobile sidebar is open, close it after a link click
                if (adminWrapper.classList.contains('sidebar-open')) {
                    adminWrapper.classList.remove('sidebar-open');
                }
                // If sidebar is collapsed on desktop, you might want to keep it collapsed,
                // or expand it based on your desired UX. No change needed here for now.
            });
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
                const targetElement = document.getElementById(targetTab);
                if (targetElement) { // Ensure the target element exists
                    targetElement.style.display = 'block';
                }
            });
        });

        // Set initial active tab on page load if needed (already handled by HTML 'active' class)
        // You can uncomment and modify this if you want to dynamically set the first tab
        // const initialActiveTab = document.querySelector('.tab-btn.active');
        // if (initialActiveTab) {
        //     const targetTab = initialActiveTab.dataset.tab;
        //     const targetElement = document.getElementById(targetTab);
        //     if (targetElement) {
        //         targetElement.style.display = 'block';
        //     }
        // }
    }
});
