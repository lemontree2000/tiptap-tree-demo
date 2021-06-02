<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <EditorContent :editor="editor"></EditorContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import EditorTree from './components/EditorTree'

export default defineComponent({
  name: 'App',
  components: {
    EditorContent,
  },
  setup() {
    const editor = useEditor({
      content: `
                  <p>I’m running tiptap with Vue.js. 🎉</p> 
                  <tree-node > 
                    <p>第一章</p>
                    <tree-node >
                      <p>第一章-第一节</p>
                      <tree-node >
                        <p>第一节-第一小节</p>  
                      </tree-node>  
                      <tree-node >
                        <p>第二节-第一小节</p>  
                      </tree-node>  
                    </tree-node>
                    <tree-node >
                      <p>第一章-第二节</p>  
                    </tree-node>
                  </tree-node>
                  <p>hello !~!</p>
                  <p></p>
                `,
      extensions: [
        StarterKit,
        EditorTree
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
