import { Suspense } from 'react'

import { Loader } from '../ComponentWithQuickLazy/Loader';
import { LazyComponent } from './LazyComponent';

export function ClassicLazy ({...props}) {
  return (
    <Suspense fallback={<Loader label='component' />}>
      <LazyComponent {...props}/>
    </Suspense>
  );
}