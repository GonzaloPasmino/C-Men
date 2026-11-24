const dialog = document.querySelector("#momentDialog");
const openDialogButton = document.querySelector("#newMoment");
const roundButton = document.querySelector(".round-button");

openDialogButton.addEventListener("click", () => {
  dialog.showModal();
  setTimeout(() => document.querySelector("#momentTitle").focus(), 100);
});

roundButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const submitButton = document.querySelector(".dialog-submit");
submitButton.addEventListener("click", () => {
  const title = document.querySelector("#momentTitle").value.trim();
  if (title) {
    openDialogButton.querySelector("span").textContent = title;
  }
});
