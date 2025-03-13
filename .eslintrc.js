module.exports = {
  extends: [
    'airbnb', // Airbnb 스타일 가이드
    'plugin:prettier/recommended', // Prettier 설정을 ESLint와 통합
  ],
  plugins: ['prettier'], // Prettier 플러그인 추가
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }], // Prettier 규칙을 ESLint가 검토하도록 설정
    'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
  },
};
