<template>
    <div>
      <table>
        <tr>
          <td>mark</td>
          <td>content</td>
          <td>remove</td>
        </tr>
        <tr v-for="(item, index) in dataArr" :key="item.id">
          <td>{{index}}</td>
          <td>{{item.context}}</td>
          <td>X</td>
        </tr>
      </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'List',
  computed: {
    ...mapGetters('list', ['dataArr'])
  },
  methods: {
    ...mapActions('list', ['getData'])
  },
  async mounted () {
  }
}
</script>

<style scoped lang="scss">
</style>
