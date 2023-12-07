import "global";

declare global {
  interface FormData<T extends Record<string, any>> {
    get<K extends keyof T>(name: K): T[K];
  }
}
