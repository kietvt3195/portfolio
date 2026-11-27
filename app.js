// ============================================================
// CAP NHAT THONG TIN LIEN HE THAT CUA ANH TAI DAY (4 DONG)
// ============================================================
const CONTACT_CONFIG = {
  brandName: "Jerry Studio",
  zaloUrl: "https://zalo.me/0394507842",
  zaloLabel: "0394 507 842",
  email: "vokiet3195@gmail.com",
  upworkUrl: "",
  githubUrl: "https://github.com/kietvt3195"
};

const TRANSLATIONS = {
  vi: {
    nav_demos: "Demo thực tế",
    nav_services: "Dịch vụ",
    nav_pricing: "Bảng giá",
    nav_contact: "Liên hệ",
    nav_cta: "Nhận báo giá",
    hero_badge: "⚡ Có bản xem trước sau 24h • Bàn giao trọn gói 48–72h",
    hero_title: "Thiết kế Web, Tự động hóa Excel & Công cụ Kinh doanh Siêu tốc",
    hero_sub:
      "Biến ý tưởng thô và bảng tính thủ công thành Landing Page chuyển đổi cao, script xử lý dữ liệu 1-click và công cụ báo giá tương tác — chi phí gọn nhẹ, xem demo thật trước khi chốt.",
    hero_cta_primary: "Trải nghiệm 3 Demo chạy thật",
    hero_cta_secondary: "Xem bảng giá minh bạch",
    stat_1: "Bản nháp xem trước",
    stat_2: "Code sạch, không phí duy trì",
    stat_3: "Hỗ trợ song ngữ",
    demos_eyebrow: "SẢN PHẨM MẪU CHẠY THẬT",
    demos_title: "Bấm vào dùng thử ngay — Không phải ảnh tĩnh",
    demos_sub:
      "Mỗi bản demo dưới đây hoạt động trực tiếp trên trình duyệt để bạn kiểm chứng chất lượng giao diện, tốc độ và logic xử lý.",
    demo_open: "Mở Demo Tương Tác →",
    demo1_tag: "Landing Page",
    demo1_title: "Trang Bán Hàng & Đặt Lịch B2B",
    demo1_desc:
      "Giao diện thương mại hiện đại cho doanh nghiệp/studio: chuyển đổi giá Tháng/Năm, FAQ tương tác, đánh giá khách hàng và form nhận lead mượt mà.",
    demo1_f1: "Chuẩn hiển thị điện thoại & PC",
    demo1_f2: "Tải siêu nhanh, SEO-ready",
    demo2_tag: "Automation Tool",
    demo2_title: "Tool Làm Sạch CSV/Excel & Báo Cáo",
    demo2_desc:
      "Nạp file bán hàng lộn xộn: tự động lọc dòng trùng, chuẩn hóa tên sản phẩm, cảnh báo dữ liệu lỗi, vẽ biểu đồ doanh thu và xuất file sạch 1 click.",
    demo2_f1: "Chạy ngay trên dữ liệu mẫu hoặc CSV thật",
    demo2_f2: "Thay thế hàng giờ copy-paste thủ công",
    demo3_tag: "Custom Web App",
    demo3_title: "Bảng Tính Báo Giá Tự Động (B2B)",
    demo3_desc:
      "Hỗ trợ 2 chế độ: Gia công khung nhôm 4040 / Cơ khí & Gói dịch vụ Web. Tự tính chiết khấu số lượng, thuế VAT và in báo giá PDF tức thì.",
    demo3_f1: "Tính toán vật tư & đơn giá thời gian thực",
    demo3_f2: "Xuất PDF & copy tóm tắt gửi khách ngay",
    srv_eyebrow: "DỊCH VỤ TRỌNG TÂM",
    srv_title: "Giải pháp gọn nhẹ — Đánh thẳng vào hiệu quả",
    srv1_title: "Landing Page Chuyển Đổi Cao",
    srv1_desc:
      "Trang giới thiệu sản phẩm, dịch vụ, khóa học hoặc thu thập khách hàng tiềm năng. Bàn giao mã nguồn sạch, hỗ trợ đưa lên mạng miễn phí 0đ phí hosting.",
    srv2_title: "Tự Động Hóa Excel / Google Sheets / Python",
    srv2_desc:
      "Gộp nhiều file báo cáo, lọc trùng, chuẩn hóa số liệu, xuất biểu đồ và tự động hóa quy trình lặp lại hàng tuần chỉ với 1 nút bấm.",
    srv3_title: "Công Cụ Web Nội Bộ & Báo Giá Online",
    srv3_desc:
      "Xây dựng bảng tính giá nhanh cho đội sales, công cụ tính vật tư cho xưởng sản xuất/cơ khí, hoặc dashboard theo dõi KPI đơn giản.",
    srv4_title: "Slide Thuyết Trình & Hồ Sơ Năng Lực (PPTX)",
    srv4_desc:
      "Thiết kế lại bài thuyết trình, pitch deck gọi vốn hoặc báo cáo tổng kết từ nội dung thô sang bộ slide đồng bộ, chỉnh sửa được 100%.",
    price_eyebrow: "BẢNG GIÁ MINH BẠCH",
    price_title: "Chi phí rõ ràng — Không phát sinh ẩn",
    price_sub: "Xem trước bản nháp trang đầu hoặc test dữ liệu mẫu miễn phí trước khi chốt triển khai.",
    p1_name: "Khởi Động (Starter)",
    p1_price: "500.000đ",
    p1_desc: "Phù hợp nhu cầu gọn nhẹ, cần gấp trong 24–48 giờ.",
    p1_l1: "Landing page 1 trang gọn hoặc sửa lỗi giao diện",
    p1_l2: "Hoặc script làm sạch 1 mẫu file Excel/CSV",
    p1_l3: "Hoặc bộ Slide 10–12 trang sạch đẹp",
    p1_l4: "1 lần chỉnh sửa theo góp ý",
    p2_badge: "Phổ biến nhất",
    p2_name: "Tiêu Chuẩn (Standard)",
    p2_price: "1.200.000đ",
    p2_desc: "Đầy đủ tính năng cho doanh nghiệp nhỏ & chiến dịch bán hàng.",
    p2_l1: "Landing page hoàn chỉnh (5–6 mục + form + FAQ)",
    p2_l2: "Hoặc tool tự động hóa báo cáo + biểu đồ",
    p2_l3: "Responsive 100% mobile & tối ưu tốc độ",
    p2_l4: "Hướng dẫn đưa lên mạng miễn phí + 2 lần sửa",
    p3_name: "Chuyên Nghiệp (Pro)",
    p3_price: "2.200.000đ",
    p3_desc: "Dành cho công cụ báo giá tương tác hoặc quy trình tự động nâng cao.",
    p3_l1: "Web Tool / Bảng tính báo giá riêng theo công thức",
    p3_l2: "Xuất file PDF / CSV sạch chuẩn doanh nghiệp",
    p3_l3: "Hỗ trợ song ngữ Việt – Anh nếu cần",
    p3_l4: "Hỗ trợ kỹ thuật 14 ngày sau bàn giao",
    price_btn: "Chọn gói này",
    ct_eyebrow: "BẮT ĐẦU NGAY",
    ct_title: "Gửi mô tả ngắn — Nhận phương án trong 2 giờ",
    ct_sub:
      "Bạn chỉ cần mô tả mục tiêu hoặc gửi mẫu dữ liệu thô, mình sẽ lên phương án gọn nhất và gửi bản xem trước để bạn đánh giá.",
    step_1: "Gửi yêu cầu / file mẫu",
    step_2: "Xem trước bản nháp (24h)",
    step_3: "Bàn giao hoàn chỉnh & HDSD",
    ct_box_title: "Kênh liên hệ trực tiếp",
    ct_upwork: "Hồ sơ Upwork →",
    ct_github: "Mã nguồn & Dự án →",
    qb_title: "Gửi yêu cầu nhanh (1-Click)",
    qb_opt1: "Landing Page bán hàng / dịch vụ",
    qb_opt2: "Tự động hóa Excel / CSV / Python",
    qb_opt3: "Web Tool / Bảng tính báo giá B2B",
    qb_opt4: "Slide thuyết trình / Báo cáo PPTX",
    qb_email: "Gửi Email Ngay",
    qb_copy: "Copy gửi Zalo",
    qb_copied: "Đã copy tóm tắt! Dán ngay vào Zalo 0394 507 842.",
    ct_note: "Hoàn tiền / điều chỉnh nếu sản phẩm không đúng cam kết ban đầu.",
    footer_note: "Thiết kế Web, Tự động hóa & Công cụ Kinh doanh Siêu tốc"
  },
  en: {
    nav_demos: "Live Demos",
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_contact: "Contact",
    nav_cta: "Get a Quote",
    hero_badge: "⚡ 24h Live Preview • Full Delivery in 48–72h",
    hero_title: "Fast-Turnaround Landing Pages, Excel Automation & Custom Web Tools",
    hero_sub:
      "Turn rough briefs and manual spreadsheets into high-converting landing pages, 1-click CSV/Excel cleaners, and interactive B2B quote calculators—see a working preview before you commit.",
    hero_cta_primary: "Try 3 Live Interactive Demos",
    hero_cta_secondary: "View Transparent Pricing",
    stat_1: "First layout / sample preview",
    stat_2: "Clean code, zero monthly bloat",
    stat_3: "Bilingual EN / VI delivery",
    demos_eyebrow: "LIVE INTERACTIVE DEMOS",
    demos_title: "Click & Test Right Now — Zero Static Mockups",
    demos_sub:
      "Every demo below runs directly in your browser so you can verify UI polish, speed, and real-world calculation logic immediately.",
    demo_open: "Launch Interactive Demo →",
    demo1_tag: "Landing Page",
    demo1_title: "High-Converting B2B SaaS & Booking Page",
    demo1_desc:
      "Modern conversion page with interactive Monthly/Annual pricing switch, FAQ accordion, social proof, and validated consultation booking form.",
    demo1_f1: "Mobile-first responsive layout",
    demo1_f2: "Sub-second load, SEO-ready",
    demo2_tag: "Automation Tool",
    demo2_title: "CSV / Excel Auto-Cleaner & Sales Report",
    demo2_desc:
      "Drop messy sales exports: automatically removes duplicates, normalizes product names, flags anomalies, renders KPI charts, and exports clean CSV.",
    demo2_f1: "Works on sample data or your own CSV",
    demo2_f2: "Turns hours of spreadsheet work into 1 click",
    demo3_tag: "Custom Web App",
    demo3_title: "Interactive B2B Quote & Cost Estimator",
    demo3_desc:
      "Dual-mode estimator (4040 Frame Mechanical Fabrication & Web/Automation Packages) with bulk discounts, VAT toggle, copy summary, and PDF print.",
    demo3_f1: "Real-time BOM & pricing breakdown",
    demo3_f2: "Instant PDF print & clipboard summary",
    srv_eyebrow: "CORE SERVICES",
    srv_title: "Lean, Practical Deliverables Built for Speed",
    srv1_title: "High-Converting Landing Pages",
    srv1_desc:
      "Product launches, service pages, and lead capture funnels built with clean HTML/CSS/JS—fast to load and free to host on Netlify or GitHub Pages.",
    srv2_title: "Excel / Google Sheets / Python Automation",
    srv2_desc:
      "Merge reports, deduplicate records, clean messy formats, generate visual charts, and automate recurring weekly workflows into 1 click.",
    srv3_title: "Interactive Calculators & Internal Web Tools",
    srv3_desc:
      "Custom B2B quote estimators for sales teams, material/fabrication calculators, and lightweight operational dashboards.",
    srv4_title: "Executive & Pitch Slide Decks (PPTX)",
    srv4_desc:
      "Transform raw notes and data tables into clean, structured, 100% editable PowerPoint presentations.",
    price_eyebrow: "TRANSPARENT PRICING",
    price_title: "Fixed Scope, Clear Rates — No Surprises",
    price_sub: "Get a free hero mockup or 10-row data test before locking in the full build.",
    p1_name: "Starter",
    p1_price: "$25",
    p1_desc: "Ideal for quick fixes, compact 1-page sites, or single-dataset cleanup.",
    p1_l1: "Compact 1-section landing page or UI bug fix",
    p1_l2: "Or clean & deduplicate 1 Excel/CSV dataset",
    p1_l3: "Or polished 10–12 slide PPTX deck",
    p1_l4: "1 round of revisions included",
    p2_badge: "Most Popular",
    p2_name: "Standard",
    p2_price: "$50",
    p2_desc: "Complete conversion page or reusable automation script for growing teams.",
    p2_l1: "Full landing page (5–6 sections + form + FAQ)",
    p2_l2: "Or reusable Python/Web cleaner + KPI charts",
    p2_l3: "100% mobile responsive & speed optimized",
    p2_l4: "Free deploy guide + 2 rounds of revisions",
    p3_name: "Pro Custom Tool",
    p3_price: "$90",
    p3_desc: "For custom interactive quote calculators or multi-step workflows.",
    p3_l1: "Custom interactive calculator / internal web app",
    p3_l2: "Clean PDF quote print & CSV export",
    p3_l3: "Optional EN / VI bilingual interface",
    p3_l4: "14-day post-delivery support",
    price_btn: "Start with this tier",
    ct_eyebrow: "GET STARTED",
    ct_title: "Send Your Brief — Get a Clear Plan in 2 Hours",
    ct_sub:
      "Share your goal or a small anonymized sample file, and I will reply with a fixed timeline and a quick preview approach.",
    step_1: "Share goal / sample",
    step_2: "Review 24h preview",
    step_3: "Full delivery + guide",
    ct_box_title: "Direct Contact Channels",
    ct_upwork: "Upwork Profile →",
    ct_github: "GitHub Repositories →",
    qb_title: "Quick Project Brief (1-Click)",
    qb_opt1: "Responsive Landing Page",
    qb_opt2: "Excel / CSV / Python Automation",
    qb_opt3: "Interactive Quote Calculator / Web Tool",
    qb_opt4: "Executive Slide Deck (PPTX)",
    qb_email: "Send via Email",
    qb_copy: "Copy Brief",
    qb_copied: "Brief copied! Paste into Email, Zalo, or Fiverr chat.",
    ct_note: "Clear milestones & prompt adjustments until the agreed scope works as promised.",
    footer_note: "Fast-Turnaround Web, Automation & Custom Tools"
  }
};

