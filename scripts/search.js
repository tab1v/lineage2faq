function searchFAQs() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();

    // Filter FAQs based on search term
    const filteredFAQs = FAQs.filter(faq =>
        // Search both question and answer
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm)
    );

    // Re-render filtered FAQs
    renderFAQs(filteredFAQs);

    // Re-add interactivity after search
    setupFAQInteractivity();
}

// Add search event listener after page loads
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', searchFAQs);
});





