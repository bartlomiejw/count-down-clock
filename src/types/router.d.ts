//the ts of router
import { RouteRecordRaw } from 'vue-router'
/*Type of extended here*/
export interface RouteItemTy {
  hidden?: boolean
  alwaysShow?: boolean // will always show the root menu
  isChild?: boolean // will always show the root menu
  code?: number // determine if the current user has permission
  name?: string
  fullPath?: string
  path?: string
  meta?: {
    title: string
    header: string
    icon?: string
    affix?: boolean
    activeMenu?: string // if set path, the sidebar will highlight the path you set
    breadcrumb?: boolean
    roles?: Array<string> // you can set roles in root nav
    svgIcon?: string
    code?: number
    cachePage?: boolean // is true, keep-alive this Page
    leaveRmCachePage?: boolean // is true, keep-alive remote when page leave
    closeTabRmCache?: boolean //remove keep-alive by the closeTabRmCache
  }
  children?: RouterTy
  redirect?: string
}

export type RouterRowTy = RouteRecordRaw & RouteItemTy
export type RouterTy = Array<RouterRowTy>
