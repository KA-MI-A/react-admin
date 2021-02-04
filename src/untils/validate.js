export const validate_password=/^[0-9a-zA-Z_.!@#$~^]{6,16}$/


/**
 * 6到16位密码
 */

export function validatePassword (str) {
  const reg=/^[0-9a-zA-Z_.!@#$~^]{6,16}$/;
  return reg.test(str)
} 