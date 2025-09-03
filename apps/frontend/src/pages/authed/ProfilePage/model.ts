import { useViewer } from '@/entities/viewer/use-viewer'
import { useMeUpdateMutation } from '@/shared/api/queries/auth'
import { ref } from 'vue'

export const useProfileModel = () => {
    const { viewer } = useViewer()
    const meUpdateMutation = useMeUpdateMutation()

    const name = ref(viewer.value.name)

    function save() {
        return meUpdateMutation.mutateAsync({
            name: name.value,
        })
    }

    return {
        name,
        save,
    }
}
