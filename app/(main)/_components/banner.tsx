'use client';

import { Id } from '@/convex/_generated/dataModel';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ConfirmModal } from '@/components/modals/confirm-modal';
import { useEdgeStore } from '@/lib/edgestore';

interface BannerProps {
  documentId: Id<'documents'>;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);
  const document = useQuery(api.documents.getById, { documentId: documentId });

  const { edgestore } = useEdgeStore();

  const onRemove = () => {
    edgestore.publicFiles.delete({
      url: document?.coverImage as string,
    });

    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: 'Deleting document...',
      success: 'Document deleted!',
      error: 'Failed to delete document',
    });

    router.push('/documents');
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: 'Restored document...',
      success: 'Document restored!',
      error: 'Failed to restore document',
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>This page has been archived.</p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
          Delete page
        </Button>
      </ConfirmModal>
    </div>
  );
};
