import { useParams } from "react-router-dom";
import ModelViewer from "../components/ModelViewer.tsx"

function Model3D() {
  const { name } = useParams();

  return (
    <div>
      <ModelViewer
        src={`/W3D/${name}.glb`}
       />
    </div>
  )
}

export default Model3D