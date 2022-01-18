import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = (props) => {

    const ref = useRef()
    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return(
        <mesh
            {...props}
            ref = {ref}
            scale={click ? 1.5 : 1 }
            onClick = {(event) => setClick(!click)}
            onPointerOver = {(event) => setHover(true)}
            onPointerOut = {(event) => setHover(false)}
        >
            <boxGeometry args = {[1, 1, 1]} />
            <meshStandardMaterial color={hover ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box