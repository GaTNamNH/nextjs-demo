import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'

const Index = (props) => (
  <Layout {...props}>
    <Head>
      <title>Home page</title>
    </Head>
    <h1>Home page</h1>
  </Layout>
)

export default Index