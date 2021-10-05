import { ref } from 'vue'

function useCount (params) {
  const count = ref(0)
  const handleMin = () => {
    count.value--
  }
  const handleAdd = () => {
    count.value++
  }
  return {
    count,
    handleMin,
    handleAdd
  }
}
// 自定义hooks
export { useCount }
