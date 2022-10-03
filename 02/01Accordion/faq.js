const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];
const accordianBody = document.querySelector(".accordian_body");
const faqs = [];
function showFaq() {
  faqData.forEach((ele) => {
    createFaq(ele.question, ele.answer);
  });
}
showFaq();
// console.log(showFaq);

function createFaq(question, answer) {
  // Created Div and append it into Accordion Body
  const faq = document.createElement("div");
  faq.className = "faq";
  accordianBody.appendChild(faq);

  // Header Div
  const faq_header = document.createElement("div");
  faq_header.className = "faq_header";
  faq.appendChild(faq_header);

  // Creating Header
  const h3 = document.createElement("h3");
  h3.textContent = question;
  faq_header.appendChild(h3);

  // Create + Sign Button
  const btn = document.createElement("button");
  btn.textContent = "+";
  btn.className = "show_btn";
  faq_header.appendChild(btn);

  // Hidden Paragraph
  const paragraph = document.createElement("p");
  paragraph.innerText = answer;
  paragraph.classList.add("hidden");
  faq.appendChild(paragraph);
}
btnStatusUpdate();
function btnStatusUpdate() {
  const showParagraph = document.querySelectorAll(".show_btn");
  showParagraph.forEach((ele) => {
    ele.addEventListener("click", () => {
      const answer = ele.parentElement.parentElement.lastChild;
      answer.classList.toggle("hidden");
    });
  });
}
