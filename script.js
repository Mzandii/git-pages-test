// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Update current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Get DOM elements
  const changeTextBtn = document.getElementById("changeTextBtn");
  const dynamicText = document.getElementById("dynamicText");
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");
  const resetBtn = document.getElementById("resetBtn");
  const countDisplay = document.getElementById("count");
  const nameInput = document.getElementById("nameInput");
  const greetBtn = document.getElementById("greetBtn");
  const greeting = document.getElementById("greeting");
  const loadDataBtn = document.getElementById("loadDataBtn");
  const dataContainer = document.getElementById("dataContainer");

  // Counter functionality
  let count = 0;

  function updateCount() {
    countDisplay.textContent = count;
    // Add some color coding based on count
    if (count > 0) {
      countDisplay.style.color = "#27ae60";
    } else if (count < 0) {
      countDisplay.style.color = "#e74c3c";
    } else {
      countDisplay.style.color = "#2c3e50";
    }
  }

  incrementBtn.addEventListener("click", () => {
    count++;
    updateCount();
  });

  decrementBtn.addEventListener("click", () => {
    count--;
    updateCount();
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    updateCount();
  });

  // Text change functionality
  const messages = [
    "Hello from JavaScript!",
    "You clicked the button!",
    "This is dynamic content!",
    "GitHub Pages is awesome!",
    "JavaScript is running!",
    "Have a great day!",
  ];
  let messageIndex = 0;

  changeTextBtn.addEventListener("click", () => {
    dynamicText.textContent = messages[messageIndex];
    dynamicText.style.color = getRandomColor();
    messageIndex = (messageIndex + 1) % messages.length;
  });

  // Greeting functionality
  greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
      greeting.textContent = `Hello, ${name}! Welcome to our site!`;
      greeting.style.color = "#3498db";
    } else {
      greeting.textContent = "Please enter your name first!";
      greeting.style.color = "#e74c3c";
    }
  });

  // Data loading functionality
  loadDataBtn.addEventListener("click", async () => {
    try {
      // Simulate loading data (in a real scenario, you might fetch from an API)
      dataContainer.innerHTML = "<p>Loading data...</p>";

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sample data
      const sampleData = [
        { id: 1, name: "Item 1", description: "First item" },
        { id: 2, name: "Item 2", description: "Second item" },
        { id: 3, name: "Item 3", description: "Third item" },
        { id: 4, name: "Item 4", description: "Fourth item" },
      ];

      // Display data
      dataContainer.innerHTML = `
                <h3>Loaded Data:</h3>
                <ul>
                    ${sampleData
                      .map(
                        (item) => `
                        <li>
                            <strong>${item.name}</strong>: ${item.description}
                        </li>
                    `
                      )
                      .join("")}
                </ul>
            `;
    } catch (error) {
      dataContainer.innerHTML = `<p style="color: #e74c3c;">Error loading data: ${error.message}</p>`;
    }
  });

  // Helper function to generate random colors
  function getRandomColor() {
    const colors = [
      "#e74c3c",
      "#3498db",
      "#2ecc71",
      "#9b59b6",
      "#f39c12",
      "#1abc9c",
      "#34495e",
      "#d35400",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Add some interactive effects to sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });

    section.addEventListener("mouseleave", () => {
      section.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    });
  });

  // Initialize count display
  updateCount();

  // Console log for debugging
  console.log("JavaScript loaded successfully!");
});
