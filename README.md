# WebVoice - เว็บไซต์เรียนรู้การออกเสียง

เว็บไซต์เรียนรู้การออกเสียงสำหรับผู้ปกครองและผู้พิการทางการออกเสียง

## 🚀 Deploy บน GitHub Pages

```bash
# 1. สร้าง Git repository
git init
git add .
git commit -m "Initial commit"

# 2. สร้าง repository บน GitHub แล้ว push
git remote add origin https://github.com/[username]/webvoice.git
git branch -M main
git push -u origin main

# 3. ไปที่ Settings > Pages
# Source: Deploy from a branch
# Branch: main / (root)
# กด Save
```

## 📁 โครงสร้างไฟล์

```
web_voice/
├── index.html      # หน้าหลัก
├── about.html      # เกี่ยวกับ
├── contact.html    # ติดต่อ
├── app.html        # แอพฝึกออกเสียง
├── css/
│   └── style.css
└── js/
    └── app.js
```

## 🛠️ เทคโนโลยี

- Bootstrap 5
- JavaScript (Web Speech API)
- CSS3

## 📋 License

MIT License