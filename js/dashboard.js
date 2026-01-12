document.querySelectorAll(".menu li").forEach(li => {
  li.addEventListener("click", () => {
    document.querySelectorAll(".menu li").forEach(l => l.classList.remove("active"));
    li.classList.add("active");
  });
});
