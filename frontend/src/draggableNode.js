// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      className="
                cursor-grab
                select-none
                min-w-[90px] 
                h-[50px]
                rounded-xl
                bg-[#1C2536]
                flex items-center justify-center
                text-white
                text-sm font-medium
                shadow-sm
                border border-gray-700
                hover:shadow-md hover:-translate-y-[2px]
                transition-all
            "
    >
      {label}
    </div>
  );
};
