import Image from "next/image";

// Une compétence d'une personne
function CarteLangage({ langage, illustration }) {
    return (
        <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 md:w-80 xl:w-[300px] 2xl:w-[400px] bg-background2 dark:bg-dark_background2">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="relative m-auto w-[64px] h-[64px] lg:w-[80px] lg:h-[80px]">
                    <Image src={illustration} className="" layout="fill" alt={langage + " logo"} />
                </div>
                <div className="flex flex-col justify-center items-center m-auto">
                    <h3 className=" font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">{langage}</h3>
                </div>
            </div>
        </div>
    );
}

export default CarteLangage;