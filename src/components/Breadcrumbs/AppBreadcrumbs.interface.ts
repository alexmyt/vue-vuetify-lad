export interface BreadcrumbMeta {
  hidden?: boolean;
  disabled?: boolean;
  title?: string;
}

declare module 'vue-router' {
  interface RouteMeta {
    breadcrumb?: BreadcrumbMeta;
  }
}
