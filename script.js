'use strict';



/**
 * add event on element
 */

// const addEventOnElem = function (elem, type, callback) {
//   if (elem.length > 1) {
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener(type, callback);
//     }
//   } else {
//     elem.addEventListener(type, callback);
//   }
// }



// /**
//  * navbar toggle
//  */

// const navbar = document.querySelector("[data-navbar]");
// const navbarLinks = document.querySelectorAll("[data-nav-link]");
// const navToggler = document.querySelector("[data-nav-toggler]");

// const toggleNavbar = function () {
//   navbar.classList.toggle("active");
//   navToggler.classList.toggle("active");
//   document.body.classList.toggle("active");
// }

// addEventOnElem(navToggler, "click", toggleNavbar);

// const closeNavbar = function () {
//   navbar.classList.remove("active");
//   navToggler.classList.remove("active");
//   document.body.classList.remove("active");
// }

// addEventOnElem(navbarLinks, "click", closeNavbar);



// /**
//  * header active
//  */

//  const header = document.querySelector("[data-header]");

//  const activeHeader = function () {
//  if (window.scrollY > 300) {
//     header.classList.add("active");
//   } else {
//    header.classList.remove("active");
//   }
//  }

//  addEventOnElem(window, "scroll", activeHeader);



// // /**
// //  * toggle active on add to fav
// //  */

//  const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

//  const toggleActive = function () {
//   this.classList.toggle("active");
// }

// addEventOnElem(addToFavBtns, "click", toggleActive);



//  /**
// //  * scroll revreal effect
// //  */

//  const sections = document.querySelectorAll("[data-section]");
// const scrollReveal = function () {
//  for (let i = 0; i < sections.length; i++) {
//   if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
//       sections[i].classList.add("active");
//     } else {
//       sections[i].classList.remove("active");
//    }
//   }
// }

// scrollReveal();

// addEventOnElem(window, "scroll", scrollReveal);





class EventManager {
  static addEventOnElem(elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
}

/**
 * navbar toggle
 */

class Navbar {
  constructor() {
    this.navbar = document.querySelector("[data-navbar]");
    this.navbarLinks = document.querySelectorAll("[data-nav-link]");
    this.navToggler = document.querySelector("[data-nav-toggler]");

    EventManager.addEventOnElem(this.navToggler, "click", this.toggleNavbar.bind(this));
    EventManager.addEventOnElem(this.navbarLinks, "click", this.closeNavbar.bind(this));
  }

  toggleNavbar() {
    this.navbar.classList.toggle("active");
    this.navToggler.classList.toggle("active");
    document.body.classList.toggle("active");
  }

  closeNavbar() {
    this.navbar.classList.remove("active");
    this.navToggler.classList.remove("active");
    document.body.classList.remove("active");
  }
}

const navbar = new Navbar();


/**
 * header active
 */

class Header {
  constructor() {
    this.header = document.querySelector("[data-header]");
    EventManager.addEventOnElem(window, "scroll", this.activeHeader.bind(this));
  }

  activeHeader() {
    if (window.scrollY > 300) {
      this.header.classList.add("active");
    } else {
      this.header.classList.remove("active");
    }
  }
}

const header = new Header();


/**
 * toggle active on add to fav
 */

class Favorite {
  constructor() {
    this.addToFavBtns = document.querySelectorAll("[data-add-to-fav]");
    EventManager.addEventOnElem(this.addToFavBtns, "click", this.toggleActive);
  }

  toggleActive() {
    this.classList.toggle("active");
  }
}

const favorite = new Favorite();


/**
 * scroll reveal effect
 */

class ScrollReveal {
  constructor() {
    this.sections = document.querySelectorAll("[data-section]");
    EventManager.addEventOnElem(window, "scroll", this.scrollReveal.bind(this));
    this.scrollReveal();
  }

  scrollReveal() {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
        this.sections[i].classList.add("active");
      } else {
        this.sections[i].classList.remove("active");
      }
    }
  }
}

const scrollReveal = new ScrollReveal();
