function togglemode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pega a tag img
const img = document.querySelector("#profile img")

// substituir a imagem 

   if (html.classList.contains('light')) {

    //se tiver ligth mode , adicionar  a imagem ligth
    img.setAttribute('src', './assets/avatar-light.jpg.jpg')
     
  } else {
    //set tiver sem ligth mode , manter a imagem normal 
    img.setAttribute("src" ,'./assets/Avatar-kami1.png' )
   
 }

}