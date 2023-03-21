<script setup>

defineProps(['inicio', 'fin', 'maxLength']);

const emit = defineEmits(['next', 'previus']);

</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button 
            type="button" 
            class="btn btn-primary" 
            @click="emit('previus')"
            :disabled="inicio <= 0"
        >
            Previus {{ inicio }}
        </button>
        <button 
            type="button" 
            class="btn btn-primary" 
            @click="emit('next')"
            :disabled="fin >=maxLength"
        >
            Next {{ fin }}
        </button>
    </div>
</template>