function FirstPage({ setStartGame }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <img className="w-[500px]" src="./entry.png" alt="" />
            <div className="flex flex-col">
                <span className="text-[98px]">DICE GAME</span>
                <button onClick={() => setStartGame(true)} className="bg-black text-white self-end w-[220px] h-8
                ">Play Game</button>
            </div>

        </div>
    );
}
export default FirstPage;