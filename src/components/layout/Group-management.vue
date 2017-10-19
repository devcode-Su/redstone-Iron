<template>
  <div class="group-management">
    <h1>
      그룹관리
    </h1>
    <md-list>
      <md-list-item>
        <md-icon>plus</md-icon>
        <span>전사</span>
        <md-list-expand>
          <md-list>
            <md-list-item md-expand-multiple>
              <md-icon>whatshot</md-icon>
              <span>News</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">World</md-list-item>
                  <md-list-item class="md-inset">Americas</md-list-item>
                  <md-list-item class="md-inset">Europe</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>
            <md-list-item md-expand-multiple>
              <md-icon>whatshot</md-icon>
              <span>News</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">World</md-list-item>
                  <md-list-item class="md-inset">Americas</md-list-item>
                  <md-list-item class="md-inset">Europe</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>
            <md-list-item md-expand-multiple>
              <md-icon>whatshot</md-icon>
              <span>News</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">World</md-list-item>
                  <md-list-item class="md-inset">Americas</md-list-item>
                  <md-list-item class="md-inset">Europe</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </div>
</template>
<script>

export default {
  name: 'GroupManagement',
  extends: {},
  props: {},
  data() {
    return {

    }
  },
  components: {

  },
  methods: {

  },

}
</script>
<style lang='scss' scoped>

</style>
