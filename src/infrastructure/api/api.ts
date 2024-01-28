import axios from "axios"

import { data as transactions } from '../../mock/transactions.json'

export const fetchData = async (endPoint: string, data?: any) => {

    try {
        const response = await axios.get(endPoint, data)
        return response.data
    } catch (err) {
        throw new Error(
            "Error occurred when trying to save your profile changes!"
        )
    }
}

export const postData = async (endPoint: string, data?: any) => {

    try {
        const response = await axios.post(endPoint, data)
        return response
    } catch (err) {
        throw new Error(
            "Error occurred when trying to save your profile changes!"
        )
    }
}


export const postPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.warn('Omar')
    }, 10000)
    resolve('OmarOk')
})

export const fetchTransactions = new Promise((resolve, reject) => {
    setTimeout(() => {
    }, 1000)
    resolve(transactions)
})

export const fetchTransactionDetail = new Promise((resolve, reject) => {
    setTimeout(() => {
    }, 1000)
    resolve(transactions)
})
