let days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let months = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь' ];
let date = new Date();

let data = document.querySelector('.data');
let year = date.getFullYear();
let month =  months[date.getMonth()];
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();


data.innerHTML = year + ' ' +  month + ' ' + day + ' // ' + hour + ':' + minute;







