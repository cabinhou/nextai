import React from 'react'
import { Metadata } from 'next'
import Hero from '@/components/hero'
import reliabilitySrc from '@/public/reliability.jpg'

export const metadata: Metadata = {
  title: 'AI - Reliability',
}


export default function page() {
  return (
    <Hero imgUrl={reliabilitySrc} altTxt="Reliability" content="reliability ..." />
  )
}
