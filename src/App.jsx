import TriangleQuestion from "./components/TriangleQuestion";

const questions = [
  {
    type: "cq",
    title: "2.",
    trianglePoints: "150,30 50,180 250,180",
    labels: [
      { text: "P (1 kg)", x: 140, y: 20 },
      { text: "Q (1.5 × 10⁻⁹ C)", x: 30, y: 195 },
      { text: "R (1.5 × 10⁻⁹ C)", x: 175, y: 195 },
      { text: "90°", x: 145, y: 60 },
      { text: "2√2m", x: 80, y: 110 },
      { text: "2√2m", x: 200, y: 110 },
      { text: "V = \\frac{kQ}{r}", x: 120, y: 125, latex: true },
    ],
    questions: [
      "চিত্রে PQR একটি সমকোণী সমবাহু ত্রিভুজ। চিত্রানুসারে P বিন্দুতে স্থাপিত বস্তুটি ভারসাম্যভাবে ঝুলে থাকবে কিনা তা পরীক্ষা করা হচ্ছিল।",
      "ক. শাণ্ট কী?",
      "খ. কার্কফের প্রথম সূত্র চার্জের সংরক্ষণ নীতি মেনে চলে— ব্যাখ্যা করো।",
      "গ. উদ্দীপকের P বিন্দুতে বিভবের মান কত? \\( V = \\frac{kQ}{r} \\) সূত্র ব্যবহার করো।",
      "ঘ. উদ্দীপকের P বিন্দুতে স্থাপিত বস্তুটিকে শূন্যে ঝুলিয়ে রাখা যাবে কিনা? গাণিতিকভাবে যাচাই করো। \\( F = \\frac{kq_1q_2}{r^2} \\)",
    ]
  },
  {
    type: "mcq",
    title: "Capacitor MCQ",
    image: "https://example.com/image.png",
    question: "উপরের প্রদত্ত বর্তনীর তুল্য ধারকত্ব কত? \\( C_{eq} = C_1 + C_2 \\) যখন সমান্তরালে সংযুক্ত থাকে।",
    options: [
      "A. \\( 1\\mu F \\)",
      "B. \\( 2\\mu F \\)",
      "C. \\( 3\\mu F \\)",
      "D. \\( \\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} \\)",
    ]
  },
  {
    type: "cq",
    title: "Mathematical Problems",
    questions: [
      "নিচের ম্যাট্রিক্সটি নির্ণয় কর: $$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$$",
      "ক. ত্রিকোণমিতির সূত্র প্রমাণ কর: $$\\sin^2\\theta + \\cos^2\\theta = 1$$",
      "খ. নিচের ফাংশনের অন্তরজ নির্ণয় কর: $$\\frac{d}{dx}(x^2 + 3x + 2)$$",
      "গ. নিচের সমাকলনটি সমাধান কর: $$\\int_0^1 (2x + 3) dx$$",
      "ঘ. ম্যাট্রিক্স গুণন কর: $$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\times \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix}$$"
    ]
  },
  {
    type: "mcq",
    title: "Advanced Math MCQ",
    question: "নিচের কোনটি $$\\frac{d}{dx} \\sin(x)$$ এর সঠিক মান?",
    options: [
      "A. $$\\cos(x)$$",
      "B. $$-\\cos(x)$$",
      "C. $$\\int_{a}^{x}(sin(x))$$",
      "D. $$-\\sin(x)$$"
    ]
  },
  {
    type: "mcq",
    title: "Matrix MCQ",
    question: "$$\\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$$ ম্যাট্রিক্সটির নির্ধারক কত?",
    options: [
      "A. $$0$$",
      "B. $$2$$",
      "C. $$4$$",
      "D. $$8$$"
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="space-y-6">
        {questions.map((question, index) => (
          <TriangleQuestion key={index} data={question} />
        ))}
      </div>
    </div>
  );
}

export default App;