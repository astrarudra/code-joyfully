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
    pages: {
      home: { component: 'Home', name: 'Home', path: '/home', icon: 'test' },
      courses: { component: 'Courses', name: 'Courses', path: '/course', icon: 'test' },
      blog: { component: 'Blog', name: 'Blog', path: '/blog', icon: 'test' },
      about: { component: 'About', name: 'About', path: '/about', icon: 'test' },
    },
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