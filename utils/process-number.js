exports.processNumber = (number) => {
  // Jika ID grup, kembalikan langsung
  if (number.includes("@g.us")) {
    return number;
  }

  // Validasi untuk nomor individual
  let finalNumber = number;
  if (!number.includes("@s.whatsapp.net")) number = number + "@s.whatsapp.net";
  if (number[0] == "6" && number[1] == "2") return number;
  if (number[0] == "+" && number[1] == "6" && number[2] == "2")
    return number.substring(1);
  if (number[0] == "0" && number[1] == "8") {
    let deleted = number.substring(1);
    finalNumber = "62" + deleted;
    return finalNumber;
  }
  if (number[0] == "8") return "62" + number;

  throw new Error("phone number must start with valid country code");
};
