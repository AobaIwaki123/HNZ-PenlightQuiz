import { create } from "zustand";

type PenlightIdType = {
  id: number;
};

export type PenlightIdStore = PenlightIdType & {
  increaseId: () => void;
  decreaseId: () => void;
};

export const createPenlightStore = () =>
  create<PenlightIdStore>((set) => ({
    id: 0,
    increaseId: () => set((state) => ({ id: (state.id + 1) % 15 })),
    decreaseId: () => set((state) => ({ id: (state.id - 1 + 15) % 15 })),
  }));
