function verificar(){
   // 1 - Criação de Variáveis e data de ano atual

   let data = new Date()
   let ano = data.getUTCFullYear()
   let fano = document.getElementById ('txtano')
   let res = document.querySelector('div#res')

   // 2 - Validação de Campo
   if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert ('[ERRO] Verifique os dados e tente novamente!')

   // 3 - Criando Variavéis dentro de Condionais para manipulação elementos do HTML
   } else {
   let fsex = document.getElementsByName('radsex')
   let idade = ano - Number(fano.value)
   let genero = ' '
   let img = document.createElement('img')
   img.setAttribute('id', 'foto')

    
   if (fsex [0].checked) {
      genero = 'Homem'
      if (idade >=0 && idade < 10){
         //Criança
         img.setAttribute('src', 'img/bb-homem.png')
      } else if (idade < 28) {
         //Jovem
         img.setAttribute('src', 'img/jovem-homem.png')
      }else if (idade < 60) {
         //Adulto
         img.setAttribute('src', 'img/adulto-homem.png')
      } else {
         //idoso
         img.setAttribute('src', 'img/idoso-homem.png')
      }

} else if (fsex [1].checked) {
      genero = 'Mulher'
      if (idade >=0 && idade < 10){
         //Criança
         img.setAttribute('src', 'img/bb-mulher.png')
      } else if (idade < 28) {
         //Jovem
         img.setAttribute('src', 'img/jovem-mulher.png')
      }else if (idade < 60) {
         //Adulto
         img.setAttribute('src', 'img/adulta-mulher.png')
      } else {
         //idoso
         img.setAttribute('src', 'img/idosa-mulher.png')
      }
}

   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
   }

}
