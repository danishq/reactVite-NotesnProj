import React, { useState } from "react";

const FeedbackSystem = () => {
    const aspects = ["Readability", "Documentation", "Testing", "Design"];

    // Initialize state: each aspect has {up: 0, down: 0}
    const [feedback, setFeedback] = useState(
        aspects.map(() => ({ up: 0, down: 0 }))
    );

    const handleVote = (index, type) => {
        setFeedback((prev) =>
            prev.map((f, i) =>
                i === index ? { ...f, [type]: f[type] + 1 } : f
            )
        );
    };

    return (
        <div className="text-center">
            {aspects.map((aspect, index) => (
                <div
                    key={index}
                    className="flex wrap justify-content-center mt-30 gap-30"
                >
                    <div className="pa-10 w-screen m-auto card p-5 bg-amber-500">
                        <h2>{aspect}</h2>
                        <div>
                            <button
                                className="py-10 px-15 bg-green-600"
                                data-testid={`upvote-btn-${index}`}
                                onClick={() => handleVote(index, "up")}
                            >
                                👍 Upvote
                            </button>
                            <button
                                className="py-10 px-15 danger bg-amber-700"
                                data-testid={`downvote-btn-${index}`}
                                onClick={() => handleVote(index, "down")}
                            >
                                👎 Downvote
                            </button>
                        </div>
                        <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
                            Upvotes: <strong>{feedback[index].up}</strong>
                        </p>
                        <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
                            Downvotes: <strong>{feedback[index].down}</strong>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeedbackSystem

aspects = {
    0: {
        up: 0,
        down: 0
    },
    1: {
        up: 0,
        down: 0
    },
    2: {
        up: 0,
        down: 0
    },
    2: {
        up: 0,
        down: 0
    },
    3: {
        up: 0,
        down: 0
    },
    4: {
        up: 0,
        down: 0
    }
}


