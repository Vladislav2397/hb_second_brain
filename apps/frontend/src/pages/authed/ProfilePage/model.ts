import { useMeQuery, useMeUpdateMutation } from '@/shared/api/queries/auth'
import { ref, watch } from 'vue'

export const useProfileModel = () => {
    const { data, isLoading } = useMeQuery()
    const meUpdateMutation = useMeUpdateMutation()

    const name = ref('')

    watch(
        data,
        val => {
            if (!val) return

            name.value = val.name
        },
        {
            immediate: true,
        },
    )

    function save() {
        return meUpdateMutation.mutateAsync({
            name: name.value,
        })
    }

    return {
        name,
        isLoading,
        save,
    }
}
