import React, {lazy} from 'react'
const Articles = lazy(() => import('../Articles'))

export default function ArticlesData() {
    return(<Articles img="runningArticles.jpg" title="runArticles" text="Podeľ sa o svoje zážitky" />)
} 