import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemList: {
    id: number;
    gambar: string;
    nama: string;
    harga: number;
    kondisi: string;
    link_pembelian: string;
  }[] = [
    {
      id: 1,
      gambar: 'https://rahasiatekno.com/wp-content/uploads/2021/05/ms.jpg',
      nama: 'Logitech G Pro X Superlight',
      harga: 1979000,
      kondisi: 'Sempurna',
      link_pembelian:
        'https://www.tokopedia.com/chemicygaming/logitech-g-pro-x-superlight-wireless-gaming-mouse',
    },
    {
      id: 2,
      gambar: 'https://cf.shopee.co.id/file/8e4e8c9498e9bec68c064b052b9d85d4',
      nama: 'Cooler Master MH 752',
      harga: 1000000,
      kondisi: 'Baik',
      link_pembelian:
        'https://www.tokopedia.com/chemicygaming/cooler-master-mh752-7-1-premium-gaming-headset',
    },
    {
      id: 3,
      gambar:
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/2/5/5e9b4a3b-8d5a-4da7-af13-377065eba3b2.jpg',
      nama: 'Ducky One 3',
      harga: 1760000,
      kondisi: 'Rusak',
      link_pembelian:
        'https://www.tokopedia.com/megalloshop/ducky-one-3-daybreak-sf-rgb-gaming-keyboard-garansi-resmi-blue-switch',
    },
    {
      id: 4,
      gambar:
        'https://static-ecapac.acer.com/media/catalog/product/cache/bd4621b95a9782df56a4048f6a07bc46/n/i/nitro5-an515-46-rgbkb-black-gallery-02_nh.qh4sn.002_1.png',
      nama: 'Acer Nitro 5',
      harga: 13000000,
      kondisi: 'Sempurna',
      link_pembelian:
        'https://shopee.co.id/ACER-NITRO-5-2022-AN515-RYZEN-7-6800H-16GB-512SSD-RTX3050-4GB-W11-OHS-15.6FHD-144HZ-4ZRGB-BLACK-46.R8YC-i.78730497.3466239552',
    },
  ];
  formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  displayHarga(index: number) {
    return this.formatter.format(this.itemList[index].harga);
  }
  constructor() {}
}
