export const getDateDiff = (d1, d2) => {
    // 현재 시간을 Date 객체로 변환
    const date1 = new Date(d1);
    
    // 마지막 메세지 시간을 Date 객체로 변환
    const date2 = new Date(d2);

    // date1, date2의 시간 차이를 계산하여 diffDate에 저장 ms
    const calcData = date1.getTime() - date2.getTime();

    // 일
    const days = Math.round(Math.abs(calcData) / (1000 * 60 * 60 * 24));

    // 주
    const weeks = Math.round(Math.abs(calcData) / (1000 * 60 * 60 * 24 * 7));

    // 월
    const months = Math.round(Math.abs(calcData) / (1000 * 60 * 60 * 24 * 30));

    // 시간
    const calcHours = Math.round(Math.abs(calcData) / (1000 * 60 * 60));
    const calcMinutes = Math.floor(Math.abs(calcData) / (1000 * 60)) % 60;

    // 12시간제를 사용하기 위한 AM/PM 변환
    const period = calcHours >= 12 ? 'PM' : 'AM';
    const displayHours = calcHours % 12 || 12;  // 12시간제로 변환 (0시를 12시로)

    // 시간:분 형식으로 변환
    const timeString = `${displayHours}:${calcMinutes.toString().padStart(2, '0')} ${period}`;

    //1일 미만일 때 메세지가 온 시간으로 출력
    if(days < 1){
        return timeString
    }

    // 7일 미만일 때 현재 날짜 - 마지막 메세지가 온 날짜로 출력
    else if(days > 1 && days < 8){
        return `${days} days ago`
    }

    // 7일 이상일 때 현재 주 - 마지막 메세지가 온 주로 출력 
    else if (days >= 8 && days < 31){
        return `${weeks} weeks ago`
    }
    // 31일 이상일 때 마지막 메세지가 온 월로 출력
    else if(days > 31){
        return `${months} months ago`
  }
}
