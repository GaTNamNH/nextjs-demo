import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import i18n from '../i18n';

const Index = (props) => (
  <Layout {...props}>
    <Head>
      <title>Home page</title>
    </Head>
    <h1>{i18n.t('home_page.about')}</h1>
  </Layout>
)

export default Index