function applyContactConfig() {
  document.querySelectorAll("[data-brand-name]").forEach((el) => {
    el.textContent = CONTACT_CONFIG.brandName;
  });
  const linkZalo = document.getElementById("linkZalo");
  const textZalo = document.getElementById("textZalo");
  const linkEmail = document.getElementById("linkEmail");
  const textEmail = document.getElementById("textEmail");
  const linkUpwork = document.getElementById("linkUpwork");
  const linkGithub = document.getElementById("linkGithub");

  if (linkZalo) linkZalo.href = CONTACT_CONFIG.zaloUrl;
  if (textZalo) textZalo.textContent = CONTACT_CONFIG.zaloLabel;
  if (linkEmail) linkEmail.href = `mailto:${CONTACT_CONFIG.email}`;
  if (textEmail) textEmail.textContent = CONTACT_CONFIG.email;
  if (linkUpwork) {
    if (CONTACT_CONFIG.upworkUrl) {
      linkUpwork.href = CONTACT_CONFIG.upworkUrl;
      linkUpwork.style.display = "";
    } else {
      linkUpwork.style.display = "none";
    }
  }
  if (linkGithub) linkGithub.href = CONTACT_CONFIG.githubUrl;
}

let currentLang = localStorage.getItem("jerry_portfolio_lang") || "vi";

