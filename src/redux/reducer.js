const initialState = {
    ideas: [],
};

export default function (state = initialState, action) {
    switch(action.type) {

        case 'ADD_NAME':
            return {
                ...state,
                ideas: [...state.ideas, action.name],
            }

        case 'REMOVE_NAME':
            const ideasNew = state.ideas.filter((value, index, arr)=>{return index !== action.index});
            return {
                ...state,
                ideas: ideasNew,
            }
            
        default:
            return state;
    }
}