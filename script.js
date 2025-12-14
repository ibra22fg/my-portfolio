echo '// JavaScript for my portfolio
console.log("🎉 Portfolio website loaded successfully!");

// Function to display current date in the footer
function displayCurrentDate() {
    const now = new Date();
    const options = { 
        year: "numeric", 
        month: "long", 
        day: "numeric",
        weekday: "long"
    };
    
    const dateString = now.toLocaleDateString("en-US", options);
    
    // Create or update date element
    let dateElement = document.getElementById("current-date");
    
    if (!dateElement) {
        dateElement = document.createElement("p");
        dateElement.id = "current-date";
        dateElement.style.fontStyle = "italic";
        dateElement.style.marginTop = "10px";
        
        const footer = document.querySelector("footer");
        if (footer) {
            footer.appendChild(dateElement);
        }
    }
    
    dateElement.textContent = `Today is: ${dateString}`;
}

// Wait for page to fully load
document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ Document is ready!");
    
    // Display current date
    displayCurrentDate();
    
    // Add interactive greeting
    const header = document.querySelector("header");
    if (header) {
        header.addEventListener("click", function() {
            alert("Thanks for visiting my portfolio! ��");
        });
        header.style.cursor = "pointer";
    }
    
    // Log section count
    const sections = document.querySelectorAll("section");
    console.log(`📊 Found ${sections.length} sections on the page`);
});' > script.js
