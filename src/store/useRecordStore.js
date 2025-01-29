import { create } from "zustand";

const useRecordStore = create((set) => ({
    records: [],
    addRecord : (newRecord)=> set((state) => ( {records : [...state.records,newRecord]})),
    deleteRecord : (id) => set((state) => ({records: state.records.filter(record => record.saleID !== id)})),
    changeQuantity : (id,quantity) => set((state)=>({records: state.records.map(record=> record.saleID ===id ? {...record,quantity: record.quantity+quantity,cost: record.product.price*(record.quantity+quantity)} : record)})),
    resetRecord : () => set({records: []})
}));

export default useRecordStore;
