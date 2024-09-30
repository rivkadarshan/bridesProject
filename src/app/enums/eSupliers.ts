export const eSupliers = {
    '1': 'הורויץ',
    '2': 'שרגי',
    '3': 'מלכה',
    '4': 'שנהב',
    '5': 'מאירוביץ',
    '6': 'יורם',
    '7': 'ברכת זהב',
    '8': 'צביקה',
    '9':'צורף בית שמש',
    '10':'אלי',
    '11':'יעקב',
    '12':'יוסי(משובצים)',
    '13':'כהן',
  } as const;
  
  export type Supliers = typeof eSupliers[keyof typeof eSupliers];
  