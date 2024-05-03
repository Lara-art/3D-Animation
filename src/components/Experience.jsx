import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Model } from './Model.jsx'

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <ScrollControls pages={3} damping={0.25}>

            <OrbitControls enableZoom={false}/>
          
            <Model />
            </ScrollControls>

        </>
    );
}