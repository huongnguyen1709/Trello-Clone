const initialState = [
    {
        title: 'Last Episode',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'We created a static list and a static card'
            },
            {
                id: 1,
                text: 'We used a mix between material UI React and styled component'
            }
        ]
    },

    {
        title: 'This Episode',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'We will create our first reducer'
            },
            {
                id: 1,
                text: 'and render many cards on our list with static data'
            },
            {
                id: 2,
                text: 'We will also make some little changes I forgot in the last episode (link tags for roboto font and icons, ...)'
            }
        ]
    },

    {
        title: 'This Episode',
        id: 2,
        cards: [
            {
                id: 0,
                text: 'We will create our first reducer'
            },
            {
                id: 1,
                text: 'and render many cards on our list with static data'
            },
            {
                id: 2,
                text: 'We will also make some little changes I forgot in the last episode (link tags for roboto font and icons, ...)'
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default listsReducer