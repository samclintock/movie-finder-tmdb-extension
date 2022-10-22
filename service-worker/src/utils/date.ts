/**
 * Minimalist approach to determine if a date is more than
 * a week old.
 *
 * E.g isMoreThanOneWeekAgo(Date.now())
 */
export const isMoreThanOneWeekAgo = (date: number): boolean => 
    (new Date().getTime() - (7 * 24 * 60 * 60 * 1000)) > date;