
// import { Resend } from 'resend';

const menuContac = document.querySelector('#menuContact') 
const contact = document.querySelector('#contact');
const menuAboutMe = document.querySelector('#aboutMe');
const aboutMe = document.querySelector('#mainAboutMe');
const menuProjects = document.querySelector('#projects');
const projects = document.querySelector('#mainProjects');
const btn = document.getElementById('button');

menuProjects.addEventListener('click', () => {
    projects.scrollIntoView({behavior:'smooth'})
})

menuAboutMe.addEventListener('click', () => {
    aboutMe.scrollIntoView({behavior:'smooth'})
})

menuContac.addEventListener('click', () => {
    contact.scrollIntoView({behavior:'smooth'})
})

contact

function randomValues() {
    anime({
      targets: '.square, .circle, .triangle',
      translateX: function() {
        return anime.random(-900, 900);
      },
          translateY: function() {
        return anime.random(-300, 900);
      },
          rotate: function() {
              return anime.random(0, 360);
          },
          scale: function() {
              return anime.random(.2, 2);
          },
      duration: 1000,
          easing: 'easeInOutQuad',
      complete: randomValues,
      });
  }
  randomValues();

  document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
 
    btn.value = 'Sending...';
 
    const serviceID = 'default_service';
    const templateID = 'template_n7fx4wf';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       alert('Sent!');
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
     });
 });