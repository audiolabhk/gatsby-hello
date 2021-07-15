import React from 'react'
import Layout from './components/Layout'
import { useStaticQuery, graphql } from "gatsby"
import * as styles from './styles/home.module.css'

export default function Home() {
    // Static Query
    const data = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `)

    console.log(data)

    return (
        <Layout>
            <section className={styles.hero}>
                <div>
                    <h1>{data.site.siteMetadata.title}</h1>
                    <h3>{data.site.siteMetadata.tagline}</h3>
                </div>
                <div>
                    <img src="/musicstudio.png" alt="Sean" />
                </div>
                
            </section>
        </Layout>
    )
}


