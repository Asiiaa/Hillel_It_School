class Accordion {
    constructor(titles) {
       this.titles = titles;
       this.open();
    }
   
    open() {
       const accordionTitles = document.querySelectorAll(this.titles);
       
       accordionTitles.forEach((item) => {
          item.addEventListener('click', () => { 
             item.classList.contains('active') ? 
                item.classList.remove('active') :            
                item.classList.add('active');
          });
       });
    }
 }