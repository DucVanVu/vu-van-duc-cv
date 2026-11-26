const cvData = {
  name: { en: "Vu Van Duc", vi: "Vũ Văn Đức" },
  title: { en: "Fullstack Engineer", vi: "Kỹ sư Fullstack" },
  email: "vanducv739@gmail.com",
  phone: "+84345329573",
  location: { en: "Hanoi, Vietnam", vi: "Hà Nội, Việt Nam" },
  linkedin: "https://www.linkedin.com/in/vu-van-duc",
  summary: {
    en: "Fullstack Engineer with 5+ years of experience building scalable web applications across banking, Web3, enterprise systems, social platforms, and e-commerce. Currently working on a VPBank banking project (06/2026 – now) with Java Spring Boot, ASP.NET, React, and Angular. Experienced in React, Next.js, Vue.js, Node.js, NestJS, Java Spring Boot, and PostgreSQL, with a focus on clean architecture, performance, and production-ready products.",
    vi: "Kỹ sư Fullstack với hơn 5 năm kinh nghiệm phát triển ứng dụng web có khả năng mở rộng trong lĩnh vực ngân hàng, Web3, hệ thống doanh nghiệp, mạng xã hội và thương mại điện tử. Hiện đang tham gia dự án ngân hàng VPBank (06/2026 – hiện tại), sử dụng Java Spring Boot, ASP.NET, React và Angular. Có kinh nghiệm với React, Next.js, Vue.js, Node.js, NestJS, Java Spring Boot và PostgreSQL; tập trung vào kiến trúc rõ ràng, hiệu năng và sản phẩm sẵn sàng vận hành."
  },
  experience: [
    {
      company: "VPBank", role: { en: "Fullstack Engineer", vi: "Kỹ sư Fullstack" }, date: "06/2026 – now",
      context: { en: "Banking project", vi: "Dự án ngân hàng" },
      summary: { en: "A banking system for VPBank, delivered by a lean team where developers also own deployment and testing.", vi: "Hệ thống nghiệp vụ ngân hàng cho VPBank, phát triển bởi một team tinh gọn trong đó developer kiêm luôn triển khai và kiểm thử." },
      highlights: [
        { en: "Developed backend services and REST APIs with Java Spring Boot and ASP.NET for banking workflows.", vi: "Phát triển dịch vụ backend và REST API bằng Java Spring Boot và ASP.NET cho các nghiệp vụ ngân hàng." },
        { en: "Built frontend features in React and Angular and integrated them with backend services.", vi: "Xây dựng tính năng frontend bằng React và Angular, tích hợp với các dịch vụ backend." },
        { en: "Worked directly with the System Analyst to turn business requirements into technical solutions.", vi: "Làm việc trực tiếp với System Analyst để chuyển yêu cầu nghiệp vụ thành giải pháp kỹ thuật." },
        { en: "Owned deployment (DevOps) and testing (QC) for my features alongside development.", vi: "Đảm nhận cả triển khai (DevOps) và kiểm thử (QC) cho các tính năng mình phát triển." },
        { en: "Followed the strict security and code-review standards of the banking domain.", vi: "Tuân thủ các tiêu chuẩn bảo mật và code review nghiêm ngặt của lĩnh vực ngân hàng." }
      ],
      tags: ["Java Spring Boot", "ASP.NET", "React", "Angular"]
    },
    {
      company: "Bino Media", role: { en: "Frontend Engineer", vi: "Kỹ sư Frontend" }, date: "11/2025 – 05/2026", team: 7,
      context: { en: "Community-based social platform", vi: "Nền tảng mạng xã hội cộng đồng" },
      summary: { en: "A social networking platform where users create content, interact, and join real-time discussions, with scalable content feeds powered by a GraphQL-based architecture.", vi: "Nền tảng mạng xã hội cho phép người dùng tạo nội dung, tương tác và thảo luận theo thời gian thực, với news feed có khả năng mở rộng trên kiến trúc GraphQL." },
      highlights: [
        { en: "Developed scalable frontend features using React and Next.js.", vi: "Phát triển các tính năng frontend có khả năng mở rộng với React và Next.js." },
        { en: "Integrated GraphQL APIs for efficient data synchronization and state management.", vi: "Tích hợp GraphQL API để đồng bộ dữ liệu và quản lý state hiệu quả." },
        { en: "Improved page load performance and responsiveness, reducing load time by 30%.", vi: "Tối ưu hiệu năng và độ phản hồi, giảm 30% thời gian tải trang." },
        { en: "Collaborated with product managers, backend engineers, and QA teams.", vi: "Phối hợp cùng product manager, kỹ sư backend và đội QA." }
      ],
      tags: ["React", "Next.js", "GraphQL", "TypeScript", "Zustand", "React Query"]
    },
    {
      company: "Jart Holding", role: { en: "Fullstack Engineer", vi: "Kỹ sư Fullstack" }, date: "03/2025 – 11/2025",
      context: { en: "Print-on-demand e-commerce & product management", vi: "Thương mại điện tử in theo yêu cầu & quản lý sản phẩm" },
      summary: { en: "A print-on-demand platform that lets merchants create, manage, and sell customized products, covering product catalogs, order processing, and business workflows on a multi-service architecture.", vi: "Nền tảng in theo yêu cầu (POD) giúp người bán tạo, quản lý và bán sản phẩm tùy biến; bao gồm danh mục sản phẩm, xử lý đơn hàng và quy trình nghiệp vụ trên kiến trúc multi-service." },
      highlights: [
        { en: "Led fullstack development, designing a scalable frontend architecture and integrating backend services.", vi: "Dẫn dắt phát triển fullstack, thiết kế kiến trúc frontend có khả năng mở rộng và tích hợp các dịch vụ backend." },
        { en: "Built reusable UI components and RESTful APIs for product and order management.", vi: "Xây dựng thư viện UI component tái sử dụng và REST API quản lý sản phẩm, đơn hàng." },
        { en: "Implemented complex business logic across frontend and backend services.", vi: "Hiện thực các logic nghiệp vụ phức tạp xuyên suốt frontend và backend." },
        { en: "Improved performance and UX through frontend and backend optimization.", vi: "Cải thiện hiệu năng và trải nghiệm người dùng qua tối ưu cả frontend lẫn backend." }
      ],
      tags: ["Vue.js", "React", "Node.js", "REST APIs"]
    },
    {
      company: "Alpha Block", role: { en: "Fullstack Engineer", vi: "Kỹ sư Fullstack" }, date: "09/2022 – 03/2025", team: 7,
      context: { en: "Web3 application platform", vi: "Nền tảng ứng dụng Web3" },
      summary: { en: "A decentralized platform integrating MetaMask and WalletConnect for on-chain interactions, with real-time blockchain data served through GraphQL and indexing services.", vi: "Nền tảng phi tập trung tích hợp ví MetaMask và WalletConnect cho các tương tác on-chain, cung cấp dữ liệu blockchain theo thời gian thực qua GraphQL và dịch vụ indexing." },
      highlights: [
        { en: "Developed and maintained fullstack Web3 applications integrating MetaMask and WalletConnect.", vi: "Phát triển và duy trì các ứng dụng Web3 fullstack tích hợp ví MetaMask và WalletConnect." },
        { en: "Built optimized React and Next.js interfaces for seamless wallet interaction.", vi: "Xây dựng giao diện React và Next.js tối ưu cho trải nghiệm kết nối ví mượt mà." },
        { en: "Designed NestJS backend services for Web3 data processing and API integration.", vi: "Thiết kế dịch vụ backend NestJS xử lý dữ liệu Web3 và tích hợp API." },
        { en: "Indexed and queried on-chain data with SubQuery and GraphQL for real-time updates.", vi: "Index và truy vấn dữ liệu on-chain bằng SubQuery và GraphQL để cập nhật theo thời gian thực." },
        { en: "Improved application performance, reducing load time by approximately 30%.", vi: "Cải thiện hiệu năng ứng dụng, giảm khoảng 30% thời gian tải." },
        { en: "Contributed reusable architecture and scalable components across multiple Web3 products.", vi: "Đóng góp kiến trúc tái sử dụng và component có khả năng mở rộng cho nhiều sản phẩm Web3." }
      ],
      tags: ["React", "Next.js", "NestJS", "GraphQL", "SubQuery", "PostgreSQL"]
    },
    {
      company: "Globits", role: { en: "Fullstack Engineer", vi: "Kỹ sư Fullstack" }, date: "07/2021 – 05/2022", team: 7,
      context: { en: "Enterprise systems", vi: "Hệ thống doanh nghiệp" },
      summary: { en: "Internal enterprise software supporting business operations, with modules for data management, reporting, and process automation.", vi: "Phần mềm doanh nghiệp nội bộ hỗ trợ vận hành, gồm các module quản lý dữ liệu, báo cáo và tự động hóa quy trình." },
      highlights: [
        { en: "Developed enterprise applications using Spring Boot and modern frontend frameworks.", vi: "Phát triển ứng dụng doanh nghiệp với Spring Boot và các framework frontend hiện đại." },
        { en: "Built scalable APIs and reusable UI components for internal business systems.", vi: "Xây dựng API có khả năng mở rộng và UI component tái sử dụng cho hệ thống nội bộ." },
        { en: "Improved system reliability and resolved critical production issues.", vi: "Nâng cao độ ổn định hệ thống và xử lý các sự cố production nghiêm trọng." }
      ],
      tags: ["Java Spring Boot", "React", "Angular", "REST APIs", "MySQL"]
    }
  ],
  projects: [
    {
      name: { en: "TOEIC Practice & Learning Platform", vi: "Nền tảng luyện thi và học TOEIC" }, date: "11/2023 – 06/2024", link: "https://studytoeic.vercel.app",
      summary: { en: "An online TOEIC preparation platform with practice tests, full exam simulations, automatic scoring, structured learning paths, and progress tracking.", vi: "Nền tảng luyện thi TOEIC trực tuyến với bài luyện tập, đề thi mô phỏng, chấm điểm tự động, lộ trình học và theo dõi tiến độ." },
      highlights: [
        { en: "Built realistic exam simulations with auto-scoring.", vi: "Xây dựng đề thi mô phỏng sát thực tế với chấm điểm tự động." },
        { en: "Developed responsive interfaces with the Next.js App Router, optimized for performance.", vi: "Phát triển giao diện responsive với Next.js App Router, tối ưu hiệu năng." },
        { en: "Designed RESTful APIs with NestJS and PostgreSQL for users, tests, and learning progress.", vi: "Thiết kế REST API với NestJS và PostgreSQL quản lý người dùng, đề thi và tiến độ học." },
        { en: "Integrated Django Admin for content and user management.", vi: "Tích hợp Django Admin để quản lý nội dung và người dùng." },
        { en: "Containerized the whole stack with Docker for streamlined deployment.", vi: "Đóng gói toàn bộ hệ thống bằng Docker để triển khai nhanh gọn." }
      ],
      tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Django Admin"]
    }
  ],
  skills: [
    { label: { en: "Frontend", vi: "Frontend" }, values: "React, Next.js, Vue.js, Angular, TypeScript, JavaScript (ES6+)" },
    { label: { en: "Backend", vi: "Backend" }, values: "Node.js, NestJS, Java Spring Boot, ASP.NET, REST APIs" },
    { label: { en: "State & data", vi: "State & dữ liệu" }, values: "Redux, React Query, Zustand, GraphQL" },
    { label: { en: "Database", vi: "Cơ sở dữ liệu" }, values: "PostgreSQL, MySQL, MongoDB" },
    { label: { en: "Tools & practices", vi: "Công cụ & quy trình" }, values: "Git, Docker, CI/CD, GitHub Actions, SEO, performance optimization, Agile/Scrum" },
    { label: { en: "AI-assisted development", vi: "Phát triển với AI" }, featured: true, values: ["Claude Code", "Codex", "Gemini", "Antigravity", "Cursor"] }
  ],
  education: [{ school: { en: "Academy of Cryptography Techniques (KMA)", vi: "Học viện Kỹ thuật Mật mã (KMA)" }, degree: { en: "B.S. in Information Technology · Graduated with Distinction", vi: "Cử nhân Công nghệ thông tin · Tốt nghiệp loại Giỏi" }, date: "2018 – 2023" }]
};

