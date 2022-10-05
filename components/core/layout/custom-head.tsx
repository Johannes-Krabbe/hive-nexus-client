import Head from 'next/head';

type Props = {
  title: string;
};

const CustomHead = ({title}: Props) => {
  return (
    <Head>
      <title key='title'>YOUNGCASE GmbH | {title}</title>
      <link key='favicon' rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
  )
}

export default CustomHead;