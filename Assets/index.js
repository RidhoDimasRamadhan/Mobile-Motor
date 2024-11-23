// Swiper Initialization
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Lihat Semua Button
document.getElementById("lihatSemuaBtn").addEventListener("click", () => {
  alert("Menampilkan semua motor yang tersedia!");
});


 
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2, // Jumlah slide yang terlihat (bisa diubah)
    spaceBetween: 10, // Jarak antar slide
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Pagination bisa diklik
    },
  });
});

document.getElementById("lihatSemuaBtn").addEventListener("click", () => {
  alert("Menampilkan semua motor yang tersedia!");
});

// JavaScript for Pagination Dots
const garageCards = document.getElementById("garageCards");
const dots = document.querySelectorAll(".dot");

garageCards.addEventListener("scroll", () => {
  const scrollLeft = garageCards.scrollLeft;
  const scrollWidth = garageCards.scrollWidth - garageCards.clientWidth;
  const activeIndex = Math.round(
    (scrollLeft / scrollWidth) * (dots.length - 1)
  );

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });
});
    

  const scrollContainer = document.querySelector(".scroll-container");
  // const dots = document.querySelectorAll(".dot");

  // scrollContainer.addEventListener("scroll", () => {
  //   const scrollWidth =
  //     scrollContainer.scrollWidth - scrollContainer.clientWidth;
  //   const scrollLeft = scrollContainer.scrollLeft;
  //   const activeIndex = Math.round(
  //     (scrollLeft / scrollWidth) * (dots.length - 1)
  //   );

  //   dots.forEach((dot, index) => {
  //     dot.classList.toggle("active", index === activeIndex);
  //   });
  // });

  // dots.forEach((dot, index) => {
  //   dot.addEventListener("click", () => {
  //     const scrollWidth =
  //       scrollContainer.scrollWidth - scrollContainer.clientWidth;
  //     const targetScrollLeft = (scrollWidth / (dots.length - 1)) * index;
  //     scrollContainer.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  //   });
  // });