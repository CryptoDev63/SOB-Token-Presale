import GradientButton from "src/components/GradientButton"
import PageHeader from "./PageHeader"
import First from "@assets/images/first.png"
import zkSync from "@assets/images/zksync.png"
import Syncswap from "@assets/images/syncswap.png"

import Second1 from "@assets/images/second-1.png"
import Second2 from "@assets/images/second-2.png"
import Second3 from "@assets/images/second-3.png"
import Link from "next/link"

const SocialItems = [
    {
        item: zkSync,
        href: "/zkSync"
    },
    {
        item: Syncswap,
        href: "/syncswap"
    }
]

const Introduction = () => {
    
    return (
        <div className="w-1/2 flex flex-col justify-items-start px-12 z-10">
            <PageHeader pageTitle="$SOB TOKEN PRESALE" />
            <div className="w-[28rem] text-xl text-white font-normal ">
                The SOB Token is a gateway to the new SOB world. It integrates with all products, serving as a tool to accelerate processes. For more information, read the GitBook.
            </div>
            <GradientButton name="GITBOOK" />
            <div className="w-full flex mt-3 justify-between pr-28">
                {SocialItems.map((social, index) => {
                    return (
                        <Link href={social.href} key={`${social}_${index}`}>
                            <img className="w-[300px] cursor-pointer" src={social.item.src} alt={social.item} />
                        </Link>
                    )
                })}
            </div>
            {/* <img className="fixed bottom-0 left-0 w-[36rem]" src={First.src} alt="First" /> */}
            <div>   
                <img className="fixed bottom-0 left-0 w-[26rem]" src={Second1.src} alt="First" />
                <img className="fixed bottom-0 left-96 w-[26rem]" src={Second3.src} alt="First" />                
                <img className="fixed bottom-0 left-32 w-[33rem]" src={Second2.src} alt="First" />
            </div>
        </div>
    )
}

export default Introduction