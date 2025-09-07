import React, { useState } from "react";

const FeedbackSystem = () => {
    const [readup, setreadup] = useState(0);
    const [readdown, setreaddown] = useState(0);
    return (
        <div className="my-0 mx-auto text-center w-mx-1200">
            <div className="flex wrap justify-content-center mt-30 gap-30">
                <div className="pa-10 w-300 card">
                    <h2>Readability</h2>
                    <div className="flex my-30 mx-0 justify-content-around">
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
