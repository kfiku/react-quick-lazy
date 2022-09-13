import { Loader } from "./Loader"

interface Props {
  firstResult: {
    isLoading: boolean;
    data: string;
  }
}

export default function Component({ firstResult: { isLoading, data } }: Props) {
  if (isLoading) {
    return <Loader label="data" />
  }

  return (
    <div className="box">
      QuickLazy data: "{data}"
    </div>
  )
}

