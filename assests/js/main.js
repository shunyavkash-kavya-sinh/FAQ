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
