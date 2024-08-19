import { socialLinks } from "../data";
import React from 'react'

export default function SocialLinks({groupClass,itemClass}) {
  return (
<ul className={groupClass}>
        {socialLinks.map((link)=>{
                return(<li><a
                     key={link.id} 
                     href={link.href} 
                     className={itemClass}>
                    <i className={link.icon}></i>
                     </a>
                     </li>
                     );
                })}
        </ul>
  )
}
