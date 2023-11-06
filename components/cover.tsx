'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';
import { ImageIcon, X } from 'lucide-react';
import { useCoverImage } from '@/hooks/use-cover-image';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';
import { useEdgeStore } from '@/lib/edgestore';
import { Skeleton } from './ui/skeleton';

interface CoverProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverProps) => {
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);
  const params = useParams();
  const { edgestore } = useEdgeStore();

  const onRemove = () => {
    if (url) {
      edgestore.publicFiles.delete({
        url: url as string,
      });
    }
    removeCoverImage({ id: params.documentId as Id<'documents'> });
  };

  return (
    <div className={cn('relative w-full h-[35vh] group', !url && 'h-[12vh]', url && 'bg-muted')}>
      {!!url && (
        <Image
          src={url}
          fill
          alt="Cover Image"
          className="object-cover"
          priority
        />
      )}
      {url && !preview && (
        <div className="opacity-100 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2 md:opacity-0">
          <Button
            onClick={() => coverImage.onReplace(url)}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm">
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={onRemove}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm">
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton() {
  return (
    <Skeleton className='w-full h-[12vh]' />
  )
}