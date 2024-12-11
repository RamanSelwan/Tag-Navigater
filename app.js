const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const id = e.currentTarget.dataset.id;
    console.log(id);
    if (id) {
      //For button
console.log(btn.classList)
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
    }

    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    // Add 'active' class to the article with the matching id
    const targetArticle = document.getElementById(id);
    targetArticle.classList.add("active");
  });
});
