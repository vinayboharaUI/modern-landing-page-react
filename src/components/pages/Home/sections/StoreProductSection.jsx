
import { ArrowRight } from "lucide-react"

function StoreProductSection() {
    return (
        <section className="pl-[5rem]">
            <div className="max-w-[245px]">
                <h3>New In Store Now</h3>
                <p>Get the latest items immediately with promo prices</p>
                <button className="flex items-center gap-2 font-bold text-[#23262F] border-b-2 border-[#23262F] w-fit pb-1 hover:gap-4 transition-all">
                    Check All <ArrowRight size={20} />
                </button>
            </div>
        </section>
    )
}

export default StoreProductSection