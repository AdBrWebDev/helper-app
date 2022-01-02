import React, {lazy} from 'react'
const Articles = lazy(() => import('../Articles'))

export default function ArticlesData() {
    return(<Articles img="skiingArticles.png" title="skyArticles" text="Podeľ sa o svoje zážitky" />)
}