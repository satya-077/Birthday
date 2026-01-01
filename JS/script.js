// Variables for tracking current page
let currentPage = 1;
const totalPages = 5;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Function to show a specific page
function showPage(pageNum) {
    // Hide all pages by removing 'active' class
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // Show the current page by adding 'active' class
    document.getElementById(`page${pageNum}`).classList.add('active');
    
    // Update button states
    prevBtn.disabled = (pageNum === 1); // Disable prev on first page
    nextBtn.disabled = (pageNum === totalPages); // Disable next on last page
}

// Event listener for Next button
nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

// Event listener for Previous button
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

// Initialize by showing the first page
showPage(1);