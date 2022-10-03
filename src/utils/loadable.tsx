import React, { lazy, Suspense } from 'react';

function retry(componentImport: any) {
  return new Promise<any>((resolve, reject) => {
    // check if the window has already been refreshed
    const hasRefreshed = JSON.parse(
      window.sessionStorage.getItem('retry-lazy-refreshed') || 'false',
    );
    // try to import the component
    componentImport()
      .then((component: any) => {
        window.sessionStorage.setItem('retry-lazy-refreshed', 'false'); // success so reset the refresh
        resolve(component);
      })
      .catch((error: any) => {
        if (!hasRefreshed) {
          // not been refreshed yet
          window.sessionStorage.setItem('retry-lazy-refreshed', 'true'); // we are now going to refresh
          return window.location.reload(); // refresh the page
        }
        return reject(error); // Default error behaviour as already tried refresh
      });
  });
}

const loadable = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  options?: {fallback?: React.ReactNode | null},
) => {
  const { fallback = null } = options || {};
  const LazyComponent = lazy(() => retry(importFunc));

  return function LoadableComponent(props: any) {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Suspense fallback={fallback}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

export default loadable;
