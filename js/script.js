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

// JavaScript untuk modal dengan deskripsi
document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail img");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close");

  // Event listener untuk setiap thumbnail
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const fullImageURL = thumbnail.getAttribute("data-full");
      const description = thumbnail.getAttribute("data-description");

      modalImage.src = fullImageURL; // Set gambar penuh
      modalDescription.textContent = description; // Set deskripsi
      modal.classList.add("visible"); // Tampilkan modal
    });
  });

  // Event listener untuk tombol close
  closeModal.addEventListener("click", () => {
    modal.classList.remove("visible");
  });

  // Sembunyikan modal jika pengguna mengklik area luar modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("visible");
    }
  });
});
