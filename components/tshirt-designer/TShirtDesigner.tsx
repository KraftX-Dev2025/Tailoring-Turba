// "use client"

// import type React from "react"

// import { useState, useRef, useEffect } from "react"
// import Image from "next/image"
// import { Rnd } from "react-rnd"
// import { HexColorPicker } from "react-colorful"
// import { Upload, Type, Trash2, ChevronUp, ChevronDown, Download, Share2, Check } from "lucide-react"

// import TShirtStyleSelector from "./TShirtStyleSelector"
// import ColorPalette from "./ColorPalette"
// import TextEditor from "./TextEditor"
// import ViewSelector from "./ViewSelector"
// import type { DesignElement, TShirtStyle, TShirtView } from "./types"

// // T-shirt colors
// const defaultColors = [
//   { name: "White", value: "#FFFFFF" },
//   { name: "Black", value: "#000000" },
//   { name: "Navy", value: "#1E3A8A" },
//   { name: "Red", value: "#DC2626" },
//   { name: "Maroon", value: "#7F1D1D" },
//   { name: "Green", value: "#059669" },
//   { name: "Yellow", value: "#FBBF24" },
//   { name: "Purple", value: "#7C3AED" },
//   { name: "Gray", value: "#6B7280" },
//   { name: "Blue", value: "#3B82F6" },
// ]

// // T-shirt styles
// const tshirtStyles = [
//   { id: "round-neck", name: "Round Neck" },
//   { id: "polo", name: "Polo" },
// ]

// export default function TShirtDesigner() {
//   // State for t-shirt customization
//   const [selectedStyle, setSelectedStyle] = useState<TShirtStyle>(tshirtStyles[0])
//   const [selectedColor, setSelectedColor] = useState(defaultColors[0])
//   const [selectedView, setSelectedView] = useState<TShirtView>("front")
//   const [showColorPicker, setShowColorPicker] = useState(false)
//   const [customColor, setCustomColor] = useState("#FFFFFF")

//   // State for design elements (images and text)
//   const [designElements, setDesignElements] = useState<DesignElement[]>([])
//   const [selectedElement, setSelectedElement] = useState<string | null>(null)
//   const [isAddingText, setIsAddingText] = useState(false)

//   // Refs
//   const fileInputRef = useRef<HTMLInputElement>(null)
//   const tshirtCanvasRef = useRef<HTMLDivElement>(null)
//   const designAreaRef = useRef<HTMLDivElement>(null)

//   // Handle file upload
//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (event) => {
//         if (event.target?.result) {
//           const newElement: DesignElement = {
//             id: `image-${Date.now()}`,
//             type: "image",
//             content: event.target.result as string,
//             position: { x: 0, y: 0 },
//             size: { width: 200, height: 200 },
//             rotation: 0,
//             zIndex: designElements.length + 1,
//           }
//           setDesignElements([...designElements, newElement])
//           setSelectedElement(newElement.id)
//         }
//       }
//       reader.readAsDataURL(file)
//     }
//     // Reset file input
//     if (e.target) {
//       e.target.value = ""
//     }
//   }

//   // Add text element
//   const addTextElement = () => {
//     const newElement: DesignElement = {
//       id: `text-${Date.now()}`,
//       type: "text",
//       content: "Your Text Here",
//       position: { x: 0, y: 0 },
//       size: { width: 200, height: 50 },
//       rotation: 0,
//       zIndex: designElements.length + 1,
//       textProps: {
//         fontFamily: "Arial" as string,
//         fontSize: 24,
//         color: "#000000",
//         bold: false,
//         italic: false,
//         underline: false,
//       },
//     }
//     setDesignElements([...designElements, newElement])
//     setSelectedElement(newElement.id)
//     setIsAddingText(true)
//   }

//   // Update text content
//   const updateTextContent = (id: string, newContent: string) => {
//     setDesignElements(
//       designElements.map((element) => (element.id === id ? { ...element, content: newContent } : element)),
//     )
//   }

