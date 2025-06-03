document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const adminWrapper = document.querySelector('.admin-wrapper');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn');
    const mainContent = document.querySelector('.main-content'); // Get main-content
    const navbar = document.querySelector('.navbar'); // Get navbar
    const body = document.body;

    // Define sidebar widths from CSS variables (ensure they are defined in :root)
    const sidebarWidth = 250; // Fallback or retrieve from CSS var
    const sidebarCollapsedWidth = 60; // Fallback or retrieve from CSS var

    // Function to update layout based on sidebar state
    const updateLayout = () => {
        if (window.innerWidth > 768) { // Desktop view
            if (adminWrapper.classList.contains('collapsed')) {
                mainContent.style.marginLeft = `${sidebarCollapsedWidth}px`;
                navbar.style.left = `${sidebarCollapsedWidth}px`;
                navbar.style.width = `calc(100% - ${sidebarCollapsedWidth}px)`;
            } else {
                mainContent.style.marginLeft = `${sidebarWidth}px`;
                navbar.style.left = `${sidebarWidth}px`;
                navbar.style.width = `calc(100% - ${sidebarWidth}px)`;
            }
            body.classList.remove('sidebar-open'); // Ensure body overflow is reset on desktop
            adminWrapper.classList.remove('sidebar-open'); // Remove mobile overlay class
        } else { // Mobile view
            mainContent.style.marginLeft = '0'; // No margin on mobile
            navbar.style.left = '0'; // Navbar fixed to left edge
            navbar.style.width = '100%'; // Navbar full width
            adminWrapper.classList.remove('collapsed'); // Remove desktop collapsed class
            // Handle body overflow based on sidebar-open class in mobile
            if (adminWrapper.classList.contains('sidebar-open')) {
                body.classList.add('sidebar-open');
            } else {
                body.classList.remove('sidebar-open');
            }
        }
    };

    // Initial layout update on page load
    updateLayout();

    // Event listener for menu toggle button
    if (menuToggle && adminWrapper) {
        menuToggle.addEventListener('click', () => {
            if (window.innerWidth > 768) {
                adminWrapper.classList.toggle('collapsed');
            } else {
                adminWrapper.classList.toggle('sidebar-open');
            }
            updateLayout(); // Update layout after toggling class
        });
    }

    // Event listener for close sidebar button (mobile)
    if (closeSidebarBtn && adminWrapper) {
        closeSidebarBtn.addEventListener('click', () => {
            adminWrapper.classList.remove('sidebar-open');
            updateLayout(); // Update layout after closing mobile sidebar
        });
    }

    // Optional: Close mobile sidebar when a navigation link is clicked
    const navLinks = document.querySelectorAll('.main-nav a');
    if (navLinks.length > 0 && adminWrapper) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && adminWrapper.classList.contains('sidebar-open')) {
                    adminWrapper.classList.remove('sidebar-open');
                    updateLayout(); // Update layout after link click
                }
            });
        });
    }

    // Listen for window resize to adjust layout
    window.addEventListener('resize', updateLayout);


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
                
