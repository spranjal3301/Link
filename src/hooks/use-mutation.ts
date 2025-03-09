import {
  activateAutomation,
  createAutomation,
  deleteAutomation,
  deleteKeyword,
  saveKeyword,
  saveListener,
  savePosts,
  saveTrigger,
  updateAutomationName,
} from "@/actions/automations/automations";
import { getQueryClient } from "@/lib/query-client";
import {
  activateAutomationKey,
  addKeywordKey,
  addTriggerKey,
  createAutomationKey,
  createListenerKey,
  deleteAutomationKey,
  deleteKeywordKey,
  getAllAutomationsKey,
  getAutomationInfoKey,
  savePostKey,
  updateAutomationKey,
} from "@/tanstack-query/query-keys";
import { Tlistener, Tpost, Ttrigger } from "@/types";
import {
  MutationFunction,
  useMutation,
  useMutationState,
} from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { z } from "zod";
import { useZodForm } from "./use-zod-from";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { TRIGGER } from "@/redux/reducer/automation";
import usePaths from "./use-nav";
import { useRouter } from "next/navigation";
import { title } from "process";




//` Helper hooks
//- for mutation
export const useMutationData = (
  mutationKey: string,
  mutationFn: MutationFunction<any, any>,
  queryKey?: string,
  onSuccess?: Function
) => {
  const queryClient = getQueryClient();
  const { toast } = useToast()
  return useMutation({
    mutationKey: [mutationKey],
    mutationFn,
    onSuccess: (data) => {
      if (onSuccess) onSuccess();
      
      toast({
        variant: data?.success && data?.status==200 ? "success": "destructive",
        title:data?.success && data?.status==200 ? `✅Success` : "❌Error",
        description: data.message,  
      });
    },
    onSettled: async () => {
      if (queryKey)
        return await queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};

//- for Optimitic UI (update catch)
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
  const { pathNames , page } = usePaths();
  const routes = useRouter();
  const onSuccess = () => {
    if(page == 'automations')
      routes.replace(`${pathNames}/${automationId}`);
    else
      routes.replace(`${pathNames}/automations/${automationId}`);
  }

  return useMutationData(
    createAutomationKey,
    () => createAutomation(automationId),
    getAllAutomationsKey,
    onSuccess
  );
};

export const useEditAutomation = (automationId: string) => {
  const { toast } = useToast()
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
        toast({
          variant: "warning",
          title:"⚠️Invaild",
          description: "Automation Name can`t be Empty"
         });
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

export const useListener = (automationId: string) => {
  const [listener, setListener] = useState<Tlistener>("MESSAGE");

  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string(),
  });

  const { isPending, mutate } = useMutationData(
    createListenerKey,
    (data: { prompt: string; reply: string }) =>
      saveListener(automationId, listener, data.prompt, data.reply),
    getAutomationInfoKey
  );

  const { register, errors, onFormSubmit, watch, reset } = useZodForm(
    promptSchema,
    mutate
  );

  const onSetListener = (type: Tlistener) => setListener(type);

  return {
    register,
    errors,
    onFormSubmit,
    watch,
    reset,
    listener,
    onSetListener,
    isPending,
  };
};

export const useTriggers = (automationId: string) => {
  //* client Side state access
  const types = useAppSelector(
    (state) => state.AutmationReducer.trigger?.types
  );
  const dispatch = useAppDispatch();

  //* client Side state update
  const onSetTrigger = (type: Ttrigger) =>
    dispatch(TRIGGER({ trigger: { type } }));

  //* saving client side state into server/db
  const { mutate, isPending } = useMutationData(
    addTriggerKey,
    (data: { types: string[] }) => saveTrigger(automationId, data.types),
    getAutomationInfoKey
  );

  const onSaveTrigger = () => mutate({ types });

  return {
    types,
    onSetTrigger,
    onSaveTrigger,
    isPending,
  };
};

export const useKeywords = (automationId: string) => {
  const [keyword, setKeyword] = useState("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const { mutate, isPending } = useMutationData(
    addKeywordKey,
    (data: { keyword: string }) => saveKeyword(automationId, data.keyword),
    getAutomationInfoKey,
    () => setKeyword("")
  );

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      mutate({ keyword });
      setKeyword("");
    }
  };

  const { mutate: deleteMutation, isPending: isDeleted } = useMutationData(
    deleteKeywordKey,
    (data: { id: string }) => deleteKeyword(data.id),
    getAutomationInfoKey
  );

  const onDeletekeyword = (id: string) => deleteMutation({ id });

  return { keyword, onValueChange, onKeyPress, onDeletekeyword, isDeleted };
};

export const useAutomationPosts = (automationId: string) => {
  const [posts, setPosts] = useState<Tpost[]>([]);

  //-toggle post selete
  const onSelectPost = (post: Tpost) => {
    setPosts((prevPost) => {
      if (prevPost.find((p) => p.postid === post.postid)) {
        return prevPost.filter((p) => p.postid !== post.postid);
      }
      return [...prevPost, post];
    });
  };

  const { mutate, isPending } = useMutationData(
    savePostKey,
    () => savePosts(automationId, posts),
    getAutomationInfoKey,
    () => setPosts([])
  );

  return { posts, onSelectPost, mutate, isPending };
};

export const useActivateAutomation = (automationId: string) => {
  return useMutationData(
    activateAutomationKey,
    (data: { state: boolean }) => activateAutomation(automationId, data.state),
    getAutomationInfoKey
  );
};

export const useDeleteAutomation = (automationId: string) => {
  return useMutationData(
    deleteAutomationKey,
    () => deleteAutomation(automationId),
    getAllAutomationsKey
  )
}


