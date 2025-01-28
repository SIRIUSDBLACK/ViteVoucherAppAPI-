import { create } from "zustand";

const useRecordStore = create((set) => ({
    records: [],
    addRecord : (newRecord)=> set((state) => ( {records : [...state.records,newRecord]}))
}));

export default useRecordStore
