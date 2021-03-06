import Head from 'next/head';

import { ApolloProvider } from '@apollo/client/react';
import { UserList } from '../components/user-list';
import { client } from '../apolo-provider';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ApolloProvider client={client}>
        <UserList />
      </ApolloProvider>
    </div>
  );
}
