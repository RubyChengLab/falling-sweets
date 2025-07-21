@echo off
echo ====== Falling Comet Lab Git 自動上傳 ======

REM 自動拉取最新（可選，避免衝突）
git pull

REM 添加所有變更
git add .

REM 自動填入 commit 訊息
set /p msg=請輸入 commit 訊息： 
git commit -m "%msg%"

REM 推送到遠端
git push

echo ====== 上傳完成 ======
pause
