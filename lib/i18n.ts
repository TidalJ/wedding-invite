export type Locale = "en" | "zh";

export const copy = {
  en: {
    nav: {
      story: "Story",
      venue: "Venue",
      countdown: "Countdown",
      schedule: "Programme",
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
      title: "Where we gather",
      credit:
        "Stone, light, and the Hills — the setting we chose to begin this chapter with you.",
      plateLine: "Fig. I — The estate",
    },
    map: {
      title: "Directions",
      directions: "Open in Google Maps",
    },
    intro: {
      title: "A quiet promise, made loud with joy.",
      body:
        "We would be honored to share this chapter with you — an evening of warmth, music, and the people who shaped our story.",
    },
    details: {
      title: "At a glance",
      venue: "Venue",
      venueValue: "The Manor Basket Range",
      address: "Address",
      addressValue: "762 Lobethal Rd, Basket Range SA 5138, Australia",
      parking: "Parking",
      parkingValue:
        "When you arrive, please follow on-site signage or the venue team’s directions. If anything changes, we’ll let you know before the day.",
    },
    schedule: {
      title: "Programme",
      dek: "Timings shaped with our wedding planners — a little drift is part of the day’s grace.",
      timesNote:
        "Guest arrival through dinner: every time you need is in the rundown below, in order of the day.",
      groups: [
        {
          label: "I · Portraits",
          rows: [
            {
              time: "3:30 PM",
              title: "Bridal photography",
              note: "Our portrait session before the room fills with guests.",
            },
          ],
        },
        {
          label: "II · Arrival & ceremony",
          rows: [
            {
              time: "4:15 PM",
              title: "Guest arrival",
              note: "Please make your way in. Pinky rests and refreshes; Jay will welcome you.",
            },
            { time: "4:30 PM", title: "Ceremony" },
            {
              time: "5:00 PM",
              title: "Ceremony concludes",
              note: "Group portraits with everyone we love.",
            },
            {
              time: "5:30 PM",
              title: "Portraits end",
              note: "Pinky changes for the evening; a short pause before dinner.",
            },
          ],
        },
        {
          label: "III · Reception",
          rows: [
            { time: "6:15 PM", title: "Reception opens" },
            {
              time: "6:30 PM",
              title: "Reception photography wraps",
              note: "Formal photos step back; the feast and celebration carry on.",
            },
          ],
        },
      ],
    },
    dress: {
      title: "Dress code",
      code: "Attire",
      hint:
        "Think refined, breathable fabrics — soft neutrals, midnight blue, or botanical tones, avoid red. Jackets appreciated; ties optional.",
      note:
        "Summer evening in the Hills can cool down after sunset — a light wrap is a thoughtful touch.",
    },
    gifts: {
      title: "Gifts",
      body:
        "Thanks for coming to celebrate this special moment with us.  In Chinese tradition, giving a red pocket (hóngbāo) with cash inside - a way of offering your blessings and good wishes.  So please feel free to give according to your heart and convenience - no pressure at all.  Your presence is already the best gift to us. Red envelopes will provide during the reception.",
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
      title: "相聚之地",
      credit: "石墙、天光与山丘 — 我们在这里，与你们开启这一章。",
      plateLine: "图一 · 庄园",
    },
    map: {
      title: "路线",
      directions: "在 Google 地图中打开",
    },
    intro: {
      title: "把温柔说给彼此听，把喜悦留给重要的人。",
      body:
        "若能与您同席，我们将倍感荣幸。愿这一晚有音乐、微风，以及一路陪伴我们的人们。",
    },
    details: {
      title: "要点一览",
      venue: "场地",
      venueValue: "The Manor Basket Range",
      address: "地址",
      addressValue: "澳大利亚南澳州 Basket Range，Lobethal 路 762 号，邮编 5138",
      parking: "停车",
      parkingValue:
        "抵达时请遵照场地指示牌或工作人员引导停车。若有变动，我们会在婚礼前另行通知。",
    },
    schedule: {
      title: "婚礼流程",
      dek: "时间与节奏由我们与婚礼策划共同梳理；当日若有微调，只为更从容的美好。",
      timesNote:
        "宾客抵达、仪式至晚宴：您需要的时刻均已按当日顺序列于下方时间表。",
      groups: [
        {
          label: "壹 · 婚纱照",
          rows: [
            {
              time: "15:30",
              title: "婚纱照拍摄",
              note: "仪式前，我们先留下只属于两人的影像。",
            },
          ],
        },
        {
          label: "贰 · 抵达与仪式",
          rows: [
            {
              time: "16:15",
              title: "宾客抵达",
              note: "请陆续入场。新娘补妆休息；新郎在门口迎候各位。",
            },
            { time: "16:30", title: "仪式" },
            {
              time: "17:00",
              title: "仪式礼成",
              note: "全体亲友合影。",
            },
            {
              time: "17:30",
              title: "合影结束",
              note: "新娘换装准备晚宴；中间稍作休整。",
            },
          ],
        },
        {
          label: "叁 · 晚宴",
          rows: [
            { time: "18:15", title: "晚宴开场" },
            {
              time: "18:30",
              title: "晚宴拍摄结束",
              note: "正式拍摄告一段落，之后请尽兴用餐与庆祝。",
            },
          ],
        },
      ],
    },
    dress: {
      title: "着装要求",
      code: "正装",
      hint:
        "质感上乘、透气舒适的面料为佳 — 米色、午夜蓝或柔和的植物色调都很合适,尽量避免红色。建议西装外套；领带可随个人风格。",
      note: "阿德莱德山夏季傍晚日落後可能转凉，建议备一件薄外套。",
    },
    gifts: {
      title: "心意与礼金",
      body:
        "您能前来见证我们的婚礼，就是给我们最珍贵的礼物。按照中式礼节，许多亲友会以「红包」送上祝福（礼金置于红包内），而非实体礼品。若您也愿意用这种方式表达心意，我们会非常感激；一切随缘、重在情意，绝无勉强。",
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
