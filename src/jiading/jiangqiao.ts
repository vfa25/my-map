/*
 * @Author: 张鑫鑫 xinxin.zhang@ersoft.cn
 * @Date: 2023-08-25 13:40:52
 * @LastEditors: 张鑫鑫 xinxin.zhang@ersoft.cn
 * @LastEditTime: 2023-08-25 17:29:12
 * @FilePath: /my-map/src/jiading/jiangqiao.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { TMarkerType, IPosition, IClassify } from "../types";

const dataList: IClassify[] = [
  {
    name: "产业",
    markType: 'loc_blue',
    labelStyle: { color: "blue", fontSize: "12px", borderColor: "blue" },
    positions: [
      {
        position: { lng: 121.347272, lat: 31.275083 },
        labelContent: "蔚来（汽车）",
        infoTitle: "蔚来国际总部（未落地）",
        infoContent: `
					时间：2022-10-25项目签约<br/>
					用地规模：用地面积约98.8亩，可建面积约17.8万平方米<br/>
					功能及用工：园区包含研发、办公、展厅等全功能布局，是蔚来整车出口等国际业务的落脚点。
							项目建成后，将引进高端人才10000人，新增从业人员约2000人，其中大专（或职高）以上从业人员占比约90%。<br/>
					信息来源：<a href="https://mp.weixin.qq.com/s/2KkgUxiZG8xCjbGaO627Aw" target="_blank">【上海嘉定】公众号</a>
        `,
      },
      {
        position: { lng: 121.333544, lat: 31.239643 },
        labelContent: "福隆（医疗器械）",
        infoTitle: "福隆集团中国总部（未落地）",
        infoContent: `
					时间：2022-12-6摘牌<br/>
					用地规模：位于江桥镇虹桥新慧总部湾园区内，总占地面积24亩，拟建建筑面积约3.2万平方米。<br/>
					功能：规划建设集研发中心、检测中心、技术综合部、贸易部、展示中心、结算中心为一体的福隆集团中国总部项目。<br/>
					信息来源：<a href="https://mp.weixin.qq.com/s/tHs_I3vIQFLw8_etMevdAQ" target="_blank">【上海嘉定】公众号</a>
        `,
      },
      {
        position: { lng: 121.337561, lat: 31.240382 },
        labelContent: "华住（酒店）",
        infoTitle: "华住全球总部（已落地）",
        infoContent: `
					2023-1-1开园<br/>
					用地规模：占地面积3万多平方米，总建筑面积约8.4万平方米。<br/>
					功能及用工：园区兼具华住集团办公总部、产业互联网研创基地、财务结算中心、华住大学（培训中心）及示范酒店等多种功能，可容纳2500人集中办公。
							其承载的产业互联网研创职能，将进一步加快集团ICT技术的研发和创新，促进酒店行业的技术、服务、管理变革。<br/>
					信息来源：<a href="https://mp.weixin.qq.com/s/62ENFNgIzhDhIm3EFyDnLw" target="_blank">【上海嘉定】公众号</a>
        `,
      },
      {
        position: { lng: 121.322823, lat: 31.235335 },
        labelContent: "驴妈妈（旅游）",
        infoTitle: "驴妈妈全球总部（已落地）",
        infoContent: `
					2018-12-3落户<br/>
					规模：驴妈妈有近3000名企业员工入驻驴妈妈科技园内，园内三栋办公楼，分别囊括了驴妈妈的三个发展板块，建筑总面积达30000平方米<br/>
					信息来源：<a href="https://mp.weixin.qq.com/s/4TPtUEOH9x9FW4VMVloAQA" target="_blank">【投资江桥】公众号</a>
        `,
      },
      {
        position: { lng: 121.338637, lat: 31.247978 },
        labelContent: "南航（航空）",
        infoTitle: "南航上海总部（已落地）",
        infoContent: `
					2019年左右落地<br/>
					用地规模：项目占地30多亩，规划总建筑面积近6万平方米，项目总投资达4亿多元。<br/>
					功能：上海南航总部大厦也将成为南航集团在上海的总部基地，融行政办公、商务配套和员工培训于一体。<br/>
					信息来源：<a href="https://mp.weixin.qq.com/s/fNRayDzwTuC3HPer_8SCVQ" target="_blank">【预见上海】公众号</a>
        `,
      },
    ],
  },
	{
    name: "其他",
    markType: 'red1',
    labelStyle: { color: "red", fontSize: "12px", borderColor: "red" },
    positions: [
      {
        position: { lng: 121.370149, lat: 31.274467 },
        labelContent: "垃圾焚烧厂",
        infoTitle: "上海环城再生能源有限公司",
        infoContent: `俗称“上海江桥生活垃圾焚烧厂”，亚洲第一`,
      },
    ],
  },
];

export default dataList;
