<template>
  <div v-if="product" class="modal">
    <div class="modal-content">
      <img
        :src="product.image || '/path/to/default-image.jpg'"
        :alt="product.title"
      />
      <div class="details">
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }}元/{{ product.unit }}</p>
        <p>{{ product.description }}</p>
      </div>
      <button @click="closeModal">关闭</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details {
  margin-top: 10px;
  text-align: center;
}
</style>
