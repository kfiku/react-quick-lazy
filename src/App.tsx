import './App.css'
import { ClassicLazy } from './ClassicLazy/Lazy';
import { ComponentWithQuickLazy } from './ComponentWithQuickLazy/ComponentWithQuickLazy';

export default function App() {
  return (
    <div className="App">
      <div>
        <ComponentWithQuickLazy />
      </div>

      <div>
        <ClassicLazy />
      </div>

    </div>
  )
}
