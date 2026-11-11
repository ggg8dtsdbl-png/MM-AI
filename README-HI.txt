MM AI Mobile Starter — शुरुआती मोबाइल वेब ऐप

इस ZIP में MM AI का मोबाइल-फ्रेंडली शुरुआती इंटरफेस है। यह अभी असली AI वीडियो नहीं बनाता।

मोबाइल से Preview:
1. ZIP को फोन में extract करें।
2. index.html को ब्राउज़र में खोलने की कोशिश करें। कुछ फोन में लोकल फाइल से service worker/PWA सुविधा नहीं चलेगी।
3. बेहतर तरीका: इस फोल्डर को GitHub repository में डालें और GitHub Pages से प्रकाशित करें, या किसी भरोसेमंद static hosting सेवा पर अपलोड करें।
4. वेबसाइट HTTPS पर खुलने के बाद Chrome मेन्यू से "Add to Home screen" चुन सकते हैं।

अगले चरण:
- Secure backend और AI video provider/API जोड़ना
- User login और cloud video storage
- Safety/moderation, privacy policy और support
- Credits, payments और ads (कानूनी/Play policies के अनुसार)
- Android package/AAB बनाना, परीक्षण और Play Console submission

किसी API secret को HTML/JavaScript में न डालें। उसे server-side रखना जरूरी है।
