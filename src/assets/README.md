# Assets Guide

## 📸 Image Specifications

### Profile Photo
- **Location:** `src/assets/images/profile.jpg`
- **Dimensions:** 500x500px (square)
- **Format:** JPG or PNG
- **Size:** Under 200KB
- **Tips:** Professional headshot, good lighting, plain background

### Project Screenshots
- **Location:** `src/assets/images/projects/`
- **Dimensions:** 1200x800px (3:2 ratio)
- **Format:** JPG or PNG
- **Size:** Under 500KB each
- **Tips:** 
  - Show the main UI/interface
  - Use high-quality screenshots
  - Crop to remove unnecessary elements
  - Consider adding a device mockup frame

### Achievement Images (Future)
- **Location:** `src/assets/images/achievements/`
- **Dimensions:** 800x600px
- **Format:** JPG or PNG
- **Size:** Under 300KB each

---

## 📄 Resume
- **Location:** `src/assets/resume/`
- **Filename:** `Mehedi_Haque_Resume.pdf`
- **Size:** Under 2MB
- **Tips:** Keep it 1-2 pages, ATS-friendly format

---

## 🎨 Icons
- We'll use **React Icons** library (installed as dependency)
- Custom SVG icons go in `src/assets/icons/`

---

## 🛠️ Image Optimization Tools

Before adding images:

1. **TinyPNG** - https://tinypng.com (compress PNG/JPG)
2. **Squoosh** - https://squoosh.app (web-based optimization)
3. **ImageOptim** - https://imageoptim.com (Mac app)

---

## 📝 Naming Convention

```
profile.jpg                    # Your profile photo
projects/
  ├── project-name-1.jpg       # Use descriptive names
  ├── project-name-2.jpg
  └── project-name-3.jpg
achievements/
  ├── aws-certification.jpg
  └── hackathon-winner.jpg
resume/
  └── Mehedi_Haque_Resume.pdf
```

---

## ✅ Checklist Before Adding Images

- [ ] Image is properly sized (see specs above)
- [ ] Image is compressed/optimized
- [ ] Image filename is descriptive (no spaces)
- [ ] Image format is appropriate (JPG for photos, PNG for graphics)
- [ ] Image file size is under the limit

---

**When you're ready to add images, just drop them in the appropriate folders and update the paths in your data files!**
