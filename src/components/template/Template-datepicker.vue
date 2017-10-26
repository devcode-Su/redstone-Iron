<template>
<div class="template-datepickker" v-if="picker">
  <date-picker :date="startDate" :option="dayoption"></date-picker> ~ <date-picker :date="endDate" :option="dayoption"></date-picker>

</div>
<div class="template-datepickker" v-else>
  <date-picker :date="startDate" :option="timeoption"></date-picker> ~ <date-picker :date="endTime" :option="timeoption"></date-picker>
</div>
</template>
<script>
import myDatepicker from "vue-datepicker/vue-datepicker-es6.vue";
import {
  // dateToYear,
  // dateToMonth,
  // dateToWeek,
  dateToDay,
  dateToTime
  // dateBeautify
} from "@/utils/dateFormatter";
export default {
  name: "",
  extends: {},
  props: {
    picker : {
      type : Boolean
    }
  },
  data() {
    return {
      startDate: {
        time: ""
      },
      endDate: {
        time: dateToDay(new Date())
      },
      endTime: {
        time: dateToTime(new Date())
      },
      dayoption: {
        type: "day",
        week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        month: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        format: "YYYY-MM-DD",
        placeholder: "when?",
        buttons: {
          ok: "Ok",
          cancel: "Cancel"
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: false // as true as default
      },
      timeoption: {
        type: "min",
        week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        month: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        format: "YYYY-MM-DD HH:mm",
        placeholder: "when?"
      },
      multiOption: {
        type: "multi-day",
        week: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        month: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        format: "YYYY-MM-DD HH:mm"
      },
      limit: [
        {
          type: "weekday",
          available: [1,2,3,4,5,6,7,8]
        },
        {
          type: "fromto",
          from: "2016-02-01",
          to: "2016-02-20"
        }
      ]
    };
  },
  components: {
    "date-picker": myDatepicker
  },
  methods: {}
};
</script>
<style lang='scss'>
.datepickbox input {
  display: inline-block;
  padding: 6px;
  line-height: 22px;
  font-size: 16px;
  border: 2px solid #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  color: #5f5f5f;
}
.hour-item,
.min-item {
  line-height: 1 !important;
}
</style>
