import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import AntdTree from './AntdTree.vue'

export default Node.create({
    name: 'AntdTree',

    group: 'block',

    addAttributes() {
        return {
         
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
        return ['antd-tree', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return VueNodeViewRenderer(AntdTree)
    },
})