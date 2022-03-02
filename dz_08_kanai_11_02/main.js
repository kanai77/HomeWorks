let userName = prompt("Кто там?", '');

if (userName === 'Канай') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я') {
    alert( 'Здравствуйте !' );
  } else if (pass === '' || pass === null) {
    // alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}