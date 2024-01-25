import { ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from 'src/api/ApiClient'
import type { SettingsFindForUpdateResponse, SettingsFindForUpdateRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_setting_definitions_pb'
import type { ProjectsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_projects_definitions_pb'
import type { TestemonialsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_testemonials_definitions_pb'
import type { EventsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_event_definitions_pb'
import type { ServicesListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_services_definitions_pb'
import type { ClientInitializeResponse } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_client_definitions_pb'
// import { SettingsFindForUpdateResponse } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_setting_definitions_pb'

export const useGlobalStore = defineStore('global', () => {
  const loading = ref(true)
  const settings = ref<SettingsFindForUpdateRow[]>([])
  const testemonials = ref<TestemonialsListRow[]>([])
  const events = ref<EventsListRow[]>([])
  const projects = ref<ProjectsListRow[]>([])
  const services = ref<ServicesListRow[]>([])
  const baseImg = 'https://static.exploremelon.com/bznspro/'

  const init = async () => {
    const loaded = await loadRequests()
    console.log('heyyy');

    if (loaded) {
      loading.value = false
    }
  }

  const loadRequests = async () => {
    return new Promise((r) => {
      apiClient.clientInitialize({}).then((resp: ClientInitializeResponse) => {
        settings.value = resp.settings
        testemonials.value = resp.testemonials
        events.value = resp.events
        projects.value = resp.projects
        services.value = resp.services
        console.log(settings.value);
        r(true)
      })
    })
  }

  return { init, settings, baseImg, services, events, projects, loading , testemonials }
})
