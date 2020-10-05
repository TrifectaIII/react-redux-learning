export const addName = name => {
    return {
        type: 'ADD_NAME',
        name: name,
    }
}

export const removeName = index => {
    return {
        type: 'REMOVE_NAME',
        index: index,
    }
}