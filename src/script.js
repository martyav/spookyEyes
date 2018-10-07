
document.addEventListener('DOMContentLoaded', () => {
  const eyes = document.querySelector('.spookyEyes');
  const pupils = eyes.querySelectorAll('.pupil');

  function followCursor(event) {
    const { offsetWidth: width, offsetHeight: height } = eyes;
    let {offsetX: x, offsetY: y } = event;
    const walk = 110;

    if (this !== event.target) {
      x = x + event.target.offsetLeft;
      y = y + event.target.offsetTop;
    }

    const xWalk = Math.round((x/width * walk) - (walk/2));
    const yWalk = Math.round((y/height * walk) - (walk/2));

    console.log(event.target.offsetLeft);
    console.log(event.target.offsetTop);
    pupils.forEach(pupil => pupil.style.transform = `translate(${xWalk}px, ${yWalk}px)`);
  }

  eyes.addEventListener('mousemove', followCursor);
});
