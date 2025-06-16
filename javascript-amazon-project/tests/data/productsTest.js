import { Product, Clothing, Appliance } from '../../data/products.js';

describe('test suite: Product', () => {
    it('has correct properties and methods', () => {

        const product = new Product({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: [
                "socks",
                "sports",
                "apparel"
            ]
        });

        expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(product.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(product.getPrice()).toEqual("$10.90");
    })
});


describe('test suite: Clothing', () => {
    it('has correct properties and methods', () => {

        const clothing = new Clothing({
            id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
            image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
            name: "Plain Hooded Fleece Sweatshirt",
            rating: {
                stars: 4.5,
                count: 317
            },
            priceCents: 2400,
            keywords: [
                "hoodies",
                "sweaters",
                "apparel"
            ],
            type: "clothing",
            sizeChartLink: "images/clothing-size-chart.png"
        });

        expect(clothing.id).toEqual("dd82ca78-a18b-4e2a-9250-31e67412f98d");
        expect(clothing.name).toEqual("Plain Hooded Fleece Sweatshirt");
        expect(clothing.getPrice()).toEqual("$24.00");
    })
});

describe('test suite: Appliance', () => {
    it('has correct properties and methods', () => {

        const appliance = new Appliance({
            id: "54e0eccd-8f36-462b-b68a-8182611d9add",
            image: "images/products/black-2-slot-toaster.jpg",
            name: "2 Slot Toaster - Black",
            rating: {
                stars: 5,
                count: 2197
            },
            priceCents: 1899,
            keywords: [
                "toaster",
                "kitchen",
                "appliances"
            ],
            type: "appliance",
            instructionsLink: "images/appliance-instructions.png",
            warrantyLink: "images/appliance-warranty.png"
        });

        expect(appliance.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
        expect(appliance.name).toEqual("2 Slot Toaster - Black");
        expect(appliance.getPrice()).toEqual("$18.99");
    })
});
