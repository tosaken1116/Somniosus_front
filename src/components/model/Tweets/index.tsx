import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { TweetsPresentation } from './presentations';
import { TweetsErrorPresentation } from './presentations/error';
import { TweetsLoadingPresentation } from './presentations/loading';

import { ClientProvider } from '@/components/functional/ClientProvider';

export const Tweets: React.FC = () => (
  <ErrorBoundary fallback={<TweetsErrorPresentation />}>
    <Suspense fallback={<TweetsLoadingPresentation />}>
      <ClientProvider>
        <TweetsPresentation />
      </ClientProvider>
    </Suspense>
  </ErrorBoundary>
);
