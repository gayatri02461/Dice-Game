import { useState } from "react";
import Rules from "./Rules";

function Dice({ selectedno, setTotalScore }) {
    const [image, setimage] = useState("/1.png");
    const [ruleList, setRuleList] = useState(false);
    let diceimg = ["./1.png", "./2.png", "./3.png", "./4.png", "./5.png", "./6.png"]
    let score = 0;

    function randomDice() {
        if (selectedno == null) {
            alert("Choose a no. first")
        }
        else {
            const randomIndex = Math.floor(Math.random() * 6);
            setimage(diceimg[randomIndex]);

            if (selectedno === randomIndex) {
                setTotalScore(prevScore => prevScore + (randomIndex + 1));
            }
            else {
                setTotalScore(prevScore => prevScore - (randomIndex + 1));
            }
        }
    }
    function showRules() {
        if (ruleList == false) {
            setRuleList(true);
        }
        else {
            setRuleList(false);
        }
    }
    return (
        <div className="flex flex-col space-y-3 justify-center items-center mt-24 space-y-4">
            <button onClick={randomDice}>
                <img className="w-[200px] h-[200px]" src={image} alt="/1.png" />
            </button>

            <span className="text-[22px]">Click on dice to roll</span>
            <button onClick={() => setTotalScore(0)} className="w-[220px] border border-black rounded-md font-bold">Reset Scores</button>
            <button onClick={showRules}
                className="w-[220px] border border-black rounded-md font-bold">Show rules</button>
            {ruleList == true ? <Rules></Rules> : <div> </div>}
        </div>
    )
}
export default Dice;