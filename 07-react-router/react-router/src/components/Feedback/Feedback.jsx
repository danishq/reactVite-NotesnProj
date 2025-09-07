import React, { useState } from "react";

const FeedbackSystem = () => {
    const [readup, setreadup] = useState(0);
    const [readdown, setreaddown] = useState(0);
    return (
        <div className="text-center">
            <div className="flex wrap justify-content-center gap-30">
                <div className="pa-10 w-screen m-auto card p-5 bg-amber-500">
                    <h2>Readability</h2>
                    <div className="">
                        <button className="py-10 px-15 bg-green-600" data-testid="upvote-btn-0" onClick={() => setreadup(readup + 1)}>
                            👍 Upvote
                        </button>
                        <button className="py-10 px-15 danger bg-amber-700" data-testid="downvote-btn-0" onClick={() => setreaddown(readdown + 1)}>
                            👎 Downvote
                        </button>
                    </div>
                    <p className="my-10 mx-0" data-testid="upvote-count-0">
                        Upvotes: <strong>{readup}</strong>
                    </p>
                    <p className="my-10 mx-0" data-testid="downvote-count-0">
                        Downvotes: <strong>{readdown}</strong>
                    </p>
                </div>
            </div>
            <div className="flex wrap justify-content-center mt-30 gap-30">
                <div className="pa-10 w-screen m-auto card p-5 bg-amber-500">
                    <h2>Documentation</h2>
                    <div className="">
                        <button className="py-10 px-15 bg-green-600" data-testid="upvote-btn-0" onClick={() => setreadup(readup + 1)}>
                            👍 Upvote
                        </button>
                        <button className="py-10 px-15 danger bg-amber-700" data-testid="downvote-btn-0" onClick={() => setreaddown(readdown + 1)}>
                            👎 Downvote
                        </button>
                    </div>
                    <p className="my-10 mx-0" data-testid="upvote-count-0">
                        Upvotes: <strong>{readup}</strong>
                    </p>
                    <p className="my-10 mx-0" data-testid="downvote-count-0">
                        Downvotes: <strong>{readdown}</strong>
                    </p>
                </div>
            </div>
            <div className="flex wrap justify-content-center mt-30 gap-30">
                <div className="pa-10 w-screen m-auto card p-5 bg-amber-500">
                    <h2>Testing</h2>
                    <div className="">
                        <button className="py-10 px-15 bg-green-600" data-testid="upvote-btn-0" onClick={() => setreadup(readup + 1)}>
                            👍 Upvote
                        </button>
                        <button className="py-10 px-15 danger bg-amber-700" data-testid="downvote-btn-0" onClick={() => setreaddown(readdown + 1)}>
                            👎 Downvote
                        </button>
                    </div>
                    <p className="my-10 mx-0" data-testid="upvote-count-0">
                        Upvotes: <strong>{readup}</strong>
                    </p>
                    <p className="my-10 mx-0" data-testid="downvote-count-0">
                        Downvotes: <strong>{readdown}</strong>
                    </p>
                </div>
            </div>
            <div className="flex wrap justify-content-center mt-30 gap-30">
                <div className="pa-10 w-screen m-auto card p-5 bg-amber-500">
                    <h2>Design</h2>
                    <div className="">
                        <button className="py-10 px-15 bg-green-600" data-testid="upvote-btn-0" onClick={() => setreadup(readup + 1)}>
                            👍 Upvote
                        </button>
                        <button className="py-10 px-15 danger bg-amber-700" data-testid="downvote-btn-0" onClick={() => setreaddown(readdown + 1)}>
                            👎 Downvote
                        </button>
                    </div>
                    <p className="my-10 mx-0" data-testid="upvote-count-0">
                        Upvotes: <strong>{readup}</strong>
                    </p>
                    <p className="my-10 mx-0" data-testid="downvote-count-0">
                        Downvotes: <strong>{readdown}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSystem;

