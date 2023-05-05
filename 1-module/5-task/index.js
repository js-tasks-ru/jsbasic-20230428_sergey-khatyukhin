function truncate(str, maxlength) {
  //let MAX = maxlength-1;
  if (str.length <= maxlength) {
    return str;
  } else {
    return str.substr(0, maxlength-1) + "…";
  }
  // ваш код...
}
