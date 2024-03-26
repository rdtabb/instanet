import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

import { RichEditor } from './_components/rich-editor'

export default function CreatePost() {
    return (
        <main className="h-full flex flex-col  justify-center p-6">
            <Label className="pb-3">Text of your post</Label>
            <RichEditor />
        </main>
    )
}
