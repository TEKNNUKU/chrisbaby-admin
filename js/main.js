// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn');
    const mainContent = document.querySelector('.main-content');

    // Function to set sidebar state based on current window width
    function setInitialSidebarState() {
        if (window.innerWidth <= 768) {
            // Mobile: Sidebar should be closed and act as an overlay
            sidebar.classList.remove('collapsed'); // Ensure desktop collapse class is off
            sidebar.classList.remove('open'); // Ensure it's closed by default
            mainContent.classList.remove('shifted'); // No margin shift on mobile
        } else {
            // Desktop/Tablet: Default to expanded sidebar, or collapsed if preferred
            // Assuming default expanded for now, let the toggle handle collapse
            sidebar.classList.remove('collapsed');
            mainContent.classList.remove('shifted');
            sidebar.classList.remove('open'); // Remove mobile-specific class
        }
    }

    // Call on initial load
    setInitialSidebarState();

    // Event listener for window resize
    window.addEventListener('resize', setInitialSidebarState);


    // Toggle sidebar on menu button click
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                // Mobile: Toggle 'open' class for overlay effect
                sidebar.classList.toggle('open');
            } else {
                // Desktop/Tablet: Toggle 'collapsed' class and shift main content
                sidebar.classList.toggle('collapsed');
                mainContent.classList.toggle('shifted');
            }
        });
    }

    // Close sidebar button (mobile only 'X' button)
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', function() {
            sidebar.classList.remove('open'); // Close the mobile sidebar
        });
    }

    // Tab functionality for Payments & Invoices, Taxes pages
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' to the clicked button and its corresponding content
            button.classList.add('active');
            const targetTabId = button.dataset.tab;
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // Handle initial active tab on page load
    // This ensures one tab is active even if none is explicitly set in HTML
    if (tabButtons.length > 0) {
        // Find the initially active tab (if set in HTML) or default to the first
        const initialActiveTab = document.querySelector('.tab-btn.active') || tabButtons[0];
        if (initialActiveTab) {
            initialActiveTab.click(); // Simulate click to activate content
        }
    }
});
