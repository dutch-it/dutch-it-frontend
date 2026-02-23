// 숫자 포매팅
export const formatNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
  if (!onlyNumber) {
    return null;
  }

  const numericValue = Math.min(Number(onlyNumber), 1000000);
  return numericValue;
};

// 계좌번호 포매팅
export const formatAccountNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  const onlyNumber = e.target.value.replace(/[^0-9]/g, "");

  let formatted = onlyNumber;

  if (onlyNumber.length > 3 && onlyNumber.length <= 7) {
    formatted = `${onlyNumber.slice(0, 3)}-${onlyNumber.slice(3)}`;
  } else if (onlyNumber.length > 7) {
    formatted = `${onlyNumber.slice(0, 3)}-${onlyNumber.slice(
      3,
      7,
    )}-${onlyNumber.slice(7, 13)}`;
  }

  return formatted;
};

// 비율 포매팅
export const formatRatio = (e: React.ChangeEvent<HTMLInputElement>) => {
  const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
  if (!onlyNumber) return 0;

  const numericValue = Math.min(Number(onlyNumber), 100);
  return numericValue;
};
