import { PostTweetPresentation } from './presentations';

import { ClientProvider } from '@/components/functional/ClientProvider';

export const PostTweet: React.FC = () => (
  <ClientProvider>
    <PostTweetPresentation />
  </ClientProvider>
);
