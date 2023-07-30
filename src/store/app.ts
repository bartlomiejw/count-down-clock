import defaultSettings from '@/settings'
import { SettingTy } from '@/types/common'

export const useAppStore = defineStore('app', {
  /***
   *Similar to the data data of the component, it is used to store the overall state
   * 1. Must be an arrow function
   */
  state: () => {
    return {
      sidebar: { opened: false },
      device: 'desktop',
      settings: defaultSettings as SettingTy,
    }
  },

  /***
   *Functions of packaging processing data (business logic): Modify data
   */
  actions: {
    M_settings(data) {
      this.$patch((state) => {
        state.settings = { ...state.settings, ...data }
      })
    },
  },
})
