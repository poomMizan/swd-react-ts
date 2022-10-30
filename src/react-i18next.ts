import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "current_lang": "EN",
      "lang_en": "EN",
      "lang_th": "TH",
      "test_1": "Test 1",
      "test_2": "Test 2",
      "test_3": "Test 3",
      "test_1_desc": "Layout & Style",
      "test_2_desc": "Connect API",
      "test_3_desc": "Form & Tables",
      "move_shape": "Move shape",
      "move_position": "Move position",
    }
  },
  th: {
    translation: {
      "current_lang": "ไทย",
      "lang_en": "อังกฤษ",
      "lang_th": "ไทย",
      "test_1": "แบบทดสอบที่ 1",
      "test_2": "แบบทดสอบที่ 2",
      "test_3": "แบบทดสอบที่ 3",
      "test_1_desc": "การจัดการหน้าเว็บ",
      "test_2_desc": "การเชื่อมต่อ API",
      "test_3_desc": "การจัดการหน้าฟอร์ม",
      "move_shape": "เลื่อนรูปแบบ",
      "move_position": "เปลี่ยนตำแหน่ง",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;