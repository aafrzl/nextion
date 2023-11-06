"use client"

import { Id } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface MenuProps {
  documentId: Id<'documents'>;
}

export const Menu = ({ documentId }: MenuProps) => {
  const router = useRouter();
  const {user} = useUser();
  
  const archive = useMutation(api.documents.archive);

  const onArchive = () => {
    const promise = archive({ id: documentId });

    toast.promise(promise, {
      loading: 'Archiving document...',
      success: 'Document is archived!',
      error: 'Failed to archive document',
    });

    router.push('/documents');
  };

  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
        size="sm"
        variant="ghost"
        >
          <MoreHorizontal className='h-6 w-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
      className="w-60"
      align="end"
      alignOffset={8}
      forceMount
      >
        <DropdownMenuItem onClick={onArchive}>
          <Trash className='h-4 w-4 mr-2' />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">
          Last edited by {user?.fullName}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

Menu.Skeleton = function MenuSkeleton() {
  return(
    <Skeleton className='w-8 h-8' />
  )
}