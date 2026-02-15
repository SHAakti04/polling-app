// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "./ui/Button";
// import Input from "./ui/Input";
// import Card from "./ui/Card";
// import Toast from "./Toast";

// const API = import.meta.env.VITE_API_URL;

// export default function CreatePoll() {
//   const navigate = useNavigate();

//   const [question, setQuestion] = useState("");
//   const [options, setOptions] = useState<string[]>(["", ""]);
//   const [allowMultiple, setAllowMultiple] = useState(false);
//   const [toast, setToast] = useState("");

//   // ➕ ADD OPTION
//   const addOption = () => {
//     setOptions(prev => [...prev, ""]);
//   };

//   // ❌ REMOVE OPTION (MIN 2 OPTIONS REQUIRED)
//   const removeOption = (index: number) => {
//     if (options.length <= 2) {
//       setToast("At least 2 options are required");
//       return;
//     }
//     setOptions(prev => prev.filter((_, i) => i !== index));
//   };

//   // 🚀 CREATE POLL
//   const createPoll = async () => {
//     if (!question || options.some(o => !o.trim())) {
//       setToast("Please fill all fields");
//       return;
//     }

//     const res = await axios.post(`${API}/api/polls`, {
//       question,
//       options,
//       allowMultiple
//     });

//     navigate(`/poll/${res.data.pollId}`);
//   };

//   return (
//     <Card>
//       <h1 className="text-3xl font-bold mb-5 text-center">
//         Create a Poll
//       </h1>

//       {/* QUESTION */}
//       <Input
//         placeholder="Your question..."
//         value={question}
//         onChange={e => setQuestion(e.target.value)}
//       />

//       {/* OPTIONS */}
//       <div className="mt-4 space-y-3">
//         {options.map((o, i) => (
//           <div key={i} className="flex gap-2 items-center">
//             <Input
//               placeholder={`Option ${i + 1}`}
//               value={o}
//               onChange={e => {
//                 const copy = [...options];
//                 copy[i] = e.target.value;
//                 setOptions(copy);
//               }}
//             />

//             {/* REMOVE OPTION BUTTON */}
//             {options.length > 2 && (
//               <button
//                 type="button"
//                 onClick={() => removeOption(i)}
//                 className="
//                   px-3 py-2
//                   rounded-lg
//                   bg-red-500/20
//                   text-red-300
//                   hover:bg-red-500/30
//                   transition
//                 "
//                 aria-label="Remove option"
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* ADD OPTION */}
//       <Button className="mt-4 w-full" onClick={addOption}>
//         ➕ Add Option
//       </Button>

//       {/* MULTI-SELECT TOGGLE */}
//       <label className="flex items-center gap-2 mt-4">
//         <input
//           type="checkbox"
//           checked={allowMultiple}
//           onChange={() => setAllowMultiple(p => !p)}
//         />
//         Allow multiple choices
//       </label>

//       {/* SUBMIT */}
//       <Button className="mt-6 w-full text-lg" onClick={createPoll}>
//         Create Poll 🚀
//       </Button>

//       {/* TOAST */}
//       <Toast message={toast} />
//     </Card>
//   );
// }
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Card from "./ui/Card";
import Toast from "./Toast";

const API = import.meta.env.VITE_API_URL;

export default function CreatePoll() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [allowMultiple, setAllowMultiple] = useState(false);
  const [toast, setToast] = useState("");

  // ➕ ADD OPTION
  const addOption = () => {
    setOptions(prev => [...prev, ""]);
  };

  // ❌ REMOVE OPTION (MIN 2 OPTIONS REQUIRED)
  const removeOption = (index: number) => {
    if (options.length <= 2) {
      setToast("At least 2 options are required");
      return;
    }
    setOptions(prev => prev.filter((_, i) => i !== index));
  };

  // 🚀 CREATE POLL
  const createPoll = async () => {
    if (!question || options.some(o => !o.trim())) {
      setToast("Please fill all fields");
      return;
    }

    const res = await axios.post(`${API}/api/polls`, {
      question,
      options,
      allowMultiple
    });

    navigate(`/poll/${res.data.pollId}`);
  };

  return (
    <Card>
      <h1 className="text-3xl font-bold mb-5 text-center">
        Create a Poll
      </h1>

      {/* QUESTION */}
      <Input
        placeholder="Your question..."
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />

      {/* OPTIONS */}
      <div className="mt-4 space-y-3">
        {options.map((o, i) => (
          <div key={i} className="flex gap-2 items-center">
            <Input
              placeholder={`Option ${i + 1}`}
              value={o}
              onChange={e => {
                const copy = [...options];
                copy[i] = e.target.value;
                setOptions(copy);
              }}
            />

            {options.length > 2 && (
              <button
                type="button"
                onClick={() => removeOption(i)}
                className="
                  px-3 py-2
                  rounded-lg
                  bg-red-500/20
                  text-red-300
                  hover:bg-red-500/30
                  transition
                "
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      <Button className="mt-4 w-full" onClick={addOption}>
        ➕ Add Option
      </Button>

      <label className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          checked={allowMultiple}
          onChange={() => setAllowMultiple(p => !p)}
        />
        Allow multiple choices
      </label>

      <Button className="mt-6 w-full text-lg" onClick={createPoll}>
        Create Poll 🚀
      </Button>

      <Toast message={toast} />
    </Card>
  );
}
