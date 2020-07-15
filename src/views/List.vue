<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in dataArr" class="list-item" :key="index">
      <div class="post-mark" @click="mark({item, index})"> mark</div>
      <div class="content-body">{{ item.body }}</div>
      </li>
    </ul>
    <el-button v-if="!noMore || this.dataArr.length === 0"  @click="load" :loading="isLoading" >Load More</el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import types from '../store/mutation-types'
export default {
  name: 'List',
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('list', ['dataArr']),
    noMore () {
      return this.dataArr && this.dataArr.length > 1000
    }
  },
  methods: {
    ...mapActions('list', ['getData', 'addData']),
    ...mapMutations('list', {
      mark: types.MARK_DATA
    }),
    async load () {
      this.isLoading = true
      const random = Math.floor(Math.random() * Math.floor(100))
      await this.addData(random)
      this.isLoading = false
    }
  },
  async mounted () {
    if (this.dataArr.length === 0) {
      await this.getData()
    }
  }
}
</script>

<style scoped lang="scss">
  .list {
    margin: 0 auto;
    width: 80%;
    padding-bottom: 100px;
  }
  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 10px;
    box-shadow: -1px -2px 5px #e4e4e4;
    .post-mark {
      color: green;
      margin-right: 10px;
      margin-left: 5px;
      cursor: pointer;
      &:hover {
        color: brown;
      }
    }
    .content-body {
      width: 100%;
    }
  }
</style>
