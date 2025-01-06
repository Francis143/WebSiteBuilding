// Alert with text entered in textbox
function alertText() {
    const text = document.getElementById("textbox").value;
    alert("You entered: " + text);
}

// Toggle child tab visibility
function openTab() {
    const tabContent = document.getElementById("tab-content");
    tabContent.style.display = tabContent.style.display === "none" ? "block" : "none";
}

// Open a new window
function openNewWindow() {
    window.open("https://www.example.com", "_blank");
}

// Shadow DOM content
const shadowContainer = document.getElementById("shadow-container");
const shadowRoot = shadowContainer.attachShadow({ mode: 'open' });

const shadowContent = document.createElement('div');
shadowContent.innerHTML = `
    <style>
        div {
            background-color: #e0f7fa;
            padding: 10px;
            border: 1px solid #00796b;
        }
    </style>
    <p>This is inside a colorful Shadow DOM!</p>
`;

shadowRoot.appendChild(shadowContent);
