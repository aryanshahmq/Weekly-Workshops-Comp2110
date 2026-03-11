document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode")
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
});

document.getElementById("swap-btn").addEventListener("click", function () {
    const img = document.getElementById("swap-image");
    img.src = img.src.includes("Law.jpg")
        ? "https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg"
        : "Law.jpg";
});
