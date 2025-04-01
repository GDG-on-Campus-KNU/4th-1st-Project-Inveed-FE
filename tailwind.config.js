/** @type {import('tailwindcss').Config} */
import nativewindPreset from 'nativewind/preset';

export const content = ['./app/**/*.{js,jsx,ts,tsx}'];
export const presets = [nativewindPreset];
export const theme = {
  extend: {},
};
export const plugins = [];
