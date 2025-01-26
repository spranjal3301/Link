import { duplicateValidation } from "@/lib/utils";
import { Ttrigger } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IntialStateTriggerProps = {
  trigger?: {
    type?: Ttrigger;
    keyword?: string;
    types?: string[];
    keywords?: string[];
  };
};

const initialState: IntialStateTriggerProps = {
  trigger: {
    type: undefined,
    keyword: undefined,
    types: [],
    keywords: [],
  },
};

export const automationSlice = createSlice({
  name: "automation",
  initialState,
  reducers: {
    TRIGGER: (state, action: PayloadAction<IntialStateTriggerProps>) => {
      state.trigger!.types = duplicateValidation(
        state.trigger?.types!,
        action.payload.trigger?.type!
      );
      return state;
    },
  },
});

export const { TRIGGER } = automationSlice.actions;
export default automationSlice.reducer;
