import React from 'react'
import ReactDOM from 'react-dom/client'

import { Content } from './Content/Content.tsx'

import "./FiveM.ts"
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
)