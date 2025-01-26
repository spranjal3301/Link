import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const useZodForm = (
  scheme: ZodSchema,
  mutation: UseMutateFunction,
  defaultValues?: any
) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<z.infer<typeof scheme>>({
    resolver: zodResolver(scheme),
    defaultValues,
  });

  const onFormSubmit = handleSubmit(async (value) => mutation({ ...value }));

  return {
    register,
    errors,
    onFormSubmit,
    watch,
    reset,
  };
};
