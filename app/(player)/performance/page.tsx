import React from 'react'
import type { Metadata } from 'next'
import performanceSrc from '@/public/performance.jpg'
import Hero from '@/components/hero'


export const metadata: Metadata = {
  title: 'AI - Performance',
  description: 'Performance Desc ',
}

export default function page() {

  return (
    <Hero imgUrl={performanceSrc} altTxt="Performance" content="Performance ..." />
  )
}