//   // Update text properties
//   const updateTextProps = (id: string, props: Partial<DesignElement["textProps"]>) => {
//     setDesignElements(
//       designElements.map((element) =>
//         element.id === id
//           ? {
//             ...element,
//             textProps: {
//               fontFamily: element.textProps?.fontFamily || "Arial",
//               fontSize: element.textProps?.fontSize || 24,
//               color: element.textProps?.color || "#000000",
//               bold: element.textProps?.bold || false,
//               italic: element.textProps?.italic || false,
//               underline: element.textProps?.underline || false,
//               ...props,
//             },
//           }
//           : element,
//       ),
//     )
//   }

//   // Delete selected element
//   const deleteSelectedElement = () => {
//     if (selectedElement) {
//       setDesignElements(designElements.filter((element) => element.id !== selectedElement))
//       setSelectedElement(null)
//       setIsAddingText(false)
//     }
//   }

//   // Handle element selection
//   const handleElementSelect = (id: string) => {
//     setSelectedElement(id)
//     const element = designElements.find((el) => el.id === id)
//     setIsAddingText(element?.type === "text")
//   }

//   // Handle element position change
//   const handleElementPositionChange = (id: string, position: { x: number; y: number }) => {
//     setDesignElements(designElements.map((element) => (element.id === id ? { ...element, position } : element)))
//   }

//   // Handle element resize
//   const handleElementResize = (id: string, size: { width: number; height: number }) => {
//     setDesignElements(designElements.map((element) => (element.id === id ? { ...element, size } : element)))
//   }

//   // Bring element to front
//   const bringToFront = () => {
//     if (!selectedElement) return

//     const maxZIndex = Math.max(...designElements.map((el) => el.zIndex))
//     setDesignElements(
//       designElements.map((element) =>
//         element.id === selectedElement ? { ...element, zIndex: maxZIndex + 1 } : element,
//       ),
//     )
//   }

//   // Send element to back
//   const sendToBack = () => {
//     if (!selectedElement) return

//     const minZIndex = Math.min(...designElements.map((el) => el.zIndex))
//     setDesignElements(
//       designElements.map((element) =>
//         element.id === selectedElement ? { ...element, zIndex: minZIndex - 1 } : element,
//       ),
//     )
//   }

//   // Download design as image
//   const downloadDesign = () => {
//     if (!tshirtCanvasRef.current) return

//     // This is a simplified version - in a real app, you'd use html2canvas or similar
//     alert("Download functionality would capture the current design as an image")
//   }

//   // Trigger file input click
//   const handleUploadClick = () => {
//     fileInputRef.current?.click()
//   }

//   // Close color picker when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as HTMLElement
//       if (showColorPicker && !target.closest(".color-picker-container")) {
//         setShowColorPicker(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [showColorPicker])

//   // Get the currently selected element
//   const selectedElementData = selectedElement ? designElements.find((el) => el.id === selectedElement) : null

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Design Your T-Shirt</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* T-shirt Preview */}
//         <div className="lg:col-span-2 bg-gray-100 rounded-lg p-4">
//           <div className="bg-white rounded-lg p-4 h-[500px] relative" ref={tshirtCanvasRef}>
//             {/* T-shirt view selector */}
//             <ViewSelector selectedView={selectedView} onViewChange={setSelectedView} />

//             {/* T-shirt canvas */}
//             <div className="w-full h-full flex items-center justify-center">
//               <div className="relative" style={{ width: "300px", height: "400px" }}>
//                 <div className="absolute inset-0 z-0">
//                   <div className="absolute inset-0">
//                     <Image
//                       src="/tshirt-white-modal.png"
//                       alt="T-shirt base"
//                       fill
//                       className="object-contain"
//                       style={{
//                         mixBlendMode: "multiply",
//                         backgroundColor: selectedColor.value,
//                       }}
//                     />
//                   </div>
//                 </div>



