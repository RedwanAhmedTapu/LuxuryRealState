import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const MathRenderer = ({ content }) => {
  if (typeof content !== 'string') return content;

  // Enhanced regex to handle both $$...$$ and \(...\) and $...$
  const parts = content.split(/(\$\$.*?\$\$|\\\(.*?\\\)|\$.*?\$)/g);

  return parts.map((part, i) => {
    if (!part) return null;
    
    // Handle block math ($$...$$)
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const mathContent = part.slice(2, -2);
      return <BlockMath key={i} math={mathContent} />;
    }
    
    // Handle inline math (\(...\) or $...$)
    if ((part.startsWith('\\(') && part.endsWith('\\)')) || 
        (part.startsWith('$') && part.endsWith('$'))) {
      const mathContent = part.slice(
        part.startsWith('\\(') ? 2 : 1, 
        part.endsWith('\\)') ? -2 : -1
      );
      try {
        return <InlineMath key={i} math={mathContent} />;
      } catch (e) {
        console.error("LaTeX rendering error:", e);
        return part;
      }
    }
    return part;
  });
};

const TriangleQuestion = ({ data }) => {
  if (!data) return null;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg text-[16px] leading-relaxed">
      {data.title && <p className="mb-4">{data.title}</p>}

      {data.type === "cq" ? (
        <>
          {data.trianglePoints && (
            <div className="flex justify-center mb-6">
              <svg width="300" height="220" viewBox="0 0 300 220">
                <polygon points={data.trianglePoints} fill="none" stroke="black" strokeWidth="2" />
                {data.labels?.map((label, idx) => (
                  label.latex ? (
                    <foreignObject x={label.x} y={label.y} width="100" height="30" key={idx}>
                      <div className="text-[12px]">
                        <BlockMath math={label.text} />
                      </div>
                    </foreignObject>
                  ) : (
                    <text key={idx} x={label.x} y={label.y} fontSize="14">
                      {label.text}
                    </text>
                  )
                ))}
              </svg>
            </div>
          )}
          <div className="space-y-4">
            {data.questions?.map((q, i) => (
              <div key={i} className="min-h-[1.5em]">
                <MathRenderer content={q} />
              </div>
            ))}
          </div>
        </>
      ) : data.type === "mcq" ? (
        <>
          {data.image && (
            <div className="flex justify-center mb-6">
              <img src={data.image} alt="MCQ Related" className="max-h-80" />
            </div>
          )}
          <div className="mb-4 min-h-[1.5em]">
            <MathRenderer content={data.question} />
          </div>
          <div className="space-y-2">
            {data.options?.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2 min-h-[1.5em]">
                <MathRenderer content={option} />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TriangleQuestion;