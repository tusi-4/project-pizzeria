import {select, classNames} from '../settings.js';

class Home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initLinks();
  }

  render(element){
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.dom.links = thisHome.querySelectorAll(select.home.links);
  }

  initLinks(){
    const thisHome = this;

    thisHome.dom.linkOrder.addEventListener('click', function(event){
      event.preventDefault();
      thisHome.activatePage();
    });

    thisHome.dom.linkBooking.addEventListener('click', function(event){
      event.preventDefault();
      thisHome.activatePage();
    });
  }

  activatePage(pageId){
    const thisHome = this;

    /* add class "active" to matching pages, remove from non-matching*/
    for(let page of thisHome.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class "active" to matching links, remove from non-matching*/    
    for(let link of thisHome.dom.links){
      link.classList.toggle(
        classNames.home.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  }
}

export default Home;