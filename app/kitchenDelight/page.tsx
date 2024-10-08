import Image from "next/image";
import Link from "next/link";
import paratha from "@/public/kd/KD-Paratha.svg"
import largeParatha from "@/public/kd/KD-Lacha-Paratha.svg"
import friedEgg from "@/public/kd/KD-Fried-Egg.svg"
import omelette from "@/public/kd/KD-Omellete.svg"
import eggParatha from "@/public/kd/KD-Egg-Paratha.svg"
import omeletteParatha from "@/public/kd/KD-Omelette-Paratha.svg"
import chocolateBread from "@/public/kd/KD-Chocolate-Bread.svg"
import chocolateParatha from "@/public/kd/KD-Chocolate-Paratha.svg"
import largeChocolateParatha from "@/public/kd/KD-Large-Chocolate-Paratha.svg"
import frenchFries from "@/public/kd/KD-French-Fires.svg"
import chickenNuggets from "@/public/kd/KD-Chicken-Nuggets.svg"
import chickenNuggetsWithColdDrink from "@/public/kd/KD-Nuggets-Colddrink.svg"
import garlicBread from "@/public/kd/KD-Garlic-Bread.svg"
import garlicBreadWithColdDrink from "@/public/kd/KD-Garlic-Bread-Colddrink.svg"
import youngsCollection from "@/public/kd/Youngs-Collection.svg"
import chickenMacaroni from "@/public/kd/KD-Macaroni.svg"
import cheeseMacaroni from "@/public/kd/KD-Cheese-Macaroni.svg"
import chickenPasta from "@/public/kd/KD-Chicken-Pasta.svg"
import cheesePasta from "@/public/kd/KD-Cheesy-Pasta.svg"
import chickenShamiKebab from "@/public/kd/KD-Chicken-Shami-Kebab.svg"
import chickenSeekhKebab from "@/public/kd/KD-Chicken-Seekh-Kebab.svg"
import chickenChapliKebab from "@/public/kd/KD-Chicken-Chapli-Kebab.svg"
import chickenGolaKebab from "@/public/kd/KD-Chicken-Gola-Kebab.svg"
import chickenShamiKebabRoll from "@/public/kd/KD-Chicken-Shami-Kebab-Roll.svg"
import chickenSeekhKebabRoll from "@/public/kd/KD-Chicken-Seekh-Kebab-Roll.svg"
import chickenChapliKebabRoll from "@/public/kd/KD-Chicken-Chapli-Kebab-Roll.svg"
import chickenGolaKebabRoll from "@/public/kd/KD-Chicken-Gola-Kebab-Roll.svg"
import colaNext from "@/public/kd/KD-Cola-Next.svg"
import fizupNext from "@/public/kd/KD-Fizup-Next.svg"
import { allUsers } from "@/model/sql/user";

export default async function Page() {

    // const users = await allUsers();
    // console.log(users);

    const dishes = [
        {
            name: 'Breakfast',
            items: [
                {
                    name: 'Fried Egg',
                    price: '60',
                    image: friedEgg,
                },
                {
                    name: 'Omelette',
                    price: '70',
                    image: omelette,
                },
                {
                    name: 'Paratha',
                    price: '70',
                    image: paratha,
                },
                {
                    name: 'Large Paratha',
                    price: '110',
                    image: largeParatha,
                },
                {
                    name: 'Egg Paratha',
                    price: '130',
                    image: eggParatha,
                },
                {
                    name: 'Omelette Paratha',
                    price: '140',
                    image: omeletteParatha,
                },
                {
                    name: 'Chocolate Bread',
                    price: '75',
                    image: chocolateBread,
                },
                {
                    name: 'Chocolate Paratha',
                    price: '130',
                    image: chocolateParatha,
                },
                {
                    name: 'Large Chocolate Paratha',
                    price: '170',
                    image: largeChocolateParatha,
                },
            ],
        },
        {
            name: 'Fast Food',
            items: [
                {
                    name: 'French Fries',
                    price: '100',
                    image: frenchFries,
                },
                {
                    name: 'Crispy Nuggets',
                    price: '50',
                    image: chickenNuggets,
                },
                {
                    name: 'Crispy Nuggets & Cold Drink',
                    price: '130',
                    image: chickenNuggetsWithColdDrink,
                },
                {
                    name: 'Garlic Bread',
                    price: '70',
                    image: garlicBread,
                },
                {
                    name: 'Garlic Bread & Cold Drink',
                    price: '150',
                    image: garlicBreadWithColdDrink,
                },
                {
                    name: 'Youngs Sauces',
                    price: '65',
                    image: youngsCollection,
                },
            ],
        },
        {
            name: 'Italian',
            items: [
                {
                    name: 'Chicken Macaroni',
                    price: '200',
                    image: chickenMacaroni,
                },
                {
                    name: 'Chicken Cheese Macaroni',
                    price: '250',
                    image: cheeseMacaroni,
                },
                {
                    name: 'Chicken Pasta',
                    price: '200',
                    image: chickenPasta,
                },
                {
                    name: 'Chicken Cheese Pasta',
                    price: '250',
                    image: cheesePasta,
                },
            ],
        },
        {
            name: 'Chicken Kebabs & Rolls',
            items: [
                {
                    name: 'Shami Kebab',
                    price: '100',
                    image: chickenShamiKebab,
                },
                {
                    name: 'Seekh Kebab',
                    price: '110',
                    image: chickenSeekhKebab,
                },
                {
                    name: 'Chapli Kebab',
                    price: '160',
                    image: chickenChapliKebab,
                },
                {
                    name: 'Gola Kebab',
                    price: '90',
                    image: chickenGolaKebab,
                },
                {
                    name: 'Shami Kebab Roll',
                    price: '160',
                    image: chickenShamiKebabRoll,
                },
                {
                    name: 'Seekh Kebab Roll',
                    price: '160',
                    image: chickenSeekhKebabRoll,
                },
                {
                    name: 'Chapli Kebab Roll',
                    price: '210',
                    image: chickenChapliKebabRoll,
                },
                {
                    name: 'Gola Kebab Roll',
                    price: '130',
                    image: chickenGolaKebabRoll,
                },
            ],
        },
        {
            name: 'Cold Drinks',
            items: [
                {
                    name: 'Cola Next 345 ml',
                    price: '100',
                    image: colaNext,
                },
                {
                    name: 'Fizup Next 345 ml',
                    price: '100',
                    image: fizupNext,
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col p-5 gap-5">

            <div className="px-5 py-2 flex flex-col text-center">
                <p className="">
                    <span className="font-semibold">Kitchen Delight</span> Rates are lower on our website, and higher on foodpanda, because foodpanda charges 30% commision on every order. Order us through <span className="font-semibold">Whatsapp</span>. Thankyou !
                </p>
                <p className="">
                    Delivery Charges depends upon your Area.
                </p>
            </div>

            {
                dishes.map(({ name, items }) => {
                    return (
                        <div key={name} className="flex flex-col gap-5">
                            <h2 className="text-4xl font-semibold">{name}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {
                                    items.map(({ name, price, image }) => {
                                        return (
                                            <div key={name} className="flex flex-col">
                                                <Image priority={true} className="w-full rounded" src={image} alt={name} width={100} height={300} />
                                                <div className="flex flex-col">
                                                    <div className="flex justify-between py-1">
                                                        <p className="text-xl">{name}</p>
                                                        <p className="text-xl">{price} rs</p>
                                                    </div>
                                                    <button className="bg-black text-white p-1 rounded">KD - Buy Now</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}