
let arrWord = ['Новости', 'Front-end', 'Back-end', 'Блокчейн', 'Учебник', 'по Rust', 'Mobile', 'app', 'Книги', 'Подборки', 'Истории', 'Решения', 'Теория', 'Железо', 'Интервью', 'Спецпроекты', 'Реклама', 'в издании', 'Редакци'];
let footer = document.querySelector('.footer');

let i = 0;
window.setInterval(()=>{
   footer.innerHTML = arrWord[i];
   i++;
   if(i == arrWord.length){
      i = 0;
   }
},1000);

