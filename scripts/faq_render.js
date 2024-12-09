function parseMarkdown(text) {
    // Replace bold syntax
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace # # with h1
    text = text.replace(/#(.*?)#/g, '<h1>$1</h1>');

    // Replace & & with h2
    text = text.replace(/&(.*?)&/g, '<h2>$1</h2>');

    // Replace !<image or gif URL> with an <img> tag
    text = text.replace(/!([^\s]+(?:\.[jpg|jpeg|png|gif|bmp|webp]{3,4}))/g, '<img class="faq-image" src="./images/faq/$1" alt="Image" />');

    // Replace $ with a link
    text = text.replace(/\$([^\s]+)/g, '<a href="$1" target="_blank">$1</a>');

    // Replace newlines with line breaks (after all other replacements)
    text = text.replace(/\n/g, '<br>');

    // Replace ' ' with gray background
    text = text.replace(/'(.*?)'/g, '<div class="gray-background">$1</div>');

    return text;
}


// Render FAQs to the page
function renderFAQs(faqs) {
    const container = document.getElementById('faq-container');
    container.innerHTML = ''; // Clear previous contents

    faqs.forEach((faq, index) => {
        const faqElement = document.createElement('div');
        faqElement.className = 'faq-item';
        faqElement.innerHTML = `
            <div class="question" data-index="${index}">${faq.question}</div>
            <div class="answer">${parseMarkdown(faq.answer)}</div>
        `;
        container.appendChild(faqElement);
    });
}

// Add event listeners for expanding/collapsing
function setupFAQInteractivity() {
    const container = document.getElementById('faq-container');

    // Remove any existing listeners first
    const oldContainer = container.cloneNode(true);
    container.parentNode.replaceChild(oldContainer, container);

    // Add new click listener
    oldContainer.addEventListener('click', (e) => {
        const question = e.target.closest('.question');
        if (question) {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            answer.classList.toggle('show');
        }
    });
}

// Initial render when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderFAQs(FAQs);
    setupFAQInteractivity();
});






