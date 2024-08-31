import Image from "next/image";
import Link from "next/link";
import paratha from "@/public/kd/KD-Paratha.svg"
import largeParatha from "@/public/kd/KD-Lacha-Paratha.svg"
import friedEgg from "@/public/kd/KD-Fried-Egg.svg"
import omelette from "@/public/kd/KD-Omellete.svg"
import eggParatha from "@/public/kd/KD-Egg-Paratha.svg"
import omeletteParatha from "@/public/kd/KD-Omelette-Paratha.svg"
import chocolateParatha from "@/public/kd/KD-Chocolate-Paratha.svg"
import chocolateBread from "@/public/kd/KD-Chocolate-Bread.svg"

export default async function Page() {

    const dishes = [
        {
            name: 'Breakfast',
            items: [
                {
                    name: 'Paratha',
                    price: '75',
                    image: paratha,
                },
                {
                    name: 'Large Paratha',
                    price: '120',
                    image: largeParatha,
                },
                {
                    name: 'Fried Egg',
                    price: '65',
                    image: friedEgg,
                },
                {
                    name: 'Omelette',
                    price: '70',
                    image: omelette,
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
                    name: 'Chocolate Paratha',
                    price: '200',
                    image: chocolateParatha,
                },
                {
                    name: 'Chocolate Bread',
                    price: '150',
                    image: chocolateBread,
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col p-5 gap-5">
            {
                dishes.map(({ name, items }) => {
                    return (
                        <div className="flex flex-col gap-5">
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