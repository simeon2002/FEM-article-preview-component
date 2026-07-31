const shareBtn = document.querySelector(".btn--share");
const footer = shareBtn.closest(".article__footer");

shareBtn.addEventListener("click", e => {
  footer.classList.toggle("share--open");
});
