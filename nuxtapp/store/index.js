export const state = () => ({ 
    count: 3,
    car: {}
})

export const mutations = {
    increment(state) {
        state.count++;
    }
}