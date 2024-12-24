1. 本机的git 安装地址在： D:\软件安装1\软件安装\Git\mingw64\libexec\git-core

git 删除历史记录：
删除仓库历史中的大文件
假设你想删除历史记录中所有包含名为 large_file.txt 的文件，并且你知道这个文件存在于所有的提交中
git filter-repo 是一个更强大的替代方案，用于重写 Git 历史记录。

安装 git filter-repo：
如果你使用的是 macOS 或 Linux，可以通过包管理器安装。
对于 Windows 用户，可以从 GitHub 下载并按照说明进行安装。
安装：
先安装python
# 或者全局安装（可能需要管理员权限）
python -m pip install git-filter-repo

本电脑全局安装就可使用

克隆你的仓库（如果还没有克隆）：
Bash
浅色版本
git clone --mirror https://github.com/blueyuyu/three.js.git
cd three.js.git
使用 git filter-repo 删除大文件：
Bash
浅色版本
git filter-repo --path VR-project/public/video/movie.mp4 --invert-paths
推送更改：

远程仓库链接断开，又重新链接
git remote add origin git@github.com:blueyuyu/three.js.git

Bash
浅色版本
git push origin --force --all   

改了之后有部分问题，用了强制推送


仓库文档：https://github.com/newren/git-filter-repo/blob/main/README.md?spm=5176.28103460.0.0.b7363f99CFk8VJ&file=README.md

阅读推荐：
