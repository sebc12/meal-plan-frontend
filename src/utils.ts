export function getCurrentWeek(): number {
    const today = new Date();
    const oneJan = new Date(today.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
  
    return Math.ceil((((today.getTime() - oneJan.getTime()) / millisecsInDay) + oneJan.getDay() + 1) / 7);
  }
  