import { useFrame } from "@react-three/fiber"
import { useRef } from 'react';

const Curve = ({f, min_x, max_x, stride}) => {

    const curveRef = useRef();

    useFrame(() => {
        if (curveRef.current.position.x >= max_x) {
            curveRef.current.position.x = min_x;
        } else {
            curveRef.current.position.y += f(curveRef.current.position.x);
            curveRef.current.position.x += stride;
        }
    });

    return <>
    <gridHelper 
        args={[6*Math.PI, 6*Math.PI, 0xff0000, 'teal']} 
        rotation={[Math.PI*0.5, 0, 0]}
        position={[min_x + Math.PI*3, 0, 0]}
    />
    <mesh ref={curveRef} position={[min_x, 0, 0]}>
        <boxGeometry args={[1, 1, 1]}/>
        <meshStandardMaterial color="yellow" />
    </mesh> 
    </>
}

export default Curve;