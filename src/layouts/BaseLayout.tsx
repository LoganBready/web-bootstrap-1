// react | next
import Head from 'next/head';
import { Header } from '../components/Header/Header';



interface IBaseLayout {
  children?: React.ReactNode;
}

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <Header />
      <main id='main-content' data-content='main'>
        {children}
      </main>
      {/* Footer */}
    </>
  );
};