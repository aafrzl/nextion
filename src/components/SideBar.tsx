import { ScrollArea } from './ui/scroll-area';
import CreateDocButton from './CreateDocButton';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import DocumentCard from './DocumentCard';

export type DocumentType = {
  publicId: string;
  title: string;
};

//fetch documents of current user from database
async function fetchDocuments(ownerId: string) {
  return await prisma.documents.findMany({
    where: {
      ownerId: ownerId,
    },
    select: {
      publicId: true,
      title: true,
    },
  });
}

export default async function SideBar() {
  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  const documents = await fetchDocuments(userId);

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-72 flex-col bg-gray-200">
      <ScrollArea className="flex h-screen w-full flex-col items-start justify-start">
        <CreateDocButton />
        {documents.map((document, index) => (
          <DocumentCard
            key={index}
            document={document}
          />
        ))}
      </ScrollArea>
    </aside>
  );
}
