import { withQuickLazy } from "../lib/withQuickLazy";
import { LazyComponent } from "./LazyComponent";
import { Loader } from "./Loader";
import { useLoadComponentData } from "./useLoadComponentData";

export const ComponentWithQuickLazy = withQuickLazy(LazyComponent, () => <Loader label="component" />, { firstResult: useLoadComponentData })
