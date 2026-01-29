const services = {
  "web-pentest": {
    title: "تست نفوذ وب (Web Penetration Testing)",
    image: "https://placehold.co/800x400?text=Web+PenTest",
    description: "ارزیابی امنیت وب‌سایت با متدولوژی‌های OWASP، کشف آسیب‌پذیری‌هایی مانند SQL Injection، XSS، IDOR و ارائه گزارش کامل.",
    rating: 4.6,
    category: "web"
  },
  "network-assessment": {
    title: "ارزیابی امنیت شبکه (Network Assessment)",
    image: "https://placehold.co/800x400?text=Network+Assessment",
    description: "تحلیل امنیت زیرساخت شبکه، بررسی فایروال‌ها، سرویس‌ها، پورت‌ها و شناسایی نقاط ضعف احتمالی.",
    rating: 4.2,
    category: "network"
  },
  "vulnerability-scanning": {
    title: "اسکن آسیب‌پذیری‌ها (Vulnerability Scanning)",
    image: "https://placehold.co/800x400?text=Vulnerability+Scan",
    description: "اسکن خودکار و نیمه‌خودکار برای شناسایی آسیب‌پذیری‌های شناخته‌شده در سیستم‌ها و سرویس‌ها.",
    rating: 4.0,
    category: "vuln"
  },
  "security-consulting": {
    title: "مشاوره امنیتی و بهبود زیرساخت",
    image: "https://placehold.co/800x400?text=Security+Consulting",
    description: "ارائه مشاوره تخصصی برای افزایش سطح امنیت سازمان، بهبود معماری سیستم و کاهش ریسک‌های امنیتی.",
    rating: 3.9,
    category: "consulting"
  },
  "advanced-security-consulting": {
    title: "مشاوره امنیتی پیشرفته",
    image: "https://placehold.co/800x400?text=Advanced+Consulting",
    description: "مشاوره پیشرفته و جامع برای امنیت سازمان و بهبود زیرساخت‌ها با استانداردهای روز.",
    rating: 4.4,
    category: "consulting"
  }
};

// گرفتن id از URL
const params = new URLSearchParams(window.location.search);
const serviceId = params.get("id");
const service = services[serviceId];

if (!service) {
  document.body.innerHTML = "<p>خدمت مورد نظر یافت نشد.</p>";
  throw new Error("Service not found");
}

// نمایش اطلاعات اصلی
document.getElementById("serviceTitle").textContent = service.title;
document.getElementById("serviceImage").src = service.image;
document.getElementById("serviceDescription").textContent = service.description;
document.getElementById("serviceRating").innerHTML = "⭐".repeat(Math.round(service.rating));

// =====================
// بخش نظرات بدون localStorage
// =====================
const commentsList = document.getElementById("commentsList");
const commentName = document.getElementById("commentName");
const commentText = document.getElementById("commentText");

// آرایه محلی برای نگهداری نظرات فقط در زمان فعلی
let comments = [];

function loadComments() {
  commentsList.innerHTML = "";
  comments.forEach(c => {
    commentsList.innerHTML += `
      <div class="comment-item">
        <strong>${c.name}</strong>
        <p>${c.text}</p>
      </div>
    `;
  });
}

document.getElementById("commentForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = commentName.value.trim();
  const text = commentText.value.trim();
  if (!name || !text) return;

  comments.push({ name, text });
  e.target.reset();
  loadComments();
});

loadComments();
