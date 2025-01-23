import Swal from 'sweetalert2'
import { CheckCircle2 } from "lucide-react"
import { XCircle } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {

    const handleBuy = (id) => {
        const selectedPackage = pricingOptions.find((option) => option.id === id)

        if (selectedPackage) {
            Swal.fire({
                title: `Buy ${selectedPackage.title} Plan?`,
                text: `This plan costs ${selectedPackage.price}/Yearly. Are you sure you want to proceed?`,
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes, Buy!",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Contact Us",
                        text: "Please contact us via email!",
                        icon: "info"
                    })
                }
            })
        }
    }

    return (
        <section id="pricing">
            <div className="mt-20">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
                    Pricing
                </h2>
                <div className="flex flex-wrap">
                    {pricingOptions.map((option, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                            <div className="p-10 border border-neutral-700 rounded-xl hover:border-neutral-600 transition duration-200">
                                <p className="text-4xl mb-8">
                                    {option.title}
                                    {option.title === "Pro" && <span className="bg-gradient-to-r from-teal-500 to-cyan-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
                                </p>
                                <p className="mb-8">
                                    <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                    <span className="text-neutral-400 tracking-tight">/Yearly</span>
                                </p>
                                <ul>
                                    {option.features.map((feature, index) => (
                                        <li key={index} className="mt-8 flex items-center">
                                            <span className="text-green-700 opacity-90"><CheckCircle2 /></span>
                                            <span className="ml-2">{feature}</span>
                                        </li>
                                    ))}
                                    {option.nonFeatures.map((nonfeature, index) => (
                                        <li key={index} className="mt-8 flex items-center">
                                            <span className="text-red-700 opacity-90"><XCircle /></span>
                                            <span className="ml-2">{nonfeature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => handleBuy(option.id)} className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl border border-teal-900 hover:bg-teal-900 rounded-lg transition duration-200">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing