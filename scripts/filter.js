(function () {
  const el = document.querySelector(".products__list");
  const iso = new Isotope(el, {
    itemSelector: ".product__item",
    layoutMode: "masonry",
    masonry: {
      columnWidth: 10,
    },
    filter: ".popular",
  });

  const items = document.querySelectorAll(".filter__item");

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.target.closest(".filter__link");
      if (link) {
        const data = link.dataset.filter;
        items.forEach((item) => item.classList.remove("filter__item--active"));
        item.classList.add("filter__item--active");
        iso.arrange({ filter: `.${data}` });
      }
    });
  });
})();
