import React, {lazy} from 'react'
const Articles = lazy(() => import('../Articles'))

export default function ArticlesData() {
    return(<Articles img="articles-img.jpg" title="hikeArticles" text="Podeľ sa o svoje zážitky" />)
}