//                 {/* Design area */}
//                 <div
//                   ref={designAreaRef}
//                   className="absolute inset-0 z-10 overflow-hidden"
//                   style={{
//                     // Adjust these values based on your t-shirt images
//                     top: "15%",
//                     left: "15%",
//                     right: "15%",
//                     bottom: "30%",
//                     height: "auto",
//                     width: "auto",
//                   }}
//                 >
//                   {/* Render design elements */}
//                   {designElements.map((element) => (
//                     <Rnd
//                       key={element.id}
//                       default={{
//                         x: element.position.x,
//                         y: element.position.y,
//                         width: element.size.width,
//                         height: element.size.height,
//                       }}
//                       position={{ x: element.position.x, y: element.position.y }}
//                       size={{ width: element.size.width, height: element.size.height }}
//                       onDragStop={(e, d) => {
//                         handleElementPositionChange(element.id, { x: d.x, y: d.y })
//                       }}
//                       onResizeStop={(e, direction, ref, delta, position) => {
//                         handleElementResize(element.id, {
//                           width: Number.parseInt(ref.style.width),
//                           height: Number.parseInt(ref.style.height),
//                         })
//                         handleElementPositionChange(element.id, position)
//                       }}
//                       lockAspectRatio={element.type === "image"}
//                       bounds="parent"
//                       className={`${selectedElement === element.id ? "ring-2 ring-blue-500" : ""}`}
//                       style={{ zIndex: element.zIndex }}
//                       onClick={() => handleElementSelect(element.id)}
//                     >
//                       {element.type === "image" ? (
//                         <div className="w-full h-full">
//                           <Image
//                             src={element.content || "/placeholder.svg"}
//                             alt="User design"
//                             fill
//                             className="object-contain"
//                           />
//                         </div>
//                       ) : (
//                         <div
//                           className="w-full h-full flex items-center justify-center cursor-move"
//                           style={{
//                             fontFamily: element.textProps?.fontFamily || "Arial",
//                             fontSize: `${element.textProps?.fontSize || 24}px`,
//                             color: element.textProps?.color || "#000000",
//                             fontWeight: element.textProps?.bold ? "bold" : "normal",
//                             fontStyle: element.textProps?.italic ? "italic" : "normal",
//                             textDecoration: element.textProps?.underline ? "underline" : "none",
//                           }}
//                         >
//                           {element.content}
//                         </div>
//                       )}
//                     </Rnd>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Color selector */}
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold mb-2">Select Color:</h3>
//             <div className="flex flex-wrap gap-2">
//               <ColorPalette colors={defaultColors} selectedColor={selectedColor} onSelectColor={setSelectedColor} />

//               {/* Custom color button */}
//               <div className="relative color-picker-container">
//                 <button
//                   className={`w-8 h-8 rounded-full border-2 ${selectedColor.name === "Custom" ? "border-blue-500" : "border-gray-300"
//                     }`}
//                   style={{
//                     backgroundColor: customColor,
//                     backgroundImage:
//                       "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
//                     backgroundSize: "8px 8px",
//                     backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
//                   }}
//                   onClick={() => setShowColorPicker(!showColorPicker)}
//                   title="Custom Color"
//                 />

//                 {showColorPicker && (
//                   <div className="absolute z-20 mt-2">
//                     <HexColorPicker
//                       color={customColor}
//                       onChange={(color) => {
//                         setCustomColor(color)
//                         setSelectedColor({ name: "Custom", value: color })
//                       }}
//                     />
//                     <div className="bg-white p-2 flex justify-between items-center">
//                       <span className="text-sm">{customColor}</span>
//                       <button
//                         className="bg-blue-500 text-white p-1 rounded-full"
//                         onClick={() => setShowColorPicker(false)}
//                       >
//                         <Check size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Design Tools */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold mb-4">Customize Your T-Shirt</h2>

