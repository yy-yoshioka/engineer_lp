---
title: 'Git/GitHubの基本操作完全ガイド'
date: '2024-02-25'
author: '伊藤健太'
excerpt: 'バージョン管理の基礎から、プルリクエストの作成まで。現場で必要なGitの知識を体系的に学べます。'
category: 'programming'
tags: ['Git', 'GitHub', 'バージョン管理', 'チーム開発']
thumbnail: '/images/blog/git-github-guide.jpg'
featured: false
---

## はじめに

Gitは現代のソフトウェア開発において必須のツールです。しかし、初めて触れる方にとっては、その概念や操作方法が複雑に感じられることもあるでしょう。

この記事では、Gitの基本概念から実践的なGitHub活用方法まで、現場で必要な知識を体系的に解説します。この記事を読み終える頃には、自信を持ってGitを使えるようになっているはずです。

## Gitとは？基本概念の理解

### バージョン管理システムとは

バージョン管理システムは、ファイルの変更履歴を記録し、必要に応じて過去の状態に戻したり、複数人での共同作業を可能にするシステムです。

```
なぜバージョン管理が必要？
1. 変更履歴の追跡
2. バックアップとしての役割
3. チーム開発での競合解決
4. 実験的な変更の安全な試行
```

### Gitの特徴

- **分散型**: 各開発者が完全なリポジトリのコピーを持つ
- **高速**: ほとんどの操作がローカルで完結
- **ブランチ機能**: 並行して複数の開発が可能
- **データの整合性**: SHA-1ハッシュによる管理

## 環境構築とGitの初期設定

### Gitのインストール

```bash
# macOS (Homebrew)
brew install git

# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# Windows
# Git for Windows をダウンロードしてインストール
# https://git-scm.com/download/win
```

### 初期設定

```bash
# ユーザー名とメールアドレスの設定（必須）
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# エディタの設定
git config --global core.editor "code --wait"  # VS Code の場合

# 改行コードの自動変換設定
# Windows
git config --global core.autocrlf true
# Mac/Linux
git config --global core.autocrlf input

# 設定の確認
git config --list
```

### SSH鍵の設定（GitHub用）

```bash
# SSH鍵の生成
ssh-keygen -t ed25519 -C "your.email@example.com"

# 生成された公開鍵を表示
cat ~/.ssh/id_ed25519.pub

# GitHubに公開鍵を登録
# Settings > SSH and GPG keys > New SSH key

# 接続テスト
ssh -T git@github.com
```

## Gitの基本操作

### リポジトリの作成と初期化

```bash
# 新規プロジェクトの場合
mkdir my-project
cd my-project
git init

# 既存プロジェクトの場合
cd existing-project
git init

# .gitignore の作成
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
```

### 基本的なワークフロー

```bash
# 1. ファイルの変更状態を確認
git status

# 2. 変更をステージングエリアに追加
git add file1.txt file2.txt
# または全ファイル
git add .
# 対話的に選択
git add -p

# 3. コミット
git commit -m "feat: ユーザー認証機能を追加"

# コミットメッセージを詳しく書く場合
git commit
# エディタが開くので、詳細なメッセージを記述

# 4. コミット履歴の確認
git log
git log --oneline
git log --graph --oneline --all
```

### コミットメッセージの書き方

```
<type>: <subject>

<body>

<footer>

例：
feat: ユーザープロフィール編集機能を追加

- 名前、メールアドレス、プロフィール画像の変更が可能
- バリデーション機能を実装
- 画像はS3にアップロード

Closes #123
```

タイプの種類：

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメントのみの変更
- `style`: コードの意味に影響しない変更（空白、フォーマット等）
- `refactor`: バグ修正や機能追加を伴わないコードの変更
- `test`: テストの追加や修正
- `chore`: ビルドプロセスやツールの変更

## ブランチ操作

### ブランチの基本

```bash
# ブランチ一覧の表示
git branch
git branch -a  # リモートブランチも含む

# 新しいブランチの作成
git branch feature/user-auth

# ブランチの切り替え
git checkout feature/user-auth
# または作成と切り替えを同時に
git checkout -b feature/user-auth

# ブランチ名の変更
git branch -m old-name new-name

# ブランチの削除
git branch -d feature/user-auth  # マージ済みの場合
git branch -D feature/user-auth  # 強制削除
```

