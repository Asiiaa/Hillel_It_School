class Accordion {
   static CLASSES = {
      ACTIVE: 'active'
   }

   #titles = null;

   constructor(titles) {
       this.#titles = titles;
       this.#open();
    }
   
   #open() {
       const accordionTitles = document.querySelectorAll(this.#titles);
       
       accordionTitles.forEach((item) => {
          item.addEventListener('click', () => { 
             item.classList.contains(Accordion.CLASSES.ACTIVE) ? 
                item.classList.remove(Accordion.CLASSES.ACTIVE) :            
                item.classList.add(Accordion.CLASSES.ACTIVE);
          });
       });
    }
 }