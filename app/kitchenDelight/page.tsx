import Image from "next/image";
import Link from "next/link";
import paratha from "@/public/kd/KD-Paratha.svg"

export default async function Page() {

    const bfDishes = [
        {
            name: 'Paratha',
            price: '75',
            image: paratha,
        }
    ];

    return (
        <div className="flex flex-col p-5">

            <div className="flex flex-col gap-5">

                <h2 className="text-4xl font-semibold">Breakfast</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        bfDishes.map(({ name, price, image }) => {
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
        </div >
    )
}