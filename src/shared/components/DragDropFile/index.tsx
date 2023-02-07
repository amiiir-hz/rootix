import { useState, useRef, DragEvent } from "react";
type Props = {
  accept: string;
};
function DragDropFile({ accept }: Props) {
  // drag state
  const [dragActive, setDragActive] = useState(true);
  const [data, setData] = useState("");
  // ref
  const inputRef = useRef<HTMLInputElement>(null);

  // handle drag events
  const handleDrag = function (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
    type: string;
  }) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  //   const handleDrop = function (e: {
  //     preventDefault: () => void;
  //     stopPropagation: () => void;
  //     dataTransfer: { files: any[] };
  //   }) {

  //   };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setData(e.dataTransfer.files[0]?.name);
      // handleFiles(e.dataTransfer.files);
    }
  };
  // triggers when file is selected with click
  //   const handleChange = function (e: {
  //     preventDefault: () => void;
  //     target: { files: any[] };
  //   }) {

  //   };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setData(e.target.files[0]?.name);
      // handleFiles(e.target.files);
    }
  };
  // triggers the input when the button is clicked
  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
      className="bg-[#F8F8FF] dark:bg-[#d2dbf6] border border-dashed border-[#384eb74d] w-full h-full rounded-[4px] relative"
      //   onClick={onButtonClick}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
        className="absolute top-0 left-0 opacity-0 w-full h-full"
        accept={accept}
      />

      <p className=" font-bold text-[16px] leading-[24px] text-[#333333] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        document
      </p>
      {dragActive && (
        <div
          id="drag-file-element w-full h-full"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </div>
  );
}
export default DragDropFile;
