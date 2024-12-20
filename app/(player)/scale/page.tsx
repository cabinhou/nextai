import Hero from '@/components/hero'
import { Metadata } from 'next'
import React from 'react'
import scaleSrc from '@/public/scale.jpg'

export const metadata: Metadata = {
  title: 'AI - Scale',
}

export default function page() {
  return (
    <Hero imgUrl={scaleSrc} altTxt="Scale" content="Scale ..." />
  )
}
