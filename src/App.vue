<script setup>
import { ref } from "vue";
import axios from "axios";
const handleFileUpload = (e) => {
  file.value = e.target.files[0];
};

const uploadFile = async () => {
  const formData = new FormData();
  formData.append("file", file.value);
  const result = await axios.post("http://localhost:3001/read-file", formData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(result.data);
};
const file = ref(null);
</script>

<template>
  <input type="file"  @change="handleFileUpload($event)" />
  <button v-on:click="uploadFile()">Upload</button>
</template>
