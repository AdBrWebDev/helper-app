import React, {lazy} from 'react'
const Forum = lazy(() => import('../Forum'))

export default function ForumData(){
    return(<Forum img="skiForum.jpg" title="skyForum" text="Potrebuješ pomôcť?" />)
}