<template>
  <article class="system-admin">
    <h1>
      관리자 설정
    </h1>
    <form>
      <fieldset>
        <legend>센서 DB 사이즈 설정</legend>
        <md-input-container>
          <label>센서 DB 사이즈</label>
          <md-input type="number"></md-input> MB
        </md-input-container>
        <md-input-container>
          <label>디스크 공간 부족시</label>
          <md-input type="number"></md-input> %
        </md-input-container>
      </fieldset>
      <fieldset>
        <legend>센서 DB 서버 전송</legend>
        <div class="field-group">
          <md-radio id="reactive" name="reactive" md-value="reactiveSubmit" v-model="radio" class="md-primary">실시간 전송</md-radio>
        </div>
        <div class="field-group">
          <md-radio id="reactive" name="reactive" md-value="cycle" v-model="radio" class="md-primary">주기선택</md-radio>
          <md-input-container>
            <label for="timeset">Movie</label>
            <md-select name="timeset" id="timeset" v-model="timeset">
              <md-option value="fight_club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather_ii">Godfather II</md-option>
              <md-option value="godfather_iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp_fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-input-container>
          <md-checkbox id="settime" name="settime" v-model="settime" class="md-primary">특정 시간 선택</md-checkbox>
          <md-input-container>
            <label for="starttime">Movie</label>
            <md-select name="starttime" id="starttime" v-model="starttime">
              <md-option value="fight_club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather_ii">Godfather II</md-option>
              <md-option value="godfather_iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp_fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-input-container>
          <span class="insert-text"> 시 ~ </span>
          <md-input-container>
            <label for="endtime">Movie</label>
            <md-select name="endtime" id="endtime" v-model="endtime">
              <md-option value="fight_club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather_ii">Godfather II</md-option>
              <md-option value="godfather_iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp_fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-input-container>
        </div>
      </fieldset>
      <fieldset>
        <legend>센서 DB 사이즈 설정</legend>
        <div class="field-group">
        <md-checkbox id="settime" name="settime" v-model="settime" class="md-primary">특정 시간 선택</md-checkbox>
        <md-input-container>
            <label for="timeset">Movie</label>
            <md-select name="timeset" id="timeset" v-model="timeset">
              <md-option value="fight_club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather_ii">Godfather II</md-option>
              <md-option value="godfather_iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp_fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-input-container>
        </div>
      </fieldset>
    </form>
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
.field-group {
  display: flex;
  align-items: center;
  .md-radio {
    min-width: 120px;
    margin:0;
  }
  .md-input-container {
    width: 15%;
    &.md-has-select{
      min-height:auto;
      padding-top:0;
      margin:0
    }
  }
  .insert-text {
    padding: 0 10px;
  }
}
</style>
