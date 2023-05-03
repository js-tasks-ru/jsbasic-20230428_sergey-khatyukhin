/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  //if (typeof name === "string") {if (name.length < 4 || name === '' || name.includes(' ')) {return false;} else {return true;}} else {return false;}
  return typeof name ==="string" && name.length >= 4 &&  name != '' &&  !name.includes(' ');
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
