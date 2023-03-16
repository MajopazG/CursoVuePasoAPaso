<script setup>

//defineProps(["id","title","body","colorText"]);
// const props = defineProps(["id","title","body","colorText"]);
// console.log(props.title);
// console.log(props.id);

defineProps({
    title: String,
    id: Number,
    body: {
        type: String,
        default: "Sin descripcion"
    },
})

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 
                class="card-title"
            >
                {{ id }} - {{ title }}
            </h5>
            <p>{{ body }}</p>
            <button
                class="btn btn-sm btn-outline-primary"
                @click="$emit('fijarFavorito', title)"
            >
                Mi Favorito
            </button>
        </div>
    </div>
</template>