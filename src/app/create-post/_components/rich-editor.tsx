'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import css from './rich-editor.module.css'

export const RichEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit]
    })

    return (
        <div className={css.editorContainer}>
            <EditorContent editor={editor} />
        </div>
    )
}
