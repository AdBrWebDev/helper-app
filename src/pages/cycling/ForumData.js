import React, {lazy} from 'react'
const Forum = lazy(() => import('../Forum'))

export default function ForumData(){
    return(<Forum img="forum-img.jpg" title="bikeForum" text="Potrebuješ pomôcť?" />)
}