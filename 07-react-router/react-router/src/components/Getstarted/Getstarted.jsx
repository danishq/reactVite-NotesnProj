function Getstarted() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    You might be wondering...
                </h2>
            </div>

            <div className="max-w-2xl mx-auto divide-y divide-red-200 dark:divide-neutral-700">
                {[
                    {
                        question: "Can I cancel at anytime?",
                        answer: "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."
                    },
                    {
                        question: "My team has credits. How do we use them?",
                        answer: "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details."
                    },
                    {
                        question: "How does Preline's pricing work?",
                        answer: "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key."
                    },
                    {
                        question: "How secure is Preline?",
                        answer: "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion."
                    },
                    {
                        question: "How do I get access to a theme I purchased?",
                        answer: "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with."
                    },
                    {
                        question: "Upgrade License Type",
                        answer: "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase."
                    }
                ].map((item, index) => (
                    <div key={index} className="py-8 first:pt-0 last:pb-0">
                        <div className="flex gap-x-5">
                            <svg
                                className="shrink-0 mt-1 size-6 text-red-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>

                            <div className="grow">
                                <h3 className="md:text-lg font-semibold text-red-800 dark:text-neutral-200">
                                    {item.question}
                                </h3>
                                <p className="mt-1 text-red-500 dark:text-neutral-500">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Getstarted

