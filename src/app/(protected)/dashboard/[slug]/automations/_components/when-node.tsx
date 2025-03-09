'use client';
import { Warning } from '@/icons';
import React from 'react'
import Trigger from './trigger';

type Props = {
    id:string;
}

const WhenNode = ({id}: Props) => {
  return (
    <div className="w-full lg:w-10/12 xl:w-5/12 p-4 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
    <div className="flex gap-x-2">
      <Warning />
      When...
    </div>
    <Trigger id={id} />
  </div>
  )
}

export default WhenNode