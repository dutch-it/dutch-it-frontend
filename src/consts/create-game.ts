// 게임 초기 정보
export const DEFAULT_GAME_FORM = {
  totalAmount: 0,
  accountNumber: "",
  roundCount: 3,
  useCamera: true,
  useMic: true,
  participants: [{ ratio: 20 }, { ratio: 30 }, { ratio: 50 }],
};

// 은행 목록 표시용 정보
export interface Bank {
  id: string;
  name: string;
  fullName: string;
  iconUrl: string;
}

export const BANK_LIST: Bank[] = [
  {
    id: "nh",
    name: "농협",
    fullName: "NH농협",
    iconUrl: "/assets/banks/nh.svg",
  },
  {
    id: "kakao",
    name: "카카오뱅크",
    fullName: "카카오뱅크",
    iconUrl: "/assets/banks/kakao.svg",
  },
  {
    id: "kb",
    name: "국민",
    fullName: "KB국민",
    iconUrl: "/assets/banks/kb.svg",
  },
  {
    id: "toss",
    name: "토스뱅크",
    fullName: "토스뱅크",
    iconUrl: "/assets/banks/toss.svg",
  },
  {
    id: "shinhan",
    name: "신한",
    fullName: "신한",
    iconUrl: "/assets/banks/shinhan.svg",
  },
  {
    id: "woori",
    name: "우리",
    fullName: "우리",
    iconUrl: "/assets/banks/woori.svg",
  },
  {
    id: "ibk",
    name: "기업",
    fullName: "IBK기업",
    iconUrl: "/assets/banks/ibk.svg",
  },
  {
    id: "hana",
    name: "하나",
    fullName: "하나",
    iconUrl: "/assets/banks/hana.svg",
  },
  {
    id: "saemaul",
    name: "새마을",
    fullName: "새마을",
    iconUrl: "/assets/banks/saemaul.svg",
  },
  {
    id: "busan",
    name: "부산",
    fullName: "부산",
    iconUrl: "/assets/banks/busan.svg",
  },
  {
    id: "im",
    name: "iM뱅크",
    fullName: "iM뱅크(대구)",
    iconUrl: "/assets/banks/im.svg",
  }, // 토스 정책에 따라 '대구'로 보내야 할 수도 있습니다. 테스트 후 조정해 주세요.
  {
    id: "kbank",
    name: "케이뱅크",
    fullName: "케이뱅크",
    iconUrl: "/assets/banks/kbank.svg",
  },
  {
    id: "shinhyup",
    name: "신협",
    fullName: "신협",
    iconUrl: "/assets/banks/shinhyup.svg",
  },
  {
    id: "post",
    name: "우체국",
    fullName: "우체국",
    iconUrl: "/assets/banks/post.svg",
  },
  {
    id: "sc",
    name: "SC제일",
    fullName: "SC제일",
    iconUrl: "/assets/banks/sc.svg",
  },
  {
    id: "kyongnam",
    name: "경남",
    fullName: "경남",
    iconUrl: "/assets/banks/kyongnam.svg",
  },
  {
    id: "kwangju",
    name: "광주",
    fullName: "광주",
    iconUrl: "/assets/banks/kwangju.svg",
  },
  {
    id: "suhyup",
    name: "수협",
    fullName: "수협",
    iconUrl: "/assets/banks/suhyup.svg",
  },
  {
    id: "jeonbuk",
    name: "전북",
    fullName: "전북",
    iconUrl: "/assets/banks/jeonbuk.svg",
  },
  {
    id: "jeju",
    name: "제주",
    fullName: "제주",
    iconUrl: "/assets/banks/jeju.svg",
  },
  {
    id: "citi",
    name: "씨티",
    fullName: "씨티",
    iconUrl: "/assets/banks/citi.svg",
  },
  {
    id: "kdb",
    name: "산업",
    fullName: "KDB산업",
    iconUrl: "/assets/banks/kdb.svg",
  },
  {
    id: "sbi",
    name: "SBI저축은행",
    fullName: "SBI저축은행",
    iconUrl: "/assets/banks/sbi.svg",
  },
];
