import axios from 'axios'

const api = axios.create({
    /**
     * endereço que aparece no Expo.
     * Tem que ser um IP acessivel na rede, para o teste do celular.
     */
    baseURL:'http://192.168.15.17:3333' 
})

export default api