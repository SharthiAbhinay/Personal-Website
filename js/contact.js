// Copies my email address to the clipboard, for visitors whose browser
// has no mail app set up, so clicking the email link would do nothing.

const copyButton = document.querySelector(".copy-button");
const copyStatus = document.querySelector(".copy-status");

async function copyEmail() {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Copied";
    copyStatus.textContent = "Email address copied to your clipboard.";
  } catch {
    copyStatus.textContent = `Couldn't copy automatically. My email is ${email}.`;
  }
  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 2000);
}

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", copyEmail);
}
