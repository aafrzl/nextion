'use client';

import { Doc } from '@/convex/_generated/dataModel';

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { useOrigin } from '@/hooks/use-origin';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Check, Copy, Globe } from 'lucide-react';

interface PublishProps {
  initialData: Doc<'documents'>;
}

export const Publish = ({ initialData }: PublishProps) => {
  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const url = `${origin}/preview/${initialData._id}`;

  const onPublish = () => {
    setIsSubmitting(true);

    const promise = update({
      id: initialData._id,
      isPublished: true,
    }).finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: 'Publishing...',
      success: 'Published document!',
      error: 'Failed to publish',
    });
  };

  const onUnpublish = () => {
    setIsSubmitting(true);

    const promise = update({
      id: initialData._id,
      isPublished: false,
    }).finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: 'Unpublishing...',
      success: 'Unpublished document!',
      error: 'Failed to unpublish',
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);

    setCopied(true);

    toast.success('Link copied to clipboard!');

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          variant="ghost">
          Publish
          {initialData.isPublished && <Globe className="text-sky-500 w-4 h-4 ml-2" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-72"
        align="end"
        alignOffset={8}
        forceMount>
        {initialData.isPublished ? (
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Globe className="text-sky-500 animate-pulse h-4 w-4 transition duration-1000 ease-in-out" />
              <p className="text-xs font-medium text-sky-500">This document is live on web.</p>
            </div>
            <div className="flex items-center">
              <input
                className="flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"
                value={url}
                disabled
              />
              <Button
                onClick={onCopy}
                disabled={copied}
                className="h-8 rounded-l-none">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <Button
              size="sm"
              className="w-full text-xs"
              disabled={isSubmitting}
              onClick={onUnpublish}>
              Unpublish
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Globe className="text-muted-foreground w-8 h-8 mb-2" />
            <p className="text-sm font-medium mb-2">Publish this document</p>
            <span className="text-xs text-muted-foreground mb-4 text-center">Share your work with the world by publishing it to the web. Anyone with the link will be able to view it.</span>
            <Button
              disabled={isSubmitting}
              onClick={onPublish}
              className="w-full text-xs"
              size="sm">
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
