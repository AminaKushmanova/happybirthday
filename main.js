document.addEventListener("DOMContentLoaded", () => {
  const gift = document.querySelector(".inside .gift-box-svg ");
  const modal = document.getElementById("giftModal");
  const closeBtn = document.getElementById("closeModal");

  if (gift && modal && closeBtn) {
    gift.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openModal");
  const modal = document.getElementById("certificateModal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
document.getElementById("bookNowBtn").addEventListener("click", () => {
  window.open("https://wa.me/+77470491388", "_blank");
});
