# Rhymix generator

Rhymix의 서드파티 프로그램을 쉽게 만들 수 있게 도와주는 Yeoman generator입니다.
현재 애드온, 모듈, 레이아웃, 위젯, 위젯 스킨을 지원합니다.

__구조만 만들어 주는 것으로, 실제 코드는 직접 작성하셔야 합니다.__

# 설치 방법
우선 node.js가 설치되어 있어야 합니다. node.js 설치법 등은 검색으로 설치하시면 됩니다.
__주의: 설치 과정중 `NODE_PATH` 환경변수 설정이 잘못된 경우 추후 오류의 원인이 됩니다.__

node.js 설치가 완료되었다면 쉘이나 cmd 등에서 `npm install -g yo bower grunt-cli gulp` 로 yo를 설치합니다.
이제, 본 저장소의 내용을 git로 클론 혹은 zip로 다운로드하여 아무 곳에 압축을 푼 후, 압축을 푼 경로로 이동합니다.
이제 `npm -g install` 로 Generator를 설치합니다.

설치가 완료되었다면 어느 경로에서건 `yo xpressengine`를 입력하여 XpressEngine generator를 사용하실수 있습니다!
