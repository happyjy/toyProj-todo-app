# 기능 구현 TO DO LIST

- 컴포넌트

  - [x] app 컴포넌트 초기화
  - [x] TodoTemplate
  - [x] TodoInsert
  - [x] TodoListItem, TodoList

- 기능 구현

  - [x] ListItem rendering 하기
  - [x] 항목추가기능
  - [x] 지우기기능
  - [x] 수정기능

# TODO 기능 설명

- 기능에는 추가, 삭제, 처크박스토글(onInsert, onRemove, onToggle)을 구현했습니다.
- 각기능은 App.js 파일에 구현되어 있으며 TodoList > TodoListItem 컴포넌트 순으로 전달하여 기능을 수행합니다.

## 사용한 hook 설명

- useState

  - todo에 rendering 될 정보 "todos" 객체를 관리
  - useState함수는 하나의 상태 값만 관리할 수 있다.
  - 컴포넌트에서 관리해야 할 상태가 여러개라면 useState를 여러번 반복해야한다.

* useCallback
  - 추가, 삭제, 처크박스토글(onInsert, onRemove, onToggle) 구현시 useCallback Hook을 사용했습니다.
  - 할일을 입력하면서 onChange함수로 컴포넌트가 리렌더링될때 마다 함수를 새로 만드는데 이렇게 되면 성능이 떨어집니다.
  - 그래서 **한번 함수를 만들고 재사용 할 수 있도록 useCallbackHook를 사용한다.**
    - 실전리액트프로그래밍 성능쳅터에 컴포넌트데 function을 바로 달아 놓으면 해당 컴포넌트 state가 변경되지 않았음에도 새로운 function이 생성되서 rerendering되는 경우때문에 성능이에 영향을 미칠 수 있다는 내용이 있음.
* useRef
  - id값 usdRef로 관리하고 있다.
  - setState로 설정하지 않는이유는 id는 렌더링 되는 정보가 아니기때문
  - 예를 들어 이 값은 화면에 보이지도 않고, 이값이 바뀐다고 해서 컴포넌트가 리렌더링될 필요도 없다. 단지 새로운 항목을 만들 때 참조되는 값이다.

# 사용한 lib

- classnames
  - TodoListItem.js
  - [classname npm](https://www.npmjs.com/package/classnames)

# 새로 배운 CSS, SCSS

- & + & selector
- text-decoration: line-through;
