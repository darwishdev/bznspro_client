import { ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from 'src/api/ApiClient'
// import type { SettingsFindForUpdateResponse, SettingsFindForUpdateRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_setting_definitions_pb'
import type { ProjectsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_projects_definitions_pb'
import type { TestemonialsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_testemonials_definitions_pb'
import type { EventsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_event_definitions_pb'
import type { ServicesListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_services_definitions_pb'
import type { ProgramsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_programs_definitions_pb'
import type { TeamMembersListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_team_members_definitions_pb'
import type { BlogsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/blog_blog_definitions_pb'
import type { ClientInitializeResponse } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_client_definitions_pb'
// import { SettingsFindForUpdateResponse } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_setting_definitions_pb'

export const useGlobalStore = defineStore('global', () => {
  const loading = ref(true)
  // const settings = ref<SettingsFindForUpdateRow[]>([])
  const settingsMap = ref<Record<string, string>>({})
  const testemonials = ref<TestemonialsListRow[]>([])
  const events = ref<EventsListRow[]>([])
  const projects = ref<ProjectsListRow[]>([])
  const services = ref<ServicesListRow[]>([])
  const teamMembers = ref<TeamMembersListRow[]>([])
  const blogs = ref<BlogsListRow[]>([])
  const mostReadBlog = ref<BlogsListRow[]>()
  const mostRecentBlog = ref<BlogsListRow>()
  const blogCategoriesMap = ref<Record<string, BlogsListRow[]>>({})
  const programs = ref<ProgramsListRow[]>([])
  const baseImg = 'https://static.exploremelon.com/bznspro/'

  const init = async () => {
    const loaded = await loadRequests()
    console.log('heyyy');

    if (loaded) {
      setTimeout(() => loading.value = false, 1000)

    }
  }

  const getEventById =
    (id: number) => {
      return events.value.filter(e => e.eventId == id)[0] as EventsListRow
    }

  const getBlogById = (id: number) => {
      const blog = blogs.value.filter(e => e.blogId == id)[0] as BlogsListRow
      return(blog)
  }


  const getSettingByKey = (key: string) => {

    console.log("leu", key, settingsMap.value)
    return settingsMap.value[key]
  }
  const loadRequests = async () => {
    return new Promise((r) => {
      // apiClient.loadInitialData({})
      apiClient.loadInitialData({}).then((resp: ClientInitializeResponse) => {
        // settings.value = resp.settings
        const settingsObj: Record<string, string> = {}
        for (let i = 0; i < resp.settings.length; i++) {
          const element = resp.settings[i];
          settingsObj[element.settingKey] = element.settingValue
        }

        teamMembers.value = resp.teamMembers
        settingsMap.value = settingsObj
        testemonials.value = resp.testemonials
        blogs.value = resp.blogs
        mostReadBlog.value = blogs.value.filter((blog) => blog.tags.some((tag) => tag == 'الاكثر قراءة')) as BlogsListRow[]
        mostRecentBlog.value = blogs.value.filter((blog) => blog.tags.some((tag) => tag == 'الاحدث'))[0] as BlogsListRow
        const blogCategories: Record<string, BlogsListRow[]> = {}
        for (let i = 0; i < resp.blogs.length; i++) {
          const element = resp.blogs[i];
          if(blogCategories[element.categoryName] && blogCategories[element.categoryName].length > 0){
            blogCategories[element.categoryName].push(element)
            continue;
          }
          blogCategories[element.categoryName] = [element]
        }
        blogCategoriesMap.value = blogCategories
        events.value = resp.events
        programs.value = resp.programs
        projects.value = resp.projects
        services.value = resp.services

        console.log(blogCategoriesMap.value);
        r(true)
      })
    })
  }

  return { init, blogs ,mostReadBlog ,mostRecentBlog ,blogCategoriesMap , getSettingByKey, getEventById, settingsMap,
    teamMembers, programs, baseImg, services, events, projects, loading, testemonials , getBlogById }
})
