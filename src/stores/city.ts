import { defineStore } from "pinia";

interface CityState {
  cityId: string;
  cityName: string;
  field: string;
}

export const useCityStore = defineStore('city', {
  state: () => {
    return {
      cityId: '0',
      cityName: "全部",
      field: 'all'
    }
  },
  actions: {
    selectCity(payload: CityState) {
      this.cityId = payload.cityId;
      this.cityName = payload.cityName;
      this.field = payload.field;
    },
  }
}) 
