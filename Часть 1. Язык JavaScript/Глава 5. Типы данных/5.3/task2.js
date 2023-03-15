const checkSpam = (str) => {
  const spam1 = str.toLowerCase().indexOf("viagra");
  const spam2 = str.toLowerCase().indexOf("xxx");
  if (spam1 != -1 || spam2 != -1) return true;
  return false;
};

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
