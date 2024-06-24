const content = document.querySelector(".contents");
const textField = document.querySelector("#comment37");

function handleClick(e) {
  e.preventDefault();

  let target = e.target;
  // 1. button 찾기
  // const button = target.closest("button")

  // target의 data-name이 없으면
  // target을 parentElement를 담은 상태에서 data-name을 찾기위해
  // while 반복문을 돌림
  // 만약 tagName == "BODY"라면 target을 null로 비워두고 코드를 종료
  while (!target.getAttribute("data-name")) {
    target = target.parentElement;

    if (target.tagName === "BODY") {
      target = null;
      return;
    }
  }

  console.log(target.getAttribute("data-name"));

  // 2. toggleClass

  // if (!button) return;
  // target이 없다면 아무거도 하지않고 종료하는 식 작성

  if (target.dataset.name === "like") {
    target.classList.toggle("active");
  }

  if (target.dataset.name === "comment") {
    // input에 focus가게하는 메서드
    textField.focus();
  }

  if (target.dataset.name === "more") {
    target.classList.toggle("active");
  }
  // delete 버튼 누르면 게시물 삭제

  if (target.dataset.name === "delete") {
    if (confirm("우리의 추억을 정말 없앨거야..?")) {
      this.remove();
    }
  }

  // send 버튼 누르면 댓글 추가하기
  if (target.dataset.name === "send") {
    if (textField.value === "") return;
    const template = `
    <div class="id">
      <div class="profile_img border_over">
        <img src="./assets/part04/tiger.png" alt="프로필사진" />
      </div>
      <div class="comment_field">
        <div class="text_container">
          <div class="name"><a href="#">범쌤</a></div>
          <div class="text_field">${textField.value}</div>
        </div>
      </div>
    </div>
  `;

    const comment_container = document.querySelector(".comment_container");

    comment_container.insertAdjacentHTML("beforeend", template);

    textField.value = "";
    // 댓글을 업데이트 할때마다 스크롤을 아래로 옮겨주기
    comment_container.scrollTop = comment_container.scrollHeight;
  }
}

content.addEventListener("click", handleClick);
