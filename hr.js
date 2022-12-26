let SSticky = [...document.querySelectorAll('.sticky')];

function Animate()
    {
        for(let i=0; i<SSticky.length; i++)
        {
            let{top} = SSticky[i].parentElement.getBoundingClientRect();
            let transtop =  top>0? 0 : top*-1
            if (transtop >= 1000) transtop = 1000;
            
            if (top <=0 && i !==SSticky.length-1)
            {
                SSticky[i].style.transform = 'scale'
            }
        }
        requestAnimationFrame(Animate)
    }

    Animate()

    const slider = document.querySelector('.body');
    let isDown = false;
    let starty;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      starty = e.pageX - slider.offsetTop;
      scrolldown = slider.scrollTop;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const y = e.pageX - slider.offsetTop;
      const walk = (y - starty) * 1; //scroll-fast
      slider.scrollLeft = scrolldown - walk;
      console.log(walk);
    });