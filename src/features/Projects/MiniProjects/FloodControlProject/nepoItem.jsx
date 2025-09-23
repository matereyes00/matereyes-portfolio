import formatCurrency from "../../../../utils/CurrencyFormatter";

const NepoItem = ({ item, onBuy }) => {
    const { name, price, image, description } = item;
    return(
        <>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105">
                <img src={image} alt={name} className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-yellow-300 flex-grow">{name}</h3>
                    <p className="text-sm text-white mt-8">{description}</p>
                    <p className="text-xl font-bold text-white mt-10">{formatCurrency(price)}</p>
                </div>
                <button
                    onClick={() => onBuy(item)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 transition mt-2"
                >
                    Add to Cart
                </button>
            </div>
        </>
    )

}

export default NepoItem;