const today = new Date().getDay();

const hourRows = document.querySelectorAll(".hours-box p");

hourRows.forEach(function(row) {
  const day = Number(row.getAttribute("data-day"));

  if (day === today) {
    row.classList.add("today");
  }
});