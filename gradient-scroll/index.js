const bodyElement = document.querySelector("body");
const maskElement = document.querySelector("#mask");
const titleElement = document.querySelector("#main-title");
const subtitleElement = document.querySelector("#main-subtitle");

window.addEventListener("scroll", () => {
  if (bodyElement.scrollTop > 100 && maskElement.classList.contains("hidden")) {
    maskElement.classList.remove("hidden");
    maskElement.style.opacity = "0";
    maskElement.style.transition = "opacity 0.5s ease";

    translateMain(true)

    setTimeout(() => {
      maskElement.style.opacity = "1";
    }, 100);
  }

  else if (bodyElement.scrollTop < 100 && !maskElement.classList.contains("hidden")) {
    maskElement.style.transition = "opacity 0.25s ease";
    maskElement.style.opacity = "0";

    translateMain(false)

    setTimeout(() => {
      maskElement.classList.add("hidden");
    }, 300);
  }
});

function translateMain(bool) {
  if (bool) {
    titleElement.style.transform = "translate(0px, -100px)"
    titleElement.style.opacity = "0"
    titleElement.style.transition = "transform 0.55s ease, opacity 0.4s ease";

    subtitleElement.style.transform = "translate(0px, -100px)"
    subtitleElement.style.opacity = "0"
    subtitleElement.style.transition = "transform 0.55s ease, opacity 0.4s ease";
    return
  }

  titleElement.style.transform = "translate(0px, 0px)"
  titleElement.style.opacity = "1"
  titleElement.style.transition = "transform 0.55s ease, opacity 0.4s ease";

  subtitleElement.style.transform = "translate(0px, 0px)"
  subtitleElement.style.opacity = "1"
  subtitleElement.style.transition = "transform 0.55s ease, opacity 0.4s ease";
}