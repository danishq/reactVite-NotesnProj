import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="bg-white bg-[url('https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Understand User Flow.
                        <strong className="font-extrabold text-red-700 sm:block">
                            Increase Conversion.
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl sm:leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
                        illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link
                            to="/get-started"
                            className="block px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/about"
                            className="flex items-center justify-center gap-2 px-12 py-3 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-50 focus:outline-none focus:ring sm:w-auto"
                        >
                            <span>Learn More</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
}

