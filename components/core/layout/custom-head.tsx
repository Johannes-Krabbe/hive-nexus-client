import Head from 'next/head';

interface CustomHeadProps {
  title: string;
};

export const CustomHead = ({title}: CustomHeadProps) => {
  return (
    <Head>
      <title key='title'>hivenexus | {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
  )
}
