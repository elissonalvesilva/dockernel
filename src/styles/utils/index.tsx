import { ROOT_FONT_SIZE } from './../theme/constants';

/**
 * Converts the given value to `rem` unit.
 *
 * @param {number} value - Desired to convert value expressed in pixels
 *
 * @returns {string} - Value converted to `rem`
 */
const pxToRem = (value: number) => {
  return `${value / ROOT_FONT_SIZE}rem`;
};

/**
 * Converts the given hex color value to rgb
 *
 * @param {string} hex - color hex string
 * @param {string|number} [alpha=''] - opacity value
 *
 * @returns {object} - object containing keys: r,g,b,a,rgba
 */
function hexToRgb(hex: string, alpha = '') {
  // stolen from: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  const result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;

  return {
    r,
    g,
    b,
    a: alpha,
    rgba
  };
}

export { pxToRem, hexToRgb };
export default { pxToRem, hexToRgb };
