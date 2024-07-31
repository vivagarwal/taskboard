import React from "react";
import { BrowserRouter, Routes, Route , useLocation , Navigate} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/taskboard" element={<TaskBoard/>}/>
        </Routes>
      </div> 
    </div>
  );
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;

// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const App = () => {
//   // Initial items for two columns
//   const [columns, setColumns] = useState({
//     'column-1': {
//       name: 'Column 1',
//       items: [
//         { id: 'item-1', content: 'Item 1' },
//         { id: 'item-2', content: 'Item 2' },
//         { id: 'item-3', content: 'Item 3' }
//       ]
//     },
//     'column-2': {
//       name: 'Column 2',
//       items: [
//         { id: 'item-4', content: 'Item 4' },
//         { id: 'item-5', content: 'Item 5' }
//       ]
//     }
//   });

//   // Handle the drag end event
//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     // If the destination is null, exit function
//     if (!destination) return;

//     // If the item is dropped in the same position, exit function
//     if (
//       source.droppableId === destination.droppableId &&
//       source.index === destination.index
//     ) {
//       return;
//     }

//     // Remove the item from the source column
//     const sourceColumn = columns[source.droppableId];
//     const destColumn = columns[destination.droppableId];
//     const sourceItems = Array.from(sourceColumn.items);
//     const destItems = Array.from(destColumn.items);
//     const [removed] = sourceItems.splice(source.index, 1);

//     // Add the item to the destination column
//     destItems.splice(destination.index, 0, removed);

//     // Update the state
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems
//       },
//       [destination.droppableId]: {
//         ...destColumn,
//         items: destItems
//       }
//     });
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Drag and Drop Demo</h1>
//       <div className="grid grid-cols-2 gap-8">
//         <DragDropContext onDragEnd={onDragEnd}>
//           {Object.entries(columns).map(([columnId, column], index) => (
//             <Droppable droppableId={columnId} key={columnId}>
//               {(provided) => (
//                 <div
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                   className="bg-gray-100 p-4 rounded-lg shadow-lg"
//                 >
//                   <h2 className="text-2xl font-semibold mb-4">{column.name}</h2>
//                   {column.items.map((item, index) => (
//                     <Draggable key={item.id} draggableId={item.id} index={index}>
//                       {(provided) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           className="bg-white p-4 mb-2 rounded shadow-md"
//                         >
//                           {item.content}
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </DragDropContext>
//       </div>
//     </div>
//   );
// };

// export default App;

