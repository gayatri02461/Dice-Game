import Dice from "./Dice";
import { useState } from "react";

function Header() {
    const [selectedno, setselectedno] = useState(null);
    const arrno = [1, 2, 3, 4, 5, 6];
    const [totalScore, setTotalScore] = useState(0);

    const handleClick = (buttonIndex) => {
        setselectedno(buttonIndex);
    }
    return (
        <div>
            <div className="flex flex-row justify-between ">
                <div className="flex flex-col ">
                    <span className="text-[100px]">{totalScore}</span>
                    <span className="text-[24px]">Total Score</span>
                </div>
                <div className=" flex flex-col self-end justify-end items-end">
                    <div className="flex space-x-2 mb-4">
                        {
                            arrno.map((value, i) => (
                                <button onClick={() => handleClick(i)} key={i} className={`w-[50px] h-[50px] border border-black font-bold ${selectedno === i ? "bg-black text-white" : "bg-white text-black"}`}>{value}</button>
                            ))
                        }


                    </div>

                    <span className="text-[24px] font-bold">Select Number</span>
                </div>
            </div>

            <Dice setTotalScore={setTotalScore} selectedno={selectedno} />

        </div>
    )
}
export default Header;