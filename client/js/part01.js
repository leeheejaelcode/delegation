const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// 1. nav에 이벤트 위임
// 2. li 수집
// 3. data-index값 수집
// 4. target 에게 is-active 클래스 넣기
//  - elem.classList.add()
// 5. target을 제외한 나머지 li들에게 is-active 클래스 제거하기
//  - elem.classList.remove()

const navigation = getNode(".navigation");
const visualImage = getNode(".visual img");
const split = new SplitText("h3", { type: "chars" });

function handleClick(e) {
  e.preventDefault();

  const target = e.target.closest("li");

  if (!target) return;

  const index = target.dataset.index;
  const children = [...navigation.children];

  children.forEach((item) => {
    item.classList.remove("is-active");
  });

  target.classList.add("is-active");

  visualImage.src = `./assets/part01/${data[index - 1].src}`;
  visualImage.alt = data[index - 1].alt;

  // gsap split text 애니메이션

  gsap.from(split.chars, {
    opacity: 0,
    y: 30,
    stagger: 0.03,
    ease: "power3.inout",
    immediateRender: false,
  });
}
navigation.addEventListener("click", handleClick);
