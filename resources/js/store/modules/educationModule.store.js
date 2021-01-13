import axios from 'axios'

export default {
    namespaced: true,
    actions: {
        // Create 
        async create({commit}, data){
            await axios.post('api/education', data)
        },

        // Update
        async update({commit}, {id,data}){
            await axios.patch(`api/education/${id}`, data)
        },

        // Delete
        async delete({commit}, id){
            await axios.delete(`api/education/${id}`)
        }
    }
}