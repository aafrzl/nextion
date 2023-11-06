'use client';

import { BlockNoteEditor, PartialBlock } from '@blocknote/core';

import '@blocknote/core/style.css';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { useTheme } from 'next-themes';

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
      editor.unnestBlock();
    },
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  );
};

export default Editor;