/* =================================================================
   손권희닷컴 내용 파일 (content.js)

   사이트의 글·목록·링크·사진 이름은 전부 이 파일에서만 고칩니다.
   디자인 파일(index.html)은 열 필요가 없습니다.

   규칙 세 가지
   1) 글은 "큰따옴표" 안에 적습니다. 글 안에 큰따옴표를 써야 하면 「 」를 쓰세요.
   2) 목록의 각 줄 끝에는 쉼표( , )가 있어야 합니다.
   3) ""(빈칸)으로 두거나 목록을 [] 로 비워 두면 사이트에 "준비 중"으로 보입니다.
   ================================================================= */

/* ── 사진 ── images 폴더에 사진을 넣고, 여기에 파일 이름을 적습니다. */
const IMG = {
  profile: "images/profile.jpg",   // 프로필 사진 (세로 사진 권장)
  cover:   "images/cover.jpg",     // 『환승역』 앞표지
  art:     "images/art.jpg"        // 표지 그림(새와 꽃) 띠
};

/* ── 메뉴: 순서를 바꾸려면 줄 순서만 바꾸세요. id는 바꾸지 마세요. ── */
const MENU = [
  { id:"home",      label:"HOME" },
  { id:"profile",   label:"손권희" },
  { id:"book",      label:"환승역" },
  { id:"lecture",   label:"강연" },
  { id:"parenting", label:"부모교육" },
  { id:"hearing",   label:"청능사" },
  { id:"youtube",   label:"YouTube" },
  { id:"archive",   label:"기록" },
  { id:"contact",   label:"CONTACT" }
];

/* ── 기본 정보 ── */
const SITE = {
  name: "손권희닷컴",
  english: "SONGWONHEE",
  tagline: "환승역은 끝이 아니라 다시 출발하는 곳입니다.",
  titles: "작가 · 전문청능사 · 강연가 · 부모교육가",
  concept: "삶의 환승역을 이야기하는 사람, 손권희"
};

/* ── HOME ── */
const HOME = {
  // 시집 소개 한 줄
  bookLine: "가난했던 어린 시절과 가족에 대한 기억, 곁을 내어 준 소중한 인연, 사랑과 이별, 상처와 용서의 순간들이 한 편 한 편의 시가 되어 흐릅니다.",
  // 프롤로그 발췌 (편지 모양 영역)
  letter: [
    "기쁜 날에도, 슬픈 날에도, 누군가를 그리워하던 날에도, 잊고 싶지 않았던 순간에도 나는 휴대전화 메모장을 열어 마음을 적었다.",
    "그렇게 한 줄, 또 한 줄."
  ],
  letterSign: "2026년 여름, 손권희",
  // '차례' 바로가기 (to = 메뉴 id, title = 이름, text = 오른쪽 설명)
  toc: [
    { to:"profile",   title:"손권희",   text:"인사말 · 지나온 환승역" },
    { to:"lecture",   title:"강연",     text:"주제 · 이력 · 문의" },
    { to:"parenting", title:"부모교육", text:"20년 어린이집 현장" },
    { to:"hearing",   title:"청능사",   text:"전문청능사 상담" },
    { to:"youtube",   title:"YouTube",  text:"채널 「환승역」" },
    { to:"archive",   title:"기록",     text:"언론 · 방송 · 사진" }
  ]
};

