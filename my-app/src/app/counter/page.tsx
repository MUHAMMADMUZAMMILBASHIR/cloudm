"use client";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'



export default function page() {
    const [A, setA] = useState(0);
  return (
    <div>
   <Button onClick={() => {
           setA(A+1);
        }}>increace</Button>

   <Button  onClick={() =>{
      setA(A-1);
   }}>Decreace</Button>
   
   <Button
   onClick={() =>{
    setA(0);
   }}>Reset</Button>
   {A}
    </div>
  )
}
