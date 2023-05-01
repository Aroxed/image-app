<template>
  <div class="image-list">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(image, index) in images" :key="index">
        <img :src="image.url" alt="image.description">
        <p>{{ image.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'My Image List',
      images: [
        {
          url: 'https://via.placeholder.com/150/0',
          description: 'This is the first image',
        },
        {
          url: 'https://via.placeholder.com/150/2550255',
          description: 'This is the second image',
        },
        {
          url: 'https://via.placeholder.com/150/210012',
          description: 'This is the third image',
        },
      ],
    };
  },
};
</script>

<style scoped>
.image-list {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

img {
  max-width: 100%;
  margin-right: 1rem;
}

p {
  margin: 0;
}
</style>
