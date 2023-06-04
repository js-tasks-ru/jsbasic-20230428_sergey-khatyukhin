function showSalary(users, age) {
  const obj = users.filter(user => user.age <= age).map(user => user.name + ', ' + user.balance);
  // ваш код...
  return obj.join('\n');

}
