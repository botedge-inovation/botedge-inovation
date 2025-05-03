// import { useState } from "react";
// export default function Practice() {
//   const [todoListData, setTodoListData] = useState([]);
//   const [inputText, setInputText] = useState("");
//   const handleAddList = (e) => {
//     e.preventDefault();
//     if (inputText.trim()) {
//       setTodoListData([...todoListData, { text: inputText, completed: false }]);
//       setInputText("");
//     }
//   };
//   const handleToggle = (index) => {
//     setTodoListData((list) =>
//       list.map((item, i) =>
//         i === index ? { ...item, completed: !item.completed } : item
//       )
//     );
//   };
//   const removeItem = (index) => {
//     const list = [...todoListData];
//     list.splice(index, 1);
//     setTodoListData(list);
//   };
//   return (
//     <>
//       <ul>
//         {todoListData?.map((item, index) => (
//           <>
//             <li
//               key={index}
//               style={{
//                 textDecoration: item.completed ? "line-through" : "none",
//               }}
//             >
//              { item.text}
//             </li>
//             <button onClick={() => handleToggle(index)}>Toggle</button>
//             <button onClick={() => removeItem(index)}>Remove</button>
//           </>
//         ))}
//       </ul>
//       <form onSubmit={(e) => handleAddList(e)}>
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <button type="submit">Add Item</button>
//       </form>
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";

// const Rreactquestion = (
//   items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
// ) => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);
//   return (
//     <>
//       <h1>hello</h1>
//       <ul>
//         {data?.map((item, index) => (
//           <li>{item.title}</li>
//         ))}
//       </ul>
//       <div>{JSON.stringify(data)}</div>
//     </>
//   );
// };

// export default Rreactquestion;

