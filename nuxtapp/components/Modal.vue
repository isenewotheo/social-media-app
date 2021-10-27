<template>
    <div class="modal">
        <div class="modal-content">
            <button @click.prevent="$emit('closeModal')" class="close-modal">X</button>
            <h2><slot name="modal-header"></slot></h2>
            <slot name="modal-body"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>