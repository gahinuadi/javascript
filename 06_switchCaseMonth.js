function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`Month number ${month} -->January`);
      break;
    case 2:
      console.log(`Month number ${month} --> February`);
      break;
    case 3:
      console.log(`Month number ${month} --> March`);
      break;
    case 4:
      console.log(`Month number ${month} --> April`);
      break;
    case 5:
      console.log(`Month number ${month} --> May`);
      break;
    case 6:
      console.log(`Month number ${month} --> Jun`);
      break;
    case 7:
      console.log(`Month number ${month} --> Jully`);
      break;
    case 8:
      console.log(`Month number ${month} --> Augast`);
      break;
    case 9:
      console.log(`Month number ${month} --> September`);
      break;
    case 10:
      console.log(`Month number ${month} --> Octomber`);
      break;
    case 11:
      console.log(`Month number ${month} --> November`);
      break;
    case 12:
      console.log(`Month number ${month} --> December`);
      break;

    default:
      console.log(`Month number  ${month} --> Invalid Input`);
      break;
      console.log(`Month null ${month} --> Invalid Input `);
      break;
      console.log(`Month undefined ${month} --> Invalid Input `);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
