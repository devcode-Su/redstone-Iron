<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
        <sort-button :categorize="categorize" @btnSortClick="sortData"></sort-button>
        <input class="Search__input" @keyup.enter="requestData" placeholder="npm package name" type="search" name="search" v-model="package">
        <button class="Search__button" @click="requestData()">Find</button>
        <span class="Search__icon" @click="toggleSettings()">설정
        </span>
      </div>
      <div class="Search__settings" v-if="showSettings">
        <!-- <datepicker input-class="Search__input" placeholder="Start Date" v-model="periodStart" name="start-date" v-on:selected="validateDataRequest()"></datepicker>
        <datepicker input-class="Search__input" placeholder="End Date" v-model="periodEnd" name="end-date" v-on:selected="validateDataRequest()"></datepicker> -->
      </div>

      <div class="error-message" v-if="showError">
        {{ errorMessage }}
      </div>
      <hr>
      <div v-if="loading" class="loading">
        🔧 Building Charts ...
        <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
      </div>
      <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
          Downloads per Day
          <span>{{ formattedPeriod }}</span>
          <hr>
        </div>
        <div class="Chart__content">
          <line-chart v-if="loaded" :chart-data="downloads" :chart-labels="labels"></line-chart>
        </div>
      </div>

      <!-- <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
        Downloads per Week <span>{{ formattedPeriod }}</span>
        <hr>
        </div>
        <div class="Chart__content">
        <line-chart v-if="loaded" :chart-data="downloadsWeek" :chart-labels="labelsWeek"></line-chart>
        </div>
        </div>

        <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
        Downloads per Month <span>{{ formattedPeriod }}</span>
        <hr>
        </div>
        <div class="Chart__content">
        <line-chart v-if="loaded" :chart-data="downloadsMonth" :chart-labels="labelsMonth"></line-chart>
        </div>
        </div>

        <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
        Downloads per Year <span>{{ formattedPeriod }}</span>
        <hr>
        </div>
        <div class="Chart__content">
        <line-chart v-if="loaded" :chart-data="downloadsYear" :chart-labels="labelsYear"></line-chart>
        </div>
        </div> -->
    </div>
  </div>
</template>

<script>
// import Datepicker from "vue-datepicker";

import LineChart from "@/components/chartjs/LineChart-e";

import {
  dateToYear,
  dateToMonth,
  dateToWeek,
  dateToDay,
  dateToTime,
  dateBeautify
} from "@/utils/dateFormatter";

