function addCommas(num) {
  if (typeof num !== "number" || Object.is(num, NaN))
    throw new Error("Number input only");
  let sn = num.toString();
  //return the string when it is 1 to 3 digits
  if (sn.length <= 3) return sn;

  //handles when num has 3 digits and negative sign
  if (sn[0] === "-" && sn.length === 4) return sn;

  //handles 4 or more digits and add commas as needed

  let numWithCommas = "";
  let negative = false;
  if (sn[0] === "-") {
    sn = sn.substring(1);
    negative = true;
  }
  let commaCount = Math.floor(sn.length / 3);

  commaCount = commaCount % 3 === 0 ? commaCount - 1 : commaCount;
  for (let i = 0; i < sn.length; i++) {
    if (i !== 0) {
      if ((sn.length - i) % 3 === 0 && commaCount > 0) {
        numWithCommas = numWithCommas + "," + sn[i];
        commaCount--;
      } else {
        numWithCommas += sn[i];
      }
    } else {
      numWithCommas = sn[i];
    }
  }
  numWithCommas = negative ? "-" + numWithCommas : numWithCommas;
  return numWithCommas;

  //return sn;
}

//1,000
//11,000
//111,000
//1,111,000
//11,111,000
//111,111,000
//1,111,111,000
module.exports = addCommas;
