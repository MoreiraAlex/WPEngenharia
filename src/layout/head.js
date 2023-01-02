import NextHead from 'next/head'

export default function Head({title}) {
  return (
    <NextHead>
      <meta httpEquiv="content-language" content="pt-br" />
      <meta name="author" content="Alex Moreira" />
      <meta name="reply-to" content="alexmoreira.dev@gmail.com" />

      <meta name='description' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'/>
      <meta name="keywords" content="Lorem ipsum, Lorem, ipsum"/>

      <link rel="canonical" href="https://engenhariawp.alexmoreira.dev.br/" />
      <link rel="icon" href="/favicon.png" />

      <title>{title} - WP Engenharia</title>
    </NextHead>
  )
}