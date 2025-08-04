const accordianPara = document.querySelectorAll(".accordian__para");
const accordianHeading = [...document.querySelectorAll(".accordian__heading")];

accordianHeading.forEach((acc) => {
  acc.addEventListener("click", function () {
    siblingEl = this.nextElementSibling;
    if (!siblingEl.classList.contains("active")) {
      accordianPara.forEach((para) => {
        para.classList.remove("active");
      });
      siblingEl.classList.add("active");
    } else {
      siblingEl.classList.remove("active");
    }
  });
});
