// знаходимо елемент і записуємо його в змінну, яку можна далі використовувати
const popup = document.querySelector('.backdrop');
const openPopupButton = document.querySelector('.hero__button');
const closePopupButton = document.querySelector('.point-x');

// очікуємо коли якась дія виконається, в данному випадку click
openPopupButton?.addEventListener('click', () => {
    // popup.style.visibility = 'visible'; можна на елементах безпосередньо змінювати стилі, але це погана практика
    popup.classList.add('visible'); // краще стилізувати через класи, а в js додавати або забирати такі класи
    requestAnimationFrame(() => {  // браузер, приміняє деякі дії одночасно, тому для анімування потрібно, щоб додавання наступного класу вібдулось пізніше
        popup.classList.add('animated');
    });
});

function removeAnimation(p) { // куски кода можна групувати в функції щоб потім перевикористовувати
    p.classList.remove('visible');
}

closePopupButton?.addEventListener('click', () => {
    // popup.style.visibility = 'hidden';
    popup.classList.remove('animated');
    // можна очікувати коли закінчиться перехід, і щось зробити
    popup.addEventListener('transitionend', () => removeAnimation(popup), { once: true });
});

// знаходимо елемент і записуємо його в змінну, яку можна далі використовувати
const headerPopup = document.querySelector('.page-header-backdrop');
const openHeaderPopupButton = document.querySelector('.page-header__menu-icon');
const closeHeaderPopupButton = document.querySelector('.point-header-x');

// очікуємо коли якась дія виконається, в данному випадку click
openHeaderPopupButton.addEventListener('click', () => {
    // popup.style.visibility = 'visible'; можна на елементах безпосередньо змінювати стилі, але це погана практика
    headerPopup.classList.add('visible'); // краще стилізувати через класи, а в js додавати або забирати такі класи
    requestAnimationFrame(() => {  // браузер, приміняє деякі дії одночасно, тому для анімування потрібно, щоб додавання наступного класу вібдулось пізніше
        headerPopup.classList.add('animated');
    });
});

// function removeAnimation() { // куски кода можна групувати в функції щоб потім перевикористовувати
//     headerPopup.classList.remove('visible');
// }

closeHeaderPopupButton.addEventListener('click', () => {
    // popup.style.visibility = 'hidden';
    headerPopup.classList.remove('animated');
    // можна очікувати коли закінчиться перехід, і щось зробити
    headerPopup.addEventListener('transitionend', () => removeAnimation(headerPopup), { once: true });
});