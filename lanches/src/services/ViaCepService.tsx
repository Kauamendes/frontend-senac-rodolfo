/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    headers: {
        'Content-Type': 'application/json'
    }
})
export const fetchViaCep = (cep: string)  => {
   return apiClient.get<any>(`https://viacep.com.br/ws/${cep}/json`);
}