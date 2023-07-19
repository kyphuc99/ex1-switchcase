let browser = prompt("Enter browser name!");
switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;
  case "chrome":
  case "Firefox":
  case "Safari":
  case "opera":
    alert("okay we support these browsers too");
    break;
  default:
    alert("we hope that this page look ok!");
}
