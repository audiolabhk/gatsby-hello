import React from "react"
import Layout from "./components/Layout"
import * as style from "./styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={style.section}>
        <h1>Hello world!</h1>
        <img src="/seangu.jpg" alt="Sean Gu" />
      </div>
    </Layout>
  )
}
