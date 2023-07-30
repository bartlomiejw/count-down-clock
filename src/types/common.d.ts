//common type file, you can not export the type in common.d.ts
//not export can use
interface ObjTy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any
}

/*axios req request configuration*/
import { AxiosRequestConfig } from 'axios'
interface AxiosReqTy extends AxiosRequestConfig {
  url?: string
  method?: string
  data?: ObjTy
  metadata?: ObjTy
  isParams?: boolean
  fullPageLoading?: boolean
  autoHideFullPageLoading?: boolean
  isUploadFile?: boolean
  isDownLoadFile?: boolean
  isAlertErrorMsg?: boolean
  baseURL: string
  timeout?: number
  attachmentType?: string
}

interface AxiosConfigTy {
  url?: string
  metadata?: ObjTy
  method?: string
  data?: ObjTy
  params?: ObjTy
  msg?: string
  isParams?: boolean
  fullPageLoading?: boolean
  autoHideFullPageLoading?: boolean
  isUploadFile?: boolean
  isDownLoadFile?: boolean
  isAlertErrorMsg?: boolean
  baseURL?: string
  timeout?: number
  attachmentType?: string
  controller?: AbortController
}

interface SettingTy {
  title: string
  sidebarLogo: boolean
  showLeftMenu: boolean
  ShowDropDown: boolean
  showHamburger: boolean
  isNeedLogin: boolean
  isNeedNprogress: boolean
  showTagsView: boolean
  tagsViewNum: number
  openProdMock: boolean
  errorLog: string | Array<string>
  permissionMode: string
  delWindowHeight: string
  tmpToken: string
  showNavbarTitle: boolean
  showTopNavbar: boolean
  mainNeedAnimation: boolean
  viteBasePath: string
}
