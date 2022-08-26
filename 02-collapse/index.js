const collapsibleButton = document.querySelector('.collapsible__button'); 
const collapsibleActionVisible = document.querySelector('.collapsible__action--visible'); 
const collapsibleActionHidden = document.querySelector('.collapsible__action--hidden'); 
const collapsibleContent = document.querySelector('.collapsible__content'); 
 
collapsibleActionHidden.style.display = 'none'; 
 
const getCollapseAnimate = collapsibleContent.animate( 
  { 
    transform: ['scale(0)', 'scale(1)'], 
  }, 
  { 
      delay: 3, 
      duration: 400, 
      fill: 'both', 
  } 
); 
 
const animateButton = () => { 
    getCollapseAnimate.play(); 
    getCollapseAnimate.reverse(); 
     
    if (collapsibleActionHidden.style.display === 'none') { 
        collapsibleActionVisible.style.display = 'none'; 
        collapsibleActionHidden.style.display = 'block'; 
    } else { 
        collapsibleActionVisible.style.display = 'block'; 
        collapsibleActionHidden.style.display = 'none'; 
    } 
}; 
 
collapsibleButton.addEventListener('click', animateButton);