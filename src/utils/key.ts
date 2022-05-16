import type { InjectionKey, Ref } from 'vue'

interface CityType {
  state: Ref<string>;
  updateState: () => void;
}

export const injectCityId = Symbol() as InjectionKey<CityType>
