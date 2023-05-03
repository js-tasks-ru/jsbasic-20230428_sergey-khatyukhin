function factorial(n) {
  let f = 1;
  // eslint-disable-next-line space-infix-ops
  if (n == 0) {return 1;} else {
    if (n < 0) {alert('Факториала отрицательного числа не существует!');}
    else {
      for (let i = 1;i <= n;i++) {f = f * i;}
      // ваш код...
    }
  }
  return f;
}