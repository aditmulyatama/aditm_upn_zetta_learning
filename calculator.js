function priceCalculator(book, discount, tax){
    let result = 0;
    if(book && book.price){
        const price=book.price;
        const discountAmount=price*(discount/100);
        const priceAfterDiscount=price - discountAmount;
        const taxAmount=priceAfterDiscount*(tax/100);
        const priceAfterTax=priceAfterDiscount+taxAmount;

        console.group();
        console.log("Judul Buku : ", book.title);
        console.log("Harga Buku : ",price);
        console.log("Persentase diskon : ",discount,"%");
        console.log("Biaya setelah diskon : ",priceAfterDiscount);
        console.log("Persantase PPN : ",tax,"%");
        console.log("Biaya PPN : ",taxAmount);
        console.log("Total pembayaran : ",priceAfterTax);
        console.groupEnd();
    }

    return 0;
}

priceCalculator({title: "JS For baby", price: 125000, status: true},50,10);