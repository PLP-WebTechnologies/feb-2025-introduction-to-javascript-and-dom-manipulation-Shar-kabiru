// DOM Manipulation and Event Handling

// 1. Change text content dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Change the header text after 2 seconds
    setTimeout(function() {
    const header = document.querySelector('header h1');
    if (header) {
    header.textContent = 'FPFK Kawangware - A Place of Worship and Community';
    }
    }, 2000);
    
    
    // 2. Modify CSS styles via JavaScript
    const themeVerse = document.querySelector('h3');
    if (themeVerse) {
        themeVerse.style.color = '#e74c3c'; // Using the secondary color from CSS
        themeVerse.style.fontSize = '1.5rem';
        themeVerse.style.textDecoration = 'underline';
    }
    
    // 3. Add/remove elements on button click
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Core Values List';
    toggleButton.style.margin = '1rem 0';
    toggleButton.style.padding = '0.5rem 1rem';
    toggleButton.style.backgroundColor = '#3498db';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '4px';
    toggleButton.style.cursor = 'pointer';
    
    const coreValuesSection = document.querySelector('ol');
    if (coreValuesSection) {
        coreValuesSection.parentNode.insertBefore(toggleButton, coreValuesSection);
    
        toggleButton.addEventListener('click', function() {
            if (coreValuesSection.style.display === 'none') {
                coreValuesSection.style.display = 'block';
                toggleButton.textContent = 'Hide Core Values';
            } else {
                coreValuesSection.style.display = 'none';
                toggleButton.textContent = 'Show Core Values';
            }
        });
    }
    
    // 4. Change background color on mouseover/mouseout
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#d4e6f1';
        });
        p.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#ecf0f1'; // Original light color
        });
    });
    
    // 5. Form submission handling
    const registrationForm = document.querySelector('form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for registering! We will contact you soon.');
            this.reset();
        });
    }
    
    // 6. Dynamic year in footer
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    const copyrightText = document.querySelector('footer p:last-child');
    if (copyrightText) {
        copyrightText.innerHTML = `&copy; ${yearSpan.textContent} FPFK Kawangware. All rights reserved.`;
    }
    });