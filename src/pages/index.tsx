import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { BaseLayout } from '../layouts/BaseLayout'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <p>home page</p>
    </BaseLayout>
  )
}

export default Home
