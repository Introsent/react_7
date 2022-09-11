
const initialState = {messages: [
        {
            id: 1,
            title: 'Hello!',
            chatId: 1
        },
        {
            id: 2,
            title: 'Oi! How are you?',
            chatId: 2
        },
        {
            id: 3,
            title: 'Fine! What about u?',
            chatId: 1
        }
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}