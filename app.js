const persons = [
  {
    info: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    img: './images/image-tanya.jpg',
  },
  {
    info: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'Ohn Tarkpor',
    job: 'Junior Front-end Developer',
    img: './images/image-john.jpg',
  },
];

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const info = document.querySelector('.info');
const mainImg = document.querySelector('.main-img');

let counter = 0;

window.addEventListener('DOMContentLoaded', () => {
  display(counter);
});

prev.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = persons.length - 1;
  }
  display(counter);
});
next.addEventListener('click', () => {
  counter++;
  if (counter > persons.length - 1) {
    counter = 0;
  }
  display(counter);
});

const display = (counter) => {
  let person = persons[counter];
  info.innerHTML = `<img src="./images/pattern-quotes.svg" class="quote" />
          <p>${person.info}</p>
          <div class="info-footer">
            <h3>${person.name}</h3>
            <h3 class="grey">${person.job}</h3>
          </div>`;
  mainImg.src = person.img;
};
