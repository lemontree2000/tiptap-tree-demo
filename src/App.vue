<template>
  <EditorContent :editor="editor"></EditorContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import { TreeNodeContent, AntdTreeContent } from './config'
import StarterKit from '@tiptap/starter-kit'
import EditorTree from './components/EditorTree'
import AntdTree from './components/AntdTree'


export default defineComponent({
  name: 'App',
  components: {
    EditorContent,
  },
  setup() {
    const editor = useEditor({
      content: AntdTreeContent,
      extensions: [
        StarterKit,
        EditorTree,
        AntdTree
      ],
    })
    return {
      editor
    }
  }
})
</script>

<style>
.ProseMirror {
  border: 1px solid #d7d7d7;
  padding: 0 4px;
  min-height: 300px;
}
p {
  margin: 0;
}
</style>
