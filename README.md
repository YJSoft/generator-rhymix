# XpressEngine generator

XpressEngine의 서드파티 프로그램을 쉽게 만들 수 있게 도와주는 Yeoman generator입니다.
현재 애드온,모듈,레이아웃,위젯,위젯 스킨을 지원합니다.

__구조만 만들어 주는 것으로, 실제 코드는 직접 작성하셔야 합니다.__

# 설치 방법
우선 node.js가 설치되어 있어야 합니다. node.js 설치법 등은 검색으로 설치하시면 됩니다.
__주의: 설치 과정중 `NODE_PATH` 환경변수 설정이 잘못된 경우 추후 오류의 원인이 됩니다.__

node.js 설치가 완료되었다면 쉘이나 cmd 등에서 `npm install -g yo bower grunt-cli gulp` 로 yo를 설치합니다.
이제, 본 저장소의 내용을 git로 클론 혹은 zip로 다운로드하여 아무 곳에 압축을 푼 후, 압축을 푼 경로로 이동합니다.
이제 `npm -g install` 로 Generator를 설치합니다.

설치가 완료되었다면 어느 경로에서건 `yo xpressengine`를 입력하여 XpressEngine generator를 사용하실수 있습니다!

# 오류 해결
## MSBuild 오류

> C:\Program Files (x86)\MSBuild\Microsoft.Cpp\v4.0\V110\Microsoft.Cpp.Platform.targets(35,5): error MSB8020: The builds tools for Visual Studio 2010 (Platform Toolset = 'v100') cannot be found. To build using the v100 build tools, either click the Project menu or right-click the solution, and then select "Update VC++ Projects...". Install Visual Studio 2010 to build using the Visual Studio 2010 build tools.

와 같은 오류가 yo 설치나 generator 설치중 발생한다면 설치된 Visual studio의 버전을 확인해 보세요. Visual studio 2012 버전 이상을 사용하시는 경우 수동으로 버전을 지정해 주어야 합니다.
명령 맨 뒤에 `--msvs_version=2012`를 붙여 지정해 줄 수 있습니다.
