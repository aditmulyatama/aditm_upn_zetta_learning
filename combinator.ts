function combinator(text: (string | number)[]): string {
  let hasil: string = "";
  text.map((text) => {
    hasil += " " + text;
  });
  return hasil;
}

const text1 = [1, "data", "3", "result"];
const text2 = ["Bejo", "has", "4", "sport", "car"];
console.log(combinator(text1));
console.log(combinator(text2));
//array digunakan jika ingin menyimpan beberapa data dengan tipe data yang sama ke dalam 1 variabel
//tuple digunakan jika ingin menyimpan beberapa data dengan tipe data yang berbeda ke dalam 1 variabel
//object digunakan jika ingin menyimpan data yang data-datanya terdapat beberapa objek yang bisa didefinisikan di dalamnya
