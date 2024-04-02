export default function Testimonial() {
    // Define an array of objects for the images with responsive heights
    const companyLogos = [
        { src: "/bb.svg", alt: "Company Logo", height: "h-6 md:h-16" },
        { src: "/flake.svg", alt: "Company Logo", height: "h-16 md:h-16" },
        { src: "/cb.svg", alt: "Company Logo", height: "h-16 md:h-16" },
        { src: "/tt.svg", alt: "Company Logo", height: "h-16 md:h-16" },
        { src: "/tesla.svg", alt: "Company Logo", height: "h-12 md:h-16" },
        { src: "/blox.svg", alt: "Company Logo", height: "h-16 md:h-16" },
        { src: "/msft.svg", alt: "Company Logo", height: "h-12 md:h-16" },
        { src: "/meta.svg", alt: "Company Logo", height: "h-12 md:h-16" },
        { src: "/google.svg", alt: "Company Logo", height: "h-12 md:h-16" },
        { src: "/dog.svg", alt: "Company Logo", height: "h-16 md:h-16" },
        { src: "/zon.svg", alt: "Company Logo", height: "h-12 md:h-16" },
        { src: "/pal.svg", alt: "Company Logo", height: "h-12 md:h-16" },
    ];

    return (
        <div className="flex flex-col items-center w-full p-4">
            <div className="flex items-center gap-4 flex-col">
                <div>
                    <h3 className="md:text-4xl text-2xl font-light text-primary uppercase">Members have gotten jobs at</h3>
                </div>
            </div>
            <div className="mt-16 w-full max-w-screen-lg px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
                    {companyLogos.map((logo, index) => (
                        <div key={index} className="h-16 md:h-20 flex items-center justify-center">
                            <img src={logo.src} alt={logo.alt} className={logo.height} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
