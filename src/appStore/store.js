import { immer } from 'zustand/middleware/immer'
import { createWithEqualityFn  } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'

export const useStore = createWithEqualityFn(immer((set) => ({
    version: '1.0',
    config: {},
    loaded: false,
    imgLoaded: false,
    data: {
        privacy: null,
    },
    // pages: {
    //   home: { component: 'Home', path: '/home', Icon: (p) => <HomeIcon {...p}/> },
    // },
    setPageNames: (names) => set((s) => {
        Object.keys(names).forEach((k) => {
            s.pages[k].name = names[k];
        });
    }),
    setState: (payload) => set((s) => {
        Object.keys(payload).forEach((k) => {
            s[k] = payload[k];
        });
    }),
    setData: (payload) => set((s) => {
        Object.keys(payload).forEach((k) => {
            s.data[k] = payload[k];
        });
    }),
})), shallow);