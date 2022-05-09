export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const FIVE_TO_HUNDRED_REGEX = /^((100)|([1-9][0-9]{1})|([5-9]))$/
export const ZERO_TO_HUNDRED_REGEX = /^((100)|([1-9][0-9]{1})|([0-9]))$/
// export const EIGHTEEN_TO_HUNDRED_REGEX = /(1[89]|[2-9]\d|100)/;
export const EIGHTEEN_TO_HUNDRED_REGEX = /^(1[89]|[2-9][0-9]|100)$/
export const positiveDigitsRegex = /^(0|[1-9][0-9]*)$/

export const FULL_NAME_REGEX = /^[A-Za-z]+\s[A-Za-z]+.+$/
export const ONLY_DIGITS = /^[0-9]*$/
// export const FULL_NAME_REGEX = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
// export const FULL_NAME_REGEX = /^([A-Z][a-zA-Z]*)/;