/* ── 손권희 ── */
const PROFILE = {
  greeting: "",          // ← 인사말(본인 글). 문단 사이는 \n\n 으로 띄웁니다.
  realName: "손송미",     // 본명
  // 날개 소개 (시집 『환승역』에서 옮김)
  bio: "전남 완도의 작은 섬에서 태어나 바다를 바라보며 자랐습니다. 유아교육을 공부하고 20년간 어린이집을 운영하며 아이들과 부모를 만났습니다. 사회복지학 · 크리스찬교육학 · 청각학을 공부해 세 분야의 석사 학위를 받았고, 지금은 전문청능사로 사람들의 소리와 그 너머의 삶을 만나고 있습니다.",
  // 경력 연표: 한 줄 추가하면 노선도에 역이 하나 늘어납니다.
  // 견본: { year:"2027.03", role:"역할", text:"설명" },
  route: [
    { year:"",        role:"전남 완도 출생", text:"작은 섬에서 태어나 바다를 바라보며 자람" },
    { year:"",        role:"어린이집 원장", text:"유아교육을 공부하고 20년간 어린이집 운영" },
    { year:"",        role:"세 분야 석사", text:"사회복지학 · 크리스찬교육학 · 청각학" },
    { year:"",        role:"전문청능사 · 보청기 사업", text:"사람들의 소리와 그 너머의 삶을 만나는 일" },
    { year:"",        role:"프리저브드플라워 아트 작가", text:"" },
    { year:"",        role:"강연가 · 부모교육가", text:"" },
    { year:"2026.09", role:"시집 『환승역』 출간", text:"북랩 · 표지와 본문 그림 화가 김동주" },
    { year:"다음 역",  role:"YouTube 코칭 프로그램", text:"곧 시작합니다", next:true }
  ],
  education: ["유아교육 전공", "사회복지학 석사", "크리스찬교육학 석사", "청각학 석사"],
  licenses:  ["전문청능사"],
  awards:    []          // 견본: "2027 ○○상 (○○협회)",
};

/* ── 환승역 (책) ── */
const BOOK = {
  title: "환승역",
  subtitle: "살아낸 시간 끝에서, 다시 나에게로",
  publisher: "북랩",
  date: "2026년 9월 10일",
  price: "19,000원",
  isbn: "979-11-7598-473-8 03810",
  ebookIsbn: "979-11-7598-474-5 05810",
  art: "화가 김동주 (표지 · 본문 그림)",
  about: [
    "삶은 언제나 계획한 방향으로 흘러가지는 않는다. 때로는 멈춰 서야 했고, 때로는 원하지 않는 길을 건너야 했다.",
    "『환승역』은 그렇게 삶의 파도를 견디며 지나온 한 사람의 시간을 시와 이야기로 담아낸 책이다. 가난했던 어린 시절과 가족에 대한 기억, 곁을 내어 준 소중한 인연, 사랑과 이별, 상처와 용서의 순간들이 한 편 한 편의 시가 되어 흐른다.",
    "이 책은 지나온 삶을 돌아보는 기록인 동시에, 이제는 자신의 마음이 향하는 곳으로 걸어가려는 한 사람의 새로운 항해다."
  ],
  quotes: [
    { text:"기차는 멈추기 위해 역에 들어오는 것이 아니라,\n다시 출발하기 위해 잠시 숨을 고른다.", from:"프롤로그" },
    { text:"세월을 살아내어 보니\n지나온 시간들은\n단지 플랫폼이었음을 알게 되었다", from:"1부 출항 · 「환승역에서」" }
  ],
  parts: [
    { n:"1부", title:"출항", text:"새로운 삶을 향한 첫걸음" },
    { n:"2부", title:"생존", text:"살아낸 시간, 견디며 지나온 나날들" },
    { n:"3부", title:"인연", text:"마음을 건넨 사람들, 사람이 내 삶으로 들어온 시간" },
    { n:"4부", title:"화해", text:"나를 용서하고 품은 시간" }
  ],
  // 구매처. 견본: { name:"알라딘", url:"https://..." },
  stores: [
    { name:"교보문고", url:"https://product.kyobobook.co.kr/detail/S000221162607" },
    { name:"YES24",    url:"https://www.yes24.com/product/goods/195922581" }
  ],
  launchPhotos: [],   // 출간기념식 사진. 견본: { src:"images/book/launch1.jpg", alt:"출간기념식에서 인사하는 손권희" },
  reviews: []         // 독자 후기. 견본: { text:"후기 내용", by:"독자 이름" },
};

/* ── 강연 ── */
const LECTURE = {
  topics: [],   // 견본: { title:"강연 주제", text:"짧은 설명" },
  history: [],  // 견본: { date:"2026.10.20", org:"○○도서관", topic:"강연 주제" },
  photos: []    // 견본: { src:"images/lecture/2026-10.jpg", alt:"사진 설명" },
};

