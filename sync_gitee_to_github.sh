
#!/bin/bash
# 设置远程仓库地址
GITEE_REPO="https://gitee.com/yingnuo/shadcn-admin-server.git"
GITHUB_REPO="https://github.com/SakuraWord/shadcn-admin-server.git"

# 克隆Gitee仓库
git clone $GITEE_REPO
cd $(basename $GITEE_REPO .git)

# 添加GitHub远程仓库
git remote add github $GITHUB_REPO

# 推送到GitHub
git push github master
