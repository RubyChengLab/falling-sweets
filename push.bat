@echo off
echo ====== Falling Comet Lab Git �۰ʤW�� ======

REM �۰ʩԨ��̷s�]�i��A�קK�Ĭ�^
git pull

REM �K�[�Ҧ��ܧ�
git add .

REM �۰ʶ�J commit �T��
set /p msg=�п�J commit �T���G 
git commit -m "%msg%"

REM ���e�컷��
git push

echo ====== �W�ǧ��� ======
pause
