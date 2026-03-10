<script setup>
/**
 * ProjectCard — displays a single project in the dashboard grid.
 * Shows project name, last edited time, and a context menu (⋮).
 */
import { ref, computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const emit = defineEmits(['open', 'rename', 'duplicate', 'delete'])

const menuOpen = ref(false)
const editing  = ref(false)
const editName = ref('')

const lastEdited = computed(() => {
  const d = props.project.updatedAt?.toDate?.() ?? props.project.updatedAt
  if (!d) return ''
  const now  = new Date()
  const diff = now - new Date(d)
  const mins = Math.floor(diff / 60000)
  if (mins < 1)  return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 7) return `${days}d ago`
  return new Date(d).toLocaleDateString()
})

const pageCount = computed(() => {
  return props.project.data?.pages?.length ?? 0
})

const blockCount = computed(() => {
  const pages = props.project.data?.pages ?? []
  return pages.reduce((sum, p) => sum + (p.blocks?.length ?? 0), 0)
})

function startRename() {
  editName.value = props.project.name
  editing.value  = true
  menuOpen.value = false
}

function finishRename() {
  const trimmed = editName.value.trim()
  if (trimmed && trimmed !== props.project.name) {
    emit('rename', props.project.id, trimmed)
  }
  editing.value = false
}
</script>

<template>
  <div class="project-card" @click="!editing && emit('open', project.id)">
    <!-- Thumbnail preview -->
    <div class="project-card__thumb">
      <i class="bi bi-file-earmark-richtext"></i>
      <div class="project-card__stats">
        <span><i class="bi bi-files"></i> {{ pageCount }} page{{ pageCount !== 1 ? 's' : '' }}</span>
        <span><i class="bi bi-bricks"></i> {{ blockCount }} block{{ blockCount !== 1 ? 's' : '' }}</span>
      </div>
    </div>

    <!-- Info row -->
    <div class="project-card__info">
      <div class="project-card__name-row">
        <input
          v-if="editing"
          v-model="editName"
          class="project-card__name-input"
          @blur="finishRename"
          @keydown.enter="finishRename"
          @keydown.escape="editing = false"
          @click.stop
          autofocus
        />
        <span v-else class="project-card__name" :title="project.name">
          {{ project.name }}
        </span>

        <!-- Context menu -->
        <div class="dropdown" @click.stop>
          <button
            class="btn btn-sm btn-link project-card__menu-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <button class="dropdown-item" @click="emit('open', project.id)">
                <i class="bi bi-pencil-square me-2"></i>Open
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="startRename">
                <i class="bi bi-input-cursor-text me-2"></i>Rename
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="emit('duplicate', project.id)">
                <i class="bi bi-copy me-2"></i>Duplicate
              </button>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button class="dropdown-item text-danger" @click="emit('delete', project.id, project.name)">
                <i class="bi bi-trash3 me-2"></i>Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <small class="text-muted">{{ lastEdited }}</small>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s, border-color 0.15s;
  position: relative;
}
.project-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transform: translateY(-2px);
  border-color: #cbd5e1;
}

.project-card__thumb {
  height: 140px;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  position: relative;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}
.project-card__thumb > i {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.project-card__stats {
  display: flex;
  gap: 0.75rem;
  font-size: 0.7rem;
  color: #94a3b8;
}

.project-card__info {
  padding: 0.75rem 1rem;
}

.project-card__name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
}

.project-card__name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #1e293b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.project-card__name-input {
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid #3b82f6;
  border-radius: 4px;
  padding: 1px 6px;
  outline: none;
  flex: 1;
  min-width: 0;
}

.project-card__menu-btn {
  color: #94a3b8;
  padding: 0;
  line-height: 1;
  font-size: 1.1rem;
}
.project-card__menu-btn:hover {
  color: #475569;
}

/* Ensure the Bootstrap dropdown renders above sibling cards */
.project-card :deep(.dropdown-menu) {
  z-index: 1050;
}
</style>
