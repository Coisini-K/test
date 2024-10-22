# vueShop

这是一个基于 Vue 3 和 Vite 的项目模板。

推荐的 IDE 设置：

- VSCode + Volar （并禁用 Vetur）

自定义配置：
参见 [Vite 配置参考](https://vite.dev/config/)

项目设置：

```sh
npm install
```

编译并热重载以开发：

```sh
npm run dev
```

编译并压缩以生产：

```sh
npm run build
```

预览生产环境构建结果：

```sh
npm run preview
```

运行单元测试（使用 Vitest）：

```sh
npm run test:unit
```

运行端到端测试（使用 Cypress）：

在开发服务器上运行端到端测试：

```sh
npm run test:e2e:dev
```

这将在 Vite 开发服务器上运行端到端测试，速度比生产构建快得多。

在生产构建上运行端到端测试：

建议在部署前（例如在 CI 环境中）使用生产构建进行端到端测试：

```sh
npm run build
npm run test:e2e
```

代码格式化：

```sh
npm run format
```

代码检查：

```sh
npm run check
```

代码规范检查（使用 ESLint）：

```sh
npm run lint
```

Git 相关脚本：

初始化 Git 仓库：

```sh
npm run git:init
```

查看当前仓库状态：

```sh
npm run git:status
```

添加所有更改到暂存区：

```sh
npm run git:add
```

提交所有更改（需提供提交信息）：

```sh
npm run git:commit "提交信息"
```

例如：

```sh
npm run git:commit "Routine maintenance"
```

推送提交到远程仓库：

```sh
npm run git:push
```

切换分支：

```sh
npm run git:checkout [branch-name]
```

例如：

```sh
npm run git:checkout main
```

列出所有分支：

```sh
npm run git:branch
```

合并分支：

```sh
npm run git:merge [branch-name]
```

例如：

```sh
npm run git:merge feature-x
```

查看差异：

```sh
npm run git:diff
```

检查换行符等格式问题：

```sh
npm run git:diff-check
```

创建标签：

```sh
npm run git:tag [tag-name]
```

例如：

```sh
npm run git:tag v1.0.0
```

查看提交历史：

```sh
npm run git:log
```

清理未跟踪的文件：

```sh
npm run git:clean
```

克隆仓库：

```sh
npm run git:clone [repository-url]
```

例如：

```sh
npm run git:clone https://github.com/your/repo.git
```

获取远程仓库的变化：

```sh
npm run git:fetch
```

拉取远程仓库的变化：

```sh
npm run git:pull
```

暂存当前的工作状态：

```sh
npm run git:stash
```

应用暂存的工作状态：

```sh
npm run git:unstash
```

软重置（保留工作树）：

```sh
npm run git:reset-soft
```

混合重置（重置暂存区和工作树）：

```sh
npm run git:reset-mixed
```

硬重置（重置暂存区和工作树）：

```sh
npm run git:reset-hard
```

注意事项：

- 请确保在使用 `npm run git:commit` 时提供正确的提交信息。
- 使用 Git 相关脚本时，确保提供必要的参数，例如分支名称、标签名称等。
- 如果有任何问题或需要进一步的帮助，请随时告诉我！
