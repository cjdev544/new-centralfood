import Head from 'next/head'

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{`${title} | CentralFoodMalaga`}</title>
      <meta name='description' content={description} />
    </Head>
  )
}

Seo.defaultProps = {
  title: 'CentralFoodMálaga',
  description:
    'Encuantra variedad de comidas de diferentes nacionalidades en Málaga con sabor a Venezuela, todo en un mismo lugar. Porque en la variedad esta el gusto',
}
