export const comments = [
    {
        id: 1,
        comment: "Great post!",
        subComments: [
            {
                id: 1,
                comment: "I agree!",
                subComments: []
            },
            {
                id: 2,
                comment: "Thanks for sharing!",
                subComments: [
                    {
                        id: 1,
                        comment: "You're welcome!",
                        subComments: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        comment: "Interesting discussion.",
        subComments: []
    },
    {
        id: 3,
        comment: "I have a question.",
        subComments: [
            {
                id: 1,
                comment: "What's your question?",
                subComments: [
                    {
                        id: 1,
                        comment: "Can you explain this part?",
                        subComments: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        comment: "This is helpful.",
        subComments: []
    },
    {
        id: 5,
        comment: "I disagree with this point.",
        subComments: [
            {
                id: 1,
                comment: "Why do you disagree?",
                subComments: []
            }
        ]
    }
];