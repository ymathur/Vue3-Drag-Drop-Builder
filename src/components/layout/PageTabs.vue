<script setup>
import { ref, nextTick, computed } from 'vue'
import { useBuilderStore } from '@/stores/builder.js'
import draggable from 'vuedraggable'

const store = useBuilderStore()

// ─── Local pages binding for draggable ─────────────────────
// Using a computed that proxies to store.pages so vuedraggable
// can reorder via v-model without needing direct ref assignment.
const pageList = computed({
  get: () => store.pages,
  set: (val) => store.reorderPages(val),
})

// ─── Rename ────────────────────────────────────────────────
const editingPageId  = ref(null)
const editingName    = ref('')
const renameInputRef = ref(null)

function startRename(page, event) {
  event?.stopPropagation()
  editingPageId.value = page.id
  editingName.value   = page.name
  nextTick(() => {
    if (renameInputRef.value) {
      const el = Array.isArray(renameInputRef.value)
        ? renameInputRef.value[0]
        : renameInputRef.value
      el?.select()
    }
  })
}

function commitRename() {
  if (!editingPageId.value) return
  const name = editingName.value.trim()
  if (name) store.renamePage(editingPageId.value, name)
  editingPageId.value = null
}

function cancelRename() {
  editingPageId.value = null
}

// ─── Context Menu ──────────────────────────────────────────
const menuPageId = ref(null)
const menuPos    = ref({ x: 0, y: 0 })

function openMenu(event, pageId) {
  event.stopPropagation()
  menuPageId.value = pageId
  // Position menu below the click point
  menuPos.value = { x: event.clientX, y: event.clientY + 4 }
}

function closeMenu() {
  menuPageId.value = null
}

function menuRename() {
  const page = store.pages.find(p => p.id === menuPageId.value)
  closeMenu()
  if (page) startRename(page)
}

function menuDuplicate() {
  store.duplicatePage(menuPageId.value)
  closeMenu()
}

function menuDelete() {
  const pageId = menuPageId.value
  closeMenu()
  const page = store.pages.find(p => p.id === pageId)
  if (!page) return
  if (store.pages.length <= 1) return   // should not happen (button disabled), but guard
  const hasContent = page.blocks.length > 0
  if (hasContent && !confirm(`Delete "${page.name}"? All ${page.blocks.length} block(s) on this page will be lost.`)) return
  store.removePage(pageId)
}
</script>

<template>
  <div class="page-tabs-bar">
    <!-- Draggable tab list -->
    <draggable
      v-model="pageList"
      item-key="id"
      class="page-tabs-list"
      handle=".page-tab-drag-handle"
      :animation="150"
      ghost-class="page-tab--ghost"
      chosen-class="page-tab--chosen"
    >
      <template #item="{ element: page }">
        <div
          class="page-tab"
          :class="{ 'page-tab--active': page.id === store.activePageId }"
          :title="page.name"
          @click="store.setActivePage(page.id)"
          @dblclick="startRename(page, $event)"
        >
          <!-- Drag handle -->
          <span class="page-tab-drag-handle" title="Drag to reorder">⠿</span>

          <!-- Page name / inline rename input -->
          <template v-if="editingPageId === page.id">
            <input
              ref="renameInputRef"
              v-model="editingName"
              class="page-tab-rename-input"
              @keydown.enter.prevent="commitRename"
              @keydown.escape.prevent="cancelRename"
              @blur="commitRename"
              @click.stop
            />
          </template>
          <span v-else class="page-tab-name">{{ page.name }}</span>

          <!-- Block count badge -->
          <span
            v-if="page.blocks.length > 0"
            class="page-tab-count"
          >{{ page.blocks.length }}</span>

          <!-- 3-dot context menu trigger -->
          <button
            class="page-tab-menu-btn"
            title="Page options"
            @click.stop="openMenu($event, page.id)"
          >
            <i class="bi bi-three-dots"></i>
          </button>
        </div>
      </template>
    </draggable>

    <!-- Add page button -->
    <button
      class="page-tab-add-btn"
      title="Add new page"
      @click="store.addPage()"
    >
      <i class="bi bi-plus-lg"></i>
    </button>
  </div>

  <!-- Context Menu — teleported to body to avoid overflow clipping -->
  <Teleport to="body">
    <!-- Invisible overlay to close menu on outside-click -->
    <div
      v-if="menuPageId"
      class="page-tab-menu-overlay"
      @click="closeMenu"
    ></div>

    <div
      v-if="menuPageId"
      class="page-tab-menu"
      :style="{ top: menuPos.y + 'px', left: menuPos.x + 'px' }"
    >
      <button @click="menuRename">
        <i class="bi bi-pencil"></i>Rename
      </button>
      <button @click="menuDuplicate">
        <i class="bi bi-copy"></i>Duplicate
      </button>
      <div class="page-tab-menu-divider"></div>
      <button
        class="page-tab-menu-delete"
        :disabled="store.pages.length <= 1"
        @click="menuDelete"
      >
        <i class="bi bi-trash3"></i>Delete
      </button>
    </div>
  </Teleport>
</template>
