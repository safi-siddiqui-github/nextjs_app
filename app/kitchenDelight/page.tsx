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

export default async function Page() {

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
    ];

    return (
        <div className="flex flex-col p-5 gap-5">

            <div className="px-5 py-2 flex flex-col text-center">
                <p className="">
                    <span className="font-semibold">Kitchen Delight</span> Rates are lower on our website, and higher on foodpanda, because foodpanda charges 30% commision on every order. Order us through <span className="font-semibold">Whatsapp</span>. Thankyou !
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