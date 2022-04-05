const OFF = 0
const ERROR = 2

module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],

    // 自定义规则
    rules: {
        // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
        'type-enum': [
            ERROR,
            'always',
            [
                'feat', // 新功能
                'fix', //  修复
                'docs', // 文档变更
                'style', // 代码格式（不影响代码运行的变动）
                'refactor', // 重构（既不是增加feature）,也不是修复bug
                'pref', // 性能优化
                'test', // 增加测试
                'chore', // 构建过程或辅助工具的变动
            ],
        ],
        // subject 大小写不做校验
        'subject-case': [OFF],
    },
}