### ブランチ戦略

#### Git Flow

```
main
  └── develop
         ├── feature/user-auth
         ├── feature/payment
         └── release/v1.0.0
              └── hotfix/critical-bug
```

#### GitHub Flow（シンプル）

```
main
  ├── feature/user-auth
  ├── feature/payment
  └── fix/login-bug
```

## リモートリポジトリとの連携

### リモートリポジトリの設定

```bash
# リモートリポジトリの追加
git remote add origin git@github.com:username/repository.git

# リモートリポジトリの確認
git remote -v

# リモートリポジトリの変更
git remote set-url origin new-url

# リモートリポジトリの削除
git remote remove origin
```

### プッシュとプル

```bash
# 初回プッシュ（-u でアップストリームブランチを設定）
git push -u origin main

# 以降のプッシュ
git push

# 特定のブランチをプッシュ
git push origin feature/user-auth

# リモートの変更を取得
git fetch
git pull  # fetch + merge

# リベースでプル（履歴をきれいに保つ）
git pull --rebase
```

## マージとコンフリクト解決

### マージの基本

```bash
# feature ブランチを main にマージ
git checkout main
git merge feature/user-auth

# マージコミットを作らない（Fast-forward）
git merge --ff-only feature/user-auth

# 必ずマージコミットを作る
git merge --no-ff feature/user-auth

# マージを中止
git merge --abort
```

### コンフリクトの解決

```bash
# コンフリクトが発生した場合
<<<<<<< HEAD
現在のブランチの内容
=======
マージしようとしているブランチの内容
>>>>>>> feature/user-auth

# 1. ファイルを編集してコンフリクトを解決
# 2. マーカーを削除し、正しい内容に修正
# 3. ステージングに追加
git add conflicted-file.txt
# 4. コミット
git commit
```

### マージツールの使用

```bash
# マージツールの設定
git config --global merge.tool vimdiff

# マージツールを起動
git mergetool
```

## よく使う実践的なコマンド

### 変更の取り消し

```bash
# ワーキングディレクトリの変更を取り消し
git checkout -- file.txt
# または（Git 2.23以降）
git restore file.txt

# ステージングから除外（ステージング前の状態に戻す）
git reset HEAD file.txt
# または（Git 2.23以降）
git restore --staged file.txt

# 直前のコミットを修正
git commit --amend

# 特定のコミットまで戻す（履歴は残る）
git revert <commit-hash>

# 特定のコミットまで戻す（履歴を書き換える）
git reset --hard <commit-hash>  # 危険：変更が失われる
git reset --soft <commit-hash>  # 変更は保持される
```

### スタッシュ（一時保存）

```bash
# 現在の変更を一時保存
git stash
git stash save "作業中のログイン機能"

# スタッシュリストの確認
git stash list

# スタッシュの適用
git stash apply  # 最新のスタッシュ
git stash apply stash@{0}  # 特定のスタッシュ

# スタッシュの適用と削除
git stash pop

# スタッシュの削除
git stash drop stash@{0}
git stash clear  # 全削除
```

### 履歴の調査

```bash
# 特定のファイルの変更履歴
git log --follow file.txt

# 変更内容も含めて表示
git log -p file.txt

# 特定の文字列を含むコミットを検索
git log -S "検索文字列"

# コミットの詳細を確認
git show <commit-hash>

# ファイルの各行の最終変更者を確認
git blame file.txt

# 特定のコミット間の差分
git diff <commit1> <commit2>
```

## GitHubでの協働作業

### フォークとプルリクエスト

```bash
# 1. GitHubでリポジトリをフォーク

# 2. フォークしたリポジトリをクローン
git clone git@github.com:your-username/repository.git

# 3. アップストリームの設定
git remote add upstream git@github.com:original-owner/repository.git

# 4. 作業ブランチの作成
git checkout -b feature/new-feature

# 5. 変更をコミットしてプッシュ
git add .
git commit -m "feat: 新機能を追加"
git push origin feature/new-feature

# 6. GitHubでプルリクエストを作成
```

### プルリクエストのベストプラクティス

