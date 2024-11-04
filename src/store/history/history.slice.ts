import { createSlice } from "@reduxjs/toolkit";

const getLocalHistory = (): string[] => {
  try {
    const history = localStorage.getItem("history");
    if (history) return JSON.parse(history);

    return [];
  } catch (e) {
    return [];
  }
};

const setLocalHistory = (history: string[]) => {
  localStorage.setItem("history", JSON.stringify(history));
};

const initialState: string[] = getLocalHistory();

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      if (state.includes(action.payload)) return state;
      else {
        const newHistory = [action.payload, ...state];
        setLocalHistory(newHistory);
        return newHistory;
      }
    },

    clearHistory: () => {
      setLocalHistory([]);
      return [];
    },
  },
});

export default historySlice;
