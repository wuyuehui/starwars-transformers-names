module.exports = {
    types: [
        { value: 'feat', name: 'feat:      新功能' },
        { value: 'fix', name: 'fix:       修复' },
        { value: 'docs', name: 'docs:      文档变更' },
        { value: 'style', name: 'style:     代码格式(不影响代码运行的变动)' },
        { value: 'refactor', name: 'refactor:  重构(既不是增加feature,也不是修复bug)' },
        { value: 'pref', name: 'pref:      性能优化' },
        { value: 'test', name: 'test:      增加测试' },
        { value: 'chore', name: 'chore:     构建过程或辅助工具的变动' },
    ],

    // override the messages, defaults are as follows
    messages: {
        type: "请选择此次提交的类型:",
        // used if allowCustomScopes is true
        customScope: '请输入修改的范围（可选）:',
        subject: '请简要描述提交（必填）:\n',
        body: '请输入详细描述（可选）. 使用 "|" 换行:\n',
        confirmCommit: '确认要使用以上信息提交？',
    },

    allowCustomScopes: true,

    // skip any questions you want
    skipQuestions: ['body'],

    // limit subject length
    subjectLimit: 100,
};