import { create } from 'zustand'

interface HeaderStore {
  headerActive: number
  anchorList: string[]
  setHeaderActive: (index: number) => void
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  headerActive: 0,
  anchorList: ['about', 'resume', 'project', 'contact'],
  setHeaderActive: (index) => set({ headerActive: index }),
}))