const copy = {
  en: { skip: "Skip to content", availability: "OPEN TO OPPORTUNITIES", role: "Fullstack Engineer", contact: "Get in touch", print: "Print CV", contactLabel: "CONTACT", location: "Hanoi, Vietnam", focusLabel: "FOCUS", focus: "Web products · Scalable systems", experienceTitle: "Experience", projectsTitle: "Personal project", skillsTitle: "Skills", educationTitle: "Education", backToTop: "Back to top ↑", footerNote: "Designed to print beautifully.", period: "Present", tech: "TECH STACK", team: "Team of {n}" },
  vi: { skip: "Chuyển đến nội dung", availability: "SẴN SÀNG ĐÓN CƠ HỘI MỚI", role: "Kỹ sư Fullstack", contact: "Liên hệ với tôi", print: "In CV", contactLabel: "LIÊN HỆ", location: "Hà Nội, Việt Nam", focusLabel: "CHUYÊN MÔN", focus: "Sản phẩm web · Hệ thống mở rộng", experienceTitle: "Kinh nghiệm", projectsTitle: "Dự án cá nhân", skillsTitle: "Kỹ năng", educationTitle: "Học vấn", backToTop: "Lên đầu trang ↑", footerNote: "Tối ưu cho bản in.", period: "Hiện tại", tech: "CÔNG NGHỆ", team: "Team {n} người" }
};

