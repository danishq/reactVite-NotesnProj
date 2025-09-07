//import React, { useState } from "react";
//
//const FeedbackSystem = () => {
//    // Define feedback categories with individual state
//    const feedbackCategories = [
//        { id: 0, name: "Readability" },
//        { id: 1, name: "Documentation" },
//        { id: 2, name: "Testing" },
//        { id: 3, name: "Design" }
//    ];
//
//    // Initialize state for each category
//    const [feedback, setFeedback] = useState(
//        feedbackCategories.reduce((acc, category) => {
//            acc[category.id] = { upvotes: 0, downvotes: 0 };
//            return acc;
//        }, {})
//    );
//
//    // Handler for updating votes
//    const handleVote = (id, type) => {
//        setFeedback(prev => ({
//            ...prev,
//            [id]: {
//                ...prev[id],
//                [type]: prev[id][type] + 1
//            }
//        }));
//    };
//
//    return (
//        <div className="text-center">
//            <div className="flex wrap justify-content-center gap-30">
//                {feedbackCategories.map(category => (
//                    <div key={category.id} className="pa-10 w-screen m-auto card p-5 bg-amber-500">
//                        <h2>{category.name}</h2>
//                        <div className="">
//                            <button
//                                className="py-10 px-15 bg-green-600"
//                                data-testid={`upvote-btn-${category.id}`}
//                                onClick={() => handleVote(category.id, 'upvotes')}
//                            >
//                                👍 Upvote
//                            </button>
//                            <button
//                                className="py-10 px-15 danger bg-amber-700"
//                                data-testid={`downvote-btn-${category.id}`}
//                                onClick={() => handleVote(category.id, 'downvotes')}
//                            >
//                                👎 Downvote
//                            </button>
//                        </div>
//                        <p className="my-10 mx-0" data-testid={`upvote-count-${category.id}`}>
//                            Upvotes: <strong>{feedback[category.id].upvotes}</strong>
//                        </p>
//                        <p className="my-10 mx-0" data-testid={`downvote-count-${category.id}`}>
//                            Downvotes: <strong>{feedback[category.id].downvotes}</strong>
//                        </p>
//                    </div>
//                ))}
//            </div>
//        </div>
//    );
//};

//import React, { useState } from "react";
//
//const FeedbackSystem = () => {
//    const aspects = ["Readability", "Documentation", "Testing", "Design"];
//
//    // Initialize state: each aspect has {up: 0, down: 0}
//    const [feedback, setFeedback] = useState(
//        aspects.map(() => ({ up: 0, down: 0 }))
//    );
//
//    const handleVote = (index, type) => {
//        setFeedback((prev) =>
//            prev.map((f, i) =>
//                i === index ? { ...f, [type]: f[type] + 1 } : f
//            )
//        );
//    };
//
//    return (
//        <div className="text-center">
//            {aspects.map((aspect, index) => (
//                <div
//                    key={index}
//                    className="flex wrap justify-content-center mt-30 gap-30"
//                >
//                    <div className="pa-10 w-screen m-auto card p-5 bg-amber-500">
//                        <h2>{aspect}</h2>
//                        <div>
//                            <button
//                                className="py-10 px-15 bg-green-600"
//                                data-testid={`upvote-btn-${index}`}
//                                onClick={() => handleVote(index, "up")}
//                            >
//                                👍 Upvote
//                            </button>
//                            <button
//                                className="py-10 px-15 danger bg-amber-700"
//                                data-testid={`downvote-btn-${index}`}
//                                onClick={() => handleVote(index, "down")}
//                            >
//                                👎 Downvote
//                            </button>
//                        </div>
//                        <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
//                            Upvotes: <strong>{feedback[index].up}</strong>
//                        </p>
//                        <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
//                            Downvotes: <strong>{feedback[index].down}</strong>
//                        </p>
//                    </div>
//                </div>
//            ))}
//        </div>
//    );
//};

const aspects = ["Readibility", "Documentation", "Testing", "Design"]

const [feedback, setFeedback] = useState(
    aspects.map(() => ({ up: 0, down: 0 }))
)



export default FeedbackSystem;
