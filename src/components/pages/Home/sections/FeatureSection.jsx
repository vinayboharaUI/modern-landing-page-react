import featureImg from '../../../../assets/img/feature-img.jpg';
import { CheckCircle2 } from 'lucide-react';




function FeatureSection() {
    const features = [
        {
            title: 'Valuation Services',
            desc: 'Sometimes features require a short description.  This can be detailed description',
        },
        {
            title: 'Development of Furniture Models',
            desc: 'Sometimes features require a short description. This can be detailed description',
        },

    ]
    return (
        <div className='max-w-7xl px-5 mx-auto mt-[180px]'>
            <ul className='mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20'>
                {/* Left Side: Image Container */}
                <li className='relative max-w-[554px] rounded-[6px] overflow-hidden shadow-xl'>
                    <img className='w-full h-auto object-cover' src={featureImg} alt='feature image' />
                </li>
                {/* Right Side: Content */}
                <li>
                    <h3 className='heading-40'>We Create your home more aestetic</h3>
                    <p className='font-20'>Furnitre power is a software as services for multiperpose business management system, </p>
                    {/* Features List */}
                    <ul className='flex flex-col gap-4 mt-8'>
                        {features.map((item, index) => (
                            <li key={index} className='flex gap-4 items-start'>
                                <span className="bg-[#23262F] p-1 rounded-full text-white mt-1">
                                    <CheckCircle2 size={20} />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[#23262F] font-20 font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className=" font-16">
                                        {item.desc}
                                    </p>
                                </div>

                            </li>
                        ))

                        }
                    </ul>

                </li>
            </ul>


        </div>
    )
}

export default FeatureSection