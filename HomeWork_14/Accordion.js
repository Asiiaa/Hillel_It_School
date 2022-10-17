class Accordion {
  static CLASSES = {
    CONTAINER: 'container',
    ITEM: 'accordion-item',
    TITLE: 'accordion-title',
    COLLAPSED_CONTENT: 'accordion-content',
    EXPANDED_CONTENT: 'expanded',
  };

  #item = null;

  constructor(item) {
    this.#item = item;
    this.#delegatedEventListener();
  }

  #delegatedEventListener() {
    this.#item.addEventListener('click', (e) => {
      if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
        this.#toggleItemsContent(e.target.nextElementSibling);
      }
    });
  }
  #toggleItemsContent(item) {
    item.classList.toggle(Accordion.CLASSES.EXPANDED_CONTENT);
  }
}
