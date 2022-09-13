import './styles/Loader.css'

export function Loader({ label }: { label: string }) {
  return <div className="loader box">loading {label} ...</div>;
}
