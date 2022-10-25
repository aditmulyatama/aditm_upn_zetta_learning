function priceCalculator(book, discount, tax, stock, order) {
  let totalPriceToPay = 0;
  const price = book.price;
  const discountAmount = price * (discount / 100);
  const priceAfterDiscount = price - discountAmount;
  const taxAmount = priceAfterDiscount * (tax / 100);
  const priceAfterTax = priceAfterDiscount + taxAmount;
  let totalBooksPrice = 0;
  let totalPriceAfterDiscount = 0;
  let totalTax = 0;

  for (let index = 0; index < order; index++) {
    if (book && book.price && index < stock) {
      totalPriceAfterDiscount += priceAfterDiscount;
      totalBooksPrice += book.price;
      totalTax += taxAmount;
    } else {
      console.log("Stock run out!");
      break;
    }
  }
  totalPriceToPay = totalPriceAfterDiscount + totalTax;
  if (book && book.price && order <= stock) {
    console.group();
    console.log("Judul Buku : ", book.title);
    console.log("Harga Satuan : ", price);
    console.log("Jumlah yang dibeli : ", order);
    console.log("Total harga keseluruhan : ", totalBooksPrice);
    console.log("Persentase diskon : ", discount, "%");
    console.log("Biaya setelah diskon : ", totalPriceAfterDiscount);
    console.log("Persantase PPN : ", tax, "%");
    console.log("Biaya PPN : ", totalTax);
    console.log("Total pembayaran : ", totalPriceToPay);
    console.log("");
    console.log("Sisa Stok buku : ", stock - order);
    if (stock - order === 0) {
      console.log("Stok habis, anda tidak bisa membeli lagi");
    } else {
      console.log("Stok masih ada, anda bisa membeli lagi");
    }
    console.groupEnd();
  }
  return totalPriceToPay;
}

priceCalculator({ title: "JS For baby", price: 125000 }, 50, 10, 10, 9);
