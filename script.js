'use strict';

const $ = (element) => document.querySelector(element);
const $$ = (elements) => document.querySelectorAll(elements);

const slideTop = [...$$('article')];

$('.leftTopIcon').addEventListener('click', () => {
  const [article0, ...articles] = slideTop;
  article0.style.display = 'none';
  articles.map((article) => (article.style.display = 'grid'));
});

$('.rightTopIcon').addEventListener('click', () => {
  const [article0, ...articles] = slideTop;
  article0.style.display = 'grid';
  articles.map((article) => (article.style.display = 'none'));
});

$('.leftBottomIcon').addEventListener('click', () => {});
$('.rightBottomIcon').addEventListener('click', () => {});
