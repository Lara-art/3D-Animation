/*  
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Longoron.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('../../public/models/Longoron.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001_1.geometry} material={materials['Longoron_sin_aletas.001']} />
      <mesh geometry={nodes.Cube001_2.geometry} material={materials['Longoron_cuerpo.001']} />
    </group>
  )
}

useGLTF.preload('../../public/models/Longoron.glb')
  
