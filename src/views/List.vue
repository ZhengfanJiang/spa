<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul  v-infinite-scroll="load"
         infinite-scroll-disabled="disabled"
         infinite-scroll-distance="10"
    >
      <li v-for="item in dataArr" class="list-item" :key="item.id">{{ item.body }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
<!--    <p v-if="noMore">no more</p>-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'List',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters('list', ['dataArr']),
    disabled () {
      return this.loading || this.noMore
    },
    noMore () {
      return this.dataArr.length > 1000
    }
  },
  methods: {
    ...mapActions('list', ['getData', 'addData']),
    load () {
      this.loading = true
      console.log('load')
      // await this.$nextTick()
      // this.addData(5)
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  },
  async mounted () {
    await this.getData()
  }
}
</script>

<style scoped lang="scss">
  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
</style>
