import { OrbitControls } from "@react-three/drei"
import { Model } from './Model.jsx'

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls />
          
            <Model />

        </>
    );
}