```markdown
## 概要

このPRは、ユーザー認証機能を追加します。

## 変更内容

- JWTベースの認証システムを実装
- ログイン/ログアウトエンドポイントの追加
- 認証ミドルウェアの実装

## テスト

- [ ] 単体テストを追加
- [ ] 統合テストを実行
- [ ] 手動での動作確認

## スクリーンショット

（該当する場合）

## 関連Issue

Closes #42
```

### コードレビューとマージ

```bash
# レビュアーのローカルでPRをチェック
git fetch origin pull/123/head:pr-123
git checkout pr-123

# レビュー後、マージ（GitHub上で行うことが多い）
# - Merge commit
# - Squash and merge
# - Rebase and merge
```

## 高度な使い方

### インタラクティブリベース

```bash
# 直近3つのコミットを整理
git rebase -i HEAD~3

# エディタが開き、以下のような内容が表示される
pick abc1234 最初のコミット
pick def5678 2番目のコミット
pick ghi9012 3番目のコミット

# 以下のように編集可能
# pick: そのまま使用
# reword: コミットメッセージを変更
# edit: コミットを修正
# squash: 前のコミットと統合
# fixup: squashと同じだがメッセージは破棄
# drop: コミットを削除
```

### チェリーピック

```bash
# 特定のコミットを現在のブランチに適用
git cherry-pick <commit-hash>

# 複数のコミットを適用
git cherry-pick <commit1> <commit2>

# コンフリクトが発生した場合
git cherry-pick --continue  # 解決後
git cherry-pick --abort     # 中止
```

### サブモジュール

```bash
# サブモジュールの追加
git submodule add https://github.com/example/library.git libs/library

# サブモジュールを含めてクローン
git clone --recursive https://github.com/example/project.git

# 既存のリポジトリでサブモジュールを初期化
git submodule init
git submodule update

# サブモジュールの更新
git submodule update --remote
```

## トラブルシューティング

### よくある問題と解決方法

#### 1. 間違えてコミットした

```bash
# 直前のコミットを取り消し（変更は保持）
git reset --soft HEAD~1

# ファイルを間違えてコミットした
git reset HEAD~1 -- file.txt
git commit --amend
```

#### 2. 違うブランチで作業してしまった

```bash
# 変更を一時保存
git stash

# 正しいブランチに切り替え
git checkout correct-branch

# 変更を適用
git stash pop
```

#### 3. プッシュした後にコミットを修正したい

```bash
# 注意：他の人が既にプルしている場合は避ける
git commit --amend
git push --force-with-lease

# より安全な方法：新しいコミットで修正
git commit -m "fix: 前のコミットの修正"
git push
```

## Git/GitHubの便利な設定とTips

### エイリアスの設定

```bash
# よく使うコマンドのショートカット
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

### .gitignoreのテンプレート

```bash
# Node.js プロジェクトの例
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env
.env.local
.env.*.local
dist/
build/
*.log
.DS_Store
.vscode/
.idea/
```

### GitHubの便利機能

1. **GitHub Actions**: CI/CDの自動化
2. **Issues**: タスク管理とバグトラッキング
3. **Projects**: カンバンボードでのプロジェクト管理
4. **Wiki**: ドキュメンテーション
5. **Gist**: コードスニペットの共有

## まとめ

Gitは最初は複雑に感じるかもしれませんが、基本的なコマンドから始めて徐々に高度な機能を学んでいけば、必ず使いこなせるようになります。

重要なポイント：

1. **毎日使う**: 実践が最良の学習方法
2. **失敗を恐れない**: ローカルでは自由に実験
3. **履歴を大切に**: きれいなコミット履歴は財産
4. **チームのルールに従う**: ブランチ戦略やコミット規約
5. **継続的に学ぶ**: 新しい機能や使い方を探求

この記事で紹介した内容をマスターすれば、現場で困ることはほとんどないはずです。Gitを味方につけて、効率的な開発を楽しんでください！

## 参考リンク

- [Pro Git Book（日本語）](https://git-scm.com/book/ja/v2)
- [GitHub Docs](https://docs.github.com/ja)
- [Oh My Git!（ゲームで学ぶGit）](https://ohmygit.org/)
