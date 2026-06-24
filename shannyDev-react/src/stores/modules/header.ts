import { create } from 'zustand'

interface HeaderState {
  headerActive: number
  anchorList: string[]
  drawer: boolean
  changeHeader: (num: number) => void
  setDrawer: (val: boolean) => void
}

export const useHeaderStore = create<HeaderState>((set) => ({
  headerActive: 0,
  anchorList: ['about', 'resume', 'project', 'contact'],
  drawer: false,
  changeHeader: (num) => set({ headerActive: num, drawer: false }),
  setDrawer: (val) => set({ drawer: val }),
}))
