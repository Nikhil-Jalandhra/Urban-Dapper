import belt1 from "/Images/ProductImages/belt1.jpg"
import belt2 from "/Images/ProductImages/belt2.jpg"
import belt3 from "/Images/ProductImages/belt3.jpg"
import belt4 from "/Images/ProductImages/belt4.jpg"
import belt5 from "/Images/ProductImages/belt5.jpg"
import jacket1 from "/Images/ProductImages/jacket1.jpg"
import jacket2 from "/Images/ProductImages/jacket2.jpg"
import jacket3 from "/Images/ProductImages/jacket3.jpg"
import jacket4 from "/Images/ProductImages/jacket4.jpg"
import jacket5 from "/Images/ProductImages/jacket5.jpg"
import shoes1 from "/Images/ProductImages/shoes1.jpg"
import shoes2 from "/Images/ProductImages/shoes2.jpg"
import shoes3 from "/Images/ProductImages/shoes3.jpg"
import shoes4 from "/Images/ProductImages/shoes4.jpg"
import shoes5 from "/Images/ProductImages/shoes5.jpg"
import tshirt1 from "/Images/ProductImages/t-shirt1.jpg"
import tshirt2 from "/Images/ProductImages/t-shirt2.jpg"
import tshirt3 from "/Images/ProductImages/t-shirt3.jpg"
import tshirt4 from "/Images/ProductImages/t-shirt4.jpg"
import tshirt5 from "/Images/ProductImages/t-shirt5.jpg"
import wallet1 from "/Images/ProductImages/wallet1.jpg"
import wallet2 from "/Images/ProductImages/wallet2.jpg"
import wallet3 from "/Images/ProductImages/wallet3.jpg"
import wallet4 from "/Images/ProductImages/wallet4.jpg"
import wallet5 from "/Images/ProductImages/wallet5.jpg"


