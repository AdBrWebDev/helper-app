import React, {lazy} from 'react';
const PathfinderPlus = lazy(() => import('../../components/PathfinderPlus'))
export default function BikeHelper(){
    return(<PathfinderPlus theme="running" icon="directions_run" />)
}