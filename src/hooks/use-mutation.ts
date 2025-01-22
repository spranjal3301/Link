import {
  createAutomation,
  updateAutomationName,
} from "@/actions/automations/automations";
import { getQueryClient } from "@/lib/query-client";
import {
  createAutomationKey,
  getAllAutomationsKey,
  getAutomationInfoKey,
  updateAutomationKey,
} from "@/tanstack-query/query-keys";
import {
  MutationFunction,
  useMutation,
  useMutationState,
} from "@tanstack/react-query";
import { useRef, useState } from "react";
import { toast } from "sonner";

//` Helper hooks
export const useMutationData = (
  mutationKey: string,
  mutationFn: MutationFunction<any, any>,
  queryKey?: string,
  onSuccess?: Function
) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationKey: [mutationKey],
    mutationFn,
    onSuccess: (data) => {
      if (onSuccess) onSuccess();
      //-UI update
      toast(data?.success ? "Success" : "Error", {
        description: data.message,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    },
    onSettled: async () => {
      if (queryKey)
        return await queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};

export const useMutationDataState = (mutationKey: string) => {
  const data = useMutationState({
    filters: { mutationKey: [mutationKey] },
    select: (mutation) => {
      return {
        variables: mutation.state.variables,
        status: mutation.state.status,
      };
    },
  });

  const latestData = data[data.length - 1];
  return { latestData };
};

//`Utils hooks
export const useCreateAutomation = (automationId?: string) => {
  return useMutationData(
    createAutomationKey,
    () => createAutomation(automationId),
    getAllAutomationsKey
  );
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  const { mutate, isPending } = useMutationData(
    updateAutomationKey,
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    getAutomationInfoKey,
    disableEdit
  );

  // <Input onBlur={(e: React.FocusEvent<HTMLInputElement>) => OnblurUpdateAutomationName(e)} autoFocus />
  const OnblurUpdateAutomationName = (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    if (inputRef.current) {
      if (inputRef.current.value !== "") {
        mutate({ name: inputRef.current.value });
      } else {
        disableEdit();
        //? UI Update
        toast('Invaild',{description:'Automation Name can`t be Empty'})
      }
    }
  };

  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef,
    isPending,
    OnblurUpdateAutomationName,
  };
};
