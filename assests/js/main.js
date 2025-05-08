const faqItems = document.querySelectorAll(".faq-item");

const firstItem = faqItems[0];
if (firstItem) {
  const firstAnswer = firstItem.querySelector(".faq-answer");
  firstItem.classList.add("active");
  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
}

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((i) => {
      i.classList.remove("active");
      const a = i.querySelector(".faq-answer");
      a.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

function showSection(id) {
  const sections = document.querySelectorAll(".tab-faq");
  sections.forEach((sec) => sec.classList.remove("active-tab"));
  document.getElementById(id).classList.add("active-tab");
}

const searchBar = document.getElementById("searchBar");
const blogs = document.querySelectorAll(".faq-wrap");
const noData = document.getElementById("noData");

searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }

  const value = searchBar.value.toLowerCase();
  let hasMatch = false;

  blogs.forEach((blog) => {
    if (blog.textContent.toLowerCase().includes(value)) {
      blog.style.display = "";
      hasMatch = true;
    } else {
      blog.style.display = "none";
    }
  });

  noData.style.display = hasMatch ? "none" : "block";
});
