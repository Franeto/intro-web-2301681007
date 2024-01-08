"use client"

import { Button } from "@/components/ui/button"
import { AlignJustifyIcon, HomeIcon } from "lucide-react"
import { SideItem } from "./youtube-side-item"
import { useState } from "react"

export const YoutubeSidebar = () =>{
   const [expand, setExpand] = useState(false)

   function onclick(){
      setExpand(!expand)
      console.log(expand)
   }

   return(
      <div className="py-2  flex flex-col items-center ">
         <Button variant="ghost" className="h-3 w-12 rounded-full hover:bg-white/10" onClick={onclick}>
            <AlignJustifyIcon color="white"/>
         </Button>
         <div className="flex flex-col">
            {expand?(
               
               <SideItem expand/>
            ):(
               <SideItem />
            )}
            
      
         </div>
      </div>
   )
}