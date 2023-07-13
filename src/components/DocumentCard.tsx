'use client';

import { cn } from '@/lib/utils';
import { DocumentType } from './SideBar';
import { Button, buttonVariants } from './ui/button';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FileText, Trash } from 'lucide-react';
import { startTransition, useState } from 'react';
import Alert from './Alert';
import { toast } from './ui/use-toast';

const DocumentCard = ({ document }: { document: DocumentType }) => {
  const pathname = usePathname();

  const router = useRouter();

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  //Delete Document Request
  async function deleteDocument(publicId: string) {
    const res = await fetch(`/api/documents/${publicId}`, {
      method: 'DELETE',
    });

    if (!res?.ok) {
      toast({
        title: 'Gagal menghapus document',
        description: 'Terjadi kesalahan saat menghapus document, silahkan coba lagi',
        variant: 'destructive',
      });
      return false;
    }
    return true;
  }

  return (
    <div className={`flex h-8 w-full justify-between rounded-none bg-zinc-200 ${pathname === `/home/${document.publicId}` && 'bg-zinc-600 text-white'}`}>
      <Link
        className="flex w-full items-center"
        href={`/home/${document.publicId}`}>
        <FileText className="mr-2 h-4 w-4" />
        <div className="w-52 overflow-hidden truncate text-ellipsis whitespace-nowrap">{document.title}</div>
      </Link>
      <Button
        className={cn(buttonVariants({ variant: 'default' }), 'h-full items-center border-none p-2 bg-transparent')}
        onClick={() => setShowDeleteAlert(true)}>
        <Trash className={`text-zinc-800 h-4 w-4 ${pathname === `/home/${document.publicId}` && 'text-white'}`} />
      </Button>
      <Alert
        title="Hapus Dokumen"
        desc="Apakah anda yakin ingin menghapus dokumen ini?"
        open={showDeleteAlert}
        onOpenChange={setShowDeleteAlert}
        onClick={async () => {
          const deleted = await deleteDocument(document.publicId);
          if(deleted){
            startTransition(()=>{
              if(pathname.includes(document.publicId)){
                router.push('/home');
              }
              //force cache invalidation
              router.refresh();
            });
            toast({
              title: 'Berhasil menghapus document',
              description: 'Document berhasil dihapus',
              variant: 'default',
            })
            setShowDeleteAlert(false);
          }
        }}
      />
    </div>
  );
};

export default DocumentCard;
