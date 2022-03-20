import express from "express";

type School = {
  id: number;
  name: string;
};

const router = express.Router();

// // /schools 다음에 오는 /부터가 여기로
// router.get("/", (req, res) => {
//   const data = [
//     {
//       id: 1,
//       name: "하남고",
//     },
//   ];
//   return res.status(200).json(data);
// });

const data = [
  {
    id: 1,
    name: "하남고",
  },
];

router.get("/", (req, res) => res.status(200).json(data));

// : 나오면 그다음에 변수화 밑에선 schoolId 변수화
router.get("/:schoolId", (req, res) => {
  const { schoolId } = req.params; //디스트럭처링
  //schoolId가 없으면 에러 보내기
  if (!schoolId) {
    return res.status(400).json();
  }

  // schoolId를 10진수로 바꿈 parseint
  const schoolIdNumber = parseInt(schoolId, 10);
  // 배열에서 찾고자하는 id없으면 에러
  if (!data.some(({ id }) => id === schoolIdNumber)) {
    return res.status(404).json();
  }
  //.filter() 배열중에서 참인 녀석들만 골라서 배열을 다시 만들어줌
  const filtered = data.filter((item) => item.id === schoolIdNumber);
  return res.status(200).json(filtered[0]);
});

router.post("/", (req, res) => {
  const school: School = req.body as School;
  if (!school) {
    return res.status(400).json();
  }
  data.push(school);
  return res.status(201).json();
});

export default router;
