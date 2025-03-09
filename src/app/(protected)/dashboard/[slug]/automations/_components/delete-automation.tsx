'use client';

import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Trash2Icon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { useDeleteAutomation } from '@/hooks/use-mutation';

type Props = {
  automationId: string;
}

function DeleteAutomation({automationId}: Props) {
  const { mutate ,isPending} = useDeleteAutomation(automationId);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
       <Trash2Icon className='cursor-pointer'/>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Automation?</AlertDialogTitle>
          <AlertDialogDescription>
            Deleting your automation is irreversible and will erase all your data.
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={() => mutate({})}
            className={buttonVariants({ variant: "destructive" })}
            disabled={isPending}
          >
             {isPending ? "Deleting..." : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default DeleteAutomation