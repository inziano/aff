import axios from 'axios'

const baseURL = process.env.MIX_API_URL

export default {
    namespaced: true,
    actions: {
        // Create 
        async create({commit}, data){
            await axios.post(`${baseURL}/education`, data)
        },

        // Update
        async update({commit}, {id,data}){
            await axios.patch(`${baseURL}/education/${id}`, data)
        },

        // Delete
        async delete({commit}, id){
            await axios.delete(`${baseURL}/education/${id}`)
        }
    }
}