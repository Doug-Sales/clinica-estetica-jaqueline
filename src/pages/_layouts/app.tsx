import '@/global.css'

import { Outlet } from 'react-router-dom'

import { ContactSession } from '@/components/contact-session'
import { FooterClinic } from '@/components/footer-clinic'
import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className=" flex min-h-screen flex-col  antialiased">
      <Header />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Outlet />
        <ContactSession />
        <FooterClinic />
      </div>
    </div>
  )
}
