import { Folder } from "lucide-react";
interface NotFoundProps {
    text : string;
}

const NotFound = ({text}:NotFoundProps) => {
  return (
    <div className="h-[calc(100vh-250px)] flex justify-center items-center">
      <div>
        <span className="flex justify-center">
          <Folder className="text-gray-500" />
        </span>
        <p className="text-gray-500"> {text} is empty</p>
      </div>
    </div>
  );
};

export default NotFound;
