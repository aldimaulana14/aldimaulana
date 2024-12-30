document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("transparent");
    }
  });
