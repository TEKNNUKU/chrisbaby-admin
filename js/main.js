document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const adminWrapper = document.querySelector('.admin-wrapper');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn'); // Get the close button

    if (menuToggle && adminWrapper && sidebar) {
        menuToggle.addEventListener('click', () => {
            // For desktop/tablet (icon-only sidebar toggle)
            adminWrapper.classList.toggle('collapsed');
            // For mobile (slide-out sidebar toggle)
            adminWrapper.classList.toggle('sidebar-open');
        });

        // ADD THIS FOR THE CLOSE BUTTON
        if (closeSidebarBtn) {
            closeSidebarBtn.addEventListener('click', () => {
                adminWrapper.classList.remove('sidebar-open'); // Close the mobile sidebar
            });
        }

        // Optional: Close sidebar if an item is clicked (for mobile UX)
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (adminWrapper.classList.contains('sidebar-open')) {
                    adminWrapper.classList.remove('sidebar-open'); // Close sidebar after clicking a link on mobile
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




    // --- Tab Switching (for payments-invoices.html) ---
    // ... existing tab switching code ...
});
