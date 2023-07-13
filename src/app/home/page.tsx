'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import { TipTapEditorExtensions } from '@/components/editor/extensions';
import { TipTapEditorProps } from '@/components/editor/props';

export default function App() {
  const defaultEditor = useEditor({
    extensions: TipTapEditorExtensions,
    editorProps: TipTapEditorProps,
    content: '',
  });
  return (
    <div
      onClick={() => {
        defaultEditor?.chain().focus().run();
      }}
      className="relative flex min-h-screen w-full cursor-text flex-col items-center p-32">
      <div className=" w-full max-w-screen-lg">
        <h1 className="mb-4 text-6xl md:text-4xl font-bold">Selamat Datang Di Editor</h1>
        <p className="mb-2">Gunakan fitur dibawah atau buat dokumen baru untuk memulai. kamu bisa menggunakan perintah {'/'} atau mencoba membuat markdown shorcuts, yang mana itu dapat memudahkan untuk format text ketika sedang mengetik </p>

        <p className="mb-2">
          Untuk mengujinya, mulai baris baru dan ketik # diikuti spasi untuk mendapatkan judul. Cobalah #, ##, ###, ####, #####, ###### untuk level yang berbeda. Konvensi tersebut disebut sebagai aturan masukan dalam tiptap. Beberapa di
          antaranya diaktifkan secara default. Cobalah {'>'} untuk kutipan blok, *, - atau + untuk daftar bertanda, `foobar` untuk menyoroti kode, atau ~~tildes~~ untuk teks yang dicoret.
        </p>
        <EditorContent editor={defaultEditor} />
      </div>
    </div>
  );
}
