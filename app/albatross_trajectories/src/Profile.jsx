import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const getServerQuery = () => {
    return(
        "http://localhost:8081/geoserver/curso_gis/ows?" +
        "service=WFS&" +
        "version=1.0.0&" +
        "request=GetFeature&" +
        "typeName=curso_gis%3Atemporadas_albatross&" +
        "maxFeatures=3&" +
        "outputFormat=application%2Fjson&" +
        "viewparams=season:incubacion"
    )
}


export const Profile = () => {
    const { data, error, isLoading } = useSWR(getServerQuery(), fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    console.log(data.features)
    return <div>Informacion procesada...</div>
}
