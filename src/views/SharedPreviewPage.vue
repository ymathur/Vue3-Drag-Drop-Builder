<script setup>
/**
 * SharedPreviewPage — public read-only project preview.
 *
 * Fetches a project by its share token and renders all pages
 * as a read-only HTML preview using the existing htmlExporter.
 */
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectByShareToken } from '@/services/shareService.js'
import { generateFullHtml } from '@/utils/htmlExporter.js'

const route      = useRoute()
const shareToken = route.params.shareToken

const project    = ref(null)
const loading    = ref(true)
const error      = ref(null)
const activePage = ref(0) // index into pages array

const pages = computed(() => project.value?.data?.pages ?? [])

const previewHtml = computed(() => {
  if (!pages.value.length) return ''
  const page = pages.value[activePage.value]
  if (!page) return ''

  try {
    return generateFullHtml(page.blocks ?? [])
  } catch (_) {
    return '<p style="padding:2rem;color:#888;">Unable to render preview.</p>'
  }
})

onMounted(async () => {
  try {
    const result = await getProjectByShareToken(shareToken)
    if (result) {
      project.value = result
    } else {
      error.value = 'not-found'
    }
  } catch (err) {
    console.error('Failed to load shared project:', err)
    error.value = 'error'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="shared-preview-page">
    <!-- Loading -->
    <div v-if="loading" class="shared-preview-loading">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-3 text-muted">Loading shared project...</p>
    </div>

    <!-- Error: not found -->
    <div v-else-if="error" class="shared-preview-error">
      <i class="bi bi-shield-x display-3 text-muted"></i>
      <h4 class="mt-3">{{ error === 'not-found' ? 'Project Not Found' : 'Something Went Wrong' }}</h4>
      <p class="text-muted">
        {{ error === 'not-found'
          ? 'This link may have expired or the project is no longer shared.'
          : 'We couldn\'t load this project. Please try again later.' }}
      </p>
      <a href="/" class="btn btn-outline-primary mt-2">
        <i class="bi bi-house me-1"></i>Go to App
      </a>
    </div>

    <!-- Project loaded -->
    <template v-else>
      <!-- Top bar -->
      <header class="shared-preview-bar">
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-eye"></i>
          <strong>{{ project.name }}</strong>
          <span class="text-muted small">— Read-only preview</span>
        </div>

        <!-- Page tabs (if multiple pages) -->
        <div v-if="pages.length > 1" class="shared-preview-tabs">
          <button
            v-for="(page, idx) in pages"
            :key="page.id"
            class="btn btn-sm"
            :class="idx === activePage ? 'btn-primary' : 'btn-outline-secondary'"
            @click="activePage = idx"
          >
            {{ page.name }}
          </button>
        </div>

        <div class="d-flex align-items-center gap-2 ms-auto">
          <span class="badge bg-light text-dark">
            <i class="bi bi-columns-gap me-1"></i>Built with Bootstrap Page Builder
          </span>
        </div>
      </header>

      <!-- Preview iframe -->
      <iframe
        class="shared-preview-frame"
        :srcdoc="previewHtml"
        sandbox="allow-scripts allow-same-origin"
        frameborder="0"
      ></iframe>
    </template>
  </div>
</template>

<style scoped>
.shared-preview-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
}

.shared-preview-loading,
.shared-preview-error {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.shared-preview-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1.25rem;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.shared-preview-tabs {
  display: flex;
  gap: 0.25rem;
}

.shared-preview-frame {
  flex: 1;
  width: 100%;
  border: none;
  background: #fff;
}
</style>
