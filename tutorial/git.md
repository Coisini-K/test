# Git 使用指南

Git 是一个分布式版本控制系统，用于跟踪计算机文件的变化，并协调多人共同合作的项目。以下是 Git 的基本使用方法和常见命令。

## 安装 Git

1. **Windows**：

   - 访问 [Git 官方网站](https://git-scm.com/downloads) 下载适合 Windows 的安装程序。
   - 按照安装向导的指示进行安装。

2. **macOS**：

   - 使用 Homebrew 安装：

     ```sh
     brew install git
     ```

   - 或者通过 macOS 的软件包管理器安装。

3. **Linux**：

   - Ubuntu/Debian：

     ```sh
     sudo apt-get install git
     ```

   - CentOS/RHEL：

     ```sh
     sudo yum install git
     ```

## 配置 Git 用户信息

```sh
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

## 创建本地仓库

1. **初始化仓库**：

   ```sh
   git init
   ```

2. **克隆远程仓库**：

   ```sh
   git clone [repository-url]
   ```

## 基本工作流程

1. **查看状态**：

   ```sh
   git status
   ```

2. **添加文件到暂存区**：

   ```sh
   git add [file]
   ```

3. **添加所有改动**：

   ```sh
   git add .
   ```

4. **提交暂存区的改动**：

   ```sh
   git commit -m "Commit message"
   ```

## 分支管理

1. **查看分支**：

   ```sh
   git branch
   ```

2. **创建新分支**：

   ```sh
   git branch [branch-name]
   ```

3. **切换分支**：

   ```sh
   git checkout [branch-name]
   ```

4. **合并分支**：

   ```sh
   git merge [branch-name]
   ```

5. **删除分支**：

   ```sh
   git branch -d [branch-name]
   ```

## 远程仓库操作

1. **添加远程仓库**：

   ```sh
   git remote add origin [repository-url]
   ```

2. **查看远程仓库信息**：

   ```sh
   git remote -v
   ```

3. **拉取远程仓库的最新改动**：

   ```sh
   git pull origin [branch-name]
   ```

4. **推送本地改动到远程仓库**：

   ```sh
   git push origin [branch-name]
   ```

5. **推送新分支到远程仓库**：

   ```sh
   git push --set-upstream origin [branch-name]
   ```

6. **删除远程分支**：

   ```sh
   git push origin --delete [branch-name]
   ```

## 解决冲突

1. **查看冲突文件**：

   ```sh
   git status
   ```

2. **手动解决冲突**：

   - 打开冲突文件，解决冲突部分。
   - 保存文件并重新添加到暂存区。

   ```sh
   git add [conflicted-file]
   ```

3. **提交解决后的文件**：

   ```sh
   git commit -m "Resolved conflict"
   ```

## 日常操作

1. **查看提交历史**：

   ```sh
   git log
   ```

2. **撤销最近一次提交**：

   ```sh
   git reset --hard HEAD~1
   ```

3. **撤销暂存区的文件**：

   ```sh
   git reset [file]
   ```

4. **恢复已删除的文件**：

   ```sh
   git checkout -- [file]
   ```

5. **查看差异**：

   ```sh
   git diff [file]
   ```

6. **标签管理**：

   ```sh
   git tag [tag-name]
   git push origin [tag-name]
   ```

7. **重命名分支**：

   ```sh
   git branch -m [new-branch-name]
   ```

8. **合并分支时忽略冲突**：

   ```sh
   git merge --no-commit [branch-name]
   ```

9. **合并分支时保留历史记录**：

   ```sh
   git merge --no-commit --no-ff [branch-name]
   ```

10. **删除本地标签**：

    ```sh
    git tag -d [tag-name]
    ```

11. **删除远程标签**：

    ```sh
    git push origin :refs/tags/[tag-name]
    ```

## 常见问题及解决方法

### 无法推送更改

1. **检查远程仓库 URL**：

   ```sh
   git remote -v
   ```

2. **确认远程仓库 URL 是否正确**：

   ```sh
   git remote set-url origin [correct-repository-url]
   ```

3. **解决认证问题**：

   - 使用个人访问令牌（PAT）：

     ```sh
     git push https://<PAT>@github.com/your-repo.git
     ```

### 无法删除文件

1. **确认文件是否已添加到暂存区**：

   ```sh
   git status
   ```

2. **删除文件并从暂存区移除**：

   ```sh
   git rm [file]
   ```

3. **提交删除操作**：

   ```sh
   git commit -m "Delete file"
   ```

### 无法解决冲突

1. **查看冲突文件**：

   ```sh
   git status
   ```

2. **手动解决冲突**：

   - 打开冲突文件，解决冲突部分。
   - 保存文件并重新添加到暂存区。

   ```sh
   git add [conflicted-file]
   ```

3. **提交解决后的文件**：

   ```sh
   git commit -m "Resolved conflict"
   ```

## 结论

通过以上步骤，你可以有效地使用 Git 进行版本控制和协作。如果你在使用过程中遇到任何问题，可以查阅 Git 的官方文档或寻求社区支持。
