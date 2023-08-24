<template>
  <v-container fluid class="fill-height pa-0 overflow-x-auto">
    <v-sheet
      class="d-flex flex-column justify-start"
      width="100%"
      height="100%"
    >
      <AppBarMain :setting="{ color: '', dark: false }"> </AppBarMain>

      <v-sheet class="flex-grow-1 mt-3 px-3">
        <LessonCard
          v-for="lesson in lessons"
          :key="lesson.id"
          :lessonInfo="lesson"
          class="mb-3"
        />
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'main',
})
export default class MaterialsPage extends Vue {
  lessons: NotWellDefinedObject[] = [
    {
      id: 1,
      title: 'Elementary Mathematics',
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ipsum fuga, corrupti eligendi obcaecati accusantium sapiente, nisi illum quaerat tempora dolorum ex! Tempora, quam tempore eos accusantium aut mollitia quisquam.`,
      coverImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfweBeDoE4sjTE4CnAWc_NsnzSQvH2-SArlUyhBddX6TDzFSjo8asPXr68ZkJMbDUx0bA&usqp=CAU',
    },
    {
      id: 2,
      title: 'Elementary Mathematics',
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ipsum fuga, corrupti eligendi obcaecati accusantium sapiente, nisi illum quaerat tempora dolorum ex! Tempora, quam tempore eos accusantium aut mollitia quisquam.`,
      coverImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfweBeDoE4sjTE4CnAWc_NsnzSQvH2-SArlUyhBddX6TDzFSjo8asPXr68ZkJMbDUx0bA&usqp=CAU',
    },
    {
      id: 3,
      title: 'Elementary Mathematics',
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ipsum fuga, corrupti eligendi obcaecati accusantium sapiente, nisi illum quaerat tempora dolorum ex! Tempora, quam tempore eos accusantium aut mollitia quisquam.`,
      coverImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfweBeDoE4sjTE4CnAWc_NsnzSQvH2-SArlUyhBddX6TDzFSjo8asPXr68ZkJMbDUx0bA&usqp=CAU',
    },
  ]
}
</script>
