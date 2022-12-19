import React, { useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Button } from 'semantic-ui-react'

function PostEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

    function save() {
        const rawContent = convertToRaw(editorState.getCurrentContent())
        const contentString = JSON.stringify(rawContent)

        // TODO: write to database
    }

    return (
        <div>
            <Button onClick={save}>Save Post</Button>
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
            />
        </div>
    )
}

export default PostEditor
