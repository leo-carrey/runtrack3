window.addEventListener("scroll", function () {
  let body = document.body;
  let html = document.documentElement;

  let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  let windowHeight = window.innerHeight;
  let getScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).getScroll;

  let scrollPercentage = (getScroll / (height - windowHeight)) * 50;
  let footer = document.querySelector("footer");

  footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});