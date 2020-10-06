
window.addEventListener('DOMContentLoaded', function() {
//Scrolling
  const sections = document.querySelectorAll('a[href*="#"]')

  for (let section of sections) {
    section.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = section.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
  //Modal

  const modal = document.querySelector('.modal'),
        modalBtn = document.querySelectorAll('[data-modal]'),
        modalClose = document.querySelector('[data-close]'),
        modalTimer = setTimeout(openModal, 200000);

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimer);
  }

  modalBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

// Class

  class CardInfo {
    constructor(image, alt, title, text, price, parentSelector, ...classes) {
      this.image = image;
      this.alt = alt;
      this.title = title;
      this.text = text;
      this.price = price;
      this.classes = classes;
      this.parentSelector = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.langth === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }
      element.innerHTML = `
      <img class="menu-food__block_img" src=${this.image} alt=${this.alt}>
          <h4 class="menu-food__block_title">${this.title}</h4>
          <p class="menu-food__block_descr">${this.text}</p>
          <div class="menu-food__block_price">Price: $${this.price}.00</div>
      `
      this.parentSelector.append(element);
    }
  }
  new CardInfo(
    "img/menu-1.png",
    "vegy",
    'ITALIAN SOURCE MUSHROOM',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse',
    12,
    '.menu-food__blocks',
    'menu-food__item'
  ).render();

  new CardInfo(
    "img/menu-2.png",
    "elite",
    'ITALIAN SOURCE MUSHROOM',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse',
    15,
    '.menu-food__blocks',
    'menu-food__item'
  ).render();

  new CardInfo(
    "img/menu-3.png",
    "post",
    'ITALIAN SOURCE MUSHROOM',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse',
    12,
    '.menu-food__blocks',
    'menu-food__item'
  ).render();

    //Reload window

  const logo = document.querySelector('.logo__img');

        logo.addEventListener('click', () => {
          location.reload();
        });

  //Menu Open

  const menuBtn = document.querySelector('.menu-btn__wrapper');
        menu = document.querySelectorAll('.menu');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('burger-active');

      menu.forEach((item) => {
        item.classList.toggle('show-menu');
    });
  });
// WOW animate init
  new WOW().init();

// Mousemoove Parallax
  let bg = document.querySelector('#waffle');
  window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
  });
});

