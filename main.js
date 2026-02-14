document.addEventListener('DOMContentLoaded', () => {

  // Floating pulsing hearts
  const colors=['#ff6f91','#ff85a2','#ffc1cc','#ffb6b9','#ff9a9e'];
  function createHeart(){
    const heart=document.createElement('div');
    heart.classList.add('heart');
    heart.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    heart.style.left=Math.random()*window.innerWidth+'px';
    heart.style.top=Math.random()*window.innerHeight+'px';
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),5000);
  }
  setInterval(createHeart,300);

  // Emoji confetti
  function createConfetti(){
    const emoji=['❤️','✨','💖','🥰'];
    for(let i=0;i<40;i++){
      const conf=document.createElement('div');
      conf.innerText = emoji[Math.floor(Math.random()*emoji.length)];
      conf.style.position='absolute';
      conf.style.left=Math.random()*window.innerWidth+'px';
      conf.style.top='0px';
      conf.style.fontSize=(10+Math.random()*20)+'px';
      conf.style.opacity=Math.random();
      document.body.appendChild(conf);
      conf.animate([{transform:'translateY(0px) rotate(0deg)'},{transform:`translateY(600px) rotate(${Math.random()*360}deg)`}], {duration:3000});
      setTimeout(()=>conf.remove(),3000);
    }
  }

  // Sections
  const landing=document.getElementById('landing');
  const questionSection=document.getElementById('questionSection');
  const messageSection=document.getElementById('messageSection');

  const openBtn=document.getElementById('openBtn');
  const submitAnswer=document.getElementById('submitAnswer');

  openBtn.addEventListener('click',()=>{
    landing.style.display='none';
    questionSection.style.display='block';
  });

  // Typing effect
  function typeMessage(element, message, index=0){
    if(index<message.length){
      element.innerText += message[index];
      setTimeout(()=>typeMessage(element, message, index+1),50);
    }
  }

  submitAnswer.addEventListener('click',()=>{
    const answer=document.getElementById('answerInput').value;
    if(answer){
      questionSection.style.display='none';
      messageSection.style.display='block';

      const msgEl = document.getElementById('personalMessage');
      msgEl.innerText='';
      const fullMessage = `💖 Happy Valentine’s, Janela! 💖

I love you! Sana mahalin natin isa’t isa at mahal na mahal kita 🥰

Enjoy your day! Happy Valentine’s! 😄

Huwag kalimutan mahalin mo rin si Shan HAHAHAJA

Kita tayo sa: ${answer}`;

      typeMessage(msgEl, fullMessage);
      createConfetti();
    } else {
      alert("Please select a date! 😊");
    }
  });

  // Slideshow - automatic, large
  const images=[
    '1.jpeg',
    '2.jpeg',
    '3.jpeg'
  ];
  let currentIndex=0;
  const slideImg=document.getElementById('slideImg');
  slideImg.src=images[currentIndex];

  function showImage(index){
    slideImg.style.opacity=0;
    slideImg.style.transform='scale(0.95)';
    setTimeout(()=>{
      slideImg.src=images[index];
      slideImg.style.opacity=1;
      slideImg.style.transform='scale(1)';
    },500);
  }

  setInterval(()=>{
    currentIndex=(currentIndex+1)%images.length;
    showImage(currentIndex);
  },4000);

});