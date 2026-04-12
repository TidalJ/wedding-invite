export type Locale = "en" | "zh";

export const copy = {
  en: {
    nav: {
      story: "Story",
      venue: "Venue",
      countdown: "Countdown",
      details: "Details",
      map: "Map",
      schedule: "Schedule",
      dress: "Attire",
      rsvp: "RSVP",
    },
    hero: {
      kicker: "Together with their families",
      title: "Jay & Pinky",
      subtitle: "Invite you to celebrate their wedding",
      dateLine: "Wednesday, February 17, 2027",
      locationLine: "Adelaide Hills · The Manor Basket Range",
      cta: "Respond",
      scroll: "Our story",
    },
    loveStory: {
      title: "Our story",
      lead: "Every love story is beautiful — this one is ours.",
      p1:
        "We met in the middle of ordinary days that suddenly felt brighter. What started as easy laughter and long conversations became a partnership built on trust, patience, and a shared sense of home.",
      p2:
        "Now we are choosing each other for always — and we would be honored to celebrate with the people who have cheered us on, carried us through, and made our world kinder along the way.",
    },
    countdown: {
      title: "The countdown",
      doneMessage: "We’re getting married today.",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    venue: {
      title: "The venue",
      credit: "Photos from The Manor Basket Range — historic Adelaide Hills estate.",
      morePhotos: "More photos & details on the venue website",
    },
    map: {
      title: "Find us",
      openInMaps: "Open in Google Maps",
    },
    intro: {
      title: "A quiet promise, made loud with joy.",
      body:
        "We would be honored to share this chapter with you — an evening of warmth, music, and the people who shaped our story.",
    },
    details: {
      title: "The essentials",
      venue: "Venue",
      venueValue: "The Manor Basket Range",
      address: "Address",
      addressValue: "762 Lobethal Rd, Basket Range SA 5138, Australia",
      time: "Ceremony",
      timeValue: "4:30 PM (ACDT) — please arrive by 4:15 PM",
      reception: "Reception",
      receptionValue: "Cocktails at 5:30 PM · Dinner at 6:30 PM",
      parking: "Parking",
      parkingValue: "Complimentary on-site parking at the estate",
    },
    schedule: {
      title: "The flow of the evening",
      items: [
        { time: "4:30 PM", label: "Ceremony" },
        { time: "5:30 PM", label: "Cocktails & portraits" },
        { time: "6:30 PM", label: "Dinner & toasts" },
        { time: "8:30 PM", label: "First dance & celebration" },
      ],
    },
    dress: {
      title: "Dress code",
      code: "Cocktail attire",
      hint:
        "Think refined, breathable fabrics — soft neutrals, midnight blue, or botanical tones. Jackets appreciated; ties optional.",
      note:
        "Summer evening in the Hills can cool down after sunset — a light wrap is a thoughtful touch.",
    },
    gifts: {
      title: "Gifts",
      body:
        "Your presence is our greatest gift. If you wish to honor us further, a contribution to our future home would mean the world.",
    },
    rsvp: {
      title: "Kindly respond",
      lead:
        "Please let us know if you can join, and share any dietary notes so our kitchen can care for you beautifully.",
      button: "Open RSVP",
      foot: "All four fields are required before you can submit (for allergies, write “None” if applicable).",
      modalTitle: "RSVP",
      close: "Close",
      loading: "Loading form…",
      fallbackTitle: "Form not configured yet",
      fallbackBody:
        "Set RSVP_GOOGLE_FORM_POST_URL and all four RSVP_GOOGLE_ENTRY_* values on the server, or add NEXT_PUBLIC_RSVP_FORM_EMBED_URL for an embedded Google Form.",
      openExternal: "Open form in a new tab",
    },
    rsvpForm: {
      name: "Name",
      attending: "Will you attend?",
      attendingYes: "Yes",
      attendingNo: "No",
      allergies: "Food allergies",
      allergiesHint: "If you have none, please write “None”.",
      message: "Message",
      submit: "Send RSVP",
      submitting: "Sending…",
      successTitle: "We can’t wait to celebrate with you.",
      successBody: "Your RSVP is on its way — thank you for being part of our day.",
      errorGeneric: "Something went wrong. Please try again in a moment.",
    },
    footer: {
      line: "With love — Jay & Pinky",
      privacy: "Responses are collected via your configured form provider.",
    },
  },
  zh: {
    nav: {
      story: "故事",
      venue: "场地",
      countdown: "倒计时",
      details: "婚礼信息",
      map: "地图",
      schedule: "流程",
      dress: "着装",
      rsvp: "回执",
    },
    hero: {
      kicker: "携家人诚挚邀请",
      title: "Jay & Pinky",
      subtitle: "邀请您见证我们的婚礼",
      dateLine: "2027 年 2 月 17 日 · 星期三",
      locationLine: "阿德莱德山 · The Manor Basket Range",
      cta: "填写回执",
      scroll: "我们的故事",
    },
    loveStory: {
      title: "我们的故事",
      lead: "每一段爱情都有自己的版本 — 这是我们的章节。",
      p1:
        "我们在平凡的日子里相遇，却让彼此的世界变得更明亮。从轻松的笑声与漫长的夜谈开始，慢慢长成了信任、耐心，以及一个共同称为「家」的约定。",
      p2:
        "我们选择彼此走向永远，也希望能与一路支持、陪伴、温柔以待我们的你们，一起分享这一天的喜悦。",
    },
    countdown: {
      title: "婚礼倒计时",
      doneMessage: "就是今天，我们结婚啦。",
      days: "天",
      hours: "时",
      minutes: "分",
      seconds: "秒",
    },
    venue: {
      title: "婚礼场地",
      credit: "照片来自 The Manor Basket Range 官方网站 — 阿德莱德山历史庄园。",
      morePhotos: "更多照片与介绍见场地官网",
    },
    map: {
      title: "场地地图",
      openInMaps: "在 Google 地图中打开",
    },
    intro: {
      title: "把温柔说给彼此听，把喜悦留给重要的人。",
      body:
        "若能与您同席，我们将倍感荣幸。愿这一晚有音乐、微风，以及一路陪伴我们的人们。",
    },
    details: {
      title: "关键信息",
      venue: "场地",
      venueValue: "The Manor Basket Range",
      address: "地址",
      addressValue: "澳大利亚南澳州 Basket Range，Lobethal 路 762 号，邮编 5138",
      time: "仪式",
      timeValue: "下午 4:30（ACDT 夏令时）— 请于 4:15 前抵达",
      reception: "晚宴",
      receptionValue: "5:30 鸡尾酒 · 6:30 正式用餐",
      parking: "停车",
      parkingValue: "庄园内提供免费停车位",
    },
    schedule: {
      title: "当晚流程",
      items: [
        { time: "16:30", label: "仪式" },
        { time: "17:30", label: "鸡尾酒与合影" },
        { time: "18:30", label: "晚宴与祝酒" },
        { time: "20:30", label: "第一支舞与派对" },
      ],
    },
    dress: {
      title: "着装要求",
      code: "鸡尾酒会正装（Cocktail）",
      hint:
        "质感上乘、透气舒适的面料为佳 — 米色、午夜蓝或柔和的植物色调都很合适。建议西装外套；领带可随个人风格。",
      note: "阿德莱德山夏季傍晚日落後可能转凉，建议备一件薄外套。",
    },
    gifts: {
      title: "礼物",
      body:
        "您的到来已是最好的礼物。若仍想表达心意，一份对我们未来小家的祝福将格外珍贵。",
    },
    rsvp: {
      title: "敬请回复",
      lead:
        "请告知是否能够出席，并备注饮食信息，方便厨房为您细心安排。",
      button: "打开回执",
      foot: "须完整填写四项才可提交（若无过敏，请填写「无」）。",
      modalTitle: "婚礼回执",
      close: "关闭",
      loading: "表单加载中…",
      fallbackTitle: "尚未配置表单",
      fallbackBody:
        "请在服务端设置 RSVP_GOOGLE_FORM_POST_URL 与四个 RSVP_GOOGLE_ENTRY_*，或设置 NEXT_PUBLIC_RSVP_FORM_EMBED_URL 嵌入 Google 表单。",
      openExternal: "在新标签页打开表单",
    },
    rsvpForm: {
      name: "姓名",
      attending: "是否出席？",
      attendingYes: "是",
      attendingNo: "否",
      allergies: "食物过敏",
      allergiesHint: "若没有，请填写「无」。",
      message: "留言",
      submit: "提交回执",
      submitting: "提交中…",
      successTitle: "期待与您相见，一起庆祝这一天。",
      successBody: "回执已送出 — 感谢您参与我们的重要时刻。",
      errorGeneric: "提交失败，请稍后再试。",
    },
    footer: {
      line: "爱与感谢 — Jay & Pinky",
      privacy: "回执数据由您配置的表单服务收集。",
    },
  },
} as const;

export function t(locale: Locale) {
  return copy[locale];
}
