
import { Link } from "react-router-dom"
import heroImg from "../../../assets/img/header-banner-img.webp"


function AboutPage() {
    const bannerText = {
        heading: 'Creative Home Simpify your Furniture',
        paragrah: 'Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto',
        button: 'Show Now'
    }
    return (
        <>
            <div className="w-full min-h-[1000px] bg-red flex flex-col items-center pt-[12%]  relative overflow-hidden">
                <img src={heroImg} className="w-full absolute top-[0]  left-[0] z-[-1]" />
                <section className=" mx-auto text-center leading-[120%] grid gap-[1.5rem] text-white relative ">
                    <h1 className="heading-64 max-w-[888px]  ">{bannerText.heading}</h1>
                    <p className="font-20 leading-[150%] max-w-[627px] mx-auto text-center">{bannerText.paragrah}</p>
                    <Link to="/" className="bg-[#E2E2E2]/40 w-[257px] h-[62px] flex items-center mx-auto justify-center text-[1.25rem] font-semibold rounded-xl mt-[2rem] backdrop-blur-md border border-white/20 shadow-lg">{bannerText.button}</Link>
                </section>
                <ul>

                </ul>
            </div>
        </>
    )
}

export default AboutPage