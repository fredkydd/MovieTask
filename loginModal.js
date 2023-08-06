'use strict';
let $ = (el) => document.querySelector(el);
let $$ = (el) => document.querySelectorAll(el);

$$('.signUp').forEach((signUp) =>
  signUp.addEventListener('click', async () => {
    signUp.nextElementSibling.showModal();
  })
);

$('.signUp').addEventListener('click', () =>
  $('article').classList.add('blurred')
);

$$('.close').forEach((svgParentclose) => {
  svgParentclose.addEventListener('click', () => {
    svgParentclose.parentElement.close();
    $('article').classList.remove('blurred');
  });
});
