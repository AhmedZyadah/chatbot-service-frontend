# chatbot-service-frontend

واجهة **Angular 18** تتيح للمستخدمين رفع ملفات PDF، متابعة حالة الفهرسة، والمحادثة مع المستندات مع عرض الاستشهادات.

## الميزات
- Drag‑and‑Drop لرفع الملفات.
- مؤشر تقدم الفهرسة (Real‑time).
- واجهة دردشة بـ Bubble UI واستشهادات قابلة للنقر.
- دعم Theme فاتح/غامق via Tailwind.

## المتطلبات
- Node.js ≥ 20
- PNPM أو NPM

## الإعداد السريع
```bash
# استنساخ الريبو
git clone https://github.com/ZyadahWorks/chatbot-service-frontend.git
cd chatbot-service-frontend

# تثبيت التبعيات
npm install  # أو pnpm install

# تشغيل فى وضع التطوير
ng serve --open
```

## ملفات البيئة (‎`.env`) في الجذر
- `VITE_API_BASE_URL`: عنوان `gateway-api` (مثل `http://localhost:5000`).

## بناء للإنتاج
```bash
ng build --configuration production
```

## الاختبارات
```bash
ng test          # وحدة
ng e2e           # نهاية لنهاية (Playwright)
```

## الوثيقة الشاملة
يرجى مراجعة الملف `docs/chatbot_project_plan.json` فى ريبو **chatbot-gateway-api** للحصول على رؤية النظام كاملًا.

---

> هذا الريبو جزء من مشروع *Specialized Document Chatbot*. حان وقت الإبداع فى واجهة المستخدم 😉

