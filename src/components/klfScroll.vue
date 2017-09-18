<template>
    <div class="allSort">
       <div class="sortMenu clearfix">
        <ul class="sortMenu-ul" >
          <li class="cell" v-for="item in sortMenu">
            <a href="">{{item.sortname}}</a>
          </li>
        </ul>
        <div class="all" v-on:click="subitemsExpanded=!subitemsExpanded"><i class="el-icon-menu"></i>
        </div>
        <div v-show="subitemsExpanded" class="pull-down">
          <ul class="pull-down-sort">
            <li class="" v-for="pulldow in sortName">
              <a href="">{{pulldow.sortname}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'allSort',
    data () {
        return {
          sortMenu: [
            { sortname: '全部' },
            { sortname: '家用电器' },
            { sortname: '大家电' },
            { sortname: '生活用品' },
            { sortname: '食品' },
            { sortname: '美妆' },
            { sortname: '书籍' },
            { sortname: '洗护用品' },
            { sortname: '母婴用品' },
            { sortname: '家居' }
          ],
          sortName: [
            { sortname: '家用电器' },
            { sortname: '母婴' },
            { sortname: '百货' },
            { sortname: '珠宝配饰' },
            { sortname: '运动户外' },
            { sortname: '食品' },
            { sortname: '美妆' },
            { sortname: '家装' },
            { sortname: '家居家纺' },
            { sortname: '鲜花宠物' },
            { sortname: '图书乐器' },
            { sortname: '生活服务' },
            { sortname: '游戏动漫' }
          ],
          subitemsExpanded: false
        }
    }
}
</script>
<style>
</style>