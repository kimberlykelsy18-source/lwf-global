// hero slideshow logic
(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  let current = 0;
  const slideCount = slides.length;
  const AUTO_DELAY = 3000;

  function show(index){
    slides.forEach((s,i)=>{
      s.classList.toggle('active', i === index);
    });
    current = index;
  }

  // automatic cycle
  let timer = setInterval(()=>{
    const next = (current + 1) % slideCount;
    show(next);
  }, AUTO_DELAY);

  // Pause on hover and resume
  const hero = document.getElementById('hero');
  hero.addEventListener('mouseenter', ()=> clearInterval(timer));
  hero.addEventListener('mouseleave', ()=> {
    clearInterval(timer);
    timer = setInterval(()=>{
      const next = (current + 1) % slideCount;
      show(next);
    }, AUTO_DELAY);
  });

  // "Continue" button: move to the next slide and pause briefly
  const continueBtn = document.getElementById('continueBtn');
  if(continueBtn){
    continueBtn.addEventListener('click', ()=>{
      // jump to the next slide (or back to primary) and pause the auto-advance for a moment
      const next = (current + 1) % slideCount;
      show(next);
      clearInterval(timer);
      setTimeout(()=> {
        timer = setInterval(()=>{
          const next = (current + 1) % slideCount;
          show(next);
        }, AUTO_DELAY);
      }, 4500);
    });
  }

  // start on slide 0
  show(0);
})();
