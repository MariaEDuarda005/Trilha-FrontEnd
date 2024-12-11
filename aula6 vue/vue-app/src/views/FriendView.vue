<script setup lang="ts">
import UserCard from '@/components/UserCard.vue';
import type { User } from '@/models/User';
import { getUser } from '@/service/UserService';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const username = route.params.username;
const user = ref<User>();

onMounted(async () => {
  user.value = await getUser(username as string);
  window.scrollTo({
    top: 0
  })
})

</script>

<template>
   <el-page-header @back="router.back()">
    <template #content>
      <span>Amigos do {{ user?.name }}</span>
    </template>
  </el-page-header>

  <div class="friendzone">
    <UserCard v-for="user in user?.friends" :user="user" :key="user.id"></UserCard>
  </div>
</template>

<style>
.friendzone{
  background-color: rgb(81, 76, 233);
}
</style>