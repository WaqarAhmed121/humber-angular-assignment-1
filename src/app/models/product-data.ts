import { RawProductData } from "./raw-product-data.interface";

export class ProductData {
    itemID: number;
    itemName: string;
    itemDescription: string;
    imagrUrl: string;

 /*   constructor(itemID: number,
        itemName: string,
        itemDescription: string,
        imagrUrl: string){
            this.itemID=itemID;
            this.itemName=itemName;
            this.itemDescription=itemDescription;
            this.imagrUrl=imagrUrl;
    }*/

    constructor (data:RawProductData){
        this.itemID=data.itemID;
        this.itemName=data.itemName;
        this.itemDescription=data.itemDescription;
        this.imagrUrl=data.imagrUrl;
    }
}
    const rawData: RawProductData[] = [
        {
        itemID: 0,
        itemName: 'Vegetables',
        itemDescription: 'These are vegetables',
        storageLocation: 'Bin number 3',
        inventoryLevel: 5,
        imagrUrl: '/assets/images/vegetables.jpg'
        },
        {
        itemID: 1,
        itemName: 'Fruits',
        itemDescription: 'These are fruits',
        storageLocation: 'Bin number 19',
        inventoryLevel: 5,
        imagrUrl: '/assets/images/vegetables.jpg'
        },
        {
        itemID: 2,
        itemName: 'Bread',
        itemDescription: 'This is bread',
        storageLocation: 'Bin number 5',
        inventoryLevel: 5,
        imagrUrl: '/assets/images/vegetables.jpg'
        },
        {
        itemID: 3,
        itemName: 'Milk',
        itemDescription: 'This is milk',
        storageLocation: 'Bin number 80',
        inventoryLevel: 5,
        imagrUrl: '/assets/images/vegetables.jpg'
        },
        {
        itemID: 4,
        itemName: 'Toothpaste',
        itemDescription: 'This is toothpaste',
        storageLocation: 'Bin number 32',
        inventoryLevel: 5,
        imagrUrl: '/assets/images/vegetables.jpg'
        },
        {
        itemID: 5,
        itemName: 'Soap - Bar',
        itemDescription: 'These are bars of soap',
        storageLocation: 'Bin number 90',
        inventoryLevel: 5,
        imagrUrl: '/assets/images/vegetables.jpg'
        }
        ]

        const product: ProductData[] = [];

        rawData.forEach(data=>{
          const newData = new ProductData(data);
          product.push(newData);
        })
        export {product};       
    
   