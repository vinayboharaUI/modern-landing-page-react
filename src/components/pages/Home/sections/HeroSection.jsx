import { Link } from "react-router-dom"
import heroImg from "../../../../assets/img/header-banner-img.webp"

function HeroSection(){
    const bannerText = {
        heading : 'Creative Home Simpify your Furniture',
        paragrah : 'Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto',
        button :'Show Now'
    }
    const stats = [
        { value: "7", label: "Year Experience" },
        { value: "2", label: "Opened in the country" },
        { value: "10k+", label: "Furniture sold" },
        { value: "260+", label: "Variant Furniture" },
    ];

    // c

    return (
        <div className="w-full min-h-[900px] flex flex-col items-center justify-center relative bg-[#1a1a1a] pt-20 pb-40">
            {/* Background Image Setup */}
            <img src={heroImg} 
                className="w-full h-full absolute top-0 left-0 z-0 object-cover opacity-80" 
                alt="Banner"
            />
            {/* hero banner fade bg */}
            <div 
            className="absolute bottom-[-2px] w-full h-[229px] z-[19]"
            style={{ background: 'linear-gradient(0deg, rgba(252, 252, 252, 1) 0%, rgba(255, 255, 255, 0) 30%)' }}
            />

            {/* Hero Content Section */}
            <section className="mx-auto text-center z-10 px-6 flex flex-col items-center gap-6">
                <h1 className="text-white font-bold leading-tight max-w-[900px] text-4xl md:text-6xl lg:text-[4rem]">
                    {bannerText.heading}
                </h1>
                
                <p className="text-gray-200 max-w-[650px] mx-auto text-base md:text-xl">
                    {bannerText.paragrah}
                </p>

                <Link 
                    to="/" 
                    className="bg-[#E2E2E2]/30 backdrop-blur-md border border-white/20 text-white w-[220px] md:w-[257px] h-[55px] md:h-[62px] flex items-center justify-center text-lg md:text-[1.25rem] font-semibold rounded-xl mt-4 shadow-lg hover:bg-white/20 transition-all"
                >
                    {bannerText.button}
                </Link>
            </section>

            {/* Stats Bar Overlap Logic */}
            <div className="z-20 max-w-7xl w-full px-5 absolute bottom-[-100px]">
                <div className="bg-[#2D5356] rounded-[24px] p-[38px]  shadow-2xl border border-white/10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
                        {stats.map((stat, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col items-center  text-center text-white px-4 ${index !== 0 ? 'lg:border-l lg:border-white/20' : ''}`}
                            >
                                <h2 className=" heading-40">{stat.value}</h2>
                                <p className=" paragraph-20">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection