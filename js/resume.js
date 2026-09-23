// Opens the browser print dialog. The print styles in style.css hide the
// navigation and footer, so "Save as PDF" produces a clean resume.

const printButton = document.getElementById("print-resume");

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}
