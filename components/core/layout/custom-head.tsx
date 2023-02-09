import Head from 'next/head';

type Props = {
  title: string;
};

const CustomHead = ({title}: Props) => {
  return (
    <Head>
      <title key='title'>YOUNGCASE GmbH | {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
  )
}

export default CustomHead;
