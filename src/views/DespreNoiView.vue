<template>
    <div class="flex justify-content-center">
        <div>
            Pagina in progres pentru {{ courseId }}...
            <div class="flex pl-2 justify-content-center">
                <i class="pi pi-spin pi-cog" style="font-size: 1.5rem"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'CursuriView',
    setup() {
        const route = useRoute();
        return {
            courseId: route.params.courseId
        };
    }
});
</script>
