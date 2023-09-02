import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

const App = () => {
    return <>
        <Canvas
            camera={{position:[0, 1, 30]}}
        >
            <Experience/>
        </Canvas>
    </>
}

export default App;