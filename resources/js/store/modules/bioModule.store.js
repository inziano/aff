import axios from 'axios'

export default {
    namespaced: true,
    actions: {
        // Create 
        async create({commit}, data){
            await axios.post('api/bios', data)
        },

        // Update
        async update({commit}, {id,data}){
            await axios.patch(`api/bios/${id}`, data)
        },

        // Delete
        async delete({commit}, id){
            await axios.delete(`api/bios/${id}`)
        }
    }
}