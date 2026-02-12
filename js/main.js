
console.log("Research site loaded");

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = input.value.trim().toLowerCase();
    if (!query) return;

    // Remove old highlights
    document.querySelectorAll(".highlight").forEach(el => {
      el.classList.remove("highlight");
    });

    let firstMatch = null;

    // Select searchable elements
    const searchable = document.querySelectorAll(
      ".news-title, .news-desc, .project-card h3, .project-card p"
    );

    searchable.forEach(el => {
      if (el.innerText.toLowerCase().includes(query)) {
        el.classList.add("highlight");

        if (!firstMatch) {
          firstMatch = el;
        }
      }
    });

    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert("No results found.");
    }
  });

});
