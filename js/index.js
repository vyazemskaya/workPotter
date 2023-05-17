/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let color = [
  ['rgba(151, 80, 255, 1)', 'rgba(151, 80, 255, 0.7)'],
  ['rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 0.7)'],
  ['rgba(255, 183, 0, 1)', 'rgba(255, 183, 0, 0.7)'],
  ['rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 0.7)'],
  ['rgba(0, 255, 218, 1)', 'rgba(0, 255, 218, 0.7)'],
][Math.floor(Math.random() * 5)];

$('body').css('--color', color[0]).css('--color-transparent', color[1]);

const indexAnime = (function () {
  let dotsWrapperEl = $('.dots-wrapper');
  let dotsFragment = $(document.createDocumentFragment());
  let row = Math.ceil(($(document).height() / $(document).width()) * 12.5);
  let rowMob = Math.ceil(($(document).height() / $(document).width()) * 5);
  let grid;
  if ($(window).width() > 768) {
    grid = [12, row];
  } else {
    grid = [5, rowMob];
  }
  let numberOfElements = grid[0] * grid[1];
  let animation;

  for (let i = 0; i < numberOfElements; i++) {
    dotsFragment.append('<div class="dot"></div>');
  }

  dotsWrapperEl.append(dotsFragment);

  let index = anime.random(0, numberOfElements - 1);

  function play() {
    if (animation) animation.pause();

    index = anime.random(0, numberOfElements - 1);

    animation = anime
      .timeline({
        easing: 'easeInOutQuad',
        complete: play,
      })
      .add(
        {
          targets: '.stagger-visualizer .dot',
          keyframes: [
            {
              translateX: anime.stagger('-2px', {
                grid: grid,
                from: index,
                axis: 'x',
              }),
              translateY: anime.stagger('-2px', {
                grid: grid,
                from: index,
                axis: 'y',
              }),
              duration: 100,
            },
            {
              translateX: anime.stagger('2px', {
                grid: grid,
                from: index,
                axis: 'x',
              }),
              translateY: anime.stagger('2px', {
                grid: grid,
                from: index,
                axis: 'y',
              }),
              scale: anime.stagger([1, 0.9], { grid: grid, from: index }),
              duration: 225,
            },
            {
              translateX: 0,
              translateY: 0,
              scale: 1,
              duration: 1200,
            },
            {
              duration: 1400,
            },
          ],
          delay: anime.stagger(80, { grid: grid, from: index }),
        },
        30
      );
  }

  play();
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5cclxubGV0IGNvbG9yID0gW1xyXG4gIFsncmdiYSgxNTEsIDgwLCAyNTUsIDEpJywgJ3JnYmEoMTUxLCA4MCwgMjU1LCAwLjcpJ10sXHJcbiAgWydyZ2JhKDAsIDI1NSwgMCwgMSknLCAncmdiYSgwLCAyNTUsIDAsIDAuNyknXSxcclxuICBbJ3JnYmEoMjU1LCAxODMsIDAsIDEpJywgJ3JnYmEoMjU1LCAxODMsIDAsIDAuNyknXSxcclxuICBbJ3JnYmEoMCwgMTg3LCAyNTUsIDEpJywgJ3JnYmEoMCwgMTg3LCAyNTUsIDAuNyknXSxcclxuICBbJ3JnYmEoMCwgMjU1LCAyMTgsIDEpJywgJ3JnYmEoMCwgMjU1LCAyMTgsIDAuNyknXSxcclxuXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KV07XHJcblxyXG4kKCdib2R5JykuY3NzKCctLWNvbG9yJywgY29sb3JbMF0pLmNzcygnLS1jb2xvci10cmFuc3BhcmVudCcsIGNvbG9yWzFdKTtcclxuXHJcbmNvbnN0IGluZGV4QW5pbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBkb3RzV3JhcHBlckVsID0gJCgnLmRvdHMtd3JhcHBlcicpO1xyXG4gIGxldCBkb3RzRnJhZ21lbnQgPSAkKGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSk7XHJcbiAgbGV0IHJvdyA9IE1hdGguY2VpbCgoJChkb2N1bWVudCkuaGVpZ2h0KCkgLyAkKGRvY3VtZW50KS53aWR0aCgpKSAqIDEyLjUpO1xyXG4gIGxldCByb3dNb2IgPSBNYXRoLmNlaWwoKCQoZG9jdW1lbnQpLmhlaWdodCgpIC8gJChkb2N1bWVudCkud2lkdGgoKSkgKiA1KTtcclxuICBsZXQgZ3JpZDtcclxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcclxuICAgIGdyaWQgPSBbMTIsIHJvd107XHJcbiAgfSBlbHNlIHtcclxuICAgIGdyaWQgPSBbNSwgcm93TW9iXTtcclxuICB9XHJcbiAgbGV0IG51bWJlck9mRWxlbWVudHMgPSBncmlkWzBdICogZ3JpZFsxXTtcclxuICBsZXQgYW5pbWF0aW9uO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRWxlbWVudHM7IGkrKykge1xyXG4gICAgZG90c0ZyYWdtZW50LmFwcGVuZCgnPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PicpO1xyXG4gIH1cclxuXHJcbiAgZG90c1dyYXBwZXJFbC5hcHBlbmQoZG90c0ZyYWdtZW50KTtcclxuXHJcbiAgbGV0IGluZGV4ID0gYW5pbWUucmFuZG9tKDAsIG51bWJlck9mRWxlbWVudHMgLSAxKTtcclxuXHJcbiAgZnVuY3Rpb24gcGxheSgpIHtcclxuICAgIGlmIChhbmltYXRpb24pIGFuaW1hdGlvbi5wYXVzZSgpO1xyXG5cclxuICAgIGluZGV4ID0gYW5pbWUucmFuZG9tKDAsIG51bWJlck9mRWxlbWVudHMgLSAxKTtcclxuXHJcbiAgICBhbmltYXRpb24gPSBhbmltZVxyXG4gICAgICAudGltZWxpbmUoe1xyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLFxyXG4gICAgICAgIGNvbXBsZXRlOiBwbGF5LFxyXG4gICAgICB9KVxyXG4gICAgICAuYWRkKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRhcmdldHM6ICcuc3RhZ2dlci12aXN1YWxpemVyIC5kb3QnLFxyXG4gICAgICAgICAga2V5ZnJhbWVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGVYOiBhbmltZS5zdGFnZ2VyKCctMnB4Jywge1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogZ3JpZCxcclxuICAgICAgICAgICAgICAgIGZyb206IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgYXhpczogJ3gnLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IGFuaW1lLnN0YWdnZXIoJy0ycHgnLCB7XHJcbiAgICAgICAgICAgICAgICBncmlkOiBncmlkLFxyXG4gICAgICAgICAgICAgICAgZnJvbTogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBheGlzOiAneScsXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IGFuaW1lLnN0YWdnZXIoJzJweCcsIHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IGdyaWQsXHJcbiAgICAgICAgICAgICAgICBmcm9tOiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGF4aXM6ICd4JyxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBhbmltZS5zdGFnZ2VyKCcycHgnLCB7XHJcbiAgICAgICAgICAgICAgICBncmlkOiBncmlkLFxyXG4gICAgICAgICAgICAgICAgZnJvbTogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBheGlzOiAneScsXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgc2NhbGU6IGFuaW1lLnN0YWdnZXIoWzEsIDAuOV0sIHsgZ3JpZDogZ3JpZCwgZnJvbTogaW5kZXggfSksXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIyNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgICAgdHJhbnNsYXRlWTogMCxcclxuICAgICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTIwMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxNDAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDgwLCB7IGdyaWQ6IGdyaWQsIGZyb206IGluZGV4IH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzBcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHBsYXkoKTtcclxufSkoKTtcclxuIl0sImZpbGUiOiJpbmRleC5qcyJ9
