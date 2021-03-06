import { storeFile, storeData, removeData } from '../store/middlewares';

export const uploadAction = (file) => storeFile(file)
export const submitAction = (data) => storeData(data)
export const removeAction = (data) => removeData(data)
export const getAction = (products) => ({ type: 'GET_PRODUCTS', payload: products })
export const pinAction = (item) => ({ type: 'PIN_ITEM', payload: item })
export const searchAction = (value) => ({ type: 'SEARCH_ITEM', payload: value })
export const disableAction = (value) => ({ type: 'SET_DISABLED', payload: value })