//           {/* T-shirt style selector */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">Select Style:</h3>
//             <TShirtStyleSelector styles={tshirtStyles} selectedStyle={selectedStyle} onSelectStyle={setSelectedStyle} />
//           </div>

//           {/* Design tools */}
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <button
//               className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
//               onClick={handleUploadClick}
//             >
//               <Upload className="h-8 w-8 text-blue-500 mb-2" />
//               <span>Upload Design</span>
//               <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
//             </button>

//             <button
//               className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
//               onClick={addTextElement}
//             >
//               <Type className="h-8 w-8 text-blue-500 mb-2" />
//               <span>Add Text</span>
//             </button>
//           </div>

//           {/* Text editor (shows only when text is selected) */}
//           {isAddingText && selectedElementData && selectedElementData.type === "text" && (
//             <TextEditor
//               element={selectedElementData}
//               onUpdateContent={(content) => updateTextContent(selectedElementData.id, content)}
//               onUpdateProps={(props) => updateTextProps(selectedElementData.id, props)}
//             />
//           )}

//           {/* Element controls (shows only when an element is selected) */}
//           {selectedElement && (
//             <div className="bg-gray-50 p-4 rounded-lg mb-6">
//               <h3 className="font-semibold mb-2">Element Controls:</h3>
//               <div className="flex flex-wrap gap-2">
//                 <button
//                   className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 flex items-center"
//                   onClick={bringToFront}
//                 >
//                   <ChevronUp className="h-4 w-4 mr-1" />
//                   <span>Bring Forward</span>
//                 </button>
//                 <button
//                   className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 flex items-center"
//                   onClick={sendToBack}
//                 >
//                   <ChevronDown className="h-4 w-4 mr-1" />
//                   <span>Send Back</span>
//                 </button>
//                 <button
//                   className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 flex items-center text-red-500"
//                   onClick={deleteSelectedElement}
//                 >
//                   <Trash2 className="h-4 w-4 mr-1" />
//                   <span>Delete</span>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Instructions */}
//           <div className="bg-gray-50 p-4 rounded-lg mb-6">
//             <h3 className="font-semibold mb-2">Design Instructions:</h3>
//             <ul className="text-sm text-gray-600 space-y-1">
//               <li>• Click and drag to position your design</li>
//               <li>• Drag the corners to resize your design</li>
//               <li>• Click on an element to select it</li>
//               <li>• For best results, use high-resolution images</li>
//             </ul>
//           </div>

//           {/* Action buttons */}
//           <div className="space-y-3">
//             <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-600 transition-colors flex items-center justify-center">
//               Save & Proceed
//             </button>

//             <button
//               className="w-full border border-gray-300 py-3 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
//               onClick={downloadDesign}
//             >
//               <Download className="h-5 w-5 mr-2" />
//               Preview Design
//             </button>

//             <button className="w-full border border-gray-300 py-3 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
//               <Share2 className="h-5 w-5 mr-2" />
//               Share Design
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client';

import { useEffect, useRef, useState } from 'react';

const COLORS = ['#ff0000', '#00ff00', '#0000ff', '#000000', '#ffffff', '#f97316', '#10b981'];

const TShirtColorModal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [color, setColor] = useState(COLORS[0]);

  useEffect(() => {
    const img = new Image();
    img.src = '/tshirt-white-modal.png';
    img.onload = () => {
      setImage(img);
    };
  }, []);

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the base image
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Apply color overlay
    ctx.globalCompositeOperation = 'source-in';
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Reset mode
    ctx.globalCompositeOperation = 'source-over';
  }, [image, color]);

  return (
    <div className="p-4 space-y-4">
      <canvas ref={canvasRef} width={400} height={400} className="border rounded" />

      <div className="flex flex-wrap gap-2">
        {COLORS.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`w-10 h-10 rounded-full border-2 ${color === c ? 'ring-2 ring-offset-2 ring-black' : ''
              }`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
};

export default TShirtColorModal;
