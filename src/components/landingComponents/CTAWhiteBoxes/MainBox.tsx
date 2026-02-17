import {TextBox} from './TextBox.tsx'
import {ListBox} from './ListBox.tsx'

export function MainBox(){
    return (
       <>
           <div className="flex flex-row mx-auto gap-8 mb-5 w-[80%] ">
               <TextBox/>
               <ListBox/>
           </div>
       </>
    )
}