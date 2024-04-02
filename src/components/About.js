export default function About() {
    return (
        <div className="flex flex-col items-center pb-16 px-16 md:px-0">
            <div className="flex items-center flex-col gap-4">
                <div>
                    <h3 className="md:text-4xl text-2xl font-light text-primary">About</h3>
                </div>
                <div className="w-16 h-1 bg-primary"></div>
                <br />
                <p className="text-primary text-2xl md:w-1/2 w-full text-center">
                    We're a group of software engineers, CS majors and otherwis etech-enthusiastic 
                    individuals trying to establish a communit yof like-minded individuals navigating 
                    the turbulent post-pandemic tech market.
                </p>
            </div>
        </div>
    );
}