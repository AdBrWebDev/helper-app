import React, {lazy} from 'react'
const Forum = lazy(() => import('../Forum'))

export default function ForumData(){
    return(<Forum img="runningForum.jpg" title="runningForum" text="Potrebuješ pomôcť?" />)
}