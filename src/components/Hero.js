import Link from 'next/link';

export default function Hero() {
    return (
        <div className="flex p-8 h-auto w-full relative md:p-24">
            <div className="flex-grow flex flex-col gap-12 z-10">
                <h1 className="text-6xl font-bold text-primary">
                    CS Country Club
                </h1>
                <h2 className="text-5xl font-light text-primary md:w-1/2 w-full">
                    An active discord community with members from top companies
                </h2>
                <Link href="/apply">
                    <button 
                    className="bg-[#1E7640] text-white py-2 px-8 rounded-lg w-48 border-2 border-[#1E7640] hover:bg-[#2B4F39] hover:border-[#2B4F39] transition-colors">
                        Join Us
                    </button>
                </Link>
                <p className="text-primary text-lg md:w-1/2 w-full">
                With a rapidly changing hiring landscape, it's more important than ever that we help each other succeed.
                </p>
            </div>
            <div className="absolute top-0 right-0 w-2/3 h-full z-0">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#C1DDCC]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C1DDCC]"></div>
                <img src="/cc.png" alt="Descriptive Alt Text" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
