module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4],
        'space-infix-ops': 'error', // 要求操作符周围有空格
        'comma-spacing': 'error', // 逗号后面加空格
        'arrow-spacing': 'error', // 使用 => 前后空格
        'spaced-comment': 'warn', // 注释风格，前后留一个空格
        'no-irregular-whitespace': 'error', // 不能有不规则的空格
        'no-mixed-spaces-and-tabs': 'error', // 不能混用空格和tab
        'no-multiple-empty-lines': 'error', // 不能有多余的空行
        'no-var': 'error', // 不能使用var
        'eqeqeq': 'error', // 使用全等
        'quotes': [1, 'single'], // 引号类型，使用单引号
        'no-new': 'off',
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    }
}