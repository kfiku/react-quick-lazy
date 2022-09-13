import { ComponentType, Suspense } from 'react';

interface Hooks {
  [key: string]: () => unknown,
}

export function withQuickLazy<TProps>(Component: ComponentType<TProps>, Loader: ComponentType<unknown>, hooks: Hooks) {
  return (props: any) => {
    const hookResult = Object.entries(hooks).reduce((result, [key, useCustomQuery]) => ({
      ...result,
      [key]: useCustomQuery(),
    }), {});

    console.log({hookResult});

    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} {...hookResult} />
      </Suspense>
    );
  };
}
