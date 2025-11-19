"use client";

import React from "react";

const testimonials = [
    {
        quote:
            "ITSASOO transformed our finance workflow—making complex processes simple and efficient.",
        client: "Arjun Patel",
        company: "CPA Firm",
        photo:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
        stars: 5,
    },
    {
        quote:
            "Thanks to ITSASOO’s expertise, our e-commerce platform’s accounting and reporting are flawless.",
        client: "Sophie Clarke",
        company: "E-commerce Business",
        photo:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
        stars: 5,
    },
    {
        quote:
            "ITSASOO’s IT solutions accelerated our startup’s cloud migration and boosted system stability.",
        client: "Rohan Singh",
        company: "Tech Startup",
        photo:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
        stars: 5,
    },
];


const StarIcon = ({ filled }) => (
    <svg
        className={`w-5 h-5 ${filled ? "text-[#FDB241]" : "text-gray-200"}`}
        xmlns="http://www.w3.org/2000/svg"
        fill={filled ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z"
        />
    </svg>
);

const ContinuousTestimonialsSlider = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-600 font-pj">
                            2,157 people have said how good ITSASOO Solutions is
                        </p>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                            Our happy clients say about us
                        </h2>
                    </div>

                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div
                                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                                }}
                            ></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            {testimonials.map(({ stars, quote, photo, client, company }, idx) => (
                                <div className="flex flex-col overflow-hidden shadow-xl" key={idx}>
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5).keys()].map((i) => (
                                                    <StarIcon key={i} filled={i < stars} />
                                                ))}
                                            </div>

                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-gray-900 font-pj">“{quote}”</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <img
                                                className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                                                src={photo}
                                                alt={`${client} avatar`}
                                            />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-gray-900 font-pj">{client}</p>
                                                <p className="mt-0.5 text-sm font-pj text-gray-600">{company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContinuousTestimonialsSlider;
