window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".pre_loader");
  const hom_lod = document.querySelector(".load_test");
  setTimeout(function () {
    loader.style.display = "none";
    hom_lod.classList.remove("home_load");
  }, 2200);
});
