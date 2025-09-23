import React, { useState, useEffect } from "react";
import { nepoBabyItems, taxPayerItems  } from "../../../../db/floodControlItems"; // Import the items from the new file
import Receipt from "./nepoReceipt";
import NepoItem from "./nepoItem";
import NepoAnalysis from "./nepoAnalysis";

const FloodControlBase = () => {

    const totalBudget = 1089000000000; // 1.089 Trillion
    const [spentAmount, setSpentAmount] = useState(0);
    const [cart, setCart] = useState({});
    const remainingBudget = totalBudget - spentAmount;
    const percentageSpent = totalBudget > 0 ? (spentAmount / totalBudget) * 100 : 0;
    const totalSpentInCart = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

    // --- Logic for the Equivalency Ticker ---
    const [equivalencyMessage, setEquivalencyMessage] = useState("");
    const equivalencyMilestones = [
        { threshold: 4000000, message: (spent) => `That's enough to cover the lifetime earnings of ${Math.floor(spent / 4000000)} average Filipinos.` },
        { threshold: 2500000, message: (spent) => `That's enough to build ${Math.floor(spent / 2500000)} new public classrooms.` },
        { threshold: 1750250, message: (spent) => `That's enough to build ${Math.floor(spent / 1750250)} new Barangay Health Stations.` },
    ].sort((a, b) => b.threshold - a.threshold); // Sort descending to check largest first
    useEffect(() => {
        const currentMilestone = equivalencyMilestones.find(
            (milestone) => spentAmount >= milestone.threshold
        );
        if (currentMilestone) {
            setEquivalencyMessage(currentMilestone.message(spentAmount));
        } else {
            setEquivalencyMessage("");
        }
    }, [spentAmount, equivalencyMilestones]);

    // toggle between nepo baby
    const [isNepoBaby, isTaxPayer] = useState(false);
    const handleToggle = () => {
        isTaxPayer((prev) => !prev);
    };

    const handleBuyItem = (item) => {
        if (remainingBudget >= item.price) {
            setSpentAmount(prevSpent => prevSpent + item.price);
            setCart(prevCart => {
                const existingItem = prevCart[item.name];
                return {
                    ...prevCart,
                    [item.name]: {
                        ...item,
                        quantity: (existingItem ? existingItem.quantity : 0) + 1,
                    },
                };
            });
        } else {
            alert("You don't have enough money left to buy this!");
        }
    };

    const handleReset = () => {
        setSpentAmount(0);
        setCart({});
    };

	const nepoItems = nepoBabyItems.map((item, idx) => (
		<NepoItem
			key={idx}
            item={item}
            onBuy={handleBuyItem}
		/>
	));

    const taxItems = taxPayerItems.map((item, idx) => (
        <NepoItem
			key={idx}
            item={item}
            onBuy={handleBuyItem}
		/>
    ))

    return(
        <>
            <div className="bg-gray-700 min-h-screen text-white font-sans p-4 sm:p-8">
                {/* Header Section */}
                <header className="text-center mb-8 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold text-yellow-300">Hanggang saan aabot ang ₱1.089 Trillion pesos mo?</h1>
                    {/* What Can ₱1.089 Trillion Buy? */}
                    <p className="text-lg text-gray-400 mt-2">
                        This is the estimated amount of taxpayer money linked to recent flood control project scandals. Add items to your cart to see how much was allegedly spent.
                    </p>
                </header>
                {/* Main Content Grid */}
                <div className="m-3 flex content-start">
                     <button
                        onClick={handleToggle}
                        className={`px-4 py-2 rounded-lg font-semibold transition 
                            ${isNepoBaby ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
                        >
                        {isNepoBaby ? "Tax Payer" : "Nepo Baby"}
                    </button>

                </div>
               
                <div className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* LEFT */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {isNepoBaby ? taxItems : nepoItems }
                    </div>
                    {/* RIGHT */}
                    <div className="lg:col-span-1 flex flex-col gap-8">
                        {/* Analysis Panel */}
                        <NepoAnalysis 
                            spentAmount={spentAmount}
                            remainingBudget={remainingBudget}
                            percentageSpent={percentageSpent}
                            equivalencyMessage={equivalencyMessage}
                        />
                        {/* Receipt Panel */}
                        <Receipt
                            cart={cart}
                            totalSpentInCart={totalSpentInCart}
                            handleReset={handleReset}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FloodControlBase;
