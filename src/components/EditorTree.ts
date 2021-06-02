import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import EditorTreeNode from './EditorTreeNode.vue'

export default Node.create({
    name: 'treeNode',

    group: 'block',

    content: 'block+',
    draggable: true,
    addAttributes() {
        return {
            visible: {
                default: false,
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'tree-node',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['tree-node', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return VueNodeViewRenderer(EditorTreeNode)
    },
})