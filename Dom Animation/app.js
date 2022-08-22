function myMove(){
  const animate = document.getElementById("animate");
  let pos = 0;
   
  const interval = setInterval(frmae,5);

  function frmae(){
    if(pos < 350){
    pos++;
    animate.style.top = pos + 'px';
    animate.style.left = pos + 'px'; 
    } else {
         clearInterval(interval);
    }
  }

}

myMove()