function setLanguage(lang) {
  currentLang = TRANSLATIONS[lang] ? lang : "vi";
  localStorage.setItem("jerry_portfolio_lang", currentLang);
  document.documentElement.lang = currentLang;

  const dict = TRANSLATIONS[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-lang-badge]").forEach((pill) => {
    pill.classList.toggle("active", pill.getAttribute("data-lang-badge") === currentLang);
  });

  const noteInput = document.getElementById("briefNote");
  if (noteInput) {
    noteInput.placeholder =
      currentLang === "vi"
        ? "VD: Cần trang giới thiệu xưởng + form Zalo trong 48h..."
        : "e.g. Need a clean landing page or CSV cleaner within 48h...";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyContactConfig();
  setLanguage(currentLang);

  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      setLanguage(currentLang === "vi" ? "en" : "vi");
    });
  }

  const getBriefText = () => {
    const svcEl = document.getElementById("briefService");
    const svc = svcEl ? svcEl.options[svcEl.selectedIndex].textContent : "";
    const note = (document.getElementById("briefNote")?.value || "").trim() || "(N/A)";
    return currentLang === "vi"
      ? `Chào Kiệt (Jerry Studio),\nMình cần tư vấn dịch vụ: ${svc}\nMô tả ngắn: ${note}\n(Từ Portfolio: ${window.location.href})`
      : `Hi Kiet (Jerry Studio),\nI'm interested in: ${svc}\nBrief: ${note}\n(From Portfolio: ${window.location.href})`;
  };

  const btnEmail = document.getElementById("btnSendEmail");
  if (btnEmail) {
    btnEmail.addEventListener("click", () => {
      const svcEl = document.getElementById("briefService");
      const svc = svcEl ? svcEl.value : "Project Inquiry";
      const subject = encodeURIComponent(`[Project Inquiry] ${svc}`);
      const body = encodeURIComponent(getBriefText());
      window.location.href = `mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`;
    });
  }

  const btnCopy = document.getElementById("btnCopyBrief");
  if (btnCopy) {
    btnCopy.addEventListener("click", async () => {
      const toast = document.getElementById("briefToast");
      const text = getBriefText();
      try {
        await navigator.clipboard.writeText(text);
        if (toast) toast.textContent = TRANSLATIONS[currentLang].qb_copied;
      } catch {
        if (toast) toast.textContent = text;
      }
    });
  }
});