import { removeDuplicate, groupData } from "@/utils/downloadFormatter.js";
import SortButton from "../template/Sort-button";
export default {
  components: {
    LineChart,
    // Datepicker,
    SortButton
  },
  data() {
    return {
      package: null,
      packageName: "",
      loaded: false,
      loading: false,
      downloads: [],
      // downloadsYear: [],
      // downloadsMonth: [],
      // downloadsWeek: [],
      labels: [],
      // labelsYear: [],
      // labelsMonth: [],
      // labelsWeek: [],
      showError: false,
      showSettings: false,
      errorMessage: "Please enter a package name",
      periodStart: "",
      periodEnd: new Date(),
      rawData: "",
      totalDownloads: "",
      categorize: ["일일", "주간", "월간"]
    };
  },
  mounted() {
    // this.requestData();
    // if (this.$route.params.package) {
    //   console.log(this.$route.params.package)
    //   this.package = this.$route.params.package;
    //   this.requestData();
    // }
  },
  computed: {
    _endDate() {
      return dateToDay(this.periodEnd);
    },
    _startDate() {
      return dateToDay(this.periodStart) === "Invalid date"
        ? dateToDay(this.periodEnd.setDate(this.periodEnd.getDate() - 1))
        : dateToDay(this.periodStart);
    },
    period() {
      console.log(this.periodStart);
      return this.periodStart
        ? `${this._startDate}:${this._endDate}`
        : `${this._startDate}:${this._endDate}`;
    },
    formattedPeriod() {
      return this.periodStart
        ? `${dateBeautify(this._startDate)} - ${dateBeautify(this._endDate)}`
        : "last-month";
    }
  },
  methods: {
    resetState() {
      this.loaded = false;
      this.showError = false;
    },
    requestData(n) {
      console.log(this._endDate, this._startDate);
      if (
        this.package === null ||
        this.package === "" ||
        this.package === "undefined"
      ) {
        this.showError = true;
        return;
      }
      if (n === undefined) n = 0;
      console.log(n);
      this.resetState();
      this.loading = true;
      console.log(this.period);
      this.$http
        .get(
          `https://api.npmjs.org/downloads/range/${this.period}/${this.package}`
        )
        .then(response => {
          console.log(response);
          this.rawData = response.data.downloads;
          this.downloads = response.data.downloads.map(
            entry => entry.downloads
          );
          this.labels = response.data.downloads.map(entry => entry.day);
          this.packageName = response.data.package;
          this.totalDownloads = this.downloads.reduce(
            (total, download) => total + download
          );
          console.log(this.rawData);
          //console.log(this.downloads);
          console.log(this.labels);
          //console.log(this.packageName);
          //console.log(this.totalDownloads);
          //this.setURL();
          this.groupDataByDate(n);
          this.loaded = true;
          this.loading = false;
          //console.log(response.data)
        })
        .catch(err => {
          this.errorMessage = err.response.data.error;
          this.showError = true;
        });
    },
    validateDataRequest() {
      //console.log("ValidateData");
      if (this.packageName !== "" && this.periodStart !== "") {
        this.requestData();
      }
    },
    sortData(sortNum) {
      //console.log(sortNum)
      //const select = sortNum.target
      //this.restartProgress()
      //console.log(this.responeData[sortNum])
      //this.datacollection = 'change'
      //this.chartNum = sortNum
      //console.log(sortNum);
      this.requestData(sortNum);
    },
    groupDataByDate(c) {
      console.log(c);
      if (c === 0) return;
      //this.formatYear();
      //this.formatMonth();
      this.formatWeek();
    },
    formatYear() {
      this.labelsYear = this.rawData
        .map(entry => dateToTime(entry.day))
        .reduce(removeDuplicate, []);
      this.downloadsYear = groupData(this.rawData, dateToYear);
    },
    formatMonth() {
      this.labelsMonth = this.rawData
        .map(entry => dateToMonth(entry.day))
        .reduce(removeDuplicate, []);
      this.downloadsMonth = groupData(this.rawData, dateToMonth);
    },
    formatWeek() {
      //this.labelsWeek = this.rawData;
      console.log();
      this.labels = this.rawData
        .map(entry => dateToTime(entry.day))
        .reduce(removeDuplicate, []);
      this.downloadsWeek = groupData(this.rawData, dateToWeek);
    },
    // setURL() {
    //   history.pushState(
    //     { info: `npm-stats ${this.package}` },
    //     this.package,
    //     `/#/${this.package}`
    //   );
    //   this.$ga.page({
    //     page: `/#/${this.package}`,
    //     title: this.package,
    //     location: window.location.href
    //   });
    toggleSettings() {
      this.showSettings = !this.showSettings;
      // this.$ga.event({
      //   eventCategory: "Settings",
      //   eventAction: "toggle"
      // });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid color(solitude);
  margin: 1em 0;
  padding: 0;
}
.content {
  background: color(ghost-white);
  min-height: calc(100vh - 180px);
}

.title {
  text-align: center;
  color: color(fjord);
}
.Chart__title {
  color: color(fjord);
  margin-bottom: rem(40);
  font-weight: 600;
  font-size: rem(16);

  > span {
    font-weight: 400;
    color: color(robin-egg-blue);
    font-size: rem(16);
    margin-left: rem(25);
  }
}

.loading {
  text-align: center;
  color: color(fjord);
  font-size: rem(18);
}

.error-message {
  text-align: center;
  color: color(robin-egg-blue);
}

.sk-cube-grid {
  width: 40px;
  height: 40px;
  margin: 100px auto;
}

.sk-cube-grid .sk-cube {
  width: 33%;
  height: 33%;
  background-color: color(robin-egg-blue);
  float: left;
  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}
.sk-cube-grid .sk-cube1 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube2 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.sk-cube-grid .sk-cube4 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube5 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube6 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube7 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.sk-cube-grid .sk-cube8 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}
</style>
