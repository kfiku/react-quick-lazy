import { lazy } from 'react'

export const LazyComponent = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(import('./'))
    }, 1000)
  });
})
