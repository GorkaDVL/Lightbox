// Photo Cliquable
const lightbox = document.createElement('div')    
lightbox.id = 'lightbox'  
document.body.appendChild(lightbox) 
const images = document.querySelectorAll('img') 
images.forEach(image => {                                     
    image.addEventListener('click', e => {     
        lightbox.classList.add('active')       
        const img = document.createElement('img') 
        img.src = image.src                      
        while (lightbox.firstChild) {             
           lightbox.removeChild(lightbox.firstChild) 
       } 
        lightbox.appendChild(img)               
       })
})

lightbox.addEventListener('click', e => { 
    if (e.target !== e.currentTarget) return 
    lightbox.classList.remove('active')    
})




// Animation Header

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .word',
    translateX: [80,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 2000 + 30 * i
  }).add({
    targets: '.ml12 .word',
    translateX: [0,-80],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 2000,
    delay: (el, i) => 2000 + 30 * i
  });

 
// Curseur
  document.getElementsByTagName('body')[0].addEventListener('mousemove', function (n)  {
    t.style.left = n.clientX + 'px',
    t.style.top = n.clientY + 'px',
    e.style.left = n.clientX + 'px',
    e.style.top = n.clientY + 'px',
    i.style.left = n.clientX + 'px', 
    i.style.top = n.clientY + 'px' 
  });
    
  var t = document.getElementById('cursor');
  var e = document.getElementById('cursor2');
  var i = document.getElementById('cursor3');
  
  function n(t){
    e.classList.add('hoover'), i.classList.remove('hover')
  }
  
  s();
  
  for (var r = document.querySelectorAll('.hover-target'),
    a= r.length -1; a >=0; a--) {
      o(r[a])
    }
  
    function o(t) {
  t.addEventListener('mouseover', n), t.addEventListener ('mouseout', s)
    };


  