<template>
  <article class="search-analysis">
    <section>
      <h1>
        상세분석
      </h1>
      <div>
        PC정보
      </div>
      <md-tabs>
        <md-tab id="process-tree" md-label="프로세스 트리">
          <search-analysis-process></search-analysis-process>
        </md-tab>
        <md-tab id="network-tree" md-label="네트워크 트리">
          <search-analysis-network></search-analysis-network>
        </md-tab>
      </md-tabs>
    </section>
  </article>
</template>
<script>
import SearchAnalysisProcess from "./Search.analysis.process";
import SearchAnalysisNetwork from "./Search.analysis.network";
export default {
  name: "Detailed_analysis",
  extends: {},
  props: {},
  data() {
    return {};
  },
  components: {
    SearchAnalysisProcess,
    SearchAnalysisNetwork
  },
  methods: {}
};
</script>
<style lang='scss'>
.search-analysis {
  .sub-pannel{
    margin-top:40px;
  }
  .sub-title {
    font-size: 16px;
    margin-bottom: 0.3em;
  }
}
</style>
