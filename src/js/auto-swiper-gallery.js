var slider = new KeenSlider(
  '#my-keen-slider',
  {
    loop: true,
    defaultAnimation: {
      duration: 3000,
    },
    detailsChanged: s => {
      s.slides.forEach((element, idx) => {
        element.style.opacity = s.track.details.slides[idx].portion;
      });
    },
    renderMode: 'custom',
  },
  [
    slider => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 4700);
      }
      slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener('mouseout', () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on('dragStarted', clearNextTimeout);
      slider.on('animationEnded', nextTimeout);
      slider.on('updated', nextTimeout);
    },
  ]
);
