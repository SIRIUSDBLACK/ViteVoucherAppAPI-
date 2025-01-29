import { create } from "zustand";

const useRecordStore = create((set) => ({
    records: [],
    addRecord : (newRecord)=> set((state) => ( {records : [...state.records,newRecord]}))
    // changeQuantity : (id,quantity) => set((state)=>{records: state.records.map(record=> record.saleID ===id ? {...state.records,quantity: record.quantity+quantity,cost: record.cost+record.product.price*quantity}:record)})
}));

export default useRecordStore