const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch {} }
};
let language = store.get("cv-language") === "vi" ? "vi" : "en";
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const localized = (value) => typeof value === "string" ? value : value[language];

function render() {
  const t = copy[language];
  document.documentElement.lang = language;
  document.title = `${cvData.name[language]} — ${t.role}`;
  document.querySelector('meta[name="description"]').content = cvData.summary[language];
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t[element.dataset.i18n]; });
  document.querySelectorAll('[data-field="summary"]').forEach((element) => { element.textContent = cvData.summary[language]; });
  document.getElementById("language-toggle").textContent = language === "en" ? "VI" : "EN";
  const tags = (list) => `<div class="tag-list">${list.map((tag) => `<span class="tag">${esc(tag)}</span>`).join("")}</div>`;
  const bullets = (list) => `<ul class="highlights">${list.map((point) => `<li>${esc(localized(point))}</li>`).join("")}</ul>`;
  document.getElementById("experience-list").innerHTML = cvData.experience.map((item) => `<article class="experience-item"><div class="experience-top"><h3>${esc(item.company)}</h3><span class="experience-date">${esc(localized(item.date).replace("Present", t.period))}</span></div><p class="experience-role">${esc(localized(item.role))}</p><p class="context">${esc(localized(item.context))}${item.team ? ` · ${esc(t.team.replace("{n}", item.team))}` : ""}</p><p class="summary">${esc(localized(item.summary))}</p>${bullets(item.highlights)}${tags(item.tags)}</article>`).join("");
  document.getElementById("project-list").innerHTML = cvData.projects.map((item) => `<article class="project-card"><div class="project-header"><div><h3>${esc(localized(item.name))}</h3>${item.date ? `<span class="project-date">${esc(item.date)}</span>` : ""}</div>${item.link ? `<a class="project-link" href="${esc(item.link)}" target="_blank" rel="noreferrer">${esc(new URL(item.link).host)} ↗</a>` : ""}</div><p class="summary">${esc(localized(item.summary))}</p>${bullets(item.highlights)}<p class="card-label">${esc(t.tech)}</p>${tags(item.tags)}</article>`).join("");
  document.getElementById("skills-list").innerHTML = cvData.skills.map((item) => `<div class="skill-group${item.featured ? " skill-group-featured" : ""}"><strong>${esc(localized(item.label))}</strong>${Array.isArray(item.values) ? `<span class="skill-tags">${item.values.map((value) => `<span class="tag">${esc(value)}</span>`).join("")}</span>` : `<span>${esc(item.values)}</span>`}</div>`).join("");
  document.getElementById("education-list").innerHTML = cvData.education.map((item) => `<article class="education-item"><h3>${esc(localized(item.school))}</h3><p>${esc(localized(item.degree))}</p><p>${esc(item.date)}</p></article>`).join("");
  document.getElementById("structured-data").textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: cvData.name[language], jobTitle: t.role, email: `mailto:${cvData.email}`, telephone: cvData.phone, address: { "@type": "PostalAddress", addressLocality: localized(cvData.location), addressCountry: "VN" }, sameAs: [cvData.linkedin], alumniOf: cvData.education.map((item) => ({ "@type": "CollegeOrUniversity", name: localized(item.school) })) });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.getElementById("theme-toggle").setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  document.getElementById("theme-icon").textContent = theme === "dark" ? "☼" : "◐";
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#111714" : "#f5f6f4";
}
const savedTheme = store.get("cv-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : (prefersDark ? "dark" : "light"));
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  store.set("cv-theme", next);
});
document.getElementById("language-toggle").addEventListener("click", () => {
  language = language === "en" ? "vi" : "en";
  store.set("cv-language", language);
  render();
});
document.getElementById("print-button").addEventListener("click", () => window.print());
document.getElementById("year").textContent = new Date().getFullYear();
render();
