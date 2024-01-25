import { ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from 'src/api/ApiClient'
import type { SettingsFindForUpdateResponse, SettingsFindForUpdateRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_setting_definitions_pb'
import type { ProjectsListResponse, ProjectsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_projects_definitions_pb'
import type { TestemonialsListResponse, TestemonialsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_testemonials_definitions_pb'
import type { EventsListResponse, EventsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_event_definitions_pb'
import type { ServicesListResponse, ServicesListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_services_definitions_pb'
// import { SettingsFindForUpdateResponse } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_setting_definitions_pb'

export const useGlobalStore = defineStore('global', () => {
  const loading = ref(true)
  const settings = ref<SettingsFindForUpdateRow[]>([])
  const testemonials = ref<TestemonialsListRow[]>([])
  const events = ref<EventsListRow[]>([])
  const projects = ref<ProjectsListRow[]>([])
  const services = ref<Array<ServicesListRow>>([])

  const init = async () => {
    const loaded = await loadRequests()
    if (loaded) {
      loading.value = false
    }
  }

  const loadRequests = async () => {

    return new Promise((r) => {
      apiClient.settingsFindForUpdate({}).then((resp: SettingsFindForUpdateResponse) => {
        settings.value = resp.settings
      })
      apiClient.eventsList({}).then((resp: EventsListResponse) => {
        events.value = resp.records
      })
      apiClient.projectsList({}).then((resp: ProjectsListResponse) => {
        projects.value = resp.records
      })
      apiClient.servicesList({}).then((resp: ServicesListResponse) => {
        services.value = resp.records
      })

      apiClient.testemonialsList({}).then((resp: TestemonialsListResponse) => {
        testemonials.value = resp.records
      })
      r(true)

    })
  }

  return { init, settings, services, events, projects, loading }
})