let product  = [
    {
        id: 1,
        title: "Comfort Fit T-shirt",
        description: "Embrace comfort and style with our premium Comfort Fit T-shirt. Crafted from high-quality cotton, this T-shirt is designed for all-day wear, providing a soft and breathable feel. Whether you're lounging at home or out and about, our classic design ensures you look and feel great. Available in various colors and sizes, it's the perfect addition to any wardrobe.",
        newPrice: 1499,
        oldPrice: 1899,
        category: "T-Shirts",
        image: tshirt1,
        inStock: 50
    },
    {
        id: 2,
        title: "Sports Jacket",
        description: "Stay warm and stylish with our Sports Jacket. Made from durable yet lightweight material, this jacket offers comfort and protection against the elements. Perfect for outdoor activities or casual wear.",
        newPrice: 2999,
        oldPrice: 3499,
        category: "Jackets",
        image: jacket1,
        inStock: 20
    },
    {
        id: 3,
        title: "RFID Blocking Wallet",
        description: "Protect your personal information with our RFID Blocking Wallet. Made from high-quality materials, this wallet features RFID protection to safeguard your cards from unauthorized scanning.",
        newPrice: 2199,
        oldPrice: 2499,
        category: "Wallets",
        image: wallet3,
        inStock: 30
    },
    {
        id: 4,
        title: "Classic Leather Belt",
        description: "Complete your outfit with our Classic Leather Belt. Made from premium leather, this belt offers durability and timeless style. Perfect for formal or casual wear, it's an essential accessory for every wardrobe.",
        newPrice: 1499,
        oldPrice: 1799,
        category: "Belts",
        image: belt1,
        inStock: 25
    },
    {
        id: 5,
        title: "Casual Shoes",
        description: "Step out in style with our Casual Shoes. Made from durable materials, these shoes offer comfort and versatility. Perfect for everyday wear or casual outings.",
        newPrice: 2499,
        oldPrice: 2999,
        category: "Shoes",
        image: shoes1,
        inStock: 40
    },
    {
        id: 6,
        title: "Striped Crew Neck T-shirt",
        description: "Add a touch of sophistication with our Striped Crew Neck T-shirt. Featuring classic stripes and a comfortable fit, this T-shirt is a wardrobe staple. Made from premium cotton, it's perfect for layering or wearing on its own.",
        newPrice: 1399,
        oldPrice: 1699,
        category: "T-Shirts",
        image: tshirt3,
        inStock: 35
    },
    {
        id: 7,
        title: "Slim Fit Graphic T-shirt",
        description: "Make a statement with our Slim Fit Graphic T-shirt, featuring bold graphics and a flattering slim fit. Crafted from soft cotton blend fabric, this T-shirt offers comfort and style in equal measure. Perfect for casual outings or layering under a jacket.",
        newPrice: 1299,
        oldPrice: 1599,
        category: "T-Shirts",
        image: tshirt2,
        inStock: 40
    },
    {
        id: 8,
        title: "Leather Jacket",
        description: "Make a statement with our Leather Jacket. Crafted from genuine leather, this jacket offers a sleek and timeless look. Perfect for adding a touch of sophistication to your wardrobe.",
        newPrice: 4999,
        oldPrice: 5999,
        category: "Jackets",
        image: jacket2,
        inStock: 15
    },
    {
        id: 9,
        title: "Canvas Sneakers",
        description: "Upgrade your casual look with our Canvas Sneakers. Featuring a classic design and lightweight construction, these sneakers are ideal for weekend adventures or relaxed outings.",
        newPrice: 1799,
        oldPrice: 2199,
        category: "Shoes",
        image: shoes2,
        inStock: 25
    },
    {
        id: 10,
        title: "Slim Fit Wallet",
        description: "Streamline your essentials with our Slim Fit Wallet. Crafted from premium materials, this wallet offers a sleek and compact design. Perfect for carrying in your pocket or bag.",
        newPrice: 1499,
        oldPrice: 1699,
        category: "Wallets",
        image: wallet2,
        inStock: 20
    },
    {
        id: 11,
        title: "Braided Leather Belt",
        description: "Add a touch of sophistication with our Braided Leather Belt. Made from genuine leather, this belt features a braided design for added style. Perfect for both formal and casual attire.",
        newPrice: 1699,
        oldPrice: 1999,
        category: "Belts",
        image: belt2,
        inStock: 30
    },
    {
        id: 12,
        title: "Graphic Print Hoodie",
        description: "Stay cozy and stylish with our Graphic Print Hoodie. Made from soft fleece fabric, this hoodie offers warmth and comfort. Featuring a bold graphic print, it adds a trendy flair to your casual wardrobe.",
        newPrice: 2199,
        oldPrice: 2599,
        category: "Jackets",
        image: jacket3,
        inStock: 20
    },
    {
        id: 13,
        title: "Crew Neck Sweatshirt",
        description: "Elevate your casual look with our Crew Neck Sweatshirt. Made from cotton blend fabric, this sweatshirt offers comfort and style. Perfect for layering on chilly days or lounging at home.",
        newPrice: 1299,
        oldPrice: 1499,
        category: "Jackets",
        image: jacket4,
        inStock: 25
    },
    {
        id: 14,
        title: "Oxford Dress Shoes",
        description: "Complete your formal attire with our Oxford Dress Shoes. Crafted from polished leather, these shoes offer a sophisticated look and superior comfort. Perfect for weddings, business meetings, or special occasions.",
        newPrice: 3499,
        oldPrice: 3999,
        category: "Shoes",
        image: shoes3,
        inStock: 15
    },
    {
        id: 15,
        title: "Leather Wallet",
        description: "Organize your essentials with our Leather Wallet. Crafted from genuine leather, this wallet combines style with functionality. Featuring multiple compartments for cards and cash, it's a must-have accessory.",
        newPrice: 1999,
        oldPrice: 2399,
        category: "Wallets",
        image: wallet1,
        inStock: 30
    },
    {
        id: 16,
        title: "Genuine Leather Belt",
        description: "Accentuate your outfit with our Genuine Leather Belt. Crafted from premium leather, this belt offers durability and classic style. Perfect for everyday wear or formal occasions.",
        newPrice: 1799,
        oldPrice: 2099,
        category: "Belts",
        image: belt3,
        inStock: 35
    },
    {
        id: 17,
        title: "Cotton Polo Shirt",
        description: "Achieve a timeless look with our Cotton Polo Shirt. Made from breathable cotton fabric, this polo offers comfort and style. Perfect for casual outings or golfing.",
        newPrice: 1699,
        oldPrice: 1999,
        category: "T-Shirts",
        image: tshirt4,
        inStock: 40
    },
    {
        id: 18,
        title: "Quilted Bomber Jacket",
        description: "Add a touch of sophistication with our Quilted Bomber Jacket. Made from lightweight material, this jacket features a quilted design for warmth and style. Perfect for layering in transitional weather.",
        newPrice: 2799,
        oldPrice: 3199,
        category: "Jackets",
        image: jacket5,
        inStock: 20
    },
    {
        id: 19,
        title: "Suede Loafers",
        description: "Step into comfort with our Suede Loafers. Crafted from soft suede, these loafers offer a luxurious feel and classic design. Perfect for casual Fridays or weekend outings.",
        newPrice: 2399,
        oldPrice: 2799,
        category: "Shoes",
        image: shoes4,
        inStock: 25
    },
    {
        id: 20,
        title: "Slim Bifold Wallet",
        description: "Streamline your essentials with our Slim Bifold Wallet. Made from premium leather, this wallet offers a sleek and compact design. Perfect for carrying in your pocket or bag.",
        newPrice: 1299,
        oldPrice: 1499,
        category: "Wallets",
        image: wallet4,
        inStock: 20
    },
    {
        id: 21,
        title: "Casual Canvas Belt",
        description: "Complete your casual look with our Casual Canvas Belt. Made from durable canvas material, this belt offers comfort and style. Perfect for everyday wear or outdoor adventures.",
        newPrice: 999,
        oldPrice: 1299,
        category: "Belts",
        image: belt4,
        inStock: 30
    },
    {
        id: 22,
        title: "Graphic Print T-shirt",
        description: "Express your individuality with our Graphic Print T-shirt. Featuring bold graphics and vibrant colors, this T-shirt is sure to make a statement. Made from soft cotton, it offers comfort and style.",
        newPrice: 1199,
        oldPrice: 1399,
        category: "T-Shirts",
        image: tshirt5,
        inStock: 35
    },
    {
        id: 23,
        title: "Premium Suede Belt",
        description: "Elevate your style with our Premium Suede Belt. Crafted from luxurious suede leather, this belt offers a sophisticated look and exceptional comfort. Whether paired with formal attire or adding flair to casual outfits, it's a versatile accessory you'll love.",
        newPrice: 2499,
        oldPrice: 2999,
        category: "Belts",
        image: belt5,
        inStock: 15
    },    
    {
        id: 24,
        title: "Leather Oxford Shoes",
        description: "Step up your footwear game with our Leather Oxford Shoes. Crafted from polished leather, these shoes offer a sophisticated look and all-day comfort. Perfect for formal occasions or business attire.",
        newPrice: 3299,
        oldPrice: 3799,
        category: "Shoes",
        image: shoes5,
        inStock: 20
    },
    {
        id: 25,
        title: "RFID Blocking Card Holder",
        description: "Protect your cards with our RFID Blocking Card Holder. Made from durable materials, this card holder features RFID protection to safeguard your information from unauthorized scanning.",
        newPrice: 999,
        oldPrice: 1299,
        category: "Wallets",
        image: wallet5,
        inStock: 25
    }
]


export default product