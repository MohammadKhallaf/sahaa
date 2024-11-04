import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { AppDispatch, RootState } from "./store.types";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = useDispatch<AppDispatch>;

export { useAppDispatch, useAppSelector };
