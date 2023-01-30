import { defineStore, setActivePinia, createPinia } from 'pinia'
import axios from 'axios'
import { Contact } from '@/types/Contact'
setActivePinia(createPinia())

type Response = {
	data: {
		results: Contact[];
		info: {
			seed: string;
		};
	};
};

export const useContactsStore = defineStore('useContactsStore', {
  state: () => ({
    contacts: null as Contact[] | null,
    currentContact: null as Contact | null,
    showContactViewer: false as boolean,
    seed: null as string | null
  }),
  actions: {
    async fetchContacts () {
      const runtimeConfig = useRuntimeConfig()
      const config = runtimeConfig.public
      const { userUrl, numberCards } = config
      const response = (await axios.get(userUrl, {
        params: {
          results: numberCards,
          seed: this.seed
        }
      })) as Response
      this.seed = response.data.info.seed
      this.contacts = response.data.results
    }
  }
})
