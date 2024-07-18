import Fist from "@assets/images/first-preview.png"
import Second from "@assets/images/second-preview.png"
import Minus from "@assets/images/minus.png"
import Plus from "@assets/images/plus.png"
import GradientButton from "src/components/GradientButton"
import Progress from "src/components/Progress"

const Contribute = () => {
    return (
        <div className="w-full flex flex-col items-center z-10 lg:p-0 p-3">
            {/* <img className="lg:w-96 w-[20rem] pt-8" src={Fist.src} alt="Fist" /> */}
            <img className="lg:w-96 w-[20rem] pt-8" src={Second.src} alt="Second" />
            <div className="lg:w-96 w-[20rem] h-60 p-2 flex flex-col items-center text-white bg-[url('/images/buy_background.png')] lg:mb-0 mb-4">
                <div className="text-2xl">$SOB SALE</div>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="lg:w-80 w-72 flex text-white text-xs justify-end">
                        <label>15 $ETH</label>
                    </div>
                    <Progress value={70} />
                    <div className="lg:w-80 w-72 flex text-[#EA4FD7] text-xs justify-end">
                        <label className="cursor-pointer">ALL FUNDS GO TO LIQUIDITY</label>
                    </div>
                    <div className="flex">
                        <div className="w-12 h-12 flex items-center border border-solid border-[#EA4FD7] cursor-pointer"><img src={Minus.src} alt="Minus" /></div>
                        <input className="bg-transparent text-[20px] py-[3px] w-48 border-t border-b border-[#EA4FD7] border-solid text-center" value="0.001$ETH" />
                        <div className="w-12 h-12 flex items-center border border-solid border-[#EA4FD7] cursor-pointer"><img src={Plus.src} alt="Plus" /></div>
                    </div>
                    <div className="flex w-72 text-[#FF8DF9] text-xs justify-between">
                        <label>1 $SOB = 0.00000015 $ETH</label>
                        <label className="cursor-pointer">max</label>
                    </div>
                </div>
                <GradientButton name="Buy" />
            </div>
        </div>
    )
}

export default Contribute