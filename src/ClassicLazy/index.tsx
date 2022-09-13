import { Loader } from "../ComponentWithQuickLazy/Loader"
import { useLoadComponentData } from "../ComponentWithQuickLazy/useLoadComponentData"

export default function Component() {
  const { isLoading, data } = useLoadComponentData()

  if (isLoading) {
    return <Loader label="data" />
  }

  return (
    <div className="component box">
      ClassicLazy data: "{data}"
    </div>
  )
}

