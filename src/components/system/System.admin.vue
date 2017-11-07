<template>
  <article class="system-admin">
    <section>
      <h1>
        관리자 설정
      </h1>
      <form>
        <fieldset>
          <legend>센서 DB 사이즈 설정</legend>
          <div class="field-group">
            <md-input-container md-inline>
              <label>DB size</label>
              <md-input type="number"></md-input>
              <span>MB</span>
            </md-input-container>
            <md-input-container md-inline>
              <label>Disk</label>
              <md-input type="number"></md-input>
              <span>%</span>
            </md-input-container>
          </div>
        </fieldset>
        <fieldset>
          <legend>센서 DB 서버 전송</legend>
          <div class="field-group">
            <div class="field-group-inner">
              <md-radio id="reactive" name="reactive" md-value="reactiveSubmit" v-model="radio" class="md-primary">실시간 전송</md-radio>
            </div>
            <div class="field-group-inner">
              <md-radio id="reactive" name="reactive" md-value="cycle" v-model="radio" class="md-primary">주기선택</md-radio>
              <md-input-container class="settime">
                <label for="timeset">시간선택</label>
                <md-select name="timeset" id="timeset" v-model="timeset">
                  <md-option value="fight_club">1시간</md-option>
                  <md-option value="godfather">2시간</md-option>
                  <md-option value="godfather_ii">3시간</md-option>
                </md-select>
              </md-input-container>
              <md-checkbox id="settime" name="settime" v-model="settime" class="md-primary settime">특정 시간 선택</md-checkbox>
              <md-input-container>
                <label for="starttime">00</label>
                <md-select name="starttime" id="starttime" v-model="starttime">
                  <md-option value="fight_club">00시</md-option>
                  <md-option value="godfather">01시</md-option>
                  <md-option value="godfather_ii">24시</md-option>
                </md-select>
              </md-input-container>
              <span class="insert-text"> 시 ~ </span>
              <md-input-container>
                <label for="endtime"></label>
                <md-select name="endtime" id="endtime" v-model="endtime">
                  <md-option value="fight_club">01</md-option>
                  <md-option value="godfather">12시</md-option>
                  <md-option value="godfather_ii">24시</md-option>
                </md-select>
              </md-input-container>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>센서 DB 사이즈 설정</legend>
          <div class="field-group flex">
            <md-checkbox id="settime2" name="settime2" class="md-primary settime2"></md-checkbox>
            <md-input-container>
              <label for="timeset">시간</label>
              <md-select name="timeset" id="timeset" v-model="timeset">
                <md-option value="fight_club">1시간</md-option>
                <md-option value="godfather">2시간</md-option>
                <md-option value="pulp_fiction">12시간</md-option>
                <md-option value="scarface">1일</md-option>
              </md-select>
            </md-input-container>
            <span>
              이상 미접속 시 삭제
            </span>
          </div>
        </fieldset>
      </form>
    </section>
  </article>
</template>
<script>
export default {
  name: "Admin_set",
  extends: {},
  props: {},
  data() {
    return {
      radio: "",
      timeset: "",
      settime: "",
      starttime: "",
      endtime: ""
    };
  },
  components: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
fieldset {
  margin-bottom: 40px;
}

.field-group {
  &.flex,
  .field-group-inner {
    display: flex;
    align-items: center;
    .settime {
      margin-right: 25px;
    }
    &.flex {
      .md-checkbox,
      .md-has-select {
        margin-right: 10px;
      }
    }
  }
  .md-has-select {
    max-width: 90px;
  }
  .md-select {
    min-width: auto;
  }
  .md-radio {
    min-width: 120px;
  }
  .insert-text {
    padding: 0 10px;
  }
}
</style>