/* ── 부모교육 ── */
const PARENTING = {
  program: "",   // 프로그램 소개
  target: "",    // 대상
  structure: "", // 구성 (예: 1회 90분, 4회차)
  story: "",     // 어린이집 원장 시절 이야기
  history: [],   // 견본: { date:"2026.11", org:"기관", topic:"주제" },
  photos: []
};

/* ── 청능사 ── */
const HEARING = {
  intro: "",
  license: "전문청능사",
  business: [],   // 보청기 사업 이력. 견본: { year:"2015", text:"내용" },
  consult: ""     // 상담 안내 (장소 · 요일 · 예약 방법)
};

/* ── YouTube ──
   channelId만 맞으면 채널에 올린 영상 가운데 가장 최근 영상이 자동으로 먼저 보입니다.
   따로 영상을 등록할 필요가 없습니다. */
const YOUTUBE = {
  channelName: "환승역",
  handle: "@환승역손권희",
  channelId: "UCPPL7v4y1mHvAZQoHRkhtoQ",
  channelUrl: "https://www.youtube.com/channel/UCPPL7v4y1mHvAZQoHRkhtoQ",
  intro: "인생은 언제든 다시 시작할 수 있습니다.",
  coaching: { open:false, text:"YouTube 기반 코칭 프로그램을 준비하고 있습니다." }
};

/* ── 기록 (아카이브) ──
   한 줄 추가하면 카드가 생기고 최신 순으로 정렬됩니다. HOME '최근 소식'에도 최신 3건이 자동으로 뜹니다.
   type은 아래 6개 중 하나를 그대로 적습니다:
   언론 보도 / 방송·인터뷰 / 강연·행사 / 수상·위촉 / 사진 / 프리저브드플라워 작품
   견본: { type:"언론 보도", date:"2026-09-15", media:"○○일보", title:"기사 제목", summary:"직접 쓴 2~3줄 요약", url:"https://..." }, */
const ARCHIVE = [
  { type:"언론 보도", date:"2024-05-10", media:"경기헤드뉴스", title:"수원시 영통구 원천동 저소득 난청대상자를 위해 중앙보청기 손권희 난청지원센터와 MOU 체결", summary:"원천동 행정복지센터와 업무협약을 맺고, 동에서 추천한 저소득 난청 주민에게 보청기를 무료로 지원하기로 했습니다.", url:"https://www.ghnews.net/mobile/article.html?no=130839" },
  { type:"언론 보도", date:"2023-12-13", media:"뉴스Q", title:"수원시 팔달구 우만2동 주민자치회 손권희 위원 「100세 시대 청각관리」 쏙쏙특강 진행", summary:"우만2동 주민자치회 쏙쏙특강에서 난청 예방과 원인, 보청기 선택·사용법을 강의하고 강의 뒤 무료 청력검사를 진행했습니다.", url:"https://www.newsq.kr/news/articleView.html?idxno=87694" },
  { type:"언론 보도", date:"2023-08-28", media:"월간인물", title:"손권희 난청지원센터, 수원시 영통구 매탄1동 저소득 홀몸어르신 보청기 지원", summary:"매탄1동 저소득 홀몸어르신에게 약 150만 원 상당의 보청기를 기증하고, 정확한 진단을 위해 병원 동행도 약속했습니다.", url:"https://www.monthlypeople.com/news/articleView.html?idxno=640561" },
];
const ARCHIVE_TYPES = ["언론 보도","방송·인터뷰","강연·행사","수상·위촉","사진","프리저브드플라워 작품"];

/* ── CONTACT ── */
const CONTACT = {
  email: "",        // 예: "songwonhee@gmail.com"
  phone: "",        // 예: "010-0000-0000"  (적으면 휴대폰에서 바로 전화 걸기 버튼이 생깁니다)
  instagram: "",    // 인스타그램 주소
  youtube: "https://www.youtube.com/channel/UCPPL7v4y1mHvAZQoHRkhtoQ",
  types: ["강연","부모교육","청능 상담","방송·인터뷰","기타"],
  formEndpoint: ""  // 문의 접수 주소 (안내서 '문의 접수 연결' 참고)
};
