import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from '../routes'
import { Layout } from 'antd'
import Aside from './aside'
import Top from './header'
import Footer from './footer'
import './layout.less'
import './content.less'



export default  (
    <HashRouter>
        <Layout className="containAll">

            <Aside/>

            <Layout>
                <Top  />

                <Layout className="content" id="content">
                    <Routes/>
                </Layout>

                <Footer />
            </Layout>
        </Layout>
    </HashRouter>
)