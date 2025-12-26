import { 
  Wind, Sun, Zap, ShieldCheck, 
  BarChart3, Users, Award, 
  Leaf, Battery, FileText, Phone
} from "lucide-react";
import { NewsItem, HonorItem, Department, TimelineEvent } from "./types";

export const COMPANY_NAME = "华能（天津）清洁能源有限公司";

export const NAV_ITEMS = [
  { label: "首页", path: "/" },
  { label: "组织介绍", path: "/about" },
  { label: "组织架构", path: "/organization" },
  { label: "荣誉展示", path: "/honors" },
  { label: "新闻中心", path: "/news" },
  { label: "安全通知", path: "/safety" },
  { label: "联系我们", path: "/contact" },
];

export const STATISTICS = [
  { label: "注册资本 (万元)", value: "8290.56", icon: BarChart3 },
  { label: "安全运行 (天)", value: "1250+", icon: ShieldCheck },
  { label: "装机容量 (MW)", value: "500+", icon: Zap },
  { label: "年发电量 (亿kWh)", value: "5.2", icon: Wind },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: "华能天津清洁能源公司参与天津地区风电项目开发",
    date: "2025-12-20",
    category: "Company",
    description: "推进区域清洁能源布局，为天津地区能源结构优化和绿色发展贡献力量。预计年发电量可达5亿千瓦时。",
    image: "https://picsum.photos/id/11/800/600"
  },
  {
    id: 2,
    title: "推进天津港区域零碳港区建设",
    date: "2025-10-10",
    category: "Company",
    description: "华能集团在天津港区域推进零碳港区建设，我司参与其中风电项目，为打造绿色低碳港口贡献力量。",
    image: "https://picsum.photos/id/19/800/600"
  },
  {
    id: 3,
    title: "天津市清洁能源发展政策解读",
    date: "2025-11-25",
    category: "Industry",
    description: "天津市发布新一轮清洁能源发展政策，明确提出到2030年可再生能源占比达到30%的目标。",
    image: "https://picsum.photos/id/28/800/600"
  },
  {
    id: 4,
    title: "2025-2027年员工餐饮服务询价公告",
    date: "2025-12-10",
    category: "Notice",
    description: "为提升员工餐饮服务质量，现就2025-2027年员工餐饮服务进行公开询价。",
    image: "https://picsum.photos/id/42/800/600"
  }
];

export const HONORS_DATA: HonorItem[] = [
  {
    title: "天津市绿色工厂",
    year: "2024",
    image: "https://picsum.photos/id/56/600/400",
    description: "成为天津市清洁能源领域的标杆企业，彰显公司在绿色发展方面的成就。"
  },
  {
    title: "安全生产先进单位",
    year: "2024",
    image: "https://picsum.photos/id/60/600/400",
    description: "获得华能集团表彰，建立完善的三级安全管理体系。"
  },
  {
    title: "优质工程奖",
    year: "2023",
    image: "https://picsum.photos/id/80/600/400",
    description: "参与的项目获得行业优质工程奖，体现了卓越的建设品质。"
  }
];

export const DEPARTMENTS: Department[] = [
  {
    name: "综合部",
    icon: FileText,
    description: "负责行政事务、公文处理、会议组织、档案管理及综合协调。",
    contact: "022-1234-5678",
    email: "office@huaneng.com"
  },
  {
    name: "经营部",
    icon: BarChart3,
    description: "负责市场开发、项目拓展、售电业务、合同管理与商务谈判。",
    contact: "022-1234-5679",
    email: "business@huaneng.com"
  },
  {
    name: "安全检查与生产管理部",
    icon: ShieldCheck,
    description: "安全生产监督、教育培训、现场管理与风险防控。",
    contact: "022-1234-5680",
    email: "safety@huaneng.com"
  },
  {
    name: "运维部",
    icon: Zap,
    description: "电站运行维护、设备监测故障处理、技改检修管理。",
    contact: "022-1234-5681",
    email: "ops@huaneng.com"
  },
  {
    name: "规划发展部",
    icon: Sun,
    description: "项目前期开发、可研报告、核准备案及战略规划。",
    contact: "022-1234-5682",
    email: "plan@huaneng.com"
  }
];

export const TIMELINE: TimelineEvent[] = [
  { year: "2022.04", title: "公司成立", description: "华能（天津）清洁能源有限公司正式设立。" },
  { year: "2022.12", title: "业务拓展", description: "开始参与华北地区风电、光伏项目投资建设。" },
  { year: "2023.06", title: "体系完善", description: "建立完善的公司治理结构，形成五大核心部门。" },
  { year: "2024.05", title: "荣誉获得", description: "获得“天津市绿色工厂”等多项荣誉。" },
  { year: "2025.01", title: "规模扩大", description: "推进天津港区域零碳港区建设，业务规模持续扩大。